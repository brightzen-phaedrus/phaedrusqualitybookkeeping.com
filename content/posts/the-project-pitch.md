---
title: "The Project Pitch"
date: 2026-06-11T18:30:00-07:00
draft: false
tags: ["funding", "ai", "ifm", "weekly-accounting", "quality", "nsf"]
summary: "We're applying for NSF SBIR funding. Here's the pitch — in public, because the process is worth documenting."
---

We just published a [research post](/posts/the-governments-seed-fund/) about government funding for AI startups. The short version: the NSF invests up to $300K in Phase I and $1.25M in Phase II, takes zero equity, and explicitly funds AI.

So we're applying. And we're doing it in public, because we think the process is worth documenting.

The NSF SBIR application starts with a "Project Pitch" — a 4-section document, about 12,500 characters total. It's not the full proposal. It's a screening step. You submit it, and 1–2 months later NSF tells you whether your idea fits their program. If it does, they invite the full proposal.

Here's our draft.

---

## 1. The Technology Innovation

Small businesses represent 99.9% of all U.S. firms and generate 43.5% of GDP, yet fewer than 5% have access to a forward-looking financial model. The barrier isn't willingness — it's expertise. Building a financial forecast in a spreadsheet requires a skilled analyst, 10–40 hours of construction, and $2,000–$5,000/month in ongoing maintenance.

We are developing an AI system that eliminates manual model construction entirely. The system reads structured source data from accounting platforms, automatically infers statistical forecasting methods for each financial line item, and generates a complete forward-looking financial model — without human intervention.

The innovation is threefold:

**Automated forecast method selection.** Given 12–24 months of historical data, the system evaluates competing statistical approaches — linear trend, seasonal decomposition, step-change detection, flat projection — for each line item independently. This is hard because the datasets are small (12–36 monthly observations), noisy, and exhibit structural breaks that invalidate standard time-series assumptions.

**Explainable forecast reasoning.** For each assumption, the system generates a natural-language explanation of why it chose that method and what data patterns drove the choice:

> *"Revenue: Seasonal model with 12% YoY growth. Selected because Q4 actuals average 2.3x the Q2 baseline across two years — a flat growth model would suppress this pattern by $180K."*

The forecast becomes an auditable set of explicit assumptions, not a black box.

**Conversational assumption review.** Rather than presenting a static spreadsheet, the system walks the user through each assumption in a structured dialogue. Accept, adjust, or ask for deeper explanation. The system captures not just the final numbers but the provenance of each decision.

This is built on the [IFM framework](/posts/what-is-an-ifm/) — a standardized financial modeling schema deployed across 447 small businesses over five years. The IFM defines the canonical structure of a small business's financial model: ~50 metrics spanning revenue, COGS, operating expenses, and balance sheet. This structural prior — knowing what a financial model *should* look like — is what enables automated generation from raw accounting data.

No existing solution combines these three capabilities. AI bookkeeping tools focus on transaction categorization speed. FP&A tools require manual model construction. Our approach treats the model structure as a known schema and focuses AI on the novel problems: method selection under small-sample conditions, assumption explainability, and human-AI collaborative forecast refinement.

---

## 2. The Technical Objectives and Challenges

Three interconnected research challenges:

**Small-sample forecast method selection.** Standard time-series methods assume 36+ observations for seasonal decomposition. Small businesses rarely have more than 24 months of clean data. We need to:

- Detect seasonal patterns from 1–2 complete annual cycles, distinguishing signal from noise
- Apply Bayesian model comparison with structural priors from the IFM schema — for example, "e-commerce businesses typically exhibit Q4 seasonality" — to compensate for limited per-entity data
- Evaluate whether cross-entity learning (anonymized patterns from the 447-company corpus) improves method selection versus per-entity methods alone

The key risk is overfitting: with small samples, sophisticated models fit noise. We benchmark against a naive baseline (trailing 6-month average) using rolling-origin cross-validation on historical data.

**Financial data quality assessment.** Raw accounting data from QuickBooks contains systematic issues: uncategorized transactions, misclassified accounts, duplicates, cash/accrual timing differences. Before forecasting, the system must score data quality and determine whether the data is "forecast-ready."

We have an existing heuristic system — the IFM's Error Checker and Bookkeeping QA modules — that performs these checks via spreadsheet formulas. The research challenge is automating these checks against raw API data and developing confidence thresholds that tell the system (and the user) how much to trust the output.

**Explainable assumption generation.** Each assumption needs a natural-language explanation that is grounded in data, actionable, and appropriately uncertain. The system must never fabricate financial figures. We implement a verification layer that cross-references every generated claim against source data and rejects explanations containing unverifiable assertions.

**Phase I milestone:** A working prototype that ingests data from at least 10 real QuickBooks-connected companies, generates forecasts with explainable assumptions, and achieves accuracy competitive with human-built IFM forecasts for the same companies.

---

## 3. The Market Opportunity

33.2 million small businesses in the United States. Fewer than 5% have a financial forecast. The barrier is the cost and expertise required to build one.

Our immediate market: 447 companies already using the IFM framework through [Weekly Accounting](https://weeklyaccounting.com) and [Phoenix Strategy Group](https://phoenixstrategygroup.com) — small businesses with $1M–$50M in revenue across services, e-commerce, SaaS, and professional services. These companies already have structured data and pay for advisory services.

The broader market: 6 million U.S. small businesses on QuickBooks Online. QBO provides the data layer; our system provides the intelligence layer. Go-to-market is through accounting firms and fractional CFOs — the same channel that distributes the IFM today.

Competitors in FP&A (Mosaic, Runway, Forecastr) focus on companies at $10M+ and require manual model construction. AI bookkeeping tools (Pilot, Bench, Digits) focus on categorization, not forecasting. No product automates forecast generation from raw accounting data with explainable, conversationally-reviewable assumptions.

---

## 4. The Company and Team

BrightZen, Inc. is the technology arm of the Weekly Accounting ecosystem.

**John Zdanowski (proposed PI)** — 30 years building financial models for growing companies. Co-founded Phoenix Strategy Group (fund administration, 50+ portfolio companies), co-founded Weekly Accounting (bookkeeping for 80+ small businesses), and designed the IFM framework deployed across 447 companies. Author of *Zen and the Art of Weekly Accounting*. Creator of the SEQ Framework and the [Fourth Statement](/posts/the-fourth-statement/). Background as a sonar engineer — signal detection applied to financial data.

**David Metzler** — PSG co-founder. Business development, venture capital, fund operations. Multiple exits.

**Technical capability:** AI engineering built on LLM integration, TypeScript/Node.js API development, and Google Sheets/QuickBooks Online API automation. Working QBO API prototype (OAuth 2.0, query engine, token management) currently in Intuit compliance review. [Charting Tool](https://charts.brightzen.com) — Next.js dashboard platform — live with five pilot companies.

**Phase I hire:** Machine learning engineer with time-series forecasting expertise.

---

## Why We're Publishing This

The SBIR process is designed for exactly this kind of work — early-stage R&D with commercial potential, too risky for traditional funding, too important to leave unfunded. The government has made AI startup funding a national priority. The money is non-dilutive. The application starts with 3 pages.

We're publishing our pitch because the process shouldn't be opaque. If you're building AI and you haven't looked at [SBIR](https://www.sbir.gov), look now.

And if you have feedback on the pitch, [we'd like to hear it](mailto:phaedrus@brightzen.com).
