---
title: Why most RAG demos fail in a regulated bank
date: 2026-11-23
excerpt: The demo impressed everyone. Then model risk, audit and compliance asked five questions it could not answer. Part 1 of a series on building a regulatory AI assistant a bank can trust.
series: Building a regulatory AI assistant the bank can trust
seriesPart: 1
seriesTotal: 6
tags:
  - RAG
  - Regulated AI
  - Architecture
  - Series
topic: RAG
---

# Why most RAG demos fail in a regulated bank

*Part 1 of "Building a regulatory AI assistant the bank can trust". Each part stands on its own.*

---

## The demo that went well

Picture Avon & Wessex Bank plc (AWB), a fictional £40 billion UK bank regulated by the PRA and FCA. It is the bank I follow from business case to production in my book, [*AI for Financial Risk, Compliance and Regulatory Reporting*](/books). Its regulatory reporting team spends hours each week answering questions like these:

- Which template applies to this exposure?
- What changed in the latest rule update?
- Does this treatment still hold after the new effective date?

Someone builds a prototype in a few weeks. They load the PRA Rulebook and a set of reporting instructions into a vector store, connect a large language model, and add a chat box. In the demo, a senior manager asks a hard question and gets a fluent, confident answer in seconds.

The room is impressed. Then the pilot goes to model risk, internal audit and compliance, and it stalls.

The technology rarely causes the stall. The prototype was built to show that retrieval and generation work. It was never built to be defended.

## Five questions the demo cannot answer

**1. Where did that answer come from?**
A fluent paragraph with no source is not usable in reporting. A reviewer needs the document, the section and the exact wording behind each claim. If the assistant cannot show it, the person has to search for it themselves, and the time saved disappears.

**2. Was that rule in force?**
Regulatory text changes, and an index built once goes stale. A prototype often mixes superseded and current versions, and the model answers from whichever chunk scored best. An answer that was correct last quarter can be wrong today, and nothing in the chat window will tell you.

**3. What exactly was asked, retrieved and answered?**
When someone queries a number in a submission six months later, the bank needs to reconstruct what the assistant saw and said. Chat history in a browser is not a record. Without one, the assistant cannot support any decision that matters.

**4. Who owns it?**
Who approves a change to the prompts, the model or the documents it reads? Who decides it is safe to switch to a newer model? In many pilots the honest answer is "whoever built it". That works until the builder moves on.

**5. How do we know it is right?**
"It seemed fine in testing" is not evidence. A bank needs a fixed set of questions with known good answers, a measured accuracy figure, and a way to see whether a change made things better or worse.

None of these is an exotic requirement. They are the ordinary expectations the bank already applies to models, reports and controls. The demo skipped them because they are not what makes a demo exciting.

## What "trustworthy" has to mean

For a regulatory assistant, I think trust comes down to four properties:

- **Traceable.** Every answer carries its sources, down to the section and the version of the rule.
- **Current.** The assistant knows which rules are in force on a given date and says so.
- **Accountable.** There is a named owner, and a person approves anything high-impact or low-confidence before it is released.
- **Measurable.** Quality is tested against a fixed set of questions before and after every change.

Notice what is missing from that list: any particular model, vector database or framework. That is deliberate.

## Design for the contracts, not the products

The tools in this space change every few months. A bank cannot afford to rebuild its assistant each time a better model or a cheaper store appears, and it cannot let one supplier's product decide what its controls look like.

So the architecture in this series is built around layers with fixed contracts between them. Each layer can be swapped without touching the others. The specific tools AWB chose in the book are one valid set of choices. The contracts and controls are what carry over.

![Target architecture for a regulatory assistant: sources, ingestion, index, agents, model gateway, guardrails, human review and an audit log, driven by versioned configuration](/diagrams/regulatory-assistant-target-architecture.svg)

A few points about the diagram:

- **The index and the model are replaceable.** Agents talk to a search interface and a model gateway, not to a specific product. Moving from one store or model to another is a configuration change that gets tested, not a rewrite.
- **Ingestion reads more than text.** Rule documents and reporting templates are full of tables, footnotes and scanned pages. Reading text and page images together keeps a table in a template from turning into scrambled prose. I'll cover this in part 2.
- **Settings are controlled.** Retrieval depth, chunk size, confidence thresholds, prompts and approval rules are all parameters. They live in versioned configuration, change through review, are tested against the fixed question set, and are recorded with every answer.
- **The audit log is not optional.** It is written at every step, and it is what makes the other properties provable.

## How AWB answers the five questions

In the book, AWB's Regulatory Knowledge Assistant (registered as MR-2026-038, covered in Chapter 4) indexes about 47,000 pages of regulatory text. It answers each of the five questions with a specific control:

| The question | AWB's control |
|---|---|
| Where did that answer come from? | Answers must cite page and paragraph, and the assistant refuses to answer below a 0.65 confidence gate |
| Was that rule in force? | A supersession detector marks superseded documents within 24 hours of detection |
| What was asked and answered? | A retained audit trail, kept for a minimum of seven years |
| Who owns it? | A model registry reference, and a deployment gate that blocks release without an approved prompt |
| How do we know it is right? | Measured RAG quality, with a faithfulness threshold of at least 0.85 |

The book covers each of these in depth, and the [glossary](/books/appendices/glossary) and [model registry](/books/appendices/model-registry) show how they fit together across all of AWB's systems.

## What comes next

This series builds the assistant one layer at a time, using AWB as the case study:

1. Why most RAG demos fail in a regulated bank (this article)
2. [RAG that cites its sources](/articles/rag-that-cites-its-sources)
3. [From chatbot to agent, without losing control](/articles/from-chatbot-to-agent)
4. Multi-agent orchestration without chaos
5. Guardrails, human sign-off and audit trails
6. Evaluating and monitoring agents in production

If you have a pilot that is stuck in review, check it against the five questions above. The one you cannot answer is usually where to start. For the full AWB design, see the [book](/books).

> **Go deeper in the book.** This series draws on *AI for Financial Risk, Compliance and Regulatory Reporting*, which follows AWB from business case to production. Chapter 4 covers the Regulatory Knowledge Assistant in full. You can [read about the book and where to buy it](/books), [preview Chapter 3 on agents](/books/sample-chapter), or browse the [glossary](/books/appendices/glossary) and [regulatory reference](/books/appendices/regulatory-reference).

---

*This is personal, independent writing. It does not represent the views of any current or former employer, and it is educational only, not professional advice.*
