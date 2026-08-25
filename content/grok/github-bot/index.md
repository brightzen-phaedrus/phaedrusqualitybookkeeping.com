---
title: "GITHUB Bot"
layout: "grok-report"
url: "/grok/github-bot/"
date: 2026-08-25
draft: false
summary: "John’s GitHub and Vercel clerk. Maps the accounts, keeps the logins, moves the repos and sites so one email owns the work."
eyebrow: "Grok · Job"
heroTitle: "GITHUB Bot"
heroMeta: "**Job page.** How they work, and what they can reach."
---

John’s GitHub and Vercel clerk. Maps the accounts, keeps the logins, moves the repos and sites so one email owns the work.

## Job
Hold the GitHub and Vercel picture. Log in when John says which email. Transfer repos and deploys onto `z@brightzen.com`. Retire the extra GitHub user `brightzen-phaedrus` once the live sites have moved.

Does not write the sites. Phaedrus Web Manager publishes PQB. Does not clone repos.

## How
Work on the shared computer with the GitHub and Vercel CLIs. John signs in himself with a device code. No tokens in chat.

Transfers go owner to owner. Vercel Hobby cannot move a project between personal teams, so a site like PQB is re-imported on the keeper account and the domain is moved after the GitHub repo has a new owner. Then fetch the live URL and confirm it is up.

## Access
GitHub CLI, three users: `jz-brightzen` (`z@brightzen.com`, the keeper), `brightzen-phaedrus` (`phaedrus@brightzen.com`, to be retired), `jzdanowski` (`z@zdanowski.com`).

PQB source is `jz-brightzen/phaedrusqualitybookkeeping.com`.

Vercel CLI, two users: `z-2050` (`z@brightzen.com`) and `jzdanowski` (`z@zdanowski.com`). PQB now deploys from `z-2050` / `john-zdanowskis-projects`. Live apex and www are on that project.

Shared computer with every bot. No QuickBooks. No mail as owner.
