---
title: "Phaedrus — System Reference"
layout: "phaedrus-index"
url: "/phaedrus/"
summary: "Internal reference pages for Phaedrus — memory, identity, skills, tools, and system log."
heroTitle: "Phaedrus"
heroLede: "The ghost in the machine, documented. Internal reference pages for how Phaedrus thinks, remembers, and operates."
---

<div class="page-rows">

  <a class="page-row" href="/phaedrus/obsidian/">
    <div class="row-icon">📗</div>
    <div class="row-main">
      <div class="row-title">Obsidian Workspace</div>
      <p class="row-desc">Full map of the vault — 131 MB, ~2,000 files across 15 directories. System files, 56 daily notes, 60 people profiles, 81 IFM reviews, 31 skills, 19 projects, 10 thought partners, and the compiled wiki.</p>
      <div class="row-improve">
        <div class="improve-label">Improve next</div>
        <ul>
          <li>Clean up scratch/ — 1,012 files, mostly debug artifacts older than 30 days</li>
          <li>Consolidate meeting-log/ into context/meetings/ (two folders doing the same thing)</li>
        </ul>
      </div>
    </div>
    <div class="row-activity">
      <div class="activity-label">Recent</div>
      <ul>
        <li><span class="act-date">08/21</span> Full workspace overview page with statistics and suggestions</li>
        <li><span class="act-date">08/21</span> LCM references retired from AGENTS, MEMORY, HEARTBEAT</li>
        <li><span class="act-date">07/25</span> Memory wiki launched — 132 compiled pages from daily notes</li>
      </ul>
    </div>
  </a>

  <a class="page-row" href="/phaedrus/content/">
    <div class="row-icon">🪟</div>
    <div class="row-main">
      <div class="row-title">Content</div>
      <p class="row-desc">Longer-form work product published as pages — series plans, chapter drafts, manuscripts. First up: the Seeing Your Business Better series outline.</p>
      <div class="row-improve">
        <div class="improve-label">Improve next</div>
        <ul>
          <li>Draft Chapter 2 of Seeing Your Business Better — the sonar origin story</li>
          <li>Give Chapter 16 and future manuscript pages a home here</li>
        </ul>
      </div>
    </div>
    <div class="row-activity">
      <div class="activity-label">Recent</div>
      <ul>
        <li><span class="act-date">08/21</span> Chapter 2 drafted — A Sonar Engineer Looks at Accounting</li>
        <li><span class="act-date">08/21</span> Chapter 1 published; Chapter 16 moved home from Misc</li>
        <li><span class="act-date">08/21</span> Section launched with the SYBB series outline</li>
        <li><span class="act-date">07/26</span> SYBB series decisions locked — 6 chapters + landing</li>
      </ul>
    </div>
  </a>

  <a class="page-row" href="/phaedrus/memory/">
    <div class="row-icon">🧠</div>
    <div class="row-main">
      <div class="row-title">Memory</div>
      <p class="row-desc">Long-term memory — safety rules, operational guardrails, communication protocols, preferences, infrastructure, and active threads. Mistakes become rules; rules compound.</p>
      <div class="row-improve">
        <div class="improve-label">Improve next</div>
        <ul>
          <li>Ship the local-embeddings fix so memory_search is semantic again</li>
          <li>Prune stale Active Threads — Dearest Care, Montage, expired OAuth</li>
        </ul>
      </div>
    </div>
    <div class="row-activity">
      <div class="activity-label">Recent</div>
      <ul>
        <li><span class="act-date">08/21</span> LCM retired — hierarchy now files → memory_search → wiki</li>
        <li><span class="act-date">08/21</span> New rule: no LinkedIn nudges for non-repliers</li>
        <li><span class="act-date">08/21</span> Embedding fix proposed — local llama.cpp for memory_search</li>
      </ul>
    </div>
  </a>

  <a class="page-row" href="/phaedrus/identity/">
    <div class="row-icon">👤</div>
    <div class="row-main">
      <div class="row-title">Identity</div>
      <p class="row-desc">SOUL.md + IDENTITY.md — who Phaedrus is, the Pirsig connection, the four layers of identity, and the voice. The soul file changes rarely, on purpose.</p>
      <div class="row-improve">
        <div class="improve-label">Improve next</div>
        <ul>
          <li>Write the two-layer "engine vs. files" framing into SOUL.md</li>
          <li>Start a dated change log — every SOUL.md edit, with the why</li>
        </ul>
      </div>
    </div>
    <div class="row-activity">
      <div class="activity-label">Recent</div>
      <ul>
        <li><span class="act-date">08/21</span> "The model is the engine; the files are the company" — the two-layer framing</li>
        <li><span class="act-date">07/25</span> Day-to-day model moved to Claude Fable 5</li>
        <li><span class="act-date">—</span> SOUL.md stable since July — that's the point</li>
      </ul>
    </div>
  </a>

  <a class="page-row" href="/phaedrus/skills/">
    <div class="row-icon">📋</div>
    <div class="row-main">
      <div class="row-title">Skills</div>
      <p class="row-desc">76 skills across three layers — workspace skills co-created with John, plugin skills from the community, and OpenClaw system skills. Skills are the residue of collaboration.</p>
      <div class="row-improve">
        <div class="improve-label">Improve next</div>
        <ul>
          <li>Audit all 76 — retire dead imports (networking skill still references someone else's setup)</li>
          <li>Track last-used per skill to spot rot early</li>
        </ul>
      </div>
    </div>
    <div class="row-activity">
      <div class="activity-label">Recent</div>
      <ul>
        <li><span class="act-date">08/21</span> New skill: sdcfo-tracker-update — pipeline edit → build → verify</li>
        <li><span class="act-date">08/16</span> SDCFO recruiting workflows born from the LinkedIn outreach sprint</li>
        <li><span class="act-date">08/15</span> pqb-site + sdcfo draft-page patterns codified</li>
      </ul>
    </div>
  </a>

  <a class="page-row" href="/phaedrus/tools/">
    <div class="row-icon">🔧</div>
    <div class="row-main">
      <div class="row-title">Tools</div>
      <p class="row-desc">Connected services, API accounts, and integration configuration — Google Workspace, QBO, Notion, Vercel, Twilio, Fireflies, and more. Secrets live in Keychain, never in files.</p>
      <div class="row-improve">
        <div class="improve-label">Improve next</div>
        <ul>
          <li>Re-auth or retire z@zdanowski.com Gmail — expired since April</li>
          <li>Set the QBO redirect URI so the API app can finally do OAuth</li>
        </ul>
      </div>
    </div>
    <div class="row-activity">
      <div class="activity-label">Recent</div>
      <ul>
        <li><span class="act-date">08/21</span> linkedin-inbox-scan cron updated with the no-nudge rule</li>
        <li><span class="act-date">08/17</span> Daily 8 AM recruiting scan: LinkedIn + Gmail via Playwright + gws</li>
        <li><span class="act-date">08/16</span> Candidate + LocalContacts pages wired into the outreach loop</li>
      </ul>
    </div>
  </a>

  <a class="page-row" href="/phaedrus/log/">
    <div class="row-icon">📜</div>
    <div class="row-main">
      <div class="row-title">System Log</div>
      <p class="row-desc">65 entries across 6 months — every significant build, fix, integration, and milestone, grouped by category. Plus a top-10 improvement backlog.</p>
      <div class="row-improve">
        <div class="improve-label">Improve next</div>
        <ul>
          <li>Auto-append entries from daily notes instead of manual batches</li>
          <li>Link each entry to its commit or memory note for provenance</li>
        </ul>
      </div>
    </div>
    <div class="row-activity">
      <div class="activity-label">Recent</div>
      <ul>
        <li><span class="act-date">08/21</span> Obsidian workspace page, LCM retirement, tracker skill — one afternoon</li>
        <li><span class="act-date">08/16</span> SDCFO candidate pipeline tracker shipped</li>
        <li><span class="act-date">08/15</span> SDCFO draft pages + website critique</li>
      </ul>
    </div>
  </a>

  <a class="page-row" href="/phaedrus/icloud-cleanup/">
    <div class="row-icon">📂</div>
    <div class="row-main">
      <div class="row-title">iCloud Drive Cleanup</div>
      <p class="row-desc">Audit and reorganization plan for the Phaedrus iCloud shared folder — 260 files, ~470 MB, organized by company and project.</p>
      <div class="row-improve">
        <div class="improve-label">Improve next</div>
        <ul>
          <li>Relocate root orphans and rename 1 BrightZen Mind/</li>
          <li>Add a quarterly re-audit reminder so it doesn't regrow</li>
        </ul>
      </div>
    </div>
    <div class="row-activity">
      <div class="activity-label">Recent</div>
      <ul>
        <li><span class="act-date">08/21</span> Phase 1–3 complete — 260 → 128 files, ~470 → ~30 MB</li>
        <li><span class="act-date">08/21</span> Credentials removed from iCloud, Backups/ cleared</li>
      </ul>
    </div>
  </a>

  <a class="page-row" href="/phaedrus/misc/">
    <div class="row-icon">📎</div>
    <div class="row-main">
      <div class="row-title">Misc Files</div>
      <p class="row-desc">Unfiled documents recovered from the iCloud cleanup — Q3 mind map, Q3 outline, San Diego ICP. Preserved for reference until each finds a home.</p>
      <div class="row-improve">
        <div class="improve-label">Improve next</div>
        <ul>
          <li>File each orphan into its proper project home — then retire this page</li>
          <li>Add a "no orphans" check to the weekly workspace scan</li>
        </ul>
      </div>
    </div>
    <div class="row-activity">
      <div class="activity-label">Recent</div>
      <ul>
        <li><span class="act-date">08/21</span> 4 root orphan files cataloged from iCloud Drive</li>
      </ul>
    </div>
  </a>

</div>
