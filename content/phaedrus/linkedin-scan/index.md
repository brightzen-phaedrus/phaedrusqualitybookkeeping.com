---
title: "LinkedIn Inbox Scan"
layout: "phaedrus-report"
url: "/phaedrus/linkedin-scan/"
summary: "Daily automated cron job scanning LinkedIn inbox and sent invites for SDCFO recruiting pipeline."
eyebrow: "Automation"
heroTitle: "LinkedIn Inbox Scan"
heroMeta: "Daily 8 AM PT cron job · Scans LinkedIn inbox + sent invites via Playwright · Auto-updates the SDCFO candidate pipeline tracker · **Established 2026-08-16**"
---

## How It Works

An isolated agent session runs every morning at 8 AM PT via OpenClaw's cron system:

1. **Opens LinkedIn** in Playwright (persistent Chrome profile with John's LinkedIn session)
2. **Scans the inbox** for new messages from connection requests and candidate replies
3. **Checks sent invites** for accepted/pending/expired status
4. **Cross-references email** for candidate replies that came via LinkedIn notifications
5. **Updates the pipeline tracker** at [/sdcfo/candidates/](/sdcfo/candidates/) with new status changes

### Technical Details

| Field | Value |
|-------|-------|
| **Cron name** | `linkedin-inbox-scan` |
| **Schedule** | Daily 8:00 AM PT |
| **Session type** | Isolated agent session |
| **Browser** | Playwright (persistent Chrome profile) |
| **Pipeline page** | [pqb.com/sdcfo/candidates/](/sdcfo/candidates/) |
| **Established** | 2026-08-16 |

---

## What It Tracks

The cron job feeds the SDCFO candidate pipeline, which tracks prospects through stages:

| Stage | Description |
|-------|-------------|
| **Cold Outreach** | Invite sent, no response yet |
| **Engaged** | Accepted connection, awaiting reply to note |
| **Meeting Scheduled** | Conversation started, meeting booked |
| **Keep Warm / Nurture** | Not a fit now, relationship maintained |
| **Further** | On the sheet, no active pursuit |

### Current Pipeline (as of 2026-08-21)

- **5 engaged** candidates (Evan Vanderbyl, Cris Calsada, Andrew Davidson, Sophie Wang, Josee Farmer)
- **8 cold outreach** pending (Tyler Meyers, Udayan Saha, Rana ElSayed, Dan Ciraolo, Maryann Berron, Agatha Martindale, Elicia Ritter, Judy Zhang)
- **2 keep warm** (Liam Makagiansar, Bernadette Maciel)
- **2 further** (Rameh Mehrjou, Linghui He)

---

## Dependencies

- **LinkedIn session cookies** must stay valid in the Playwright Chrome profile
- **John's LinkedIn account** — the invites and messages come from his account
- **Playwright MCP** — installed 2026-04-10, persistent profile at `~/.openclaw/playwright-chrome-profile`

### Known Risks

- LinkedIn session cookies expire periodically — manual re-login needed
- LinkedIn rate-limits automated browsing — the scan stays light (read-only, no bulk actions)
- If Playwright profile gets corrupted, all browser-based automation stops

---

## What's Next

- **Auto-nudge logic:** Consider sending follow-up messages to candidates who accepted but haven't replied (currently manual — "no nudges" policy)
- **Email integration:** Cross-check z@brightzen.com for LinkedIn notification emails as a backup signal
- **Pipeline analytics:** Track acceptance rate, reply rate, time-to-reply across cohorts

---

*Cron job: linkedin-inbox-scan · Daily 8 AM PT · Established 2026-08-16*
