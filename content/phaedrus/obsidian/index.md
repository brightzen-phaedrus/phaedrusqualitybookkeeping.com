---
title: "Obsidian Workspace Overview"
layout: "phaedrus-report"
url: "/phaedrus/obsidian/"
summary: "Map of Phaedrus's Obsidian vault — 131 MB, ~2,000 files across system files, memory, context, projects, skills, and more."
eyebrow: "Workspace"
heroTitle: "What's in the Vault"
heroMeta: "The Obsidian workspace at `~/Documents/PhaedrusAI-main/Obsidian/` — **131 MB**, **~2,000 files** across 15 top-level directories · The single source of truth for Phaedrus's knowledge, memory, and capability · **August 2026**"
---

## System Files

The files that define Phaedrus. Loaded every session — they're the boot sequence.

| File | Lines | Purpose |
|------|-------|---------|
| **SOUL.md** | 55 | Who Phaedrus is — philosophy, voice, Pirsig connection |
| **USER.md** | 57 | Who John is — background, family, working style |
| **MEMORY.md** | 103 | Long-term behavioral memory — rules, preferences, active threads |
| **AGENTS.md** | 70 | Operating rules — boot sequence, safety, memory hierarchy |
| **TOOLS.md** | 114 | Service config — accounts, IDs, credentials convention |
| **HEARTBEAT.md** | 33 | Periodic checks — calendar, email, maintenance |
| **IDENTITY.md** | 6 | Name, creature, vibe, emoji (🦉) |
| **PROJECTS.md** | 115 | Active and completed projects — Obsidian is truth, not Notion |
| **README.md** | 70 | Workspace documentation |

---

## memory/ — 59 files

Daily notes and state files. Phaedrus's lived experience.

- **56 daily notes** from `2026-02-27` through `2026-08-21` — significant events, decisions, lessons learned
- **heartbeat-state.json** — timestamps for each periodic check
- **tomorrow-list.md** — carry-forward items
- **README.md** — folder documentation

Daily notes are the raw material that feeds the wiki. The memory-wiki plugin compiles them into entity and concept pages.

---

## context/ — 150 files

Reference material organized by type. The "filing cabinet" of the workspace.

### People (60 profiles)

`context/people/` — one markdown file per person. The canonical contact record for Phaedrus.

Key profiles: David Metzler, Jeff Abrams, Charlotte Zdanowski, Caroline Zdanowski, Cruz Flores, Jake Schwartz, John McIntyre, Phil Zdanowski, Tom Eisenmann, Charles Wang, and ~50 more.

Includes an `apple-contacts/` subfolder for contact data exports.

### Transcripts (18 files)

`context/transcripts/` — Fireflies.ai meeting transcripts. Raw and processed versions of key conversations:

- John × Jeff AI bookkeeping agents discussion
- HBS Fourth Statement case call (VG, Charlie, John)
- dLAB Logical Brands finance meeting
- Nana Zdanowski call
- Chad Bitterlich insurance call
- And 13 more

### Family (5 files)

`context/family/` — **Sensitive.** John's conversations with his mom about his father's death. Treat with extreme care.

### Books (11 files)

`context/books/` — Source material for John's writing. Includes:

- *Zen and the Art of Nothing* (full text)
- *Introduction to the Weekly Accounting Way* (PDF + text)
- Fourth Statement presentation and philosophical case deck
- Dirty Windshield talk deck
- WAW slide deck
- *On Writing Well* principles (Zinsser)
- *Little Book of Business Models* draft

### Companies (4 files)

`context/companies/` — Company profiles: Phoenix Strategy Group, Founders & Co, XPFlow, ShipCalm SWOT.

### Other Context

| Folder | Files | What |
|--------|-------|------|
| `meetings/` | 7 | Meeting notes from key calls |
| `meeting-prep/` | 1 | Prep doc for 2026-04-21 |
| `clients/` | 1 | imgix meeting memo |
| `restaurants/` | 1 | Shimbashi Izakaya reference |
| `templates/` | 4 | Markdown templates: company, meeting, person, project |
| `phaedrus/` | 1 | Pre-LCM memory archive |
| `assets/` | — | Images and screenshots |
| `logs/` | — | Screenshot log |

---

## projects/ — 220 files across 19 projects

Active and past project workspaces.

### Largest Projects

| Project | Files | Description |
|---------|-------|-------------|
| **pqb-wiki** | 129 | Public knowledge garden — Quartz v4 content for phaedrusqualitybookkeeping.com/wiki |
| **IFM Analyst Skill v1** | 14 | The IFM skill build — reference docs, named functions, forecast methods |
| **moltbook-posts** | 11 | Drafted posts for Moltbook (AI agent social network) |
| **Weekly Accounting Case Study** | 9 | HBS case study materials and drafts |
| **qbo-bookkeeper** | 9 | QBO bookkeeping procedures and client references |
| **seeing-your-business-better** | 8 | Presentation content migrated from iCloud |

### Other Projects

| Project | Files | Status |
|---------|-------|--------|
| HBS Case Study | 3 | Active — Tom Eisenmann → Charles Wang path |
| ShipCalm | 2 | Active — 13-week cash forecast + ShipCalm tools |
| brightzen-metrics | 2 | Product brief done, awaiting ShipCalm reference build |
| sdcfo | 2 | SDCFO.Group recruiting and content |
| 13 Week Cash Forecast | 2 | ShipCalm weekly cash framework |
| Logical Brands Inventory | 2 | NLBM inventory analysis |
| Pirsig Skill | 5 | Thought partner background material |
| gmail-manager | 1 | Three-layer email architecture (planned) |
| QBO-API | 1 | Intuit OAuth integration (in development) |
| conversation-processing | 1 | Transcript processing pipeline |
| Fireflies | 1 | Fireflies.ai integration notes |
| shade-structure | 1 | Home project |
| website-projects | 3 | Web project notes |

---

## skills/ — 304 files across 31 skills

Co-created workspace skills. Each has a `SKILL.md` + supporting references.

### By Category

**Business & Finance (7):** ifm-analyst, ifm-error-checker-fixer, fpa-master, qbo-bookkeeping-associate, qbo-login, reconnect-bank-feed, clean-named-ranges

**Communication (4):** gmail-triage, inner-circle, networking, internal-comms

**Content & Publishing (6):** pqb-site, zdanowski-com-website, brand-guidelines, thought-partner, doc-coauthoring, google-docs, sdcfo-tracker-update

**Document Formats (4):** docx, xlsx, pptx, pdf

**Browser & Auth (2):** playwright-mcp, vercel-login

**Smart Home (1):** kasa

**Meta (3):** phaedrus-support, yt, sidebar, coauthor

The heaviest skill by file count is **ifm-analyst** (reference docs, formula maps, client review templates).

---

## portfolios/ — 81 files

IFM review reports organized by portfolio.

| Portfolio | Files | Coverage |
|-----------|-------|----------|
| **PSG** | ~30 | Phoenix Strategy Group companies — 106 Enterprises, AbleMkr, All Pro Shade, Caballeros Electric, Ensure Utility, and more |
| **WA / weekly-accounting** | ~50 | Weekly Accounting clients — ABC, Atelier Curioso, Caltana, Community Foodscapes, FORALL Nutrition, Homegrown, imgix, PapaBear, Rip Tie, SEEQ Supply, ShipCalm, and more |

All 30 Assembled Brands IFMs + PSG 18 companies were reviewed by 2026-03-30. Zero working forecasts found across the entire portfolio.

---

## thought-partners/ — 10 thinkers

MAP.md profiles for thinkers whose ideas shaped how John and Phaedrus think:

- **Pirsig** — Metaphysics of Quality, the card catalog, Phaedrus's namesake
- **Korzybski** — General Semantics, "the map is not the territory"
- **Watts** — Eastern philosophy, the art of not-doing
- **Harris** — Meditation, consciousness, free will
- **Aristotle** — Virtue ethics, practical wisdom
- **Buddha** — Four Noble Truths, mindfulness
- **Byron Katie** — The Work, questioning thoughts
- **Confucius** — Rectification of names, social harmony
- **Jesus** — Parables, servant leadership
- **Zinsser** — *On Writing Well*, simplicity, craft

---

## wiki/ — 132 files

The compiled memory wiki. Built by the memory-wiki plugin from daily notes.

| Layer | Count | Examples |
|-------|-------|---------|
| **Entities** | 32 | john-zdanowski, david-metzler, jeff-abrams, assembled-brands, brightzen, shipcalm, weekly-accounting, hbs-fourth-statement |
| **Concepts** | 30 | fourth-statement, ifm, mmm, seq, contribution-engine, signal-vs-noise, quality-loop, card-catalog-moq, direct-cash-flow |
| **Syntheses** | 6 | ai-bookkeeping-dilemma, wa-founding-story, johns-career-timeline, john-phaedrus-collaboration-timeline, exit-capital-story |
| **Sources** | 46 | Provenance links back to daily notes |
| **Reports** | — | Dashboards and status views |

---

## public/ — 11 files

Content published to Obsidian Publish at `publish.obsidian.md/brightzen/`.

Published pieces:
- Our Strategy — Building an Ark
- The Problem with Libraries
- Bringing a Candle Into a Dark Room
- Where Does Value Go When Everything Is Cheap
- Baby Bunnies
- Churn Analysis
- Windsor Castle — What the Stones Remember
- Notion Archaeology
- Q3 Outline
- BrightZen articles subfolder

---

## scratch/ — 1,012 files

The workbench. Temporary files, debug screenshots, draft HTML, intermediate outputs. Largest folder by file count but mostly ephemeral.

Notable contents:
- **63 top-level files** — scripts, screenshots, HTML prototypes, draft documents
- **sdcfo-browser/** — Playwright automation artifacts
- **zdanowski-triage/** — Email triage working files
- **attachments/** — Misc attachments

This folder is a candidate for periodic cleanup — most files are throwaway from debugging sessions.

---

## Other Directories

| Directory | Files | Purpose |
|-----------|-------|---------|
| **planning/** | 2 | Architecture proposal (2026-08-20), blog/memo hierarchy doc |
| **scripts/** | 2 | vault-index.py + vault.db — workspace indexing |
| **logs/** | 1 | session-log.jsonl — historical session data |
| **meeting-log/** | 1 | Single meeting note (Anansii / Jason Robinson) |
| **.openclaw/** | 1 | Workspace state file |
| **.clawhub/** | 1 | ClawHub config |

---

## Workspace Statistics

| Metric | Value |
|--------|-------|
| **Total size** | 131 MB |
| **Total files** | ~2,000 |
| **System files** | 9 (boot sequence) |
| **Daily notes** | 56 (Feb 27 – Aug 21, 2026) |
| **People profiles** | 60 |
| **IFM reviews** | 81 |
| **Skills** | 31 workspace skills (304 files) |
| **Wiki pages** | 132 (32 entities, 30 concepts, 6 syntheses) |
| **Projects** | 19 |
| **Thought partners** | 10 |
| **Scratch files** | 1,012 (cleanup candidate) |

---

## Suggestions

- **Scratch cleanup:** 1,012 files / the largest folder. Most are debug screenshots and intermediate outputs. A periodic sweep (archive files older than 30 days) would keep it navigable.
- **PROJECTS.md is stale:** Last updated 2026-03-10. Many active threads (SDCFO, BrightZenMetrics, Charting Tool) aren't listed. Should be refreshed or retired in favor of MEMORY.md Active Threads.
- **Meeting-log vs context/meetings:** Two folders doing the same thing. Consolidate to `context/meetings/`.
- **Orphan screenshots:** 4 PNG files at workspace root (before/after click, hover screenshots). Should move to `scratch/` or delete.
- **Context/logs overlap:** `context/logs/` and `logs/` both exist. Consolidate.

---

*Generated by Phaedrus · 2026-08-21*
