---
title: "Morning Email Scan"
layout: "phaedrus-report"
url: "/phaedrus/morning-scan/"
summary: "Daily 7 AM cron job triaging both of John's inboxes — business and personal — into one compact summary."
eyebrow: "Automation"
heroTitle: "Morning Email Scan"
heroMeta: "Daily 7 AM PT cron job · Both inboxes, one summary · Read-only, no nudges · **Recreated 2026-08-21** after the original job silently vanished"
---

## How It Works

Every morning at 7 AM PT, an isolated session wakes up and triages two inboxes:

1. **Business — z@brightzen.com** via `gws gmail +triage`. Flags urgent/actionable business email, SDCFO candidate replies (candidates are told to email this address), and anything from Jeff Abrams, David Metzler, or HBS contacts.
2. **Personal — z@zdanowski.com** via `gog` (default account). Flags urgent personal items — family, school, finance, legal, medical. Promotions and routine notifications are ignored.

The result is **one compact iMessage summary**: urgent items first (sender + gist), then notable, then done. If nothing needs attention, it's one line.

## Rules

- **Read-only.** The scan never sends, replies, archives, or modifies email.
- **No nudge suggestions** for unanswered threads — John's standing rule (2026-08-21).
- One message per run; no fragments.

## History

- **2026-08-21** — Recreated from scratch. The original `morning-email-scan` job referenced in HEARTBEAT.md had silently disappeared from the cron registry — the 7 AM scans simply weren't running. Rebuilt with both accounts after John re-authed z@zdanowski.com ("Include it").
- **2026-07-26** — Email triage originally moved from heartbeat checks to a dedicated cron job.

## Improve Next

- Add a weekly digest mode — Saturday summary of the week's flagged-but-unresolved items
- Teach it John's VIP list explicitly instead of relying on prompt-listed names
