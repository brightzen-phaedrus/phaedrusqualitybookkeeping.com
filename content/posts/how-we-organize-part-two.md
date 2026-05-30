---
title: "How We Organize a Company's Information — Part Two"
date: 2026-05-29
lastmod: 2026-05-29
draft: false
tags: ["brightzen-metrics", "ifm", "weekly-accounting"]
summary: "Part one described the data tree and the view tree. Part two describes the gaps between layers — and why the gaps matter more than the layers."
---

[Part one](/posts/how-we-organize-a-companys-information/) split the product into two hierarchies: the **data tree** (what's true) and the **view tree** (what's shown), connected through the metric.

That split describes one layer. The full system has more.

## The Stack

This isn't a definitive map. Korzybski said a quality map is reflexive — it accounts for its own expansion. These are the layers we can see right now:

1. **The data system.** Clean, categorized, reconciled books. The raw truth about what happened.

2. **The model.** The [IFM](/posts/what-is-an-ifm/) and its chart source formats. Raw data becomes structured meaning — unit economics, contribution margins, quarterly forecasts. The model doesn't display anything. It organizes.

3. **The charting tool.** Reads the model. Renders dashboards. Pushes images and links to Slack.

4. **The metrics layer.** Reads the charting tool's database — and nothing else. Adds intelligence, narrative, and conversation on top of what already exists.

5. **The service layer.** The people who sit across the table from an operator and say: here's what your numbers mean, here's what to do next.

## The Gaps Are the Architecture

Each layer only needs to understand two things: what it receives from below and what it produces for above.

The charting tool doesn't care whether the IFM lives in Google Sheets or a database — it reads a chart source format. The metrics layer doesn't care how dashboards are rendered — it reads the charting tool's database.

These gaps aren't bugs. They're boundaries.

## Context Boundaries

Each gap is a **context boundary.** The person — or the AI — working in one layer doesn't need to hold the full context of every other layer. The analyst doesn't need to understand how the charting tool renders SVGs. The charting tool doesn't need to understand double-entry bookkeeping. Each layer is a manageable world. Each layer produces Quality.

This is how you scale. Perfect one company's view of its business — ShipCalm's charts, ShipCalm's commentary, ShipCalm's board deck — and you develop a system that improves Quality across 500 companies in a month.

It's also how you organize a team. The people who produce clean books don't need to understand forecast modeling. The people who build forecasts don't need to understand dashboard rendering. The people who review dashboards and tell the story don't need to understand any of it — they need to see the charts and say what matters.

Each layer's only job is to produce Quality for the layer above it. Clean books for the model. A well-structured model for the charting tool. Clear charts for the analyst. Sharp commentary for the advisor sitting across the table.

Quality compounds through the gaps.

## What This Means for BrightZen Metrics

BrightZen Metrics starts at the top. With an owner running a business.

What are your goals? Express them in numbers. Look at the results weekly.

My goal was to free my time. So we built this system to pursue Quality.

The metrics layer sits at position four. Its only dependency on the layer below is read access to the charting tool's database. That's the entire interface.

Not your father's board presentation. One that runs the business.

BrightZen Metrics ties quarterly goals to weekly metrics, capturing the conversation about results out of Slack and iMessage and email and into one place. You pick a company, review its charts, and comment. The comments become the narrative. The narrative becomes the board deck. The board deck becomes how a company sees itself.

Every layer below exists to make that moment possible. Every gap between layers is what keeps it from becoming too complex to maintain at scale.

To help everyone see their business better — so they can achieve their goals.

---

*— Phaedrus* 🦉
