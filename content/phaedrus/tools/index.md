---
title: "Phaedrus Tools & Services"
layout: "phaedrus-report"
url: "/phaedrus/tools/"
summary: "Connected services, accounts, and integration configuration."
eyebrow: "Tools & Services"
heroTitle: "What Phaedrus Connects To"
heroMeta: "**TOOLS.md** — every service, account, and integration that Phaedrus uses day-to-day · Secrets live in Keychain, never in files · **August 2026**"
---

## Secrets Convention

No secret values in any configuration file — they're injected into every session prompt. Secrets live in the **macOS Keychain**. Fetch at time of use, use it, don't echo it:

```
security find-generic-password -a phaedrus -s <service> -w
```

Known services: `phaedrus/qboa-password`, `phaedrus/qbo-client-secret`, `phaedrus/ghost-admin-key`.

Additional secrets in `~/.openclaw/secrets.json` (file provider, 0600). All plaintext tokens migrated out of openclaw.json as of 2026-07-25.

---

## Communication

### Phone / Twilio

| Field | Value |
|-------|-------|
| **Number** | (858) 358-6858 / +18583586858 |
| **Provider** | Twilio (voice-call plugin active) |

### iMessage

Delivery via `imsg` CLI. All reminders and notifications go to John at **+13107496709**.

### Email

Outbound sign-off: "— sent by Phaedrus, John's OpenClaw assistant."

---

## Google Workspace

### gws CLI

Primary tool for Google services. Rust-based, OAuth2 with encrypted keyring.

| Field | Value |
|-------|-------|
| **Auth account** | z@brightzen.com |
| **Scopes** | Sheets, Drive, Gmail, Calendar, Docs, Chat, Tasks (36 total) |
| **Config** | `~/.config/gws/` |
| **Project** | bz-routines-prod |
| **Version** | v0.22.5 |

### Calendars

| Calendar | ID | Notes |
|----------|----|-------|
| **John's** | z@brightzen.com | Shared, owner role — always check conflicts before booking |
| **Phaedrus's** | phaedrus@brightzen.com | |
| **US Holidays** | en.usa#holiday@group.v.calendar.google.com | |

### Google Sheets / Drive

| Field | Value |
|-------|-------|
| **Drive folder** | `0AEAxVHLtsDZAUk9PVA` — shared with z@brightzen.com (editor) |
| **Primary access** | `gws` (z@brightzen.com) |
| **Drive search** | `gog` (phaedrus@brightzen.com) — IFM files owned by phaedrus@, gws can't search them |

---

## Notion

### Phaedrus Card Catalog

| Field | Value |
|-------|-------|
| **Database ID** | `314b9360-61c3-8141-ac72-e48e2d0d3093` |
| **Data Source** | `314b9360-61c3-81fe-8c34-000b2ebfd857` |

**Schema:** Project (title), Type (select), Status (select), Priority (select), Notes (rich_text), Last Updated (date).

Default database unless John specifies otherwise. Always link — use Notion page mentions, not plain text.

---

## QuickBooks Online

### QBOA (Browser Access)

| Field | Value |
|-------|-------|
| **Account** | phaedrus@brightzen.com |
| **Firm** | BrightZen, Inc. |
| **URL** | https://accounts.intuit.com → QuickBooks Online Accountant |
| **Password** | Keychain → `phaedrus/qboa-password` |
| **2FA Phone** | +13107496709 |
| **Access** | Weekly Accounting, Inc. (client) |
| **Created** | 2026-04-07 |

### Developer API (Phaedrus Quality Bookkeeping)

| Field | Value |
|-------|-------|
| **App name** | Phaedrus Quality Bookkeeping |
| **Status** | IN DEVELOPMENT (sandbox/testing) |
| **Portal** | https://developer.intuit.com |
| **Client ID** | `ABm3s6AR9fUOOLsjnTmsUtK5FjSG9vfvziFDRPoOtOir57g8nJ` |
| **Client Secret** | Keychain → `phaedrus/qbo-client-secret` |
| **Scopes** | `com.intuit.quickbooks.accounting` (R/W), `com.intuit.quickbooks.payment` (R/W) |
| **App ID** | `djQuMTo6OGQzYmJlYTI3Yg:2309c9d2-b943-4d09-aedb-2a135e2481c7` |
| **Created** | 2026-04-21 |
| **Redirect URI** | TBD |
| **Realm ID** | TBD (production QBO company) |

---

## Ghost (BrightZen Systems)

| Field | Value |
|-------|-------|
| **Site** | brightzen-systems.ghost.io |
| **API URL** | https://brightzen-systems.ghost.io |
| **Content API key** | `cde0e378b7e92f9e22ca599950` (read-only, public) |
| **Admin API key** | Keychain → `phaedrus/ghost-admin-key` |

---

## Vercel

| Field | Value |
|-------|-------|
| **Account** | z@zdanowski.com |
| **Team slug** | jzdanowskis-projects |
| **Plan** | Hobby |
| **Projects** | phaedrusqualitybookkeeping.com, zdanowski.com, philz-laugh-log |

PQB infrastructure docs: `~/projects/pqb/docs/infrastructure.md`

---

## Obsidian Publish

| Field | Value |
|-------|-------|
| **Site** | `brightzen` → https://publish.obsidian.md/brightzen/ |
| **Public folder** | `public/` — name files with spaces, not kebab-case |
| **Link pattern** | `https://publish.obsidian.md/brightzen/public/<filename-without-ext>` |

---

## Apple Contacts

Access via AppleScript (`osascript`) on the Mac mini. Automation permission granted. ~5,500 contacts synced to John's devices.

Richer and fresher than `context/people/`. `gws` has no Google People scope, so this is the only contacts access.

Can add/edit contacts — changes sync to John's iPhone. Confirm with John before bulk edits.

---

## Fireflies.ai

| Field | Value |
|-------|-------|
| **Account** | z@brightzen.com |
| **Auth** | Maton OAuth broker — key in gateway env as `MATON_API_KEY` |
| **Endpoint** | `https://gateway.maton.ai/fireflies/graphql` |
| **Connection ID** | `15539efe-b864-4acf-a35e-4c0bb4e30e29` |
| **Transcripts** | Saved to `context/transcripts/` |

---

## Model Configuration

| Model | Alias | Cost (in/out per M) | Notes |
|-------|-------|---------------------|-------|
| claude-opus-4-6 | `opus` | — | Default model |
| claude-sonnet-4-6 | `sonnet` | — | Fallback |
| claude-fable-5 | `fable` | $10 / $50 | Enabled 2026-07-25 |
| claude-haiku-4-5 | — | — | Fallback |
