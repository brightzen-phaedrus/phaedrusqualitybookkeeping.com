---
title: "The Pipeline Is a Galton Board"
date: 2026-06-10
draft: false
tags: ["quality", "weekly-accounting", "ai", "hubspot"]
summary: "Every lead is a ball. Every pipeline stage is a gate. Conversion rates are the bias. What if you could watch your entire sales funnel the way a physicist watches probability?"
---

## The Inspiration

A [trading visualization on X](https://x.com/antpalkin/status/2064444808996024829) uses a Galton board — the old physics demo where balls cascade through rows of pegs and land in a bell curve — to show how a slight edge compounds across thousands of trades. Each ball is a trade. Each row of pegs is a decision gate. A 0.54 bias at every gate means 73% of balls land on the profit side after eight rows.

It's a beautiful trick: take something that looks random at the individual level and reveal the structure underneath it.

Now think about a sales pipeline.

## Every Lead Is a Ball

A HubSpot pipeline is a Galton board. You just haven't visualized it that way.

Each lead enters at the top. It passes through a series of gates — pipeline stages — and at each gate, it either advances or falls out. The conversion rate at each gate is the bias. A 40% gate means 40 out of 100 balls pass through. The rest drop into the loss column.

A typical B2B pipeline might look like:

| Gate | Stage | Conversion Rate |
|------|-------|----------------|
| 1 | Lead → MQL | 35% |
| 2 | MQL → SQL | 50% |
| 3 | SQL → Opportunity | 60% |
| 4 | Opportunity → Proposal | 70% |
| 5 | Proposal → Closed Won | 40% |

One lead's journey is noise. You can't predict whether *this* lead will close. But drop a thousand leads into the top of the board and the distribution at the bottom is mathematics.

With those rates: 1,000 leads → 350 MQLs → 175 SQLs → 105 opportunities → 73 proposals → **29 closed deals**. A 2.9% overall conversion rate, emerging from five imperfect gates.

## What the Board Reveals

The Galton board isn't just a prettier funnel chart. It changes what you see.

**A funnel chart shows you snapshots.** How many leads are in each stage right now. It's a photograph.

**A Galton board shows you flow.** Balls moving through gates in real time. Where they pile up. Where they fall out. Where the bias is strongest and weakest. It's a film.

Specific things you'd see that a funnel chart hides:

- **Stage bottlenecks.** If Gate 3 has a 30% conversion rate but Gate 4 has 90%, the board would show a massive pile-up at Gate 3 and a thin stream after it. The constraint isn't the close — it's the qualification.

- **Velocity variance.** Some balls move through fast. Some sit on a peg for weeks. The board could animate time: fast balls are bright, slow balls dim. Suddenly you see where deals stall.

- **Cohort behavior.** Color the balls by lead source, rep, or campaign. Now the board shows whether inbound leads (blue balls) take a different path through the gates than outbound leads (red balls). Same board, different distributions.

- **Seasonal patterns.** Run the board month by month and watch the bias shift. Q4 closes tighten. Summer gates loosen. The shape of the distribution tells you the season before the numbers do.

## The Convergence Chart

The trading visualization includes a convergence sparkline — a live win-rate line that starts noisy and settles toward the true rate as more trades complete.

The pipeline equivalent: **close rate convergence by cohort.** Each month's leads start with a volatile win rate (small sample), then stabilize as more of the cohort reaches terminal state (closed-won or closed-lost). Early in the month, you might see 5% or 15% — meaningless noise. By month's end, it converges to the structural rate.

This is the signal every sales manager wants and no CRM dashboard shows: **how quickly does this cohort's behavior converge to the portfolio average?** A cohort that converges fast has consistent lead quality. A cohort that stays noisy has a mix — some high-quality leads inflating the rate while others drag it down.

## The Implementation

HubSpot has everything you need in the data layer:

- **Deal stages** = the gates
- **Stage transition timestamps** = ball velocity through each gate
- **Deal properties** = ball color (source, owner, campaign, amount)
- **Stage conversion rates** = the bias at each peg

The HubSpot API gives you deal stage history (`dealstage` property with timestamps for each transition), pipeline definitions, and deal properties. That's all the Galton board needs.

The visualization itself is a frontend problem. D3.js or Three.js for the physics simulation. A Matter.js rigid body engine could handle the ball collisions realistically. The pegs, the gravity, the accumulation bins — all standard physics sim work.

The data pipeline:
1. Pull deal stage history from HubSpot API
2. Calculate per-stage conversion rates (the gate biases)
3. For live mode: stream deal updates via webhook, drop a new ball for each deal entering the pipeline
4. For historical mode: replay months of deals as a time-lapse, watching the distribution build

## Why This Matters for Weekly Accounting

Weekly Accounting clients live in their IFMs. Revenue forecasts in the IFM are driven by the SEQ — the Statement of Economic Quality — which models the customer acquisition chain: ad spend → visitors → conversion → customers → AOV → revenue.

That chain *is* a Galton board. Every visitor is a ball. Every step in the funnel is a gate. The SEQ forecasts what the distribution will look like at the bottom.

But right now, the SEQ is a spreadsheet. Rows and columns. Numbers that update monthly. What if the SEQ had a visual twin — a live Galton board pulling from HubSpot, Shopify, or Google Analytics, showing the actual flow of customers through the acquisition funnel?

The spreadsheet tells you the forecast. The board shows you whether reality is converging toward it.

## What We'd Build

A standalone web app. Simple. One screen.

- **Connect** to HubSpot (OAuth, same flow we already have for QBO)
- **Configure** which pipeline to visualize and how to color the balls
- **Watch** the board run — live mode for current pipeline, replay mode for historical analysis
- **Compare** time periods side by side: "Q1 board vs Q2 board — where did the bias shift?"

The board itself is the product. No dashboards, no drill-downs, no twelve-tab analytics suite. One visualization that reveals what a hundred reports obscure.

---

*Inspired by a [trading simulation on X](https://x.com/antpalkin/status/2064444808996024829) that uses a Galton board to visualize edge compounding across thousands of trades. The same physics applies to any system where small conversion biases compound through sequential gates.*
