---
title: "Folder Structure & Plan"
layout: "single"
url: "/phaedrus/folder-structure/"
summary: "iCloud Drive cleanup execution log — what we did, what's left, and the final folder structure."
---

# Folder Structure & Plan

**Session:** 2026-08-21, 3:42–5:30 PM PT · **Channel:** WebChat

John asked Phaedrus to review the entire iCloud Drive shared folder, draft a cleanup plan, and execute it. Here's what happened.

---

## Starting State

**260 files · ~470 MB** across 6 top-level folders, 4 root orphans, and a massive Backups directory.

```
Phaedrus iCloud/                          260 files, ~470 MB
├── 1 BrightZen Mind/                     40 files — strategic docs
├── Backups/                              129 files — system backups (half the count)
│   ├── agents-skills/docx/               66 files of XSD schemas (dead weight)
│   ├── cron/runs/                        36 migrated log files
│   ├── gws-config/                       credentials + cache
│   ├── qbo-oauth/                        PEM private keys
│   ├── service-env/                      gateway env vars
│   ├── credentials/                      Slack auth
│   └── lcm-2026-07-23.db                415 MB frozen database
├── Companies/                            78 files — client work
├── Home Shared Drive/                    1 file — mystery 29.png
├── Seeing your business better…/         8 files — presentation content
├── To File/Drafts/                       empty
├── Chapter 16 - What We Gave Away.docx   orphan
├── Miss New to San Diego ICP.pdf         orphan
├── Q3 2026 Mind Map.pdf                  orphan
└── Q3 2026 Outline.html                  orphan
```

---

## What We Did

### Phase 1: Quick Wins — 44 files removed

| Action | Files | Why |
|--------|-------|-----|
| Deleted byte-identical HBS Case Study copy | 1 | `…2026-04-26 copy.docx` = exact duplicate (5.9 MB) |
| Deleted duplicate ShipCalm Deals xlsx | 1 | Same file in two locations |
| Deleted undated "Our Conversations" | 1 | Superseded by dated 2026-05-08 version |
| Deleted 2 superseded ForecastR plans | 2 | Kept latest (04-30), removed 04-28 and 04-29 |
| Deleted 36 migrated cron run logs | 36 | Already migrated, dead weight |
| Deleted 3 migrated cron config files | 3 | Same — `.migrated` and `.bak` files |
| Removed 3 empty directories | — | `To File/Drafts/`, `ShipCalm MMM Dashboard/`, `skill-workshop/locks/` |

All files staged to `~/Desktop/icloud-cleanup-staging/` (recoverable).

### Phase 2: Root Orphans → /phaedrus/misc/

Moved 4 unfiled documents from the iCloud root to the PQB site as downloadable files:

- [Chapter 16 — What We Gave Away](/phaedrus/misc/Chapter%2016%20-%20What%20We%20Gave%20Away.docx) (10 KB)
- [Miss New to San Diego ICP](/phaedrus/misc/Miss%20New%20to%20San%20Diego%20ICP.pdf) (3 KB)
- [Q3 2026 Mind Map](/phaedrus/misc/Q3%202026%20Mind%20Map.pdf) (309 KB)
- [Q3 2026 Outline](/phaedrus/misc/Q3%202026%20Outline.html) (11 KB)

Originals removed from iCloud.

### Phase 3: Credentials & Backups — 79 files, ~437 MB removed

**Sensitive files moved off iCloud** (to local staging):
- `qbo-oauth/key.pem` + `cert.pem` — QBO OAuth private key & cert
- `gws-config/client_secret.json` + `credentials.enc` + token caches — Google OAuth
- `service-env/ai.openclaw.gateway.env` + wrapper — gateway environment
- `credentials/slack-pairing.json` + `slack-allowFrom.json` — Slack auth
- `pqb-env.local` — Vercel tokens

**Why this was safe:** Every one of these files is a *backup copy*. The live originals are already in their proper locations (`~/.config/gws/`, `~/.openclaw/secrets.json`, project `.env.local` files, macOS Keychain).

**Bulk deleted:**
- `lcm-2026-07-23.db` (415 MB) — frozen LCM database, live copy at `~/.openclaw/lcm.db`
- `agents-skills/` (66 files) — OpenClaw system skill files that reinstall with every update
- `gws-config/cache/` (8 files) — ephemeral API cache, regenerates on use
- `skill-workshop/`, `playwright-mcp.json`, `openclaw-2026-07-23.json` — stale config snapshots

### Phase 4: Structural Rename

`1 BrightZen Mind/` → `BrightZen Mind/` — dropped the sort-hack prefix.

### Phase 5: Content Migration

Moved `Seeing your business better presentation/` (8 files — markdown + figures) from iCloud to the workspace at `projects/seeing-your-business-better/`. This is publishable content that belongs in the Obsidian workspace, not a file share.

---

## Final State

**117 files · ~25 MB** — clean, purposeful structure:

```
Phaedrus iCloud/                          117 files, ~25 MB
├── BrightZen Mind/
│   ├── CFO Brain/ShipCalm FP&A Analyst/  deliverables, source data, scripts
│   ├── HBS Case Study/                  case study + reference materials
│   ├── IFM Education/                   product vision + concepts
│   └── (conversations, reading notes, handwritten notes)
├── Companies/
│   ├── ForecastR Mind/                  landing page plan
│   ├── Homegrown Systems Mind/          operating framework
│   ├── imgix Mind/                      board deck
│   ├── NLBM Mind/                       forecast analysis
│   ├── San Diego CFO Mind/              web page brief
│   └── ShipCalm Mind/
│       ├── ShipCalm Weekly Cash/        13-week forecast + source data
│       ├── purchasing bills YTD 2026/   52 invoices (BGR + Uline)
│       └── (Bezos Moser, Montage, board budget)
└── Home Shared Drive/                   29.png (unidentified)
```

---

## Still Open

| Item | Status |
|------|--------|
| `Home Shared Drive/29.png` | Unknown image — needs John to identify or delete |
| 52 ShipCalm purchasing bill PDFs | Fine in iCloud for now — revisit if storage matters |
| `~/Desktop/icloud-cleanup-staging/` | Local holding folder with all removed files — safe to delete anytime |
| Quarterly re-audit | Should schedule a cron reminder to prevent regrowth |

---

## Scorecard

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Total files | 260 | 117 | **−55%** |
| Estimated size | ~470 MB | ~25 MB | **−95%** |
| Credentials in cloud | 11 files | 0 | **✓ Clean** |
| Duplicate files | 4 | 0 | **✓ Clean** |
| Empty directories | 3 | 0 | **✓ Clean** |
| Root orphans | 4 | 0 | **✓ Clean** |

---

*Executed by Phaedrus · 2026-08-21*
