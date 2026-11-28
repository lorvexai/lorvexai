---
title: Human-in-the-loop gates for AI agents in a bank
date: 2026-11-28
excerpt: Keeping a human in the loop is not a design. Here is how to decide which agent actions need approval, who approves, and what evidence each gate leaves behind.
topic: Agents
tags:
  - Agents
  - Human oversight
  - Controls
  - Architecture
---

Every agent proposal in a bank ends up with the same line: a human will review it. That sentence hides most of the design work. Which actions? Reviewed by whom? Based on what evidence? And what stops the reviewer from clicking approve on everything?

This article sets out a practical way to place human gates in an agent workflow, using the AWB regulatory assistant from the series as the running example.

## Start from the action, not the agent

Do not ask whether an agent needs oversight. List what it can do and classify each action by what happens if it is wrong.

| Action type | Example | Gate |
|---|---|---|
| Read and summarise | Find the rule text for a question | None, but log it |
| Draft | Prepare a response for an analyst | Human reviews before use |
| Write to a system | Update a case record or tag a document | Approval, or sampling after the fact |
| Send outside the bank | Email a regulator or a customer | Named approver, every time |
| Irreversible or financial | Release a payment, close a case | Dual approval, outside the agent's permissions |

The point of the table is that the gate follows the action's consequences. Most steps in a workflow need no gate. The skill is concentrating human attention where it matters.

## Five properties of a gate that works

1. **The reviewer sees the evidence, not just the answer.** Show the sources the agent used and the steps it took. An approval without evidence is a signature, not a control.
2. **The reviewer has authority and context.** Route to someone who could do the task themselves, with a clear fallback if they are unavailable.
3. **The agent cannot proceed around the gate.** Enforce it in the permissions of the tool, not in the prompt. If the agent can call the send function directly, the gate is advisory.
4. **The default is no.** If nobody approves within the window, the action expires and is logged. It does not run.
5. **Every decision leaves a record.** Capture the proposal, the evidence shown, the approver, the decision and the time. This is what your audit trail will be built from.

## Avoiding rubber-stamping

Gates fail when reviewers are overloaded or when the agent is right so often that checking feels pointless. Three habits help:

- **Measure it.** Track approval rates, edit rates and time spent per review. A 100% approval rate in two seconds is a warning, not a success.
- **Seed known errors.** Occasionally insert a deliberately flawed proposal in a test environment to check that reviewers catch it.
- **Reduce volume with tiers.** Route low-risk actions to sampling review so that reviewers have time for the high-risk ones.

## How this maps to the AWB assistant

In the series, the assistant answers regulatory questions with citations and refuses when the evidence is thin. Add agents on top and the pattern is:

- Retrieval and summarisation run freely and are logged.
- Draft responses go to an analyst before use.
- Anything that leaves the bank goes to a named approver with the cited passages displayed next to the draft.
- The assistant's tool permissions make it technically unable to send or file anything itself.

The next part of the series covers how several agents coordinate under these rules.

## Go deeper in the book

> The book's agent chapters walk through approval tiers, permission design and audit evidence for the AWB case study. [See the book](/books).

*This article is personal opinion and general guidance. It is not legal, regulatory or professional advice.*
