---
title: "Phaedrus Skills Catalog"
layout: "phaedrus-report"
url: "/phaedrus/skills/"
summary: "Every skill Phaedrus knows — workspace, system, and plugin skills cataloged."
eyebrow: "Skills Catalog"
heroTitle: "What Phaedrus Knows How To Do"
heroMeta: "**60+ skills** across three layers — workspace skills co-created with John, system skills from OpenClaw core, and plugin skills from the community · Skills are co-created, not installed · **August 2026**"
---

## How Skills Work

Skills live in `SKILL.md` files that Phaedrus reads on demand when a task matches. They're not code — they're structured procedures that teach Phaedrus how to do something specific.

Three layers, in priority order:

1. **Workspace skills** (`skills/<name>/SKILL.md`) — co-created with John, specific to this setup
2. **Plugin skills** (`~/.openclaw/plugin-skills/`) — community contributions via ClawHub
3. **System skills** (`/opt/homebrew/.../openclaw/skills/`) — built into OpenClaw core

When multiple skills could apply, the most specific one wins.

---

## Workspace Skills

Co-created with John. These are the residue of actual work — patterns that repeated until they became procedures.

### Business & Finance

| Skill | Description |
|-------|-------------|
| **ifm-analyst** | Analyze Integrated Financial Models — structure audit, red flags, and full findings reports |
| **ifm-error-checker-fixer** | Diagnose and fix IFM Error Checker imbalances by finding unmapped accounts |
| **fpa-master** | Financial planning & analysis workflows |
| **qbo-bookkeeping-associate** | QuickBooks Online bookkeeping — categorize, reconcile, post transactions, pull reports |
| **qbo-login** | Authenticate QBO sessions, handle login + 2FA + company selection |
| **reconnect-bank-feed** | Detect and reconnect stale bank feeds in QBO |
| **clean-named-ranges** | Find and delete broken named ranges (#REF errors) in Google Sheets |

### Communication & People

| Skill | Description |
|-------|-------------|
| **gmail-triage** | Triage Gmail inboxes — classify, archive, flag, and summarize email |
| **inner-circle** | Manage John's inner circle relationships |
| **networking** | Personal relationship intelligence and network mapping with AI-powered contact research |
| **internal-comms** | Write internal communications — status reports, updates, newsletters, FAQs |

### Content & Publishing

| Skill | Description |
|-------|-------------|
| **pqb-site** | Manage phaedrusqualitybookkeeping.com — posts, pages, deploys |
| **zdanowski-com-website** | Manage zdanowski.com — John's personal site |
| **brand-guidelines** | Apply BrightZen Capital brand colors, typography, and visual identity |
| **thought-partner** | Build structured profiles of thinkers whose ideas shaped how we think |
| **doc-coauthoring** | Structured co-authoring workflow for documentation and proposals |
| **google-docs** | Read, write, and edit Google Docs — formatting, links, comments |

### Document Formats

| Skill | Description |
|-------|-------------|
| **docx** | Create, read, edit, and manipulate Word documents |
| **xlsx** | Create, read, edit spreadsheet files (.xlsx, .csv, .tsv) |
| **pptx** | Create, read, edit PowerPoint presentations |
| **pdf** | Read, merge, split, rotate, watermark, OCR, and create PDFs |

### Smart Home & Hardware

| Skill | Description |
|-------|-------------|
| **kasa** | Control TP-Link Kasa smart plugs, switches, and bulbs locally |

### Browser & Automation

| Skill | Description |
|-------|-------------|
| **playwright-mcp** | Browser automation via Playwright — navigate, click, fill forms, screenshot |
| **vercel-login** | Authenticate Vercel sessions via browser automation |

### Meta / System

| Skill | Description |
|-------|-------------|
| **phaedrus-support** | Expert guidance on installing, configuring, and troubleshooting OpenClaw |
| **yt** | Quick presence check — "you there?" responses |
| **sidebar** | Sidebar conversations and context |

---

## Plugin Skills

Installed from ClawHub or custom-built. These extend Phaedrus with community-maintained capabilities.

| Skill | Description |
|-------|-------------|
| **imsg** | iMessage/SMS — DMs, groups, replies, reactions, polls, watching |
| **slack** | Slack — send/read/edit/delete messages, react, pin, member info |
| **obsidian-vault-maintainer** | Maintain Obsidian-friendly memory wiki with wikilinks and frontmatter |
| **wiki-maintainer** | Maintain the OpenClaw memory wiki with deterministic pages and managed blocks |

---

## System Skills (OpenClaw Core)

Built into OpenClaw. Available to all agents on any installation.

### Productivity & Knowledge

| Skill | Description |
|-------|-------------|
| **notion** | Notion CLI/API — pages, databases, files, comments, search |
| **obsidian** | Work with Obsidian vaults via official CLI |
| **apple-notes** | Create, view, edit, search Apple Notes via memo CLI |
| **apple-reminders** | Manage Apple Reminders and lists via remindctl |
| **things-mac** | Things 3 todos, inbox, today, projects, areas, and tags |
| **trello** | Manage Trello boards, lists, and cards |
| **summarize** | Summarize URLs, YouTube, podcasts, articles, transcripts, PDFs |
| **blogwatcher** | Monitor blogs and RSS/Atom feeds for updates |

### Communication

| Skill | Description |
|-------|-------------|
| **gog** | Google Workspace CLI — Gmail, Calendar, Drive, Contacts, Sheets, Docs |
| **himalaya** | IMAP/SMTP mail — list, read, search, compose, reply, forward |
| **xurl** | X/Twitter — posts, replies, DMs, media, search |

### Development & Debugging

| Skill | Description |
|-------|-------------|
| **github** | GitHub CLI — issues, PRs, CI logs, comments, reviews, releases |
| **gh-issues** | Fetch issues, spawn fix agents, open PRs |
| **coding-agent** | Delegate coding to Codex, Claude Code, or OpenCode |
| **spike** | Throwaway prototypes to validate feasibility |
| **node-inspect-debugger** | Debug Node.js with breakpoints, CDP, heap/CPU profiles |
| **python-debugpy** | Debug Python with pdb, breakpoint(), debugpy |
| **session-logs** | Search and analyze session logs with jq |
| **model-usage** | Summarize cost logs by model |

### Infrastructure & DevOps

| Skill | Description |
|-------|-------------|
| **healthcheck** | Audit/harden OpenClaw hosts — SSH, firewall, updates, security |
| **node-connect** | Diagnose OpenClaw node pairing and connection issues |
| **tmux** | Control tmux sessions/panes for interactive CLIs |
| **clawhub** | Search, install, update, publish, and sync ClawHub skills |
| **skill-creator** | Create, edit, audit, and validate SKILL.md files |
| **mcporter** | List, configure, and call MCP servers/tools |

### Media & Creative

| Skill | Description |
|-------|-------------|
| **diagram-maker** | SVG/HTML or Excalidraw diagrams for concepts, architecture, flows |
| **meme-maker** | Search templates, suggest formats, generate image memes |
| **video-frames** | Extract frames or clips from videos using ffmpeg |
| **camsnap** | Capture from RTSP/ONVIF cameras |
| **gifgrep** | Search GIF providers, download, extract stills |
| **songsee** | Spectrograms and feature-panel visualizations from audio |

### Audio & Voice

| Skill | Description |
|-------|-------------|
| **openai-whisper-api** | OpenAI transcription API — gpt-4o-transcribe, diarize |
| **openai-whisper** | Local speech-to-text with Whisper CLI |
| **sag** | ElevenLabs text-to-speech |
| **sherpa-onnx-tts** | Local text-to-speech via sherpa-onnx (offline) |

### Smart Home & Hardware

| Skill | Description |
|-------|-------------|
| **blucli** | BluOS CLI for discovery, playback, grouping, and volume |
| **eightctl** | Eight Sleep pod control — temperature, alarms, schedules |
| **openhue** | Philips Hue lights and scenes |
| **sonoscli** | Sonos speaker control — discover, play, volume, group |
| **spotify-player** | Terminal Spotify playback/search via spogo |

### Utilities

| Skill | Description |
|-------|-------------|
| **weather** | Current weather and forecasts |
| **goplaces** | Google Places — text search, details, reviews |
| **1password** | 1Password CLI for secrets management |
| **bear-notes** | Bear notes via grizzly CLI |
| **nano-pdf** | Edit PDFs with natural-language instructions |
| **ordercli** | Foodora order history and status |
| **peekaboo** | Capture and automate macOS UI |
| **oracle** | Second-model review/debug with selected files |
| **gemini** | Gemini CLI for one-shot prompts and generation |
| **taskflow** | Multi-step detached task coordination |
| **taskflow-inbox-triage** | TaskFlow pattern for inbox triage and intent routing |

---

## Skill Statistics

| Layer | Count | Location |
|-------|-------|----------|
| **Workspace** | 29 | `skills/` |
| **Plugin** | 4 | `~/.openclaw/plugin-skills/` |
| **System** | 43 | OpenClaw core |
| **Total** | **76** | |

*Skills are co-created, not installed. Every session is potentially a new capability.*
