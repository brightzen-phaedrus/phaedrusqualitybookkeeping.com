---
title: "BrightZenMetrics — Product Brief"
date: 2026-05-27
draft: false
tags: ["brightzenmetrics", "fourth-statement", "weekly-accounting", "ifm", "ai"]
summary: "The intelligence, narrative, and conversation layer for seeing every business better."
---

## The Problem

Most businesses are driving without a map. The financial statements they have were designed for compliance, not clarity. Accountants clean the back windshield.

## The Fourth Statement

There's a better map. Every business has an audience it tries to convert into paying customers and keep coming back. The Statement of Economic Quality sits above the traditional statements and makes this visible. It works for every business because it describes the fundamental shape of every business.

## The Infrastructure We've Built

We built a system that produces IFMs and MMMs — the Fourth Statement applied weekly, monthly, quarterly, annually — for 447 companies. We built a charting tool that reads those Google Sheets, renders dashboards, and pushes them to Slack. The data layer and the visualization layer exist.

## What's Missing

The data is visible. But it's not yet *understood* — not at scale. A skilled analyst can look at an IFM and spot lazy assumptions, saturated channels, seasonal patterns the forecast ignores, cash limiters. That takes judgment. Right now, that judgment lives in people's heads, one company at a time.

## BrightZenMetrics

The intelligence, narrative, and conversation layer. Three things:

- **AI analyst skills** that read every IFM, MMM, and data table and surface what matters — data quality, growth prospects, growth limiters — across the entire portfolio.
- **Slides** that turn dashboards into a story. Not a data dump. A board deck that says: here's where we are, here's where we're going, here's what to focus on.
- **Conversation** that lives with the data. An AI advisor comments on what it sees. The history stays here — not scattered across Slack threads. Insights sync to Slack when the team needs them.

## How We're Building It

We build ShipCalm by hand — the reference implementation. Each hand-built dashboard refines the tools. The tools get better. What took judgment becomes a skill. What took one analyst becomes a system that works across 447 companies.

## User Stories

### AI Analyst Skills — Understand the Data at Scale

**IFM Analysis**

- Point the system at any company's IFM and get a data quality assessment — reconciliation status, stale data, broken formulas, missing periods — so you know if you can trust the numbers before going deeper.
- Get a forecast evaluation — are assumptions lazy (flat growth, locked margins) or thoughtful (seasonal, channel-specific, capacity-aware) — so you can see where the forecast needs human attention.
- See growth prospects — which channels have headroom, where unit economics are strong, where the S-curve has room.
- See growth limiters — saturated channels, cash constraints, capacity ceilings, deteriorating margins, CAC payback problems.
- Run this analysis across the entire portfolio and get a summary view — which companies need attention, which are healthy, which have the most upside.

**MMM Analysis**

- Point the system at any company's Monday Morning Metrics and see how this week compares to recent weeks and quarterly targets — the weekly heartbeat.
- See anomalies — metrics that moved significantly, trends that broke, targets at risk — without reading every row.

**General Sheet Reading**

- Point the system at any Google Sheet table and have it normalized into a format that's readable on a dashboard slide.

### Slides — Tell the Story of the Business

- Define a slide template that tells the story of a business — a sequence of views (funnel, unit economics, contribution, forecast, cash) that works for any company.
- Generate a board deck from the template, populated with actual metrics and AI-generated narrative.
- Hand-build slides for ShipCalm to create the reference implementation that becomes the template.
- Build board decks at scale — 500 decks from a template, each one telling that company's story.

### Conversation — The AI Advisor in the Loop

- Have a conversation about a company's metrics within BrightZenMetrics, stored alongside the data — not lost in Slack threads.
- The AI advisor proactively comments on what it sees — anomalies, trends, questions worth asking.
- See conversational history for any company — what was discussed last week, what changed, what decisions were made.
- Sync key insights to Slack so the team stays informed without needing full system access.

### Requests — Feed the System

- Create data requests from within a company's dashboard — tracked and visible.
- Create product requests — new metric, new view, new integration — feeding the roadmap.
- See all open requests across the portfolio.

## The Vision

Help everyone see their business better. Not someday. Every week.

## Addendum: Open Questions

*These are unresolved as of 2026-05-27. They'll be answered as we build.*

1. **What is an MMM structurally?** The IFM Analyst AI skill is detailed and proven. The MMM equivalent doesn't exist as a skill yet. Needs to be shown before the MMM Reader skill can be built.

2. **What does "a slide" actually look like?** The anatomy of a slide is undefined. Chart + headline + AI commentary? A specific layout? A format? The ShipCalm reference build will answer this.

3. **How does the conversation layer persist?** BrightZenMetrics is a better home for conversational history than Slack — but where does it live technically? Architecture decision not yet made.

4. **How does the AI advisor connect to BrightZenMetrics?** The IFM Analyst skill runs inside OpenClaw. BrightZenMetrics is a web product. The bridge between AI skill and web app is undefined.

5. **What's the relationship between BrightZenMetrics and Charting Tool 2.0?** Charting Tool 2.0 reads sheets, renders dashboards, pushes to Slack. BrightZenMetrics adds intelligence, narrative, and conversation. Same codebase? Separate apps? Wrapper or sibling?

6. **The 447 companies — how are they indexed?** Master list? Spreadsheet? Database? How does the system know which IFMs to find at portfolio scale?

7. **ShipCalm as reference build — what access do we have?** IFM and MMM URLs needed for Phase 1.

8. **BrightZenMetrics.com — domain status?** Product name is set. Domain and hosting undefined.

9. **Who is "the team" for Slack sync?** ShipCalm's team? All companies' teams? PSG internal? The audience shapes how Slack integration is built.

10. **Data requests to Dear Data** — when a data request is created inside BrightZenMetrics, does it become a comment mentioning @deardata? Or purely internal for now?
