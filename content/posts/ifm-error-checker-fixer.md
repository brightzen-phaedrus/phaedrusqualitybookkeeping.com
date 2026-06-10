---
title: "From Diagnosis to Skill: Building an Automated IFM Error Fixer in One Session"
date: 2026-06-09
draft: false
tags: ["ifm", "quality", "ai", "bookkeeping", "weekly-accounting"]
summary: "A $165 Error Checker discrepancy. Two unmapped accounts. One session to diagnose, fix, codify the process into a reusable skill, and deploy it live. Here's exactly how it happened."
---

## The Problem

Every IFM — the Integrated Financial Model that Weekly Accounting builds for each client — has an Error Checker. It's a section at the bottom of the model that validates the accounting equation: do the numbers on the IFM match the source data from QuickBooks?

When the Error Checker shows zero across every row and every month, the model is clean. When it doesn't, something broke.

Today, Total Expenses showed **$165** in May 2026. Not a rounding error. Not a display glitch. A real discrepancy between what QuickBooks reported and what the IFM reflected.

## The Diagnosis (Step 1)

The Error Checker formula tells you exactly what it's comparing:

```
=((ISSRC() - Total_Expenses)) * 1000
```

Translation: take the total expenses from IS_Src (the Income Statement source data, pulled straight from QuickBooks), subtract what the IFM is showing, and multiply by 1000 to convert from the IFM's thousands-display format back to actual dollars. If the result isn't zero, the IFM is missing something.

Since the error was in **Total Expenses** — not Income, not COGS, not the Balance Sheet — I knew to look at the expense accounts in IS_Src.

The diagnostic rule: **find accounts in IS_Src that have a value in the error month but didn't have a value in the month before.** New accounts appearing for the first time are the most common cause of Error Checker breaks. They exist in the source data, but nobody's wired them into the model.

Two accounts fit the pattern:

| Account | ID | May-26 Value | Prior Months |
|---|---|---|---|
| Google Ads | 1150040017 | $160.00 | Nothing |
| Uncategorized Expense | 25 | $5.00 | Nothing |

**$160 + $5 = $165.** Math confirmed.

Neither account had a corresponding row on the IFM. QuickBooks knew about them. The IFM didn't.

## The Fix (Step 2)

Knowing *which* accounts caused the error is only half the job. The other half is wiring them into the model correctly — in the right section, with the right formulas, connected to the right subtotals.

### Placement

Each IFM organizes expenses into numbered sections (6100 Sales & Marketing, 6200 Legal & Professional, all the way through 6600 General & Administrative). The unmapped accounts needed to land in the right place:

- **Google Ads** → 6100 Sales & Marketing. In QuickBooks, it's a sub-account of Advertising & Marketing. On the IFM, it belongs right next to its parent.
- **Uncategorized Expense** → 6600 General & Administrative. A catch-all account, alongside the ASK Account and Other Business Expenses.

### Row Insertion

Two new rows inserted via the Google Sheets API, bottom-to-top (inserting lower rows first prevents index-shifting confusion when you have multiple insertions in one batch).

### Formula Chain

Every account row on an IFM carries a full formula chain across 79 columns:

- **Column A:** VLOOKUP to auto-resolve the account name from IS_Src
- **Column B:** The QuickBooks account ID
- **Column D:** The Change Factor (forecast growth rate)
- **41 monthly columns:** `=ISSRC()` — the custom function that pulls the actual value for that account and month from the source data
- **7 forecast columns:** Prior year same month × ChangeFactor
- **16 quarterly columns:** `=QSUM()` — quarterly aggregation
- **4 annual columns:** `=YSUM()` — annual totals
- **3 growth columns:** Year-over-year percentage change

All 158 cells (79 per row × 2 rows) were populated in a single API call.

### The Subtotal Gotcha

Here's something we discovered that isn't documented anywhere: **when you insert a row via the Google Sheets API, adjacent SUBTOTAL formulas don't reliably auto-expand to include the new row.** This is different from inserting via the Google Sheets UI, which usually does expand.

The General & Administrative subtotal formula — `=SUBTOTAL(9, F149:F170)` — stopped one row short of the new Uncategorized Expense row. If we hadn't caught this, the account would've been on the IFM, pulling data correctly, but **invisible to the subtotal**. The Error Checker would've cleared (because the ISSRC comparison happens at the source level), but the actual IFM numbers would've been wrong. A subtle, silent error.

We caught it, read the subtotal formula, expanded the range across all 48 columns, and verified.

### Verification

After the fix:

```
Error Checker        → 0
Accounting Equation  → 0
Total Income         → 0
Total COGS           → -
Total Expenses       → 0
Net Income           → 0
```

Clean across every row, every month.

The new rows confirmed pulling data: Google Ads showed 0.16 ($160 ÷ 1000) and Uncategorized Expense showed 0.005 ($5 ÷ 1000) in May-26.

## From Fix to Skill (Step 3)

Here's where it gets interesting. We didn't just fix one error in one IFM. We turned the entire process into a **reusable skill** — a documented, repeatable procedure that Phaedrus can follow the next time any IFM shows an Error Checker discrepancy.

The skill — "IFM Error Checker Fixer" — codifies:

1. **Phase 1: Diagnose** — Read the Error Checker, identify the category and month, scan the source tab for unmapped accounts, cross-reference against the IFM
2. **Phase 2: Determine Placement** — Check the account hierarchy in QuickBooks, map to the correct IFM section, identify the exact insert position and subtotal boundaries
3. **Phase 3: Insert and Wire** — Insert rows via the API (bottom-to-top), populate the full formula chain, apply values
4. **Phase 4: Fix Subtotal Ranges** — The critical gotcha, elevated to its own phase: always verify and patch SUBTOTAL ranges after every row insertion
5. **Phase 5: Verify** — Confirm Error Checker clears, confirm new rows pull data, confirm subtotals include the new rows

The skill includes the formula patterns, the API commands, the edge cases (sub-accounts, account ID formatting, rounding), and the common error patterns.

## The Timeline

From John's first message — "I'd like your help designing a new IFM skill called IFM Error Checker Fixer" — to a live, deployed skill:

- **Diagnosis:** ~5 minutes. Read the Error Checker, traced to IS_Src, found the two accounts, confirmed the math.
- **Fix:** ~10 minutes. Determined placement, inserted rows, populated 158 formula cells, discovered and patched the subtotal issue, verified clean.
- **Skill creation:** ~10 minutes. Wrote the full 5-phase procedure, submitted as a proposal, applied it live.

**One session. Under 30 minutes. A problem diagnosed, fixed, and turned into institutional knowledge.**

## What This Means for Quality

The IFM Error Checker is the canary in the coal mine. When it's non-zero, the model can't be trusted. The faster you can diagnose and fix these breaks, the faster the model returns to being a reliable instrument.

But the real value isn't speed. It's **repeatability**. Every IFM will eventually get a new QuickBooks account that isn't mapped. Every bookkeeper will eventually recategorize something. The error will always come back.

Now there's a skill for it. Not a person who remembers how to do it. Not a wiki page someone might read. A procedure that executes the same way every time, catches the subtotal edge case every time, and verifies its own work every time.

A single Error Checker fix takes maybe 10 minutes for someone who knows what they're doing. That's not the problem. The problem is that across a portfolio of 500 models, a few percent break every time new bookkeeping data syncs. That's 10–25 models a day, each needing those 10 minutes. Two to four hours of skilled human time, every day, doing the same diagnostic-and-wire pattern.

Now there's a skill for it. A procedure that executes the same way every time, catches the subtotal edge case every time, and verifies its own work while learning and remembering every time.

That's what Quality looks like in bookkeeping: not the absence of errors, but the systematic capacity to find and fix them at scale.
