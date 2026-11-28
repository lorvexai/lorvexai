---
title: What SS1/23 means for LLMs and RAG systems
date: 2026-11-28
excerpt: The PRA's model risk principles were written before the LLM wave, but they apply to it. Here is how each of the five principles maps to a RAG assistant, in plain terms.
topic: Governance
tags:
  - Model risk
  - SS1/23
  - LLM
  - Governance
---

When a bank first deploys a RAG assistant, someone in Risk asks the same question: does this count as a model? Under the PRA's supervisory statement SS1/23, the safe answer is yes, treat it as one. This article walks through what the statement says and what it means for a retrieval-based assistant like the one in the [AWB series](/articles/why-rag-demos-fail-in-regulated-banks).

## What SS1/23 is

SS1/23 sets out the PRA's expectations for model risk management at banks as five principles. It was published on 17 May 2023 and has applied since 17 May 2024. Its stated aim is that banks treat model risk management as a risk discipline in its own right.

Two scoping points matter:

- **The definition of a model is broad.** The consultation proposed a very broad definition, and the final statement kept the five principles. Language models and retrieval pipelines sit comfortably inside a broad definition.
- **Formal scope is narrower than practical scope.** The principles initially apply to firms with approval to use internal models for regulatory capital. KPMG's reading is that they will probably become the benchmark for model governance more widely. If you are outside the formal scope, expect your auditors and supervisors to use them anyway.

The PRA also noted that it received considerable feedback on AI and machine learning, including the challenge of models that change or recalibrate frequently. That is exactly the problem you face with an assistant whose prompts, documents and model version all move.

## The five principles, applied to a RAG assistant

**1. Model identification and risk classification.** Put the assistant in your model inventory and tier it. The tier should reflect what the answer is used for. An assistant that helps an analyst find a rule reference is lower risk than one that drafts text going into a regulatory return. Record the vendor model, the embedding model, the prompts and the document corpus as components.

**2. Governance.** Name an owner, an approver and a reviewer. Decide who signs off a change to the prompt, the document set or the underlying model. A silent vendor model upgrade is a change and needs a route into the same approval process.

**3. Model development, implementation and use.** Document the design choices: chunking, retrieval settings, confidence thresholds, refusal behaviour. Part 2 of this series covers these settings. Record what the assistant is not allowed to do, and what users are told about its limits.

**4. Independent model validation.** Someone who did not build it should test it. For a RAG system that means a fixed question set with known answers, checks that every citation points to the passage that supports the claim, and tests of the refusal path: does it decline when the evidence is missing? Re-run the set after every material change.

**5. Model risk mitigants.** When a model has known weaknesses, you compensate with controls. For an assistant, mitigants include mandatory citations, a confidence gate, human review for high-impact uses and clear user guidance. Write down which weakness each control covers.

## Three things that catch teams out

- **Treating the prompt as configuration, not model logic.** In an LLM system the prompt is part of the model's behaviour. Version it and validate changes.
- **Validating once.** Documents are added and models are updated. Build a regression set that runs on every change, and monitor live answers for drift.
- **No evidence trail.** Validators and auditors ask for what the assistant saw and why it answered as it did. Log the question, the retrieved passages, the answer and the citations.

## A starting checklist

1. Add the assistant and its components to the inventory with a tier.
2. Assign owner, approver and independent validator.
3. Freeze a test set of at least 50 real questions with agreed answers.
4. Define the change triggers: prompt, corpus, model version, thresholds.
5. Log retrieval and answers so any response can be reconstructed.

## Go deeper in the book

> The AWB case study in the book builds the full model inventory, tiering and validation approach for these systems, chapter by chapter. [See the book](/books).

*This article is personal opinion and a summary of public sources. It is not legal, regulatory or professional advice. Read the primary text: [PRA SS1/23](https://www.bankofengland.co.uk/prudential-regulation/publication/2023/may/model-risk-management-principles-for-banks-ss).*
