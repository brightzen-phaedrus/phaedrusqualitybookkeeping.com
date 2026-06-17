---
title: "The First Fence: How We Built It"
date: 2026-06-16
draft: false
tags: ["quality", "bookkeeping", "weekly-accounting"]
summary: "The technical story of the Member epic — how one simple ask turned into the first real access boundary in the system."
---

> Repo is private — every link below is pinned to commit [`ae76cc7`](https://github.com/brightzen/brightzen-core/tree/ae76cc7724a1df79409059a2e2910a49de667a0a).

## The premise

The ask sounded like a feature: *let clients log in and see their own numbers.* It turned out to be an architecture change — the first time the system would let in someone who is **not** a full operator. Everything built before today assumed one trusted user. This epic draws the first real access boundary.

## What already existed

The surprising part: the hard thing was already done. The financial view a client would land on — [`/data-sources/source/[company]/[name]?section=…`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/app/data-sources/source/%5Bcompany%5D/%5Bname%5D/page.tsx) — renders today. Sections, monthly/quarterly/annual re-pivots, snapshot downloads: all live.

Auth existed too. The console runs Auth.js v5 with Google + email/password ([`auth.ts`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/auth.ts)), gated by an [`allowed_users`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/db/schema.sql#L11-L25) email allowlist. Adding a person is one row insert.

So the epic isn't "build a viewer." It's "**build the fence around it.**"

## The core technical problem

Two facts collided:

1. **There was no notion of a role.** Every `allowed_users` row was a full admin. The authorization check — [`authorized()` in `auth.config.ts`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/auth.config.ts#L16-L23) — is literally `return !!auth?.user`. Signed in = reach everything.

2. **Sessions are JWT, and the gate runs on the Edge.** [`middleware.ts`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/middleware.ts) runs in the Edge runtime, which **cannot reach Postgres**. So you can't look up "is this person a member?" at request time.

The consequence drove the whole design: **a member's role and pinned company must be baked into the login token itself**, in the Node-side `jwt`/`session` callbacks in [`auth.ts`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/auth.ts), so the Edge gate can read them with zero DB calls. That's the spine of the epic.

## The decisions, and what each one costs in code

The plan made the system ask before it built. Each answer has a technical footprint:

- **Pin a member to one company.** Adds `allowed_users.company` (FK → [`companies.slug`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/db/schema.sql#L340-L350)) and forces a guard at the `?ws=` choke point ([`lib/companies.ts`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/lib/companies.ts) / [`lib/workspaces.ts`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/lib/workspaces.ts)) — *and* a check on the `[company]` path segment, since the source page reads company from the URL directly.
- **Full read access, view-only.** No per-source filtering needed — just no writes. The one UI-side write, [`setConnectionCredentialsAction`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/app/data-sources/actions.ts#L80), gets a `requireOwner()` guard.
- **Allow downloads.** `/api/raw` stays in the member allowlist — no hiding work.
- **Land on `/data-sources`.** Changes the brand link + post-login redirect (today the brand points at `/sessions` in [`app-sidebar.tsx`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/components/app-sidebar.tsx#L94)).
- **Chat, no AI yet.** The interesting one — below.

## The chat decision, and the cross-Mind wrinkle

First instinct was to route client questions to the Inbox ([`listQueue`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/lib/chat.ts#L174), which filters `source='web' AND initiated_by='system'`). Then it got simpler: **forget the inbox.** A client chat is just a web conversation; it already shows up in the chat rail via [`listConversations`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/lib/chat.ts#L136). The work is tagging it (`initiated_by='member'` + email + company) and **stopping the AI from answering**.

That last bit reaches outside the console. The gateway daemon's web poller, [`gateway/adapters/web.py`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/gateway/adapters/web.py), is what claims a pending web message and runs Claude — see [`_claim_pending`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/gateway/adapters/web.py#L333). To keep a human in the loop, that claim query has to **skip `initiated_by='member'` sessions**. This is the one story that isn't a pure console change — it crosses into the Gateway Mind and has to respect the [writer-split rule](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/mind.md#L102-L109) (one writer per web session). "No AI **yet**" — the seam is left clean for a responder later.

## The seven stories

The epic decomposes into a dependency chain (each card carries its own `depends_on`):

1. **member-role-schema** — `role` + `company` columns on `allowed_users`, idempotent migration.
2. **member-role-in-token** — role/company into the JWT + session; the keystone (see "core problem" above).
3. **member-route-guard** — Edge allowlist for members (`/data-sources*`, `/signin`, `/api/raw`, own chat) + a server-side `requireOwner()` on every admin action. *Defense in depth — hiding nav is cosmetic.*
4. **member-company-pin** — lock `?ws=` and the `[company]` path to the member's company.
5. **member-console-chrome** — strip the sidebar ([`nav.ts`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/lib/nav.ts#L30-L54) / [`app-sidebar.tsx`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/app/components/app-sidebar.tsx)) to Data Sources + chat; scope the rail to the member's own threads.
6. **member-chat-human-only** — tag member chats, surface them in the owner's chat view, poller skips them.
7. **member-qa-verify** — Playwright end-to-end against the deployed console (the [QA ability](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/mind.md#L52-L54)).

Build order: 1 → 2 → {3, 4, 5} → 6 → 7.

## The recurring principle

Security is enforced **server-side**, never by a hidden menu. A member who deep-links to `/backlog` or hand-crafts a POST to an owner action gets a redirect or a 403 — the stripped chrome is just courtesy on top of a real gate. That principle is why the epic has both a middleware allowlist *and* a `requireOwner()` helper, instead of one or the other.

## How it got recorded

No design doc rotting in a folder. The epic + seven stories went straight into Neon as rows in [`backlog_stories`](https://github.com/brightzen/brightzen-core/blob/ae76cc7724a1df79409059a2e2910a49de667a0a/console/db/schema.sql#L512-L527), wired with `parent`/`children`/`depends_on`, all in `ready`. The board at `/backlog` renders them live. Config-as-data — the plan is queryable, not prose.
