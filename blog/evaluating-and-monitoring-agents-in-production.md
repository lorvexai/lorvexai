---
title: Evaluating and monitoring agents in production
date: 2026-12-14
hidden: true
excerpt: Passing tests at launch is the start, not the finish. Here is how to evaluate an agent, monitor it live and decide when it needs revalidating. Part 6 of a series on building a regulatory AI assistant a bank can trust.
series: Building a regulatory AI assistant the bank can trust
seriesPart: 6
seriesTotal: 6
topic: Governance
tags:
  - Evaluation
  - Monitoring
  - Model risk
  - Series
---

*Part 6 of "Building a regulatory AI assistant the bank can trust". [Part 5](/articles/guardrails-sign-off-and-audit-trails) covered controls and audit trails. This final part covers how you know the system still works.*

## Evaluate the run, not only the answer

Part 3 made the point that a good answer can come from a bad run. Evaluation therefore has three levels:

1. **Retrieval.** Did the right passages come back? Measure with a labelled set of questions where you know which passages should appear.
2. **Answer.** Is the answer faithful to the passages and relevant to the question? Tools such as RAGAS offer measures for this. Record the tool version you use, because definitions change.
3. **Trajectory.** Did the agent take sensible steps within its limits, and did it stop when it should have?

Add refusal tests. A question the system cannot answer from its corpus should be refused. A system that always answers is failing.

## Build the test set from real questions

A test set made of questions the builders invented flatters the system. Collect real questions from the compliance team, include hard and ambiguous ones, and agree the correct answers with subject experts. Keep a frozen core set, and add new cases whenever the system fails in production. Keep the set under version control, with owners.

## What to monitor live

Once users rely on the assistant, watch a small set of signals:

| Signal | What it tells you |
|---|---|
| Refusal rate | Too low may mean weak answers are slipping through. Too high means the system is unhelpful. |
| Citation verification failures | Claims that do not match their sources |
| Human override and edit rate | Where reviewers disagree with the system |
| Retrieval confidence over time | Drift in the corpus or the questions |
| Latency, cost and step counts | Loops and runaway runs |
| User feedback | Problems the metrics miss |

Set alert thresholds from your own baseline after a period of observation. The numbers in the AWB case study are illustrative.

## What causes drift

- **The corpus changes.** New rules arrive and old ones are withdrawn.
- **The model changes.** A vendor updates the model behind the API.
- **The questions change.** New regulations bring new kinds of query.
- **The tools change.** An upstream system alters its output.

Each of these is a change event. Log them, and run the frozen test set after each one.

## When to revalidate

Decide the triggers in advance and write them into policy. Typical triggers are a change of model or model version, a material change to prompts or thresholds, a significant corpus update, an incident, or a drop in monitored measures beyond a set limit. The PRA's model risk principles expect ongoing monitoring and independent review, and clear triggers make that practical.

## Incidents and rollback

Plan for failure before it happens. Define what counts as an incident, who can switch the assistant off, how users are told, and how you roll back to a known-good configuration. Run a drill. Record every incident and what changed afterwards.

## Common mistakes

- **Launch-day evaluation only.** Systems drift, so evaluation has to continue.
- **Tracking averages.** A good average can hide a bad segment, such as one rule area where answers are weak.
- **No owner for the dashboard.** If nobody reviews the signals, nothing changes.
- **Ignoring vendor changes.** A silent model update is a change to your system.

## Where the series ends

Across six parts, the AWB assistant went from a demo to a governed system: documents prepared properly, answers that cite their sources, an agent inside strict limits, orchestration with contained failures, layered controls with audit trails, and monitoring that triggers revalidation. None of it depends on one vendor's model. All of it depends on treating the system as a model under management.

> **Go deeper in the book.** The full AWB build, including monitoring and validation, is in the book. [See the book](/books) or use the [regulatory calendar](/regulatory-calendar) to track the dates that affect your own programme.

*This is personal, independent writing. It does not represent the views of any current or former employer, and it is educational only, not professional advice.*
