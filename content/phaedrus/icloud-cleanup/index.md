---
title: "iCloud Drive Cleanup Plan"
layout: "single"
url: "/phaedrus/icloud-cleanup/"
summary: "Audit and reorganization plan for the Phaedrus iCloud shared folder — 260 files, ~470 MB, reviewed 2026-08-21."
---

# iCloud Drive Cleanup Plan

**Audited:** 2026-08-21 · **Location:** `~/Library/Mobile Documents/com~apple~CloudDocs/Phaedrus iCloud/`
**Total files:** 260 · **Estimated size:** ~470 MB (415 MB is a single LCM backup)

---

## Current State — What's in There

### Top-Level Structure

```
Phaedrus iCloud/
├── 1 BrightZen Mind/          # 40 files — intellectual/strategic docs
├── Backups/                   # 129 files — system backups (half the file count)
├── Companies/                 # 78 files — client/portfolio work
├── Home Shared Drive/         # 1 file — mystery image (29.png)
├── Seeing your business…/     # 8 files — presentation + wiki assets
├── To File/                   # 0 files — empty inbox structure
├── Chapter 16 - What…docx    # orphan at root
├── Miss New to San Diego…pdf  # orphan at root
├── Q3 2026 Mind Map.pdf       # orphan at root
└── Q3 2026 Outline.html       # orphan at root
```

### By the Numbers

| Category | Files | Size | Notes |
|----------|-------|------|-------|
| Backups | 129 | ~437 MB | 99% of total storage. LCM database alone is 415 MB. |
| Companies/ShipCalm purchasing bills | 52 | ~5.6 MB | BGR and Uline PDF invoices, YTD 2026 |
| Companies (other) | 26 | ~5.2 MB | imgix, NLBM, Homegrown, ForecastR, San Diego CFO, ShipCalm deliverables |
| 1 BrightZen Mind | 40 | ~25 MB | HBS Case Study, CFO Brain, conversations, reading notes |
| Presentation assets | 8 | ~770 KB | "Seeing your business better" wiki content + figures |
| Root orphans | 4 | ~340 KB | Unfiled documents and a mind map |
| Other | 1 | ~237 KB | Home Shared Drive mystery image |

---

## Issues Found

### 🔴 Critical

1. **435 MB LCM database backup** (`Backups/lcm-2026-07-23.db`) — a single SQLite file consuming 93% of total storage. iCloud Drive is not the right place for database files this large. It should be on an external drive or dedicated backup location.

2. **Sensitive credentials in Backups** — `qbo-oauth/key.pem`, `qbo-oauth/cert.pem`, `gws-config/credentials.enc`, `gws-config/client_secret.json`, `service-env/ai.openclaw.gateway.env`, `credentials/slack-pairing.json`. Even if encrypted, private keys and service credentials should not live in iCloud. They belong in the macOS Keychain or a local-only backup.

3. **Stale cron run logs** — 36 `.migrated` cron run files in `Backups/cron/runs/`. Already migrated — safe to delete.

### 🟡 Organizational

4. **Root orphan files** — Four files sitting at the root with no home:
   - `Chapter 16 - What We Gave Away.docx` — Book 2 draft chapter? Should go in a Book 2 folder.
   - `Miss New to San Diego ICP.pdf` — Client/marketing doc? Needs a home in Companies or a project folder.
   - `Q3 2026 Mind Map.pdf` + `Q3 2026 Outline.html` — Related to each other. Should go in `1 BrightZen Mind/` or a dedicated planning folder.

5. **"1 BrightZen Mind" naming** — The leading `1` is a sort hack. Rename to `BrightZen Mind` and let the folder's content speak for itself.

6. **Duplicate files confirmed:**
   - `HBS Case Study/Old versions/Weekly Accounting Case Study 2026-04-26.docx` and its `copy.docx` are byte-identical (5,963,500 bytes each). Delete the copy.
   - `ShipCalm_Deals_vs_Revenue.xlsx` exists in both `1 BrightZen Mind/CFO Brain/ShipCalm FP&A Analyst/1_deliverables/` and `Companies/ShipCalm Mind/`. Keep one, delete the other.

7. **"Our Conversations" near-duplicate** — `Our Conversations — Phaedrus x John.docx` (20,908 bytes) and `Our Conversations — Phaedrus x John 2026-05-08.docx` (20,678 bytes). The undated version is likely a superseded draft. Keep the dated one, trash the undated.

8. **ForecastR triple-dated** — Three versions of the same Forecastr Landing Page Plan (2026-04-28, -29, -30). Only the latest should remain; older versions should go to an `Old versions/` subfolder or be deleted.

9. **Empty directories:**
   - `To File/Drafts/` — empty since creation (Jun 18)
   - `Companies/ShipCalm Mind/ShipCalm MMM Dashboard/` — empty
   - `Backups/skill-workshop/locks/` — empty

10. **`Home Shared Drive/29.png`** — A 237 KB image with a meaningless filename. What is this? Either rename with context or delete.

11. **Presentation content in wrong location** — `Seeing your business better presentation/` contains wiki-formatted markdown and image assets. This is publishable content, not a file share item. It should migrate to the PQB wiki source or the workspace — not sit in iCloud Drive.

### 🟢 Good Patterns (Keep)

- **Companies folder structure** — `Companies/<Name> Mind/` is a clean pattern. Each company gets its own folder. Works well.
- **Date-stamped filenames** — Most files include dates, making version history visible. Excellent.
- **HBS Case Study organization** — Has `Old versions/`, `Reference Materials/`, and `Sections/` subfolders. Good archival hygiene.
- **ShipCalm FP&A Analyst structure** — Numbered subfolders (`1_deliverables/`, `2_source_data/`, etc.) create a clear data pipeline.

---

## Proposed Cleanup Plan

### Phase 1: Quick Wins (< 15 min)

| Action | What | Why |
|--------|------|-----|
| **Delete** | `HBS Case Study/Old versions/…copy.docx` | Byte-identical duplicate |
| **Delete** | One of the two `ShipCalm_Deals_vs_Revenue.xlsx` copies | Duplicate across folders |
| **Delete** | `Our Conversations — Phaedrus x John.docx` (undated) | Superseded by dated version |
| **Delete** | 36 `.migrated` cron run files | Already migrated, dead weight |
| **Delete** | Empty dirs: `To File/Drafts/`, `ShipCalm MMM Dashboard/`, `skill-workshop/locks/` | Empty since creation |
| **Delete** | `ForecastR Landing Page Plan 2026-04-28.docx` and `-29.docx` | Superseded by `-30` version |
| **Rename** | `29.png` → descriptive name or delete | Meaningless filename |

**Estimated savings:** ~6 MB files + 3 empty dirs

### Phase 2: Relocate Root Orphans (< 10 min)

| File | Proposed Destination |
|------|---------------------|
| `Chapter 16 - What We Gave Away.docx` | `1 BrightZen Mind/Book 2/` (new folder) |
| `Miss New to San Diego ICP.pdf` | `Companies/` (new subfolder) or `1 BrightZen Mind/` |
| `Q3 2026 Mind Map.pdf` | `1 BrightZen Mind/Q3 2026 Planning/` (new folder) |
| `Q3 2026 Outline.html` | `1 BrightZen Mind/Q3 2026 Planning/` (same) |

### Phase 3: Secure the Backups Folder

| Action | What | Why |
|--------|------|-----|
| **Move** | `lcm-2026-07-23.db` (415 MB) to external/local storage | Too large for iCloud sync; not accessed regularly |
| **Move** | `qbo-oauth/`, `gws-config/credentials.enc`, `gws-config/client_secret.json`, `service-env/`, `credentials/` → local encrypted backup | Private keys and service credentials off cloud storage |
| **Keep** | `openclaw-2026-07-23.json`, `skill-workshop/`, `pqb-env.local`, `playwright-mcp.json` | Config snapshots are fine in iCloud |
| **Delete** | `Backups/agents-skills/docx/` (39 XSD schema files, scripts) | These are OpenClaw system skill files — they reinstall with any update. 97 files of dead weight. |
| **Delete** | `Backups/agents-skills/find-skills/` | Same — system skill, not a backup target |
| **Delete** | `Backups/gws-config/cache/` (8 API cache files) | Ephemeral cache data, regenerates on use |

**Estimated savings:** ~437 MB (mostly the LCM database)

### Phase 4: Structural Rename

| Current | Proposed | Why |
|---------|----------|-----|
| `1 BrightZen Mind/` | `BrightZen Mind/` | Drop the sort-hack prefix |
| `To File/` | Delete entirely | Empty since June 18, unused inbox pattern |

### Phase 5: Content Migration

| Content | Move To | Why |
|---------|---------|-----|
| `Seeing your business better presentation/` | Workspace (`~/Documents/PhaedrusAI-main/Obsidian/projects/`) or PQB wiki source | This is publishable content, not file storage |

---

## Proposed Final Structure

```
Phaedrus iCloud/
├── BrightZen Mind/
│   ├── Book 2/
│   ├── CFO Brain/
│   ├── HBS Case Study/
│   ├── IFM Education/
│   └── (conversations, reading notes, etc.)
├── Backups/
│   ├── openclaw-2026-07-23.json
│   ├── pqb-env.local
│   ├── playwright-mcp.json
│   └── skill-workshop/
├── Companies/
│   ├── ForecastR Mind/
│   ├── Homegrown Systems Mind/
│   ├── imgix Mind/
│   ├── NLBM Mind/
│   ├── San Diego CFO Mind/
│   └── ShipCalm Mind/
└── Home Shared Drive/     (if 29.png has a purpose)
```

**Post-cleanup:** ~88 files, ~30 MB. Down from 260 files and ~470 MB.

---

## Decision Points for John

Before executing, I need decisions on:

1. **Chapter 16** — Is this Book 2? Where should it live?
2. **Miss New to San Diego ICP** — Which company/project does this belong to?
3. **29.png** — What is this? Keep or delete?
4. **LCM database** — Move to external drive, or just delete? (LCM has been rebuilt since this backup.)
5. **Purchasing bills** — Keep all 52 ShipCalm PDFs in iCloud, or archive somewhere else?
6. **"To File" pattern** — Was this meant as an inbox? Should I recreate it with a better name, or was it abandoned?

---

*Audited by Phaedrus · 2026-08-21*
