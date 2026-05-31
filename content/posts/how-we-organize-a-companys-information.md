---
title: "How We Organize a Company's Information"
date: 2026-05-28
lastmod: 2026-05-28
draft: false
tags: ["brightzen-metrics", "ifm", "weekly-accounting"]
summary: "Most companies don't have a data problem. They have an organization problem. Here's the model we use to fix it."
---

Most companies don't lack data. They lack a hierarchy — a clear, opinionated answer to where each number lives, who owns it, and how it's surfaced.

The result looks the same everywhere: weekly reports in Excel, monthly board decks in slides, KPIs in a BI tool, discussion happening in Slack threads no one can find, and a CEO who isn't sure which number is the "real" one.

What operators need isn't more tools. It's a coherent way to organize what they already have.

## Two Trees, Not One

When we sat down to model how a company's information should be organized, we noticed every system we'd seen made the same mistake: it conflated the source of a number with the way the number is shown.

Spreadsheets bury both in the same grid. BI tools let the same metric exist in 47 places, each with subtly different math. Slide decks freeze a number into a single moment, severing it from its source. Comments and context live in entirely different tools from the data they're about.

Our model splits these apart on purpose.

**The data tree** is the truth. It answers: what is this number, where does it come from, what did it equal in each time period?

**The view tree** is the surface. It answers: who should see this, what should sit alongside it, in what form?

The two trees connect through one shared concept: the **metric**. A metric lives in the data tree once and can be referenced by the view tree any number of times — but the view tree also holds plenty of content that doesn't come from the data tree at all. More on that below.

## The Data Tree

```
Workspace
└── Source (a workbook, a database, an API feed)
    └── Metric (e.g. "MRR", "Gross Margin %")
        └── Periods (quarterly values, weekly values, targets)
```

A **workspace** is the company. Everything below it belongs to one organization. Cross-company isolation is absolute.

A **source** is the upstream system a number comes from — today a Google Sheets workbook, tomorrow a database or API. A workspace can have many sources.

A **metric** is the atomic unit of measurement: a name, an axis label, and a definition that doesn't change just because someone built a new chart.

**Periods** are the time slices that give a metric meaning — a quarterly value, a weekly value, a target for next quarter.

This tree is governance. It's where you say: here is what we measure, here is where it comes from, here is what it was each week.

## The View Tree

```
Workspace
└── Dashboard (a curated view for a purpose or audience)
    └── Card (a focused topic — like a page on a website)
        └── Object (chart, slide, link, comment, …)
```

A **dashboard** is a deliberate, named view. "Exec weekly." "Customer success deep dive." "Board pre-read." Each one exists for an audience.

A **card** is a focused topic on a dashboard. Think of it as a page on a website: a single subject, with whatever combination of content makes the point.

A card on "new customer acquisition" might hold a quarterly trend chart of MRR from new logos, a slide explaining what changed last week, a link to the outbound playbook being tested, and a comment thread from the team debating what's working.

The structural idea: a card contains objects. The card is the durable container — the unit of composition. What goes inside it is open.

**Charts** visualize one or more metrics from the data tree over time. Multiple related metrics can sit on the same chart — MRR, churn rate, and net revenue retention side by side for comparison.

**Slides** are narrative content. Text, headers, images, and the ability to present numbers alongside the narrative. Use them to frame the charts: what changed, what we did about it, what's next.

**Links** are pointers to external context. A doc explaining methodology, a customer call transcript, a related dashboard, the spreadsheet a metric originated from.

**Comments** attach to a specific object — a chart, a slide, even a link. Unlike the other types, a comment doesn't stand alone; it lives on its parent. And commenting broadcasts outward: the system shares an image of the object being commented on, your text, and a link back to the card, so the conversation happens where people are already paying attention and traces back here for the full context.

That's what's supported today. It's not the model's limit. A card could just as easily hold a table of raw data, a single-number KPI tile, an embedded video, a status indicator — anything that earns its place next to the numbers. The card is a fixed container with an open vocabulary, not a fixed template.

## Why the Split Matters

When the data tree and the view tree are tangled — the spreadsheet problem, the slide-deck problem — every new audience means duplicating numbers. Every restatement of last quarter's revenue means hunting down a dozen copies. Every new dashboard is a new place the math can drift. And the conversation about the numbers happens somewhere else entirely, in a tool with no connection to the data, where decisions get made and then forgotten.

When they're separate:

- **Fix once, flow everywhere.** The same metric can appear on every dashboard that needs it, in different forms, without being duplicated. Correct the definition once; every view updates.
- **New audiences don't touch the numbers.** Build a new dashboard for a new stakeholder by pointing cards at existing metrics. The metrics stay put.
- **Corrections propagate automatically.** A restatement to last quarter's data flows everywhere. No stale slides, no zombie dashboards.
- **The conversation lives next to the numbers.** Comments attached to a chart or slide stay discoverable on the card months later. But the same act also pushes the context out to the channels where the team already talks, so commentary doesn't depend on anyone navigating to the dashboard first.
- **Governance has a home.** The data tree is where you decide what's measured and how. The view tree is where you decide what's shown, to whom, and what story sits around it. These are different conversations and deserve different owners.

Not every object in the view tree connects to the data tree. Charts do. Slides can. Comments and links don't — they're the human structure around the numbers. That's the point: a card isn't a chart container, it's a complete unit of communication on a single topic. The data tree gives it truth; the rest of the view tree gives it meaning.

## The Takeaway

You don't need our software to use this model. You need a clear answer, for your own company, to two questions:

1. **What's our data tree?** What do we measure, where does it come from, what is each number's value across time?
2. **What's our view tree?** Who looks at this information, what cards do they need on which dashboards, and what mix of content — charts, narrative, conversation, links — belongs on each card?

If you can answer both, your company's information has a shape. If you can't, every new ask for "a report on X" means reinventing the wheel — and the conversation about what to do next happens in five different tools, none of which remember it.
