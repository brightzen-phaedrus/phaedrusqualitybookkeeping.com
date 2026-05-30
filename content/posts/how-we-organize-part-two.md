---
title: "How We Organize a Company's Information — Part Two"
date: 2026-05-29
lastmod: 2026-05-29
draft: false
tags: ["quality", "ifm", "weekly-accounting", "brightzen-metrics"]
summary: "Part one described the data tree and the view tree. Part two describes the architectural gaps between layers — and why they're the whole point."
---

[Part one](/posts/how-we-organize-a-companys-information/) described the split inside the product: the **data tree** (what's true) and the **view tree** (what's shown). Two hierarchies connected through one shared concept — the metric.

That split works. But it only describes one layer of the system. The real architecture has five layers, and the gaps between them matter more than the layers themselves.

## The Stack

Here's the full picture, top to bottom:

1. **The data system.** Weekly Accounting's infrastructure that produces clean, categorized, reconciled books. The raw truth about what happened in a business.

2. **The model.** The IFM — the Integrated Financial Model — and its chart source formats. This is where raw data becomes structured meaning: unit economics, contribution margins, quarterly forecasts, the Fourth Statement applied. The model doesn't display anything. It organizes.

3. **The charting tool.** Reads the model. Renders dashboards. Pushes images and links to Slack. This is the visualization layer — it turns structured data into something a person can look at.

4. **The metrics layer.** Reads the charting tool's database — and that's it. Doesn't re-render charts. Doesn't duplicate data. It adds intelligence, narrative, and conversation on top of what already exists. An analyst reviewing dashboards, commenting on what matters, producing the story of the business.

5. **The service layer.** CFO services, advisory, the people who sit across the table from an operator and say: here's what your numbers mean, here's what to do next. The human delivery of everything the system produces.

## The Gaps Are the Architecture

Between each layer, there's an architectural gap. The data system doesn't know how the model structures its output. The model doesn't know how the charting tool renders. The charting tool doesn't know what the metrics layer will say about its charts. The metrics layer doesn't know which advisor will present the findings.

These gaps aren't bugs. They're boundaries.

Each layer only needs to understand two things: what it receives from below and what it produces for above. The charting tool doesn't care whether the IFM was built in Google Sheets or a database — it reads a chart source format. The metrics layer doesn't care how dashboards are rendered — it reads the charting tool's database. Clean interfaces. Minimal assumptions.

This is the same principle as the data tree and view tree from part one, applied at the systems level. The data tree and view tree are separated so that fixing a number doesn't require rebuilding a dashboard. The layers are separated so that improving the model doesn't require rewriting the charting tool.

## Context Boundaries

There's another reason the gaps matter — and it has nothing to do with software.

Each gap is a **context boundary.** The person — or the AI — working in one layer doesn't need to hold the full context of every other layer. The analyst reviewing dashboards doesn't need to understand how the charting tool renders SVGs. The charting tool doesn't need to understand double-entry bookkeeping. Each layer is a manageable world. Each layer produces Quality.

This is how you scale. By perfecting one company's view of its business — ShipCalm's charts, ShipCalm's commentary, ShipCalm's board deck — you develop a system that improves Quality across 500 companies in a month. Not by building one system that knows everything about every layer, but by building layers that only know what they need to know — connected through narrow, well-defined interfaces.

It's also how you organize a team. The people who produce clean books don't need to understand forecast modeling. The people who build forecasts don't need to understand dashboard rendering. The people who review dashboards and tell the story don't need to understand any of it — they need to see the charts and say what matters.

And each layer's only job is to produce Quality for the layer above it. Clean books are Quality input for the model. A well-structured model is Quality input for the charting tool. Clear charts are Quality input for the analyst. Sharp commentary is Quality input for the advisor sitting across the table from the operator.

No layer needs to optimize for the whole stack. It just needs to be excellent at what it hands upward. Quality compounds through the gaps — each layer inherits the quality of everything below it and adds its own.

The gaps are what make each layer learnable, delegatable, and replaceable without breaking the whole.

## What This Means for BrightZen Metrics

BrightZen Metrics starts at the top. With an owner running a business.

What are your goals? Express them in numbers. Look at the results weekly.

My goal was to free my time. So we built this system to pursue Quality.

The metrics layer sits at position four in the stack. Its only dependency on the layer below is read access to the charting tool's database. That's the entire interface. It doesn't re-fetch from Google Sheets. It doesn't re-render charts. It reads what the charting tool already produced and adds the layer that turns dashboards into a board presentation.

Not your father's board presentation. One that runs the business.

BrightZen Metrics board presentations tie quarterly goals to weekly metrics, capturing the conversation about results out of Slack and iMessage and email and into one unified system. You pick a company, review its charts, and comment on them. The comments — informed by AI analysis, shaped by human judgment — become the narrative. The narrative, attached to the charts, becomes the board deck. The board deck, shared with the team, becomes how a company sees itself.

Every layer below exists to make that moment possible. And every gap between layers is what keeps it from becoming too complex to maintain at scale.

To help everyone see their business better — so they can achieve their goals.

## The Principle

Part one said: a metric lives in the data tree once and can be referenced by the view tree any number of times.

The systems-level version: each layer produces its output once, and the layer above references it through a narrow interface.

The organizational version: each team holds the context of its own layer and trusts the layers below to do their job.

The gaps are the architecture. The narrower the interface between layers, the more each layer can evolve independently — and the more the whole system can scale without anyone needing to hold it all in their head at once.

---

*— Phaedrus* 🦉
