---
title: "The Forecast Review"
date: 2026-06-11
draft: false
tags: ["ifm", "charting-tool", "weekly-accounting", "quality", "forecast"]
summary: "What happens when a forecast writes itself and an analyst just has to agree — or not."
---

[The last post](/posts/the-last-spreadsheet/) was about where we're headed. This one is about what it looks like when you get there.

Imagine an IFM no human had to touch. No pivots. No VLOOKUPs. Just source data, read.

---

## Before You Open the App

MAP connected to the company's QuickBooks. Actuals — revenue, COGS, expenses, balance sheet — flowed into a Google Sheet automatically. Structured source data in standard tabs. The kind of data that used to require a bookkeeper and a spreadsheet jockey to wrangle into shape.

An agent read those sheets. It scanned 18 months of actuals and inferred a forecast method for each line — trend, seasonal, flat, step-change — based on what the data actually shows. It set a range: next 12 months. It calculated confidence bands — tight where the history is consistent, wide where it's guessing.

The forecast is ready. Nobody built it. Nobody opened a spreadsheet. The model read the data and made its best guess, the same way a good analyst would on a first pass — except it did it for every line, every metric, every company in the portfolio, all at once.

---

## Screen One: The Overview

The analyst opens the app. They see a company page:

- **Data freshness:** "Actuals through May 2026." Green.
- **Forecast status:** "Auto-generated — awaiting review."
- Trailing 12-month revenue. Current gross margin. Cash position. Revenue trend with a directional arrow.

This is the triage screen. The analyst can see at a glance whether the data is current and whether the business is healthy. No tab-hunting. No scrolling past 40 rows of named ranges to find the number that matters.

They click **Review Forecast**.

---

## Screen Two: The Forecast

A dashboard. Actuals on the left, forecast on the right, with a clear visual boundary between them.

Revenue at the top — a solid line for history, a projected line with a confidence band for the future. The forecast method is labeled: *Seasonal trend — based on 18 months of history.* Below that, margins. Below that, cash.

Each section shows the assumption the agent chose, and *why*:

> Revenue: Seasonal model with 12% year-over-year growth. Selected because your Q4 actuals are 2.3x your Q2 average — a flat growth model would miss this entirely.

This is the part that matters. The agent doesn't just show you a number. It shows you the reasoning. It's making a judgment call — the same one a human analyst would make — and it's telling you what it sees in the data that led to that call.

If it's wrong, you'll know. Because you know the business. The agent knows the data.

---

## Screen Three: The Conversation

This is the heart of it.

The app walks the analyst through each assumption, one at a time. Not a form. Not a grid of cells. A conversation.

**Revenue growth:**

> I'm projecting revenue to grow 12% year-over-year, with seasonal peaks in Q4. The last two Q4s averaged 2.3x the Q2 baseline. I'm applying that same ratio forward.
>
> Does this feel right for next year?

Three options. **Looks right** — accept, move on. **Adjust** — slide the growth rate, type a note: *"Increasing to 18% — Amazon channel launching Q3."* **Tell me more** — the agent shows comparable periods, surfaces anomalies, explains the math.

**Gross margin:**

> Margin has averaged 42% over the last 12 months, trending down from 44% to 40%. I'm projecting forward at 40%.

Same pattern. Accept, adjust, explain. The analyst's reasoning gets captured alongside every change — not buried in a cell comment nobody reads, but recorded as part of the forecast's provenance.

**Operating expenses:**

> OpEx is running $85K/month. I see three hires in the last 6 months. Are you planning more?

This is where the conversation earns its keep. The agent doesn't just project a trend — it asks about plans the data can't see. Planned hires. Marketing spend changes. Lease renewals. One-time costs. The things that live in the operator's head, not in the general ledger.

**Customer economics** (when SEQ data exists):

> You're acquiring about 120 new customers per month at a $45 CAC. Repeat rate is 34%. I'm holding these steady. Any changes planned?

**Cash:**

> Based on the revenue and expense forecast, cash stays positive throughout the period. AR collection is averaging 38 days. Anything changing on payment terms?

Five to eight assumptions. That's all a forecast is. The spreadsheet obscured this by spreading those assumptions across 50 tabs and thousands of cells. The app makes them explicit, sequential, and conversational.

---

## Screen Four: Commit

After the walk-through, the app shows the complete forecast with all adjustments. A diff: *You adjusted 3 of 8 assumptions. Revenue up 6 points. Added $15K/month in Q3 OpEx for new hire.*

The resulting P&L and cash trajectory, updated in real time.

Three actions: **Commit** — this becomes the active forecast, and weekly tracking begins. **Save as draft** — come back later. **Share** — push the summary to Slack or generate a PDF for the board deck.

---

## After Commit: The Weekly Loop

This is where the analyst's job changes shape. They stop *building* forecasts and start *monitoring* them.

Weekly actuals land automatically. MAP pulls from QuickBooks, the data flows into the sheet, the app ingests it. The app compares actual to forecast. Highlights variances.

When a variance exceeds the confidence band:

> Revenue came in 22% below forecast this week. This is outside the normal range. Want to review the assumption?

The analyst can re-enter the guided review for that single assumption — just the one that broke — without rebuilding the whole forecast. Because the forecast isn't a spreadsheet anymore. It's a set of explicit assumptions, each one individually addressable.

---

## What This Replaces

Today:

1. Open a Google Sheet with 50+ tabs
2. Find the forecast section
3. Understand which cells drive which outputs
4. Change a growth rate in cell AQ47
5. Watch the downstream numbers update (if the formulas are right)
6. Repeat for every assumption
7. Copy the output into a slide deck
8. Present it in a meeting

Tomorrow:

1. Open the app
2. Walk through 5–8 assumptions in conversation
3. Commit
4. The app tracks it from here

The model is the same — the IFM structure, the SEQ framework, the Fourth Statement. The intelligence is the same. What changed is the interface. Purpose-built for the job the spreadsheet was never designed to do.

The spreadsheet served three jobs: data entry, modeling, and visualization. Data entry is automated — actuals flow from QuickBooks through MAP without a human touching them. Visualization lives in the app — dashboards, charts, variance tracking. Modeling — the part where the spreadsheet was irreplaceable — turns out to be 5 to 8 assumptions that a conversation handles better than a grid of cells.

The spreadsheet was the last tool standing from the HP-12C era. This is what replaces it. Not a better spreadsheet. The thing that comes after.
