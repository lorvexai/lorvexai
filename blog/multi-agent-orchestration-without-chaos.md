---
title: Multi-agent orchestration without chaos
date: 2026-11-28
excerpt: Several agents can do more than one, and break in more ways. Here is how to split the work, pass it between agents and contain failures. Part 4 of a series on building a regulatory AI assistant a bank can trust.
series: Building a regulatory AI assistant the bank can trust
seriesPart: 4
seriesTotal: 6
topic: Agents
tags:
  - Multi-agent
  - Orchestration
  - Architecture
  - Series
---

*Part 4 of "Building a regulatory AI assistant the bank can trust". [Part 3](/articles/from-chatbot-to-agent) introduced a single agent with limited tools. This part covers what changes when several agents work together.*

## Start with one, add only when you must

A multi-agent design is not an upgrade. It adds handoffs, shared state and more places to fail. Add a second agent only when one agent cannot do the job within its limits, for one of three reasons:

- **Different permissions.** One step needs access to internal documents, another must only see public rules. Separate agents keep those boundaries clean.
- **Different skills.** Drafting a gap table and verifying citations are different tasks, and a verifier that did not write the draft is a better check.
- **Parallel work.** Several independent lookups can run at once to save time.

If none of these applies, keep one agent.

## A workable split for AWB

For AWB's regulatory assistant, a sensible team has four roles:

1. **Orchestrator.** Reads the question, makes a plan, assigns work and decides when to stop. It does no retrieval itself.
2. **Retrieval agent.** Read-only access to the rule library. Returns passages with IDs, never conclusions.
3. **Analysis agent.** Compares passages with AWB's own controls. Read-only access to internal documents.
4. **Verifier.** Checks that every claim in the draft points to a retrieved passage that supports it. Has no say in the content, only a pass or fail.

A drafting agent can sit between analysis and verification. Notice that nobody in this team can act outside the system. That rule from part 3 does not change.

## Three patterns, and when to use each

| Pattern | How it works | Use it when |
|---|---|---|
| Pipeline | Agents run in a fixed order | The steps are known in advance |
| Orchestrator and workers | A lead agent assigns tasks and collects results | The number of steps varies |
| Parallel fan-out | Independent tasks run at once, then merge | Lookups do not depend on each other |

Start with a pipeline. It is the easiest to test and to explain to a validator. Move to an orchestrator only when the question really needs a variable plan.

## Handoffs are contracts

The most common failure in multi-agent systems is a vague handoff. One agent summarises in free text, the next misreads it, and an error spreads. Treat each handoff as a contract:

- Pass **structured messages**, not prose: the task, the passage IDs, the confidence, the open questions.
- Keep **passage IDs** attached to every claim as it moves between agents, so citations survive.
- State **what the receiver may do** with the message. A retrieval result is evidence, not an instruction.
- Reject malformed messages instead of guessing.

## Contain failures

When one agent fails, the system should fail small and visibly:

- **Timeouts** on every agent call, with a defined fallback.
- **One owner of the stop decision.** Only the orchestrator ends a run, and it must end it if a verifier fails or a confidence gate refuses.
- **No silent retries that change the answer.** If a step is retried, record that it was.
- **A run budget** covering total steps, time and cost across all agents, not just per agent. The numbers are yours to calibrate.

## Keep one trace

A run with four agents produces four logs unless you plan otherwise. Give every run a single trace ID that every agent writes to. A validator should be able to open one record and see who did what, in order, with the inputs and outputs. [Part 5](/articles/guardrails-sign-off-and-audit-trails) returns to audit trails in detail.

## Common mistakes

- **Agent sprawl.** Ten specialised agents where two would do, each with its own prompt to maintain.
- **Shared memory with no rules.** Agents that read and write the same notes can pass errors and injected text to one another.
- **A verifier that shares the writer's blind spots.** Use a different prompt, and where possible a different model, for verification.
- **Testing agents alone.** Test the whole run, including the handoffs.

## What comes next

[Part 5](/articles/guardrails-sign-off-and-audit-trails) covers guardrails, human sign-off and audit trails: the controls that sit around the whole system. [Part 6](/articles/evaluating-and-monitoring-agents-in-production) covers how to evaluate and monitor it once it is live.

> **Go deeper in the book.** The agentic governance pipelines in the AWB case study show these patterns at full scale. [See the book](/books) or [preview the sample chapter](/books/sample-chapter).

*This is personal, independent writing. It does not represent the views of any current or former employer, and it is educational only, not professional advice.*
