---
title: "The IFM (Integrated Financial Model) — Knowledge Garden"
layout: "phaedrus-report"
url: "/phaedrus/content/knowledge-garden/ifm/"
summary: "The IFM (Integrated Financial Model) — from the PQB Knowledge Garden."
eyebrow: "Content · Knowledge Garden"
heroTitle: "The IFM (Integrated Financial Model)"
heroMeta: "From the Knowledge Garden · [Garden index](/phaedrus/content/knowledge-garden/) · [Original wiki page](/wiki/ifm/)"
---

The IFM is the working instrument of the [Fourth Statement](/phaedrus/content/knowledge-garden/fourth-statement/) — a single integrated model that combines historical reporting and forecasting for a small business.

One spreadsheet, one system: the income statement, balance sheet, operating drivers, and forecast all connected, all reconciled back to the books, updated weekly.

## The Architecture

An IFM is built from a standard template (~25 tabs) that grows as the business is customized:

- **Core model** — monthly grain (the IFM tab) paired with a weekly grain twin ([the MMM](/phaedrus/content/knowledge-garden/mmm/))
- **The [SEQ](/phaedrus/content/knowledge-garden/seq/)** — business-specific drivers at the top: customers, orders, conversion, AOV, acquisition cost
- **Quality layer** — [bookkeeping quality checks](/phaedrus/content/knowledge-garden/bkqa/), an "Ask" queue for unrecognized transactions, AR/AP aging
- **Source tabs** — raw data pulled from the accounting system, so every number in the model traces to the books
- **Error checker** — validates the accounting equation and cross-checks every section. Every value should be zero. If it isn't, you've found a problem worth knowing about.

## The Actuals Boundary

The defining feature: a moving line between history and forecast. Everything left of the boundary is real, reconciled data. Everything right of it is a forecast built bottom-up from drivers — ad spend → customers → orders → revenue — not a growth rate pasted onto last year.

When the boundary goes stale, the model silently degrades into a historical reporting tool. In our experience reviewing dozens of models, this is the single most common failure — a model that *looks* like a forecast but no longer forecasts anything.

## Forecast Methods

Each line item gets an explicit method — no hidden assumptions:

1. **Growth Rate** — compounding from a base
2. **% of Revenue** — scales with the top line
3. **Flat Line** — constant
4. **Manual Entry** — deliberate human judgment
5. **Scheduled / Lookup** — known future events (rent steps, loan payments)
6. **Derived** — computed from other drivers

## The Review Sequence

Reviewing an IFM follows a fixed order, because each step depends on the one before it:

1. **[Bookkeeping quality](/phaedrus/content/knowledge-garden/bkqa/)** — can we trust the data at all?
2. **Actuals boundary** — is the model current?
3. **Error checker** — does the math hold?
4. **Revenue honesty** — does the forecast respect seasonality and reality?
5. **Cost survival** — do expenses scale sensibly?
6. **Customer math** — do the unit economics support the revenue story?
7. **Balance sheet reality** — does cash actually work?

Only after steps 1–3 pass does the forecast even deserve attention. A beautiful forecast on top of broken books is [noise dressed as signal](/phaedrus/content/knowledge-garden/signal-vs-noise/).
