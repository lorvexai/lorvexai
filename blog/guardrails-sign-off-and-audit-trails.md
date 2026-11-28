---
title: Guardrails, human sign-off and audit trails
date: 2026-11-28
excerpt: The controls around an AI assistant matter as much as the model inside it. Here is how to layer guardrails, set sign-off tiers and keep an audit trail that a validator can use. Part 5 of a series on building a regulatory AI assistant a bank can trust.
series: Building a regulatory AI assistant the bank can trust
seriesPart: 5
seriesTotal: 6
topic: Governance
tags:
  - Guardrails
  - Audit
  - Human oversight
  - Series
---

*Part 5 of "Building a regulatory AI assistant the bank can trust". [Part 4](/articles/multi-agent-orchestration-without-chaos) covered orchestration. This part covers the controls that wrap the whole system.*

## Guardrails are layers, not a filter

A single content filter on the output is not a guardrail strategy. Controls belong at every point where something can go wrong:

| Layer | Question it answers | Example control |
|---|---|---|
| Input | Should this question be handled at all? | Scope check, rejection of out-of-scope requests |
| Retrieval | Is the evidence good enough? | Filters for rules in force, confidence gate |
| Generation | Is the answer grounded? | Citations required, citation verification |
| Action | Can the system do anything irreversible? | No act tools, approval gates for drafts leaving the bank |
| Output | Is anything sensitive leaving? | Redaction of personal data, review of external text |

The aim is that no single failure reaches a user. If the model ignores an instruction, the retrieval gate or the verifier should still catch it.

## Sign-off tiers

Not every answer needs a person. Decide in advance which do, using the consequence of being wrong. The [human-in-the-loop article](/articles/human-in-the-loop-gates-for-ai-agents) sets out the logic. For AWB's assistant, an illustrative split looks like this:

- **Tier 1: informational.** An analyst looks up a rule. No sign-off, full logging.
- **Tier 2: internal drafts.** A gap analysis for a committee. A named reviewer approves before it is used.
- **Tier 3: external or regulatory.** Anything that goes to a regulator or a customer. A named approver, with the cited passages shown beside the draft.

The tiers belong in policy, with owners and a defined fallback when an approver is unavailable. Measure approval and edit rates so that sign-off stays a real check.

## What an audit record needs

A validator or auditor will ask what the system saw and why it answered as it did. Capture, for each run:

- A trace ID, timestamp and the user or role asking.
- The question as received and as interpreted.
- The retrieved passages with IDs and the version of each document.
- Every tool call, with inputs and outputs.
- The model name and version, the prompt version and the settings used.
- The answer, the citations and the result of citation verification.
- Any refusal and its reason.
- The sign-off decision, who made it and when.

Store these records so they cannot be edited after the fact, and give them a retention period set by your records policy. Keep personal data out of logs where you can, or protect it.

## How this maps to model risk and AI regulation

The record above is also the evidence that model risk reviews ask for. The PRA's model risk principles expect documented design, independent validation and ongoing monitoring, and a complete trace makes each of those easier to show. If a system falls into a category that the EU AI Act treats as high-risk, human oversight and logging are legal requirements, not only good practice. Whether a regulatory assistant falls into that category depends on how it is used, so take advice on your own case.

## Common mistakes

- **Sign-off with no evidence on screen.** The approver cannot check what they cannot see.
- **Logs nobody can read.** Raw model traces without a readable view are of little use in a review.
- **Guardrails in the prompt only.** A prompt can be overridden. Put hard limits in code and permissions.
- **No test for the controls themselves.** Try to break each layer on purpose and record the result.

## What comes next

[Part 6](/articles/evaluating-and-monitoring-agents-in-production) closes the series with evaluation and monitoring: how you know the system still works after launch. For a wider view of what to watch in production, see [monitoring LLM systems in production](/articles/monitoring-llm-systems-in-production).

> **Go deeper in the book.** The book's governance chapters cover control design, sign-off and audit evidence for AWB. [See the book](/books).

*This is personal, independent writing. It does not represent the views of any current or former employer, and it is educational only, not professional, legal or regulatory advice.*
