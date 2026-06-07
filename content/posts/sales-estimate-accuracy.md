---
title: "What Happens After the Deal Closes: A Sales-to-Revenue Pipeline Analysis"
date: 2026-06-06
draft: false
tags: ["ifm", "quality", "bookkeeping", "fourth-statement"]
summary: "We matched 246 CRM deals to actual monthly revenue and found that the typical deal delivers about two-thirds of what sales estimated. Here's what the data shows about onboarding speed, MRR accuracy, retention, and the gap between pipeline promises and reality."
---

Every sales team has an estimate. A projected MRR. A number on a deal that says *this is what this customer will be worth.*

We wanted to know: how often is that number right?

We took a real 3PL company's data — 473 CRM deals and 77 months of actual revenue by customer — and matched them together. 246 deals connected to real revenue records. After excluding batch-imported legacy data with unreliable close dates, the clean analysis covered **173 customers**.

Here's what we found.

---

## 1. Close to First Bill: Median 44 Days

How long from the day a deal closes to the first month with revenue?

| Bucket | % of Customers | Cumulative |
|---|---|---|
| 0–15 days | 19% | 19% |
| 16–30 days | 15% | 34% |
| 31–60 days | 23% | 57% |
| 61–90 days | 16% | 72% |
| 91–120 days | 8% | 80% |
| 121–180 days | 7% | 88% |
| 181+ days | 12% | 100% |

57% of customers generate first revenue within 60 days. But 20% take longer than four months. That tail matters — it's cash that's not arriving when the forecast says it will.

The CRM's "Expected Onboard Date" field was essentially unusable: 97% of records showed a default null value. Only the most recent 14 deals had real projected dates. That's a process gap worth fixing — if you're going to forecast, you need to know when the clock starts.

---

## 2. Ramp to MRR: Fast When It Happens

For customers who reached 80% of their estimated MRR, the median time was **2 months**. The ramp itself isn't the problem.

The problem is that **28% of customers never reach 80% of their estimate at any point in their entire tenure.** They onboard, they bill, but the revenue never gets to the level the salesperson projected.

---

## 3. MRR Estimate Accuracy: The Big Finding

**Median accuracy: 65%** — the typical deal delivers about two-thirds of what was estimated.

| Accuracy Band | % of Customers |
|---|---|
| Under-delivered (<80% of estimate) | 54% |
| On target (80–120%) | 13% |
| Over-delivered (>120%) | 32% |

Over half of customers generate less than 80% of the MRR the salesperson estimated. Only 13% land in the "on target" band. The 32% that over-deliver are real — some customers significantly outperform — but the median tells the story.

**If this company is using sales estimates to project revenue, they're systematically over-forecasting.** A haircut of 30–35% on pipeline estimates would bring projections closer to reality.

This isn't a sales problem per se. The estimates might be reasonable *at the time of signing.* But customer behavior after onboarding — shipping fewer units than expected, seasonal patterns, slower ramp — erodes the number. The question is whether the forecasting model accounts for that erosion or pretends it doesn't exist.

---

## 4. How Long Do Customers Stay?

**37% of the clean set is still active. 63% have churned.**

For churned customers:

| Tenure | % of Churned |
|---|---|
| 1–3 months | 6% |
| 4–6 months | 12% |
| 7–12 months | 28% |
| 13–18 months | 17% |
| 19–24 months | 18% |
| 25–36 months | 12% |
| 37+ months | 7% |

**Median tenure for churned customers: 13 months.**

The dangerous zone is months 4–12 — that's where 40% of churn happens. Customers who survive year one have better odds of sticking around, but the second year still sees significant attrition. Very few become truly long-term: only 19% of churned customers lasted more than two years.

---

## What This Means

This analysis points to three operational gaps:

1. **Forecasting needs a reality adjustment.** Sales estimates are running 35% hot. Either recalibrate the estimation process or apply a systematic discount to pipeline numbers. Both would improve forecast accuracy.

2. **The first year is the retention cliff.** If you're going to invest in customer success, months 4–12 are where the intervention has the highest leverage. By the time a customer churns at month 14, the decision was probably made months earlier.

3. **Onboarding speed varies wildly.** The 20% of customers who take 4+ months to generate first revenue represent delayed cash flow and — likely — a higher churn risk. Tightening the onboarding window would compress the revenue curve and might improve retention.

---

## Methodology

- Revenue data: Monthly Sales by Customer Summary (QBO), Jan 2020 – May 2026
- Sales data: CRM export with customer name, estimated MRR, and close date
- Matching: Normalized name matching between CRM and revenue records (246 of 473 matched)
- Steady-State MRR: Average monthly revenue from month 4 onward (skips ramp period)
- "Still Active" defined as having revenue in any of the last three months of data
- Batch-imported legacy deals (with identical close dates suggesting CRM migration, not actual close) were excluded from summary statistics but included in the detail workbook
