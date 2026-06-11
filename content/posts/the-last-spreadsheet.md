---
title: "The Last Spreadsheet"
date: 2026-06-11
draft: false
tags: ["ifm", "charting-tool", "weekly-accounting", "quality"]
summary: "We don't need a better spreadsheet. We need to stop needing one."
---

There's a user story rattling around in my head that I want to think through in public.

> *As a user, I want to edit tables in the app with the same keystrokes and behavior as if I were in Google Sheets — click around, see formulas. Google Sheets in a Frame.*

It's a reasonable ask. The muscle memory is real. We've been editing spreadsheets since Lotus 1-2-3. Before that, Excel. Before that, Lotus. Before that, the [HP-12C](https://www.google.com/search?q=hp12c&udm=2) — that beautiful little financial calculator that every MBA carried in their bag. Each time we upgraded the tool, we brought the old gestures with us. The spreadsheet is the last survivor of that lineage — the one tool financial people never left behind.

So the instinct is: put Google Sheets inside the app. Embed it. Make it feel native. Let people do what they already know how to do.

But I think that instinct is worth questioning.

---

## The Embed Option

You can literally iframe a Google Sheet into a web app. Or use the Sheets API to build a spreadsheet-like grid with [Handsontable](https://handsontable.com/), [AG Grid](https://www.ag-grid.com/), or [Fortune Sheet](https://github.com/ruilisi/fortune-sheet). Some of these are good. Some are very good. The user gets cell navigation, formula bars, copy-paste, the works.

**Pros:**
- Familiar. Zero learning curve for anyone who's lived in Excel or Sheets.
- Battle-tested. Google Sheets has had decades of edge-case work poured into it.
- You get formulas, formatting, conditional logic — everything the power user expects.
- If you embed via iframe, it's essentially free to build.

**Cons:**
- You're shipping someone else's UI inside yours. Their bugs, their latency, their update schedule.
- An iframe is a black box. You can't easily react to changes, validate inputs, or enforce structure. The data pipeline becomes fragile.
- If you build a grid from scratch (or via a component library), you're signing up to re-implement a meaningful fraction of a spreadsheet engine. That's a multi-year, multi-team project to do well.
- Most importantly: **you're preserving the spreadsheet as the interface**, which means you're preserving all of its conceptual limitations too.

---

## The Alternative: Just Use the Spreadsheet

There's a simpler version of this. The user does their work in Google Sheets — the actual Google Sheets, not a facsimile — and when they're done, they hit refresh in the app. The app ingests the updated numbers and renders the dashboards.

This is what the [Charting Tool](https://charts.brightzen.com) does today. Each workspace has one or more Google Sheets workbooks wired up as data sources. A structured tab called `WChartSrc` is the contract — formulas inside that tab pull from the raw IFM and MMM tabs, and the app reads only from `WChartSrc`. The team edits freely in the workbook. The app ingests daily on a cron, or on demand when an admin clicks Refresh.

**Pros:**
- The spreadsheet is doing what it's good at: freeform calculation, ad-hoc modeling, formula iteration.
- The app is doing what it's good at: structured visualization, multi-tenant isolation, branded dashboards, annotations, sharing.
- Clean separation of concerns. The `WChartSrc` tab is the API contract between the two worlds.
- Already working. Five pilot workspaces live, daily ingest, Slack sharing, annotations.

**Cons:**
- Two tools. Two tabs. A context switch every time you want to check a number and then see what it looks like in the dashboard.
- Not elegant, as the user story notes. It works, but it feels like plumbing.

But here's the thing — **the only reason there's a Google Sheet in the picture is because we're used to using it.**

---

## What If We Didn't Need It?

This is where the story gets interesting.

The Charting Tool already ingests IFMs (Integrated Financial Models) and MMMs (Monthly Management Models). It already knows the structure: metrics with quarterly trends and weekly breakdowns, targets overlaid on actuals, period-over-period comparisons. It already renders paired charts — quarterly history on the left, current quarter weekly on the right — for every metric in the workspace.

What if the app could also *forecast*?

Once the IFM is ingested — not just its output, but its structure — the app has everything it needs to generate a statistical forecast. Not a guess. A real projection built from the model's own history: trend lines, seasonality, growth rates, the relationships between metrics that the IFM already encodes.

Then it talks you through it.

Not a spreadsheet you stare at, trying to figure out which cell to change. A conversation. The app shows you the forecast. You ask questions — *what if we hire two more people in Q3? What if churn drops by a point?* — and the numbers move. Eventually it talks to you and you talk to it. A voice conversation about your business, grounded in your actual data.

The user story, fully extended:

> *As a business owner, I want to ingest my IFM and MMM, get a credible statistical forecast in a few minutes, set goals for the next quarter, and get weekly updates on how I'm tracking — all inside the app, without opening a spreadsheet.*

That's not a feature request. That's a product thesis.

---

## The Spreadsheet Served Three Jobs

When you look at what a spreadsheet actually does for a small business's financial workflow, it serves three jobs:

1. **Data entry.** Typing in the actuals — this week's revenue, headcount, cash balance.
2. **Modeling.** Building the relationships — if revenue grows 5% per quarter and we hire two people, what happens to margin?
3. **Visualization.** Looking at the output — charts, trend lines, comparisons to plan.

The Charting Tool already handles job #3 better than a spreadsheet does. Multi-tenant dashboards, branded per client, with annotations and Slack sharing. That's not a spreadsheet's strength.

Job #1 — data entry — is increasingly automatable. If the actuals come from QuickBooks or a bank feed or a payroll system, the human shouldn't be typing them into cells. The system should ingest them.

Job #2 — modeling — is where the spreadsheet has been irreplaceable. But the IFM and the SEQ Framework already define the model's structure. The relationships are known. What the spreadsheet provides is a surface to adjust assumptions — growth rates, hiring plans, pricing changes. Those assumptions don't need 16,384 columns. They need a focused input surface with guardrails.

If we build that input surface into the app — a place to set assumptions, review a generated forecast, adjust, and commit — then the spreadsheet stops being necessary.

---

## A New Interface for Seeing a Business

This is the part that matters most.

A spreadsheet is a general-purpose tool. It can model anything, which means it models nothing particularly well. Every IFM is a custom build. Every operator who opens one has to learn that specific spreadsheet's layout, its tab structure, its formula logic. The map is hand-drawn every time.

What we're developing is a *purpose-built interface for seeing a business.* Not a spreadsheet with charts bolted on. Not a BI tool that requires a data team to configure. A system that understands the IFM's structure natively — because we defined that structure — and presents it in a way that answers the questions a business owner actually asks:

- How are we doing this week?
- Are we on track for the quarter?
- What happens if we change this assumption?
- Where should we focus?

The weekly update becomes a first-class feature, not a ritual performed in a spreadsheet and then narrated in a meeting. The quarterly forecast becomes something the system drafts and the human refines, not something the human builds from scratch every 13 weeks.

---

## The Transition

We don't get there overnight. And we don't have to burn the boats.

The immediate next step: run a statistical forecast on top of the pilots that are already live — ShipCalm, Weekly Accounting — while maintaining the real forecast in Google Sheets. Two systems in parallel. The spreadsheet stays the system of record. The app becomes a second opinion.

This is how every tool transition actually works. You don't drop the old thing until the new thing has proven itself. You run them side by side. You compare. And one morning you realize you haven't opened the spreadsheet in two weeks.

The path:

1. **Where we are now:** Spreadsheets as the modeling layer, the app as the visualization layer. `WChartSrc` is the bridge. This works. Five pilots live.

2. **Next:** Ingest IFMs and MMMs directly — not just the `WChartSrc` summary tab, but the underlying model structure. Run a statistical forecast alongside the human forecast. Compare them. Learn where the machine is right and where the human knows something the data doesn't.

3. **Then:** Build the conversational layer. The app shows you the forecast and you talk to it — text first, voice eventually. Adjust assumptions through dialogue, not cell edits. The forecast becomes a living thing you refine, not a spreadsheet you maintain.

4. **Finally:** Weekly updates that write themselves. The system knows last week's actuals (ingested), this quarter's forecast (generated), and the gap between them. It tells you where you stand without you having to ask.

At some point in that progression, you stop opening the spreadsheet. Not because anyone took it away. Because you don't need it anymore.

---

## Why This Matters

Every small business in the Weekly Accounting ecosystem is running on spreadsheets today. That's fine — spreadsheets got us here. But spreadsheets are also the bottleneck. They're the reason financial insight requires an expert to build and maintain. They're the reason a quarterly forecast takes days instead of minutes. They're the reason the weekly check-in is a manual ritual instead of an automated pulse.

The IFM already solved the *conceptual* problem — it's the right model for seeing a small business. What we're building now is the *interface* problem — the right surface for interacting with that model without needing to be a spreadsheet jockey.

We're not building a better spreadsheet. We're building the thing that comes after it.

I wonder how soon it'll be before we set down the spreadsheet the way we set down the [HP-12C](https://www.google.com/search?q=hp12c&udm=2). That calculator was a masterpiece — elegant, precise, built for exactly one kind of thinking. People loved it. Some people still carry one. But nobody *needs* it anymore, because the problems it solved got absorbed into better tools that solved bigger problems.

Lotus absorbed the columnar pad. Excel absorbed Lotus. Google Sheets absorbed Excel. Each transition didn't improve the old tool — it made the old tool unnecessary by solving the underlying problem differently.

The spreadsheet is next.

That's the user story, fully told. Not "Google Sheets in a frame." Something better.
