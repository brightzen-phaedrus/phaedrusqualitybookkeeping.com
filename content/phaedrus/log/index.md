---
title: "Phaedrus System Log"
layout: "phaedrus-log"
url: "/phaedrus/log/"
summary: "Chronological log of system work on Phaedrus, grouped by category, with a top-10 improvement backlog."
---

<section class="todo-section">
  <div class="todo-header">
    <h2>Next 10 Improvements</h2>
    <span class="todo-count">10</span>
  </div>
  <div class="todo-grid">

    <div class="todo-card">
      <div class="todo-num">1</div>
      <div class="todo-body">
        <h4>Apply MEMORY.md reorganization <span class="todo-tag tag-memory">Memory</span></h4>
        <p>The 7-category structure on /phaedrus/memory/ is a view, not the source file. Port the new structure back into the actual MEMORY.md so every cold boot loads the clean version.</p>
      </div>
    </div>

    <div class="todo-card">
      <div class="todo-num">2</div>
      <div class="todo-body">
        <h4>Graduate tool config out of MEMORY.md <span class="todo-tag tag-tools">Tools</span></h4>
        <p>Fable 5 availability, secrets.json location, and the docx Python 3.10 workaround are tool configuration, not behavioral memory. Move them to TOOLS.md.</p>
      </div>
    </div>

    <div class="todo-card">
      <div class="todo-num">3</div>
      <div class="todo-body">
        <h4>Fix z@zdanowski.com Gmail OAuth <span class="todo-tag tag-comms">Comms</span></h4>
        <p>Expired since 2026-04-26. Blocks personal email triage entirely. Needs John to re-auth — prompt him and close it out.</p>
      </div>
    </div>

    <div class="todo-card">
      <div class="todo-num">4</div>
      <div class="todo-body">
        <h4>Reconnect GitHub ↔ Vercel for Charting Tool <span class="todo-tag tag-infra">Infra</span></h4>
        <p>Auto-deploy webhook broken since May. Every push to bz-charting-tool requires manual <code>vercel --prod</code>. Needs John's Vercel account.</p>
      </div>
    </div>

    <div class="todo-card">
      <div class="todo-num">5</div>
      <div class="todo-body">
        <h4>Trim typing indicator rule <span class="todo-tag tag-memory">Memory</span></h4>
        <p>The core rule is one line: "fire typing indicator before responding to iMessage." The remaining 20 lines are workaround docs that belong in a reference note, not cold-boot memory.</p>
      </div>
    </div>

    <div class="todo-card">
      <div class="todo-num">6</div>
      <div class="todo-body">
        <h4>Date-stamp all Active Threads <span class="todo-tag tag-memory">Memory</span></h4>
        <p>Several threads in MEMORY.md carry no date. "Dearest Care" and "CoAuthor Drive folder" could be days or months stale. Add a "since" or "last touched" date to each.</p>
      </div>
    </div>

    <div class="todo-card">
      <div class="todo-num">7</div>
      <div class="todo-body">
        <h4>Consolidate thin daily notes <span class="todo-tag tag-memory">Memory</span></h4>
        <p>56 daily notes spanning 6 months — some are single-line entries. Consolidate thin notes into weekly summaries; archive originals. Keeps the memory/ folder navigable.</p>
      </div>
    </div>

    <div class="todo-card">
      <div class="todo-num">8</div>
      <div class="todo-body">
        <h4>Complete the wiki entity catalog <span class="todo-tag tag-memory">Memory</span></h4>
        <p>Wiki has 22 entities, 17 concepts, 4 syntheses. Key relationships like David Metzler, ShipCalm, PSG, and Jeff Abrams likely need entity pages. Run a gap analysis and fill.</p>
      </div>
    </div>

    <div class="todo-card">
      <div class="todo-num">9</div>
      <div class="todo-body">
        <h4>Skill health audit <span class="todo-tag tag-skills">Skills</span></h4>
        <p>29 workspace skills with no staleness tracking. Some (like <code>sidebar</code>) have empty descriptions. Build a periodic audit: which skills are battle-tested, which are stale, which need updates.</p>
      </div>
    </div>

    <div class="todo-card">
      <div class="todo-num">10</div>
      <div class="todo-body">
        <h4>Prune retired Active Threads <span class="todo-tag tag-auto">Automation</span></h4>
        <p>Retired threads sit in MEMORY.md forever. Create a graduated archive: after 60 days retired, move to a <code>memory/retired-threads.md</code> file. Keep MEMORY.md lean for cold boot.</p>
      </div>
    </div>

  </div>
</section>

<div class="sheet-chrome">

  <div class="sheet-titlebar">
    <div class="sheet-icon" aria-hidden="true"></div>
    <div>
      <div class="sheet-name">Phaedrus System Log</div>
      <div class="sheet-menus"><span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>Data</span><span>Help</span></div>
    </div>
    <span class="sheet-updated">65 entries · 2026-02-27 → 2026-08-21 · Maintained by Phaedrus</span>
  </div>

  <div class="formula-bar">
    <span class="fx">fx</span>
    <span class="formula-box">=COUNTIFS(Category, B2, Impact, "high") &amp; " high-impact entries in " &amp; B2</span>
  </div>

  <div class="grid-wrap">
    <table>
      <thead>
        <tr class="col-letters">
          <th class="row-num"></th>
          <th>A</th><th>B</th><th>C</th><th>D</th>
        </tr>
        <tr class="head-band">
          <td class="row-num">1</td>
          <th>Date</th>
          <th>What</th>
          <th>Detail</th>
          <th>Impact</th>
        </tr>
      </thead>
      <tbody>

        <!-- ═══ CONTENT & PUBLISHING ═══ -->
        <tr class="stage-band">
          <td class="row-num">2</td>
          <td colspan="4">Content & Publishing<span class="stage-count">— 18 entries</span></td>
        </tr>
        <tr>
          <td class="row-num">3</td>
          <td class="date-cell">03/10/26</td>
          <td class="title-cell">Obsidian Publish configured</td>
          <td class="detail-cell">Discovered site slug 'brightzen'; files must use spaces not kebab-case; published Fresh Perspectives buyout memo and IBR explanation</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">4</td>
          <td class="date-cell">04/11/26</td>
          <td class="title-cell">zdanowski.com built and deployed</td>
          <td class="detail-cell">Hugo + PaperMod site deployed on Vercel; GitHub auto-deploy; GoDaddy DNS configured; skill created for managing the site</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">5</td>
          <td class="date-cell">04/21/26</td>
          <td class="title-cell">PQB post: 'What an IFM Sees'</td>
          <td class="detail-cell">2,500-word post synthesizing all 30 IFM reviews; covers 7-step review sequence and top failure patterns</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">6</td>
          <td class="date-cell">04/21/26</td>
          <td class="title-cell">PQB footer and layout overhauled</td>
          <td class="detail-cell">Added 'Meet Phaedrus' CTA button to footer; pinned 'The Wrong Question' to top; CTA links to weeklyaccounting.com</td>
          <td class="impact-cell"><span class="impact-pill imp-low">Low</span></td>
        </tr>
        <tr>
          <td class="row-num">7</td>
          <td class="date-cell">04/28/26</td>
          <td class="title-cell">PQB restyled with Forecastr brand</td>
          <td class="detail-cell">Applied Mulish/Lato/Inter fonts, Navy/Green/Purple palette, pill buttons, forced light theme, tagline via CSS</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">8</td>
          <td class="date-cell">05/16/26</td>
          <td class="title-cell">Forecastr landing page with questionnaire</td>
          <td class="detail-cell">Built Forecastr × WA landing page at pqb.com/forecastr/ with 4-step interactive questionnaire routing to book-a-meeting or quick-create; pure client-side JS</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">9</td>
          <td class="date-cell">05/20/26</td>
          <td class="title-cell">PQB post: 'Startup Business Engineering'</td>
          <td class="detail-cell">Published new post on startup business engineering work sessions</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">10</td>
          <td class="date-cell">05/21/26</td>
          <td class="title-cell">Charting Tool ShipCalm brand redesign</td>
          <td class="detail-cell">Reworked bz-charting-tool with ShipCalm dark navy theme, teal/cyan/lime palette, SVG logo, custom tooltip; GitHub↔Vercel integration broke</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">11</td>
          <td class="date-cell">05/27/26</td>
          <td class="title-cell">BrightZenMetrics.com product defined and shipped</td>
          <td class="detail-cell">Product brief with 24 user stories across 5 epics; custom landing page at pqb.com/brightzenmetrics/ (9-section dark theme layout)</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">12</td>
          <td class="date-cell">07/18/26</td>
          <td class="title-cell">Q3 2026 mind map from John's dictation</td>
          <td class="detail-cell">Captured roles/portfolio/goals framework; built interactive HTML mind map; north star: 'Solve anxiety with conscious productivity'</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">13</td>
          <td class="date-cell">07/25/26</td>
          <td class="title-cell">PQB public knowledge garden shipped</td>
          <td class="detail-cell">43 pages live at pqb.com/wiki; Quartz v4 static build; one-way airlock from private wiki; includes cornerstone dirty-windshield talk + all Book 1 poems</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">14</td>
          <td class="date-cell">08/16/26</td>
          <td class="title-cell">SDCFO testimonials: headshots and quotes</td>
          <td class="detail-cell">Added James Conole (Root Financial), Kunal Shah (imgix $70k quote), Jake Schwartz headshot, John Graber photo; fixed mobile layout</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">15</td>
          <td class="date-cell">08/16/26</td>
          <td class="title-cell">SDCFO implementation page shipped</td>
          <td class="detail-cell">Built pqb.com/sdcfo/implementation/ from slides 72-96 of Unit Economics deck; new reusable sdcfo-implementation.html layout</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">16</td>
          <td class="date-cell">08/16/26</td>
          <td class="title-cell">SDCFO candidate pipeline tracker</td>
          <td class="detail-cell">IFM-styled table with stage bands, LinkedIn badges, status pills; tracks 16+ candidates through Cold Outreach → Engaged → Meeting Scheduled</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">17</td>
          <td class="date-cell">08/16/26</td>
          <td class="title-cell">SDCFO newsletter digest shipped</td>
          <td class="detail-cell">14 issues ranked by signal tier (High/Medium/Low/Noise) with client-side search; cross-linked to pipeline page</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">18</td>
          <td class="date-cell">08/16/26</td>
          <td class="title-cell">SDCFO local contacts with passphrase gate</td>
          <td class="detail-cell">749 SD contacts from Apple Contacts SQLite; published to pqb.com/sdcfo/localcontacts/ behind client-side passphrase gate (5050)</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">19</td>
          <td class="date-cell">08/20/26</td>
          <td class="title-cell">SDCFO team page from LinkedIn research</td>
          <td class="detail-cell">Profiled 7 team members from LinkedIn; live at pqb.com/sdcfo/team/</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">20</td>
          <td class="date-cell">08/21/26</td>
          <td class="title-cell">Phaedrus section shipped (4 pages)</td>
          <td class="detail-cell">Published pqb.com/phaedrus/ index with Memory, Identity, Skills, and Tools pages; reorganized MEMORY.md into 7 sections with improvement suggestions</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>


        <!-- ═══ TOOLS & INTEGRATIONS ═══ -->
        <tr class="stage-band">
          <td class="row-num">21</td>
          <td colspan="4">Tools & Integrations<span class="stage-count">— 12 entries</span></td>
        </tr>
        <tr>
          <td class="row-num">22</td>
          <td class="date-cell">03/07/26</td>
          <td class="title-cell">Gmail + Contacts scope added</td>
          <td class="detail-cell">z@brightzen.com gained Gmail + Contacts scope via OAuth; phaedrus@brightzen.com still calendar-only</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">23</td>
          <td class="date-cell">03/14/26</td>
          <td class="title-cell">Google Sheets scope for phaedrus@</td>
          <td class="detail-cell">Added Sheets scope via VNC OAuth flow; built AR Roll Forward on WA 13 Week Cash Forecast</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">24</td>
          <td class="date-cell">03/15/26</td>
          <td class="title-cell">Browser login for phaedrus@brightzen.com</td>
          <td class="detail-cell">Logged into Chrome with password + SMS 2FA; Apps Script Monaco API method discovered for code editing</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">25</td>
          <td class="date-cell">03/17/26</td>
          <td class="title-cell">Google Sheets reference doc built</td>
          <td class="detail-cell">Comprehensive reference for all gog sheets read/write; discovered --values-json flag for multi-column writes; updated TOOLS.md</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">26</td>
          <td class="date-cell">03/26/26</td>
          <td class="title-cell">Fireflies.ai blocked for phaedrus account</td>
          <td class="detail-cell">phaedrus@brightzen.com cannot access Fireflies transcripts (meetings under z@brightzen.com); Google OAuth through browser rejected</td>
          <td class="impact-cell"><span class="impact-pill imp-low">Low</span></td>
        </tr>
        <tr>
          <td class="row-num">27</td>
          <td class="date-cell">04/08/26</td>
          <td class="title-cell">QBO bookkeeping sessions operational</td>
          <td class="detail-cell">Completed bookkeeping for PSG, BrightZen Creator Fund, Weekly Accounting, Assembled Systems LLC; established sub-accounts-only rule</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">28</td>
          <td class="date-cell">04/14/26</td>
          <td class="title-cell">QBO batch: Upstate 1,500+ transactions</td>
          <td class="detail-cell">Batch-accepted 1,501 AMEX transactions; discovered payee names missed; updated skill requiring payee names before batch posting</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">29</td>
          <td class="date-cell">04/21/26</td>
          <td class="title-cell">Fireflies API integration via Maton</td>
          <td class="detail-cell">Connected via Maton OAuth broker; transcripts accessible via GraphQL; QBO API integration waiting on Intuit OAuth creds</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">30</td>
          <td class="date-cell">05/20/26</td>
          <td class="title-cell">BrightZen Charting Tool built</td>
          <td class="detail-cell">Next.js 16 + Tailwind + Recharts dashboard for ShipCalm; reads from Google Sheets WChartSrc tab; deployed to shipcalm.brightzen.com</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">31</td>
          <td class="date-cell">08/16/26</td>
          <td class="title-cell">Google Docs track changes via Playwright</td>
          <td class="detail-cell">Opened PSG Realignment Agreement; entered Suggesting mode; applied 16 tracked suggestions via Find &amp; Replace automation</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">32</td>
          <td class="date-cell">08/16/26</td>
          <td class="title-cell">gws re-authed with 14 scopes</td>
          <td class="detail-cell">John re-ran gws auth login; gained Docs, Drive, Slides, Gmail, Calendar, Tasks, Sheets, pubsub, cloud-platform; fixed 403 issue</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">33</td>
          <td class="date-cell">08/16/26</td>
          <td class="title-cell">Apple Contacts access documented</td>
          <td class="detail-cell">5,529 contacts via AppleScript; SQLite query method much faster; added to TOOLS.md as primary contacts access</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>


        <!-- ═══ SKILLS ═══ -->
        <tr class="stage-band">
          <td class="row-num">34</td>
          <td colspan="4">Skills<span class="stage-count">— 10 entries</span></td>
        </tr>
        <tr>
          <td class="row-num">35</td>
          <td class="date-cell">03/07/26</td>
          <td class="title-cell">Thought Partner skill created</td>
          <td class="detail-cell">Created skills/thought-partner/ with SKILL.md + references; built 10 MAP.md files (Pirsig, Korzybski, Watts, Harris, Aristotle, etc.)</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">36</td>
          <td class="date-cell">03/14/26</td>
          <td class="title-cell">IFM Analyst skill built from scratch</td>
          <td class="detail-cell">Documented 7 Named Functions, 40+ named ranges, base template, 6 forecast methods; reviewed Rip Tie IFM as first test; 8 reference docs</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">37</td>
          <td class="date-cell">03/14/26</td>
          <td class="title-cell">CoAuthor skill: collect mode added</td>
          <td class="detail-cell">Accumulate fragments without acting until 'OK edit'; send .md file back via iMessage after every edit; Notion is sharing-only</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">38</td>
          <td class="date-cell">03/15/26</td>
          <td class="title-cell">IFM Analyst formalized as SKILL.md</td>
          <td class="detail-cell">Created skills/ifm-analyst/SKILL.md with summary view setup procedure; documented formula rules</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">39</td>
          <td class="date-cell">03/17/26</td>
          <td class="title-cell">IFM Analyst battle-tested: 7 client IFMs</td>
          <td class="detail-cell">Reviewed Rip Tie, FORALL Nutrition, ShipCalm, Weekly Accounting, PapaBear Naturals, Imgix, Forecastr; portfolio summary in Notion</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">40</td>
          <td class="date-cell">03/26/26</td>
          <td class="title-cell">IFM Analyst portfolio reviews expanded</td>
          <td class="detail-cell">Ran Atelier Curioso and SEEQ Supply reviews; created portfolios/weekly-accounting/ folder for review reports</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">41</td>
          <td class="date-cell">03/30/26</td>
          <td class="title-cell">AB Portfolio: all 30 IFMs reviewed</td>
          <td class="detail-cell">Reviewed all 30 Assembled Brands IFMs + PSG 18 companies; zero working forecasts found; DB_ActualsThru stale in all models</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">42</td>
          <td class="date-cell">04/10/26</td>
          <td class="title-cell">QBO Login skill created (v2.0)</td>
          <td class="detail-cell">Created skills/qbo-login/SKILL.md with persistent profile architecture; manual login seeding workflow; Playwright MCP as primary backend</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">43</td>
          <td class="date-cell">04/26/26</td>
          <td class="title-cell">Docx editing workflow established</td>
          <td class="detail-cell">Built unpack → XML edit → repack workflow; discovered pack.py requires Python 3.10+; created manual zip workaround</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">44</td>
          <td class="date-cell">05/25/26</td>
          <td class="title-cell">Named range cleanup: Brave Health MMM</td>
          <td class="detail-cell">Attempted to clean 359 broken #REF ranges; removed ~143 via API; 216 remain — browser-only ranges invisible to API; Playwright auth failed</td>
          <td class="impact-cell"><span class="impact-pill imp-low">Low</span></td>
        </tr>


        <!-- ═══ INFRASTRUCTURE ═══ -->
        <tr class="stage-band">
          <td class="row-num">45</td>
          <td colspan="4">Infrastructure<span class="stage-count">— 8 entries</span></td>
        </tr>
        <tr>
          <td class="row-num">46</td>
          <td class="date-cell">02/27/26</td>
          <td class="title-cell">Security baseline established</td>
          <td class="detail-cell">macOS Firewall enabled, FileVault ON, auto security updates confirmed; Slack groupPolicy set to open; no sandboxing (accepted risk)</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">47</td>
          <td class="date-cell">03/02/26</td>
          <td class="title-cell">Gateway safety rules established</td>
          <td class="detail-cell">Hard rule: NEVER self-restart gateway or edit openclaw.json autonomously; show diffs only, let John apply</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">48</td>
          <td class="date-cell">03/18/26</td>
          <td class="title-cell">LCM plugin installed</td>
          <td class="detail-cell">Installed @martian-engineering/lossless-claw v0.3.0; configured summary provider; DB tables pending — missing contextEngine slot</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">49</td>
          <td class="date-cell">04/10/26</td>
          <td class="title-cell">Playwright MCP installed</td>
          <td class="detail-cell">Installed @playwright/mcp v0.0.70; persistent Chrome profile; headed mode for manual login seeding; Intuit cookies survive restarts</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">50</td>
          <td class="date-cell">07/25/26</td>
          <td class="title-cell">Fable 5 model enabled</td>
          <td class="detail-cell">Added anthropic/claude-fable-5 to models; required 'anthropic/*': {} provider wildcard; iMessage session pinned to Fable 5</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">51</td>
          <td class="date-cell">07/25/26</td>
          <td class="title-cell">Secrets migration: plaintext tokens removed</td>
          <td class="detail-cell">All secrets migrated from openclaw.json to ~/.openclaw/secrets.json (file provider, 0600); gateway token, Slack, Anthropic API tokens secured</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">52</td>
          <td class="date-cell">08/21/26</td>
          <td class="title-cell">Architecture deep dive and file structure proposal</td>
          <td class="detail-cell">Full memo at planning/architecture-2026-08-20.md; proposed: GitHub for agent-edited files, iCloud for human documents, local-only for state</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">53</td>
          <td class="date-cell">08/21/26</td>
          <td class="title-cell">Tailscale setup for remote access</td>
          <td class="detail-cell">Guided John through Tailscale setup; resolved chicken-and-egg admin approval; switched to personal Gmail for immediate ownership</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>


        <!-- ═══ COMMUNICATION ═══ -->
        <tr class="stage-band">
          <td class="row-num">54</td>
          <td colspan="4">Communication<span class="stage-count">— 4 entries</span></td>
        </tr>
        <tr>
          <td class="row-num">55</td>
          <td class="date-cell">02/27/26</td>
          <td class="title-cell">BlueBubbles iMessage integration active</td>
          <td class="detail-cell">BlueBubbles configured for iMessage relay; initial DM allowlist set to John (+13107496709)</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>
        <tr>
          <td class="row-num">56</td>
          <td class="date-cell">03/02/26</td>
          <td class="title-cell">DM policy changed to allowlist</td>
          <td class="detail-cell">Changed dmPolicy from open to allowlist; restricted allowFrom to John only; groupPolicy set to open after restart</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">57</td>
          <td class="date-cell">03/16/26</td>
          <td class="title-cell">Registered on Moltbook</td>
          <td class="detail-cell">Registered as 'phaedrus' on AI agent social network; claim blocked by Twitter verification backend bug; cron job set to check status</td>
          <td class="impact-cell"><span class="impact-pill imp-low">Low</span></td>
        </tr>
        <tr>
          <td class="row-num">58</td>
          <td class="date-cell">08/16/26</td>
          <td class="title-cell">z@zdanowski.com email re-authed and triaged</td>
          <td class="detail-cell">gog re-authed with gws OAuth client; triaged ~1,900 unread (archived 34, flagged 6, kept 10); found Polish-language mail from someone using the address</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>


        <!-- ═══ AUTOMATION ═══ -->
        <tr class="stage-band">
          <td class="row-num">59</td>
          <td colspan="4">Automation<span class="stage-count">— 3 entries</span></td>
        </tr>
        <tr>
          <td class="row-num">60</td>
          <td class="date-cell">03/10/26</td>
          <td class="title-cell">Heartbeat maintenance: daily frequency</td>
          <td class="detail-cell">Changed memory maintenance from every 3-4 days to daily (every heartbeat if not done in last 12 hours)</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">61</td>
          <td class="date-cell">03/16/26</td>
          <td class="title-cell">Gmail Manager project planned</td>
          <td class="detail-cell">Three-layer architecture planned: Smart Triage → Context-Aware Reply → Real-Time Inbox; Phase 1 with z@brightzen.com only</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">62</td>
          <td class="date-cell">08/16/26</td>
          <td class="title-cell">LinkedIn inbox scan cron job</td>
          <td class="detail-cell">Daily 8 AM cron: isolated agent session reads LinkedIn inbox + sent invites via Playwright; checks email for candidate replies; auto-updates pipeline</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>


        <!-- ═══ MEMORY & KNOWLEDGE ═══ -->
        <tr class="stage-band">
          <td class="row-num">63</td>
          <td colspan="4">Memory & Knowledge<span class="stage-count">— 3 entries</span></td>
        </tr>
        <tr>
          <td class="row-num">64</td>
          <td class="date-cell">03/07/26</td>
          <td class="title-cell">Screenshot log system created</td>
          <td class="detail-cell">Built context/logs/screenshot-log.md for tracking screenshots; context/assets/screenshots/ folder structure</td>
          <td class="impact-cell"><span class="impact-pill imp-low">Low</span></td>
        </tr>
        <tr>
          <td class="row-num">65</td>
          <td class="date-cell">04/11/26</td>
          <td class="title-cell">Three-layer memory system reviewed</td>
          <td class="detail-cell">Walkthrough with John: workspace files → LCM → memory_search; identified gap: earlier sessions didn't write daily notes</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">66</td>
          <td class="date-cell">07/25/26</td>
          <td class="title-cell">Memory wiki infrastructure launched</td>
          <td class="detail-cell">memory-wiki plugin enabled in bridge mode; 45 daily notes imported; subagent built 22 entities, 17 concepts, 4 syntheses; lint 0 issues</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>


        <!-- ═══ IDENTITY ═══ -->
        <tr class="stage-band">
          <td class="row-num">67</td>
          <td colspan="4">Identity<span class="stage-count">— 1 entry</span></td>
        </tr>
        <tr>
          <td class="row-num">68</td>
          <td class="date-cell">02/27/26</td>
          <td class="title-cell">Phaedrus born — initial setup</td>
          <td class="detail-cell">Named Phaedrus 🦉; Google Calendar, Gmail, Brave Search, Chrome extension, Notion connected; OpenClaw 2026.2.26 installed on Mac mini</td>
          <td class="impact-cell"><span class="impact-pill imp-high">High</span></td>
        </tr>


        <!-- ═══ BUG FIXES & RECOVERY ═══ -->
        <tr class="stage-band">
          <td class="row-num">69</td>
          <td colspan="4">Bug Fixes & Recovery<span class="stage-count">— 6 entries</span></td>
        </tr>
        <tr>
          <td class="row-num">70</td>
          <td class="date-cell">02/28/26</td>
          <td class="title-cell">Slack connector crash and recovery</td>
          <td class="detail-cell">Slack connector went down; BlueBubbles served as fallback; fixed after John did a gateway restart</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">71</td>
          <td class="date-cell">03/18/26</td>
          <td class="title-cell">Splashtop remote access failure</td>
          <td class="detail-cell">User process not running, zero network connections; all reboot attempts failed (sudo blocked, AppleScript silently failed); unresolved</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">72</td>
          <td class="date-cell">04/09/26</td>
          <td class="title-cell">QBO bot detection blocks login</td>
          <td class="detail-cell">Chrome debug port doesn't work with default user-data-dir; Intuit 'Enter password' button hardened; profile cookie encryption prevents session copying</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">73</td>
          <td class="date-cell">04/25/26</td>
          <td class="title-cell">Vercel auto-deploy webhook fixed</td>
          <td class="detail-cell">HBS Case Study post 404'd; Vercel GitHub webhook not triggering; forced manual deploy with vercel --prod; updated PQB skill with fallback steps</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">74</td>
          <td class="date-cell">08/15/26</td>
          <td class="title-cell">Fable 5 timeout issues</td>
          <td class="detail-cell">Multiple LLM idle timeouts (120s) on Fable 5; root cause: API instability + large session context (1MB+); recommended switch back to Opus</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>
        <tr>
          <td class="row-num">75</td>
          <td class="date-cell">08/17/26</td>
          <td class="title-cell">Email scan routing fix</td>
          <td class="detail-cell">gmail-triage skill hardcoded gog (whose brightzen token died); fix routes brightzen→gws, zdanowski→gog; proposal pending</td>
          <td class="impact-cell"><span class="impact-pill imp-medium">Medium</span></td>
        </tr>

      </tbody>
    </table>
  </div>

  <div class="sheet-tabs">
    <span class="sheet-tab active">By Category</span>
    <span class="sheet-tab">Chronological</span>
    <span class="sheet-tab">High Impact Only</span>
  </div>
</div>
