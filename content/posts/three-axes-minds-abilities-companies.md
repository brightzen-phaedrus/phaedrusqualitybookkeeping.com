---
title: "Three Axes: Minds, Abilities, and the Companies They Serve"
date: 2026-06-20
draft: false
tags: ["ai", "agents", "quality", "bookkeeping", "building-phaedrus"]
summary: "How the system behind this site is organized — not as one big assistant, but as focused environments, shared skills, and the companies they act on. Three axes that keep the work clean as it grows."
---

Most people use AI the same way every time: open a blank chat, paste in the context, explain who you are and what you're doing, and hope the answer lands. The next day you do it all again. The context is thrown away the moment the conversation ends.

That's the wrong shape. A general AI is powerful, but generic. You spend the first ten minutes of every conversation turning a generalist into a specialist — and then you throw the specialist away.

The system behind this site is built to never do that. It's organized along three axes. Once you see them, the whole thing makes sense.

## The first axis: Minds — *how* the work is done

A **Mind** is a focused environment. Not a person, not a personality — a folder with a definition: its purpose, the tools it can use, the rules it works under, and how it hands off to other Minds.

When work needs doing, the system opens an AI instance *inside* a Mind. It loads already knowing the domain. There's no cold start, because the context was set up once and it stays.

A few of them:

- The **Bookkeeping Mind** owns the books. Recording, categorizing, reconciling, closing periods. It's the only one allowed to write changes — and before it writes anything, it confirms exactly which company and which period, because a wrong-entity entry is the most expensive mistake it could make.
- The **CFO Mind** reads the books and advises. Forecasts, cashflow, KPIs, "what should we do given these numbers?" It never writes to the books. If its analysis says something needs to change, it hands that back to Bookkeeping.
- The **Root Mind** is the one you talk to. It coordinates the others and can broadcast a decision across the whole system.

Notice the discipline. The Mind that *advises* is not allowed to *change*. The Mind that *changes* must *confirm* first. The boundaries aren't bureaucracy — they're how you keep trust in a system that's doing real work on real money.

## The second axis: Abilities — skills that are *shared*

A **Mind** is a place to work. An **Ability** is a thing you can *do* — and the key word is *shared*.

An ability isn't owned by any one Mind. It's a taught, reusable skill that any Mind can call on: read a financial model, write to a spreadsheet, refresh a data source, audit a document for drift. Each one is written down once — code plus a how-to — and registered so the next Mind that needs it just picks it up.

This is the difference between "we hacked this together once" and "the system now knows how to do this." The first solves today's problem. The second solves the category. When the work is filed as an ability, the next time is faster *because* this time was done right.

## The third axis: Companies — *who* the work is for

The first two axes are about the work. The third is about the subject.

A **Company** is who a session is acting on — ShipCalm, a bookkeeping client, the practice itself. And a company isn't just a name; it carries its own context: its identity, its glossary, its key people, the quirks of its books, the conventions for talking to it.

So when a session goes to work *for* a company, it stacks the context in order: the system's rules, then the Mind's rules, then the company's truth, then the notes that live exactly where that Mind and that company meet. The Bookkeeping Mind acting for ShipCalm loads something different than the CFO Mind acting for the same company — and both load something different than either would for a different client.

## Why three axes and not one big assistant

You could build one giant AI that tries to hold everything at once. It would be worse. It would mix up which company it's working on, forget which rules apply, and re-learn the same skill every time.

Three axes keep the work clean as it grows. **How** (the Mind), **what** (the Ability), and **who** (the Company) are separate concerns, so each can grow without tangling the others. Add a new client and the Minds and Abilities already know how to serve it. Teach a new ability and every Mind can use it. Define a new Mind and it inherits every ability that came before.

The work compounds. That's the whole point — and that's quality. Not whether a thing runs correctly today, but whether the system is permanently better tomorrow than it was this morning.
