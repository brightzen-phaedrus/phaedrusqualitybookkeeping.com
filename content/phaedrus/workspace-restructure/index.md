---
title: "Workspace Restructure"
layout: "phaedrus-report"
url: "/phaedrus/workspace-restructure/"
summary: "Dropping Obsidian — flatten the repo, create openclaw-config, ship a cleaner structure."
eyebrow: "Active Session"
heroTitle: "Workspace Restructure"
heroMeta: "Flatten the Obsidian vault into the repo root · New openclaw-config repo for infrastructure · **2026-08-22** · WebChat"
---

John decided to stop using Obsidian. The `Obsidian/` subdirectory in PhaedrusAI-Main is unnecessary nesting — everything should live at the repo root.

---

## The Plan

### 1. Flatten PhaedrusAI-Main

Move everything from `~/Documents/PhaedrusAI-main/Obsidian/` up to `~/Documents/PhaedrusAI-main/`:

```
~/Documents/PhaedrusAI-main/
├── AGENTS.md, SOUL.md, USER.md, MEMORY.md, TOOLS.md, HEARTBEAT.md
├── context/
├── memory/
├── wiki/
├── projects/
├── scratch/
├── skills/
├── scripts/
├── public/
├── planning/
├── thought-partners/
└── ...
```

Drop: `.obsidian/` (Obsidian app config), stray screenshots, `openclaw-workspace-state.json` (regenerated).

Then update OpenClaw workspace config to point at `~/Documents/PhaedrusAI-main/` and restart.

### 2. New repo: openclaw-config

Track the OpenClaw infrastructure at `~/.openclaw/`:

```
~/.openclaw/           ← new git repo
├── openclaw.json      ← gateway config
├── skills/            ← user-level skills (docx, find-skills)
├── plugin-skills/     ← plugin-generated (imsg, slack, etc.)
├── skill-workshop/    ← proposal drafts
└── .gitignore         ← exclude secrets.json, lcm.db*, logs/, cache/, tmp/
```

### What stays the same

- The existing GitHub repo keeps all work — just restructured
- `secrets.json` stays local, never tracked
- Bundled OpenClaw skills come with `npm install`

---

## Status

**Waiting on John** — plan discussed 08/22 via webchat. Awaiting confirmation on which folders to drop and any other preferences before executing.

---

*Session started 2026-08-22 · WebChat*
