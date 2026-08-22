---
title: "iMessage: John"
layout: "phaedrus-report"
url: "/phaedrus/imessage-channel/"
summary: "Primary communication channel between Phaedrus and John — delivery rules, history, and configuration."
eyebrow: "Active Channel"
heroTitle: "iMessage: John"
heroMeta: "Primary communication channel · +13107496709 · Active since 2026-02-27 · All reminders, progress pings, and direct messages flow through here"
---

## Channel Configuration

| Field | Value |
|-------|-------|
| **Recipient** | +13107496709 (John) |
| **Provider** | imsg CLI (migrated from BlueBubbles 2026-05-16) |
| **Channel ID** | bluebubbles (legacy name retained) |
| **DM Policy** | Allowlist — John only for direct messages |
| **Group Policy** | Open — Phaedrus participates in group chats |
| **Active Since** | 2026-02-27 (Day 1) |

---

## What This Channel Does

iMessage is the **only** delivery channel for reminders and notifications. Every reminder, progress ping, and proactive update goes here — never via session replies or other channels.

### Delivery Rules

- **Reminders:** Always via iMessage to +13107496709. Never rely on session reply tags.
- **DM notifications:** When anyone DMs Phaedrus on any channel, John gets notified here.
- **Progress pings:** During long tasks, push real iMessages at kickoff, checkpoints, snags, and completion.
- **Late night silence:** No messages 23:00–08:00 unless urgent.
- **Email sign-off:** When sending email as John: "— sent by Phaedrus, John's OpenClaw assistant."

### Typing Indicator

Before responding to an iMessage, fire the typing indicator:

```
imsg typing --to <sender> --duration 30s >/dev/null 2>&1 || true
```

**Current status:** Two stacked bugs prevent this from visibly working — the OpenClaw plugin doesn't invoke `imsg typing`, and `imsg` v0.5.0 fails on `any;-;` service prefix chats. Error suppressed. Rule stays so it self-heals when either fix lands.

---

## History Highlights

| Date | Event |
|------|-------|
| 2026-02-27 | BlueBubbles configured for iMessage relay; DM allowlist = John |
| 2026-03-02 | DM policy changed from open to allowlist |
| 2026-05-16 | Migrated from BlueBubbles to `imsg` CLI |
| 2026-07-25 | iMessage session pinned to Fable 5 model |
| 2026-08-15 | Fable 5 timeouts → switched back to Opus for stability |

---

## What's Next

- **Fix typing indicator:** Track `imsg` releases for `any;-;` chat lookup fix
- **Monitor OpenClaw plugin:** Check if typing support gets wired in natively
- **Voice message support:** `imsg` can send audio — potential for voice-note responses

---

*Channel: iMessage · Active since 2026-02-27*
