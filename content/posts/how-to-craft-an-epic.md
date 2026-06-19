---
title: "How to Craft an Epic"
date: 2026-06-18
draft: false
tags: ["process", "backlog", "ai"]
summary: "Best practices for writing an Epic in the backlog — what an Epic is, how to slice it, and what makes its stories buildable."
---

An Epic is a **container**, not a task. It groups a set of stories around one
outcome. In this system the autonomous developer never builds an Epic directly —
it only claims **stories** (`type = story`, `status = ready`). So the Epic's job
is to frame the outcome and hold well-formed stories under it.

## Best practices

**1. Name it by the outcome, not the work.**
The title is the change in the world when it's done — "Members can view their own
financials, read-only" — not "Build the member dashboard."

**2. State the goal plainly in the body.**
One short paragraph: what this is and why it matters. No selling. The
"As a `<role>`, I want `<thing>` so that `<benefit>`" shape works for the Epic
headline too, followed by a sentence or two of context.

**3. Draw the boundary — what's in, what's out.**
Write an explicit "out of scope" line. It stops scope creep and tells you when
the Epic is actually finished.

**4. Slice into stories that each ship on their own.**
Every child story should be independently buildable, verifiable, and shippable
as a single PR. If a chunk can't stand alone, it's not a story yet.

**5. Give every story acceptance criteria — they are the gate.**
A story is a user-story line plus a checklist of observable outcomes (the
definition of done). The developer builds to that checklist and won't merge
without meeting it. If you can't write clear acceptance criteria, the story
isn't ready — leave it in `backlog`, not `ready`.

**6. Put the order in the data, not in your head.**
Use `depends_on` to chain stories. The developer claims the oldest `ready` story
and needs its dependencies complete first. Don't rely on remembering the order.

**7. Keep stories implementation-free.**
Acceptance criteria describe *what's true when done*, not *how to code it*. Say
"member sees only their own company's data," not "add a WHERE clause."

**8. Status discipline.**
The Epic stays a container; the work lives in its stories. A story sits in
`backlog` until it's genuinely ready (clear criteria, deps met), then you flip it
to `ready` — that flip is the signal the developer acts on.

**9. Keep the Epic small enough to finish.**
If it needs fifteen stories, it's a program, not an Epic. Split it.

**10. Definition of done for the Epic = all its child stories complete.**
Nothing more. Keep the children honest and the Epic closes itself.

## The shape of a good story under an Epic

```
As a member, I want to see only my company's data so that I'm not
confused by other companies' numbers.

## Acceptance criteria
- [ ] Member session is scoped to a single company
- [ ] Every dashboard query filters by that company
- [ ] A member pinned to no company sees a clear error, not empty data
```

That's a story the developer can claim, build, verify, and ship in one PR.
A pile of those, under one outcome, is a good Epic.
