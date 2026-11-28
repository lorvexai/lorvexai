---
title: From chatbot to agent, without losing control
date: 2026-11-28
excerpt: A single cited answer is not enough for questions that need several lookups. Here is how the AWB assistant becomes an agent, and the limits that keep it inside the lines. Part 3 of a series on building a regulatory AI assistant a bank can trust.
series: Building a regulatory AI assistant the bank can trust
seriesPart: 3
seriesTotal: 6
topic: Agents
tags:
  - Agents
  - Tools
  - Controls
  - Series
---

*Part 3 of "Building a regulatory AI assistant the bank can trust". [Part 2](/articles/rag-that-cites-its-sources) showed how one question gets one cited answer. This part covers the questions that need more than one lookup.*

## When one retrieval call stops being enough

"What does the rule say about this?" is a single lookup. Real questions from AWB's compliance team look different:

- "Does the new consultation apply to our ring-fenced entity, and which of our current controls does it touch?"
- "Which of our model documents mention this requirement, and are any out of date?"

Answering those means finding the rule, checking who it applies to, searching internal documents and comparing the results. A fixed pipeline cannot know in advance how many steps that takes. That is where an agent comes in.

## What an agent is, in this context

An agent is a loop. The model reads the question, decides on a step, calls a tool, reads the result, and decides what to do next. It stops when it has an answer, hits a limit, or has to hand the question to a person.

The risk is that the loop makes choices you did not script. So the design question is not "how clever is the agent" but "what is it allowed to do, and what stops it".

## Tools are the control surface

Everything an agent can do happens through tools, which makes tools the place to enforce rules. AWB's assistant gets three kinds:

| Tool type | Examples | Rule |
|---|---|---|
| Read | Search rules, fetch a passage, look up which entities a rule covers | Allowed, every call logged |
| Draft | Prepare a summary or a gap table for a reviewer | Output marked as draft |
| Act | Send an email, update a record, file a return | Not available to the agent |

The last row matters most. If the agent cannot send or file anything, no prompt trick or model error can make it do so. Approval gates for those actions belong to people and are covered in the [human-in-the-loop article](/articles/human-in-the-loop-gates-for-ai-agents).

## Five limits that keep it inside the lines

1. **A step budget.** The agent gets a fixed number of tool calls per question. If it runs out, it hands over what it has and says so.
2. **A tool list per task type.** A question about a rule does not need access to internal HR documents. Give each task only the tools it needs.
3. **Refusal carries through.** If any retrieval step fails the confidence gate from part 2, the agent stops. It does not paper over the gap with a guess from an earlier step.
4. **Citations survive every step.** Each claim in the final answer must still point to the passage that supports it, even after several lookups. Track passage IDs through the whole run.
5. **Documents are data, not instructions.** A retrieved PDF that says "ignore your previous instructions" is text to be quoted, not obeyed. Treat all retrieved content as untrusted.

The step budget and the thresholds in the AWB design are illustrative. Set yours from testing, not from this article.

## What a run looks like

For the first question above, a well-behaved run might be:

1. Retrieve the consultation text and note its scope section.
2. Look up AWB's entities and which are in scope.
3. Search the control library for matching controls.
4. Draft a gap table with citations to both the rule and the internal documents.
5. Stop and route to a reviewer, because the output feeds a decision.

Every step is logged: the tool, its inputs, what came back and why the agent chose the next step. That log is what a validator reads later.

## How agents fail

- **Looping.** The agent repeats the same search. The step budget catches this.
- **Wrong tool.** It picks a tool that does not fit the task. A per-task tool list reduces the damage.
- **Drift.** After four steps it answers from memory rather than from its notes. Citation tracking exposes this.
- **Injection.** Retrieved text steers the agent. Treat documents as data and test with deliberately hostile files.

## Test the run, not just the answer

A good answer can come from a bad run. Build a set of scripted questions where you know the correct sequence of steps, and check the trace as well as the result. Add a few traps: a document with injected instructions, a question that cannot be answered, a tool that returns an error.

## What comes next

One agent is manageable. Part 4 looks at several agents working together, and how to keep a team of them from becoming a source of chaos.

> **Go deeper in the book.** Chapter 3 on agents walks through the AWB design in detail. [Preview the sample chapter](/books/sample-chapter) or [see the book](/books).

*This is personal, independent writing. It does not represent the views of any current or former employer, and it is educational only, not professional advice.*
