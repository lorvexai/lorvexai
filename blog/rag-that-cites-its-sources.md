---
title: RAG that cites its sources
date: 2026-11-28
excerpt: A cited answer is not a formatting choice. It is the result of six controlled steps, and any of them can stop the answer. Part 2 of a series on building a regulatory AI assistant a bank can trust.
series: Building a regulatory AI assistant the bank can trust
seriesPart: 2
seriesTotal: 6
tags:
  - RAG
  - Retrieval
  - Citations
  - Series
---

# RAG that cites its sources

*Part 2 of "Building a regulatory AI assistant the bank can trust". [Part 1](/articles/why-rag-demos-fail-in-regulated-banks) explained why most demos fail review. This part shows how the first two questions, where did the answer come from and was the rule in force, are answered in practice.*

---

## A citation is a contract

Most RAG demos add citations at the end, as decoration. The assistant writes an answer and then lists a few documents it "used".

In a regulated bank that is not good enough. A reviewer needs to open the exact page and paragraph and see the exact words. If the claim and the source disagree, the answer should never have been released.

So I treat a citation as a contract with three terms:

1. Every claim in the answer points to a passage that was actually retrieved.
2. That passage belongs to a rule that was in force on the date of the question.
3. If the assistant cannot meet the first two terms, it says so and hands the question to a person.

That third term matters most. In AWB's Regulatory Knowledge Assistant (covered in Chapter 4 of the book), a refusal is a designed outcome, not a failure.

![Anatomy of a cited answer: filter to rules in force, hybrid retrieval, rerank to the top five, confidence gate that refuses below 0.65, generate with citations, verify every citation, then answer with page and paragraph references](/diagrams/cited-answer-pipeline.svg)

## Start before the search: prepare the documents

Good citations are decided long before anyone asks a question.

**Keep the obligation with its conditions.** Regulatory text is built from numbered obligations with qualifying conditions attached. Cut a paragraph in the wrong place and the assistant can quote a rule without the exception that changes its meaning. AWB uses document-aware chunking: a numbered obligation and its conditions stay in the same chunk, within a range of 180 to 640 tokens. Splitting every document at a fixed length is the most common way to lose this.

**Read tables and scans as they are.** Reporting templates and rule documents hold their most important content in tables, footnotes and scanned pages. Reading the page image together with the text keeps a table from turning into scrambled prose.

**Attach metadata to every passage.** Each passage should carry its document, version, status, effective date, page and paragraph. This is what makes a precise citation possible, and it is what lets the next step filter by date.

## Steps 1 to 3: find the right passages

**Filter first.** Before any search runs, remove everything that does not apply on the date asked. A superseded document should never compete with the current one for a place in the results. AWB's supersession detector marks a document as superseded within 24 hours of detecting the newer publication, so the filter has something reliable to work with.

**Search two ways and combine.** Meaning-based search finds passages that discuss the same idea in different words. Keyword search finds exact terms, such as a rule number, a defined term or an acronym, which meaning-based search often misses. AWB runs both, a vector store for meaning and BM25 for keywords, and fuses the two rankings with Reciprocal Rank Fusion. Near-duplicate passages, for example the same text appearing in a consultation paper and the final rules, are collapsed so they do not crowd out other sources.

**Rerank and keep only five.** A more precise model re-scores the candidates, and only the top five reach the language model. Fewer, better passages produce answers that are easier to check than a long pile of loosely related ones.

## Steps 4 to 6: decide, write, verify

**The confidence gate.** If the best evidence is weak, the right answer is no answer. AWB's assistant refuses when its confidence falls below 0.65, and the question goes to a person with the reason recorded.

**Generate with citations.** The model is told to attach a page and paragraph reference to each claim, and to use only the passages it was given. The book calls this grounding, one of AWB's three core hallucination mitigations.

**Verify before release.** A separate check confirms that every citation matches a passage that was actually retrieved. A citation that points nowhere blocks the answer. This catches the failure that worries reviewers most: a confident reference to something that does not exist.

## The settings that change the answer

Every choice above is a setting, and each one changes what a reader sees. That is why part 1 argued for versioned configuration. Here are the ones that matter most for citations:

| Setting | What it controls | Why it needs to be controlled |
|---|---|---|
| Chunk size and boundaries | Where passages start and end | Too short loses the conditions. Too long dilutes the match. AWB keeps obligations and conditions together, at 180 to 640 tokens |
| Metadata filters | Which documents can be searched | Wrong dates or statuses put superseded rules back in the results |
| De-duplication | Whether repeated text counts once | Duplicates push out other sources and inflate confidence |
| Candidates retrieved and kept | How many passages are fetched, and how many survive reranking | Too many adds noise. AWB keeps the top five |
| Confidence threshold | When the assistant refuses | Too low releases weak answers. Too high refuses too often. AWB uses 0.65 |
| Model randomness (temperature) | How much the wording varies between runs | The same question should give the same answer, so keep it low and fixed |

Change any of these and the answer can change. So they live in reviewed configuration, they are tested against a fixed set of questions, and the values in force are recorded with every answer.

## Measure it, do not assume it

"It looked right" is not evidence. The book measures retrieval and answer quality with RAGAS, which scores four things: faithfulness, answer relevancy, context precision and context recall. AWB treats faithfulness as its primary guard against hallucination and sets the threshold at 0.85 or higher.

The method matters more than the numbers. Keep a fixed set of real questions with known good answers. Run it before and after every change to a setting, a model or a document set. If a change makes faithfulness drop, it does not ship.

## A cited answer, side by side

This example is illustrative and uses invented rule references, not real rule text.

**Without citations:** "Yes, the new treatment applies to these exposures from the effective date."

**With citations:** "Yes, the new treatment applies to these exposures from the effective date (Rule X, version 2, effective 1 January, page 14, paragraph 3). The exception in paragraph 4 does not apply to this exposure type (page 14, paragraph 4)."

The second answer is longer, but a reviewer can check it in a minute. The first one would send them searching for it themselves.

## What comes next

Part 3 moves from a single question and answer to an agent: where one retrieval call stops being enough, and how an assistant starts using tools safely.

> **Go deeper in the book.** Chapter 4 of *AI for Financial Risk, Compliance and Regulatory Reporting* covers the Regulatory Knowledge Assistant in full. You can [read about the book and where to buy it](/books), [preview Chapter 3 on agents](/books/sample-chapter), or browse the [glossary](/books/appendices/glossary) and [model registry](/books/appendices/model-registry).

---

*This is personal, independent writing. It does not represent the views of any current or former employer, and it is educational only, not professional advice.*
