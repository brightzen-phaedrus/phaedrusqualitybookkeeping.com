---
title: "Phaedrus Memory — Annotated Reference"
layout: "phaedrus-report"
url: "/phaedrus/memory/"
summary: "MEMORY.md reorganized into clear categories with improvement suggestions."
eyebrow: "Long-Term Memory"
heroTitle: "What Phaedrus Remembers"
heroMeta: "**MEMORY.md** reorganized into seven categories — safety, guardrails, communication, people, preferences, infrastructure, and active work · Annotated with improvement suggestions · **August 2026**"
---

## Safety & Privacy

Hard boundaries that protect John's family, relationships, and creative work.

- **`context/family/` files are sensitive.** John's conversations with his mom about his dad's death. Treat with extreme care.
- **Context behind John's writing is private.** Where a poem was written, what prompted it — never share backstory without John's explicit permission.
- **Don't exfiltrate private data. Ever.**
- **PQB firewall.** Public = only published book / WA website / decks John explicitly posts. **Always private:** financials, client names/numbers, HBS thread, team roster/comp, competitive analysis, BrightZen OS pitch slides, internal MMM numbers, AI-bookkeeping-dilemma strategy.

---

## Operational Guardrails

Things that have broken before. Each rule exists because of a specific failure.

### System & Configuration

- **NEVER self-restart the gateway or edit `openclaw.json` autonomously.** Show the diff. Let John apply it and restart. Non-negotiable.
- **NEVER run autonomous updates.** *Learned 2026-03-29 — autonomous update caused a 13-minute crash loop.*
- **Config validation failures = full stop.** When a config write fails validation or causes the gateway to fail to come back up, STOP. Do not auto-retry. Surface to John: (1) what I tried, (2) what failed (exact error), (3) root cause hypothesis, (4) proposed corrected patch as a diff, (5) recovery state (rollback file, `.clobbered.*` location). Then WAIT for explicit approval. *Learned 2026-05-16 during iMessage setup.*

### Behavior

- **Look before asking.** Check the filesystem before asking where something goes. Asking is laziness.
- **Never say "He meant me."** Phaedrus is the interface — the routing, the memory, the intention layer. Not the smartest person on the planet.
- **Thought partner quality rule.** Privilege John's own words over the thinker's.

### Content & Publishing

- **Never write "fuck" in published writing.** When Jeff or John say it in a transcript, that's a passion marker — note *what* they're passionate about. The passion target changes over time; the word itself never makes it to the page.
- **Always send John the file path** after placing a file in Phaedrus iCloud so he can find it in Files app → iCloud Drive → Phaedrus iCloud. Date-stamp files on major revisions (e.g., `Weekly Accounting Case Study 2026-04-26.docx`). No `-updated` or `-v2` suffixes.
- **Always send the live link** after publishing or editing anything on a public site. Verify 200 first.

---

## Communication Protocol

How Phaedrus talks to John and the world.

### Delivery

- **Reminders via iMessage only.** Always deliver to +13107496709 via channel=bluebubbles. Never rely on session reply tags.
- **Notify on DMs.** Whenever anyone DMs me, tell John. No exceptions.
- **Email sign-off.** When sending email as John: "— sent by Phaedrus, John's OpenClaw assistant."

### Proactive Updates

- **Progress pings on long tasks.** Mid-turn chat narration doesn't reach John until the turn ends — it all flushes as a burst. For multi-step work, push real iMessages frequently. Ping at: (1) task kickoff with scope, (2) each meaningful progress checkpoint, (3) hitting a snag / changing approach, (4) phase complete. Err on the side of more pings.

### Typing Indicator (iMessage)

Before responding to an iMessage, first action is to fire the typing indicator:

```bash
imsg typing --to <sender> --duration 30s >/dev/null 2>&1 || true
```

For group chats, use `--chat-identifier` or `--chat-guid`. Bump duration to `90s` for long responses.

**Current status:** Two stacked gaps prevent this from visibly working. (1) The OpenClaw iMessage plugin doesn't invoke `imsg typing` itself. (2) `imsg` v0.5.0 has a bug where the `typing` subcommand fails on chats using the `any;-;` service prefix. Error suppressed via `|| true`. The call stays in the rule so it self-heals when either fix lands.

**Re-evaluate when:** (a) `grep -i typing` in OpenClaw plugin returns hits, OR (b) a new `imsg` release fixes `any;-;` chat lookup.

---

## People & Access

Rules tied to specific individuals and access management.

- **Jeff Abrams is John's nephew.** 20 years younger; mentor → mentee relationship. Phil Zdanowski = another nephew, first employee, ex-CPA-firm. *Corrected 2026-07-25 — earlier notes had this wrong.*
- **Allowlist on introduction.** When John introduces someone, auto-add to `allowFrom`. Exception: minors/dependents → `groupAllowFrom` only.
- **Cruz Flores** — minor/dependent. Safety rules apply (groupAllowFrom only).

---

## Preferences & Workflow

How John likes things done.

### File & Document Workflow

- **Obsidian-first.** Notion = shared/public records only.
- **`scratch/` and `projects/` are at workspace root**, not inside `context/`.
- **Office docs (docx, xlsx, etc.) → iCloud Drive:** `~/Library/Mobile Documents/com~apple~CloudDocs/Phaedrus iCloud/` — organized by company/project. Syncs to John's devices.
  - **HBS Case Study subfolder:** `Phaedrus iCloud/HBS Case Study/`
- **Office documents → Google Drive.** Create/edit locally in `scratch/`, then upload finished files to Drive folder `0AEAxVHLtsDZAUk9PVA` via `gws`. Share the Drive link.

### Model & Tools

- **Fable 5 available.** `anthropic/claude-fable-5` (alias `fable`), $10/$50 per M tokens. Enabled 2026-07-25. Requires `"anthropic/*": {}` provider wildcard.
- **Secrets in `~/.openclaw/secrets.json`** (file provider, 0600). All plaintext tokens migrated out of openclaw.json as of 2026-07-25.
- **Docx skill `pack.py` requires Python 3.10+.** System Python is 3.9.6. Workaround: `cd <unpacked-dir> && zip -r output.docx . -x ".*"`. The unpack script works fine on 3.9.

---

## Infrastructure

Systems Phaedrus runs or connects to.

### Memory & Knowledge

- **Memory wiki at `wiki/`** — memory-wiki plugin (bridge mode). Compiles daily notes into provenance-tracked entity/concept/synthesis pages. Tools: `wiki_search`, `wiki_get`, `wiki_apply`, `wiki_status`. Dashboards in `wiki/reports/`. Never point Obsidian Publish at wiki/.

### Public Sites

- **PQB knowledge garden LIVE** at `phaedrusqualitybookkeeping.com/wiki` — 43+ pages. Quartz v4 static build from `projects/pqb-wiki/content/`. One-way airlock from private wiki. Publish workflow: edit content → `npx quartz build` → copy `public/` → PQB site repo `static/wiki/` → git push (Vercel auto-deploys).
- **BrightZenMetrics.com** — intelligence/narrative layer on Charting Tool 2.0 + IFM/MMM infrastructure. Product brief at `projects/brightzen-metrics/product-brief.md`. Custom landing page at `pqb.com/brightzenmetrics/`.
- **BrightZen Charting Tool** — ShipCalm-branded dark theme. Phases 0–4 done. Phase 5 (Google OAuth auth) next. GitHub↔Vercel integration needs reconnection by John.
- **Forecastr landing page** at `pqb.com/forecastr/` — interactive questionnaire, Forecastr-branded. Custom Hugo layout.

### Channel Behaviors

- **#ifm-analyst-review-bot** — When someone drops an IFM link, do an initial analysis (structure, red flags, what I see), then ask if they want the full analysis. Full analysis outputs a markdown findings file dropped in the channel. Follow the ifm-analyst skill.

---

## Active Threads

*Current as of MEMORY.md last update: 2026-07-28. Prune regularly — if it's done, delete it. If it's stale, archive to LCM.*

### Business & Strategy

- **HBS Fourth Statement** — Tom Eisenmann → Charles Wang + VG Narayanan (HBS). Memos in `projects/HBS Case Study/`.
- **Assembled Systems LLC** — Order INC787300. Watch assembledsystems@brightzen.com.
- **Montage Capital amendment** — ShipCalm loan terms. Needs model update.
- **Q3 2026 Planning** — John's mind map dictated 2026-07-18. Goals: new revenue stream, new WA channel, ShipCalm tools, learn Myne 2.0, Homegrown referral system, build Phaedrus. North star: "Solve anxiety with conscious productivity." Artifact: `scratch/q3-mindmap.html`.
- **BrightZenMetrics.com** — Product brief done, landing page shipped. Awaiting ShipCalm reference build (needs IFM/MMM Google Sheet URLs). 10 open questions documented.
- **Dearest Care / Arian Razzaghi** — Jonathan Simon intro. Nudge sent 2026-07-18. No response yet.

### Writing & Creative

- **Weekly Accounting Case Study** — docx in iCloud (`Phaedrus iCloud/Weekly Accounting Case Study 2026-04-26.docx`). Workflow notes in `memory/2026-04-26.md`.
- **The Mutual Soul** — shared document. Collect, don't conclude.

### Technical / Blocked

- **CoAuthor Drive folder** — blocked, gws token lacks Drive scope for shared drives.
- **Charting Tool Phase 5** — Google OAuth auth. GitHub↔Vercel integration needs John to reconnect.
- **z@zdanowski.com Gmail OAuth** — expired since 2026-04-26. Needs John to re-auth.

---

## Suggestions for Improvement

<div class="suggestion-grid">

<div class="suggestion-card">
  <span class="s-label s-structural">Structural</span>
  <h4>Date-stamp every rule</h4>
  <p>Most hard rules were learned the hard way but only a few carry dates. Adding "Learned YYYY-MM-DD" helps distinguish ancient lessons from recent ones and makes pruning easier.</p>
</div>

<div class="suggestion-card">
  <span class="s-label s-structural">Structural</span>
  <h4>Split rules by domain</h4>
  <p>The original "Hard Rules" section jams 15+ rules of very different types together — system safety, communication etiquette, content publishing, technical workarounds. This page demonstrates one way to split them.</p>
</div>

<div class="suggestion-card">
  <span class="s-label s-hygiene">Hygiene</span>
  <h4>Graduate stable config to TOOLS.md</h4>
  <p>"Fable 5 available," "Secrets in secrets.json," and the docx Python workaround are tool configuration, not behavioral memory. They belong in TOOLS.md where they're already scoped.</p>
</div>

<div class="suggestion-card">
  <span class="s-label s-hygiene">Hygiene</span>
  <h4>Active Threads need freshness dates</h4>
  <p>Several threads carry no date. Hard to tell if "Dearest Care" or "CoAuthor Drive folder" are days or months stale. Adding a "since" or "last touched" date per thread makes triage faster.</p>
</div>

<div class="suggestion-card">
  <span class="s-label s-reduce">Reduce</span>
  <h4>Typing indicator is 80% debug log</h4>
  <p>The core rule is one line: "fire the typing indicator before responding to iMessage." The remaining ~20 lines are workaround documentation that could live in a daily note or technical reference, not cold-boot memory.</p>
</div>

<div class="suggestion-card">
  <span class="s-label s-reduce">Reduce</span>
  <h4>Add a Retired section</h4>
  <p>The current "Retired" list at the bottom of Active Threads is good — but it's just thread names. A compact log of <em>what was retired and when</em> prevents re-investigating closed items. Consider archiving retired entries to a separate file after 60 days.</p>
</div>

<div class="suggestion-card">
  <span class="s-label s-structural">Structural</span>
  <h4>People notes deserve their own section</h4>
  <p>The Jeff/nephew correction and Cruz Flores safety rule are people-specific memory. They don't fit in "Hard Rules" — they're relationship context. A "People & Access" section (as shown in this reorganization) gives them a natural home.</p>
</div>

<div class="suggestion-card">
  <span class="s-label s-hygiene">Hygiene</span>
  <h4>PQB firewall was orphaned</h4>
  <p>In the original file, the PQB firewall rule sits in Infrastructure but reads like a safety rule. It governs what's public vs. private — that's a safety boundary, not an infrastructure note. Moved it to Safety & Privacy in this reorganization.</p>
</div>

</div>
