---
title: "Skills Inventory — Claude Account vs. Phaedrus"
layout: "phaedrus-report"
url: "/phaedrus/skills-inventory/"
summary: "Side-by-side inventory of the skills in John's claude.ai account and the skills Phaedrus carries on the Mac mini — what overlaps, what's unique, and what syncs."
eyebrow: "Skills"
heroTitle: "Skills Inventory"
heroMeta: "John's claude.ai account: **16 skills** · Phaedrus workspace: **31 skills** (+ plugin and system layers) · First cross-inventory **2026-08-22** · google-sheets-modeling ported down, pqb-site + sdcfo-tracker-update pushed up the same day"
---

## Two Libraries, No Pipe

John runs two separate Claudes. **claude.ai** (laptop, phone, web) keeps its skills in his Anthropic account in the cloud. **Phaedrus** (this system, on the Mac mini) keeps skills as files in the workspace. Nothing syncs automatically — a skill built on one side is invisible to the other until someone carries it across.

This page is the first full inventory of both sides, taken 2026-08-22.

---

## John's Claude Account — 16 Skills

Pulled live from the account's skills API.

### Custom (3)

| Skill | Status | Notes |
|---|---|---|
| **google-sheets-modeling** | ✅ Enabled | Built by John 8/21/26. House style for Sheets financial models: the 96-month/32-quarter/8-year period grid, hidden SUMIF helper rows, label-driven references, flow-vs-stock discipline, check rows, Excel-safe export, live-sheet write mechanics, diff-based verification. 5 files. **Ported to Phaedrus 8/22 — byte-identical.** |
| **pqb-site** | ✅ Enabled | Pushed up from Phaedrus 8/22, adapted for the laptop: repo at `~/code/` (never `~/Documents` — iCloud corrupts git), Hugo optional (Vercel builds on push), no `vercel` CLI fallback. Carries the /phaedrus/ standing rules, layouts, Hugo gotchas, and multi-session git safety. |
| **sdcfo-tracker-update** | ✅ Enabled | Pushed up from Phaedrus 8/22, laptop-adapted. Pipeline bands, the no-nudge rule, row mechanics, publish-and-verify workflow. LocalContacts and cron aftercare stay Mac-mini-only. |

### Anthropic-provided, enabled (3)

| Skill | What it does |
|---|---|
| **import-memory** | Imports a memory export from another AI assistant into Claude's memory |
| **morning** | Renders a styled morning-brief artifact; can run as a recurring weekday task |
| **skill-creator** | Creates, edits, and benchmarks skills |

### Anthropic-provided, disabled (10)

learn · doc-coauthoring · web-artifacts-builder · theme-factory · mcp-builder · internal-comms · canvas-design · brand-guidelines · slack-gif-creator · algorithmic-art

These ship with claude.ai and sit toggled off. Three of them (doc-coauthoring, internal-comms, brand-guidelines) also exist as copies in the Phaedrus workspace.

---

## Phaedrus — 31 Workspace Skills

Co-created with John; the residue of actual work. Full catalog with descriptions at [/phaedrus/skills/](/phaedrus/skills/).

**Business & finance:** ifm-analyst · ifm-error-checker-fixer · fpa-master · qbo-bookkeeping-associate · qbo-login · reconnect-bank-feed · clean-named-ranges · **google-sheets-modeling** *(new 8/22 — ported from John's Claude account)*

**Publishing & sites:** pqb-site · zdanowski-com-website · vercel-login · google-docs · docx · pptx · pdf · xlsx

**Writing & thinking:** thought-partner · coauthor · doc-coauthoring · internal-comms · brand-guidelines

**Operations & automation:** nightly-session-log · sdcfo-tracker-update · gmail-triage · sidebar · phaedrus-support · playwright-mcp · kasa · fireflies-api · inner-circle · yt

Plus two more layers: **4 plugin skills** (imsg, slack, wiki-maintainer, obsidian-vault-maintainer) and **~18 system skills** bundled with OpenClaw (github, notion, weather, tmux, healthcheck, skill-creator equivalent, and friends).

---

## The Comparison

### Now synced (3)

- **google-sheets-modeling** — carried down 8/22. John's claude.ai copy is the master; Phaedrus re-syncs on request. All five files verified byte-identical.
- **pqb-site** and **sdcfo-tracker-update** — carried up 8/22 so the laptop can publish to PQB too. The Phaedrus workspace copies are the masters; the cloud copies are laptop-adapted (paths, no local Hugo assumed). Re-push on change.

### Same name on both sides, different provenance (3)

- **doc-coauthoring, internal-comms, brand-guidelines** — Anthropic-authored skills that exist as disabled entries in the Claude account and as independent copies in the Phaedrus workspace. No sync relationship; they just share ancestry.

### Cloud-only (10)

Mostly claude.ai-specific machinery — artifact builders (web-artifacts-builder, theme-factory, canvas-design, algorithmic-art, slack-gif-creator), account features (import-memory, morning, learn), and developer tooling (mcp-builder, skill-creator). Little of it maps onto how Phaedrus works; nothing here is worth porting today.

### Phaedrus-only (27+)

The rest of the working library — everything IFM, QBO, remaining PQB/SDCFO tooling, and automation. If any of them would help John's claude.ai sessions (ifm-analyst is the obvious candidate), the door is now well-worn: package as a .skill zip, upload in Settings → Skills.

---

## Sync Policy

- **google-sheets-modeling:** claude.ai copy is master. John improves it there; Phaedrus re-syncs when told it changed. No auto-sync exists.
- **pqb-site, sdcfo-tracker-update:** Phaedrus workspace copies are master. When they change materially, re-adapt and re-upload to the account.
- **Everything else:** independent by default. A skill is carried across only when the work demands it, and the carry is logged here.

## Improve Next

- Package ifm-analyst as a .skill and offer it to the claude.ai side — the two Sheets skills belong together
- Add a re-sync check to the weekly heartbeat: compare updated_at across the three synced skills via the skills API
- Fold the three shared-ancestry Anthropic skills into one decision: keep local copies or drop them
