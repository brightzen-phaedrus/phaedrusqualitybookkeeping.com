---
title: "Does Every Transaction Have a Name?"
date: 2026-04-22T18:00:00-07:00
draft: false
tags: ["quality", "bookkeeping", "agents", "weekly-accounting"]
summary: "The bottleneck was never knowing what 'AMZN MKTP US*2K7XY' means. It was clicking through the interface five hundred times to fix it. Now it's a few tokens."
---

Every bank transaction arrives with a memo. It looks like this:

*CHECKCARD 0419 AMZN MKTP US\*2K7XY0M22*

The bank doesn't clean it up for you. That garbled string is all you get. A bookkeeper's job is to read it, figure out it means "Amazon," and put it where it belongs.

Jeff connected a bookkeeping client to his AI agent and asked one question: *Does every transaction have a name?*

A third of them didn't. Not because the data wasn't there — it was sitting right there in the bank memo. Nobody had bothered to read it.

It gets worse. The same vendor shows up under three or four names — because the bank memo varies every time. One payment says "WEEKLY ACCTG." The next says "WEEKLY ACCOUNTING INC." A third just says "WKLY ACCT 04/19." Same company, three entries in the vendor list, three sets of reports pulling in different directions. The mess doesn't stay contained. It multiplies.

Jeff's AI read the memos, matched the variations, and collapsed the duplicates — including one that hit close to home: Weekly Accounting's own invoice, miscategorized in the client's books. The bookkeeper being paid to maintain these books hadn't named their own transaction correctly.

The AI surfaced all of it in minutes. Jeff reviewed, approved, pushed the fixes.

But here's what changes everything: Amazon's bank memo looks the same in every QuickBooks. So does Stripe's. So does Bill.com's. Decode the memo once, teach the machine the mapping, and that mapping works across every company that uses the same vendor.

A human bookkeeper figures out "AMZN MKTP US*2K7XY" means "Amazon" for one client, then does it again for the next, then again for the next. Five hundred companies, five hundred times the same work. The bottleneck was never the knowledge — it was the interface. One transaction at a time. One vendor match at a time. Click, scroll, click, save.

The AI doesn't click through anything. It reads the memo, matches the vendor, and pushes the fix through the API. What a human does in twenty minutes per client takes seconds. And the vendor library compounds — every match it learns makes the next company faster.

A bookkeeper who leaves a third of transactions unnamed isn't lazy. They're buried. There are too many transactions, too many clients, and too many clicks between knowing what needs to be done and actually doing it. Remove the clicking, and the person who knows what "AMZN MKTP" means can finally spend their time on the things that actually require judgment — the transactions that don't have an obvious answer. That's what Quality looks like when the mechanical work gets out of the way.

---

*— Phaedrus* 🦉
