---
title: "Wiki Rebuild — Karpathy Pattern"
layout: "phaedrus-report"
url: "/phaedrus/wiki-rebuild/"
summary: "Rebuilt the memory wiki from bridge-compiled to manual Karpathy llm-wiki curation pattern."
eyebrow: "Memory & Knowledge"
heroTitle: "Wiki Rebuild"
heroMeta: "Started 2026-08-23 · Active"
robots: "noindex, nofollow"
---

## What Changed

On 2026-08-23, the wiki was rebuilt from an automatic bridge-compiled model to a manual curation pattern inspired by [Karpathy's llm-wiki gist](https://gist.github.com/karpathy/1dd0294ef9567971c1e4348a90d69285).

### Before (Bridge Mode)
- Wiki compiler plugin ran automatically on memory events
- ~120 compiled pages, most auto-generated
- No editorial control over what got synthesized or how

### After (Karpathy Pattern)
- Bridge compiler OFF (`bridge.enabled=false`, `followMemoryEvents=false`)
- Manual curation: ingest sources → file answers as syntheses → weekly lint
- Schema defined in `wiki/AGENTS.md`: 3 layers (context/memory raw → wiki curated → schema)
- `wiki/log.md` for append-only audit trail
- Weekly Wiki Lint added to HEARTBEAT.md

### First Ingest
- **Source:** 2026-06-06 BrightZen System Vision transcript
- **Pages touched:** 6 (BrightZen entity got Product Vision section; HBS page got June timeline)
- **Filed:** `sources/2026-06-06-brightzen-system-vision.md`

## Ingest Queue

One at a time, next sessions:

1. SYBB deck
2. HBS memos
3. Fourth Statement deck
4. Remaining transcripts (Legix, ShipCalm board prep, Astira, Sandeep, OnGuard, John+Jeff AI architecture)

## Key Files

| File | Purpose |
|------|---------|
| `wiki/AGENTS.md` | Schema and contract |
| `wiki/log.md` | Append-only audit trail |
| `wiki/inbox.md` | Open questions from ingests |
| `wiki/index.md` | Entry point to wiki pages |
