---
title: Monitoring LLM systems in production - drift, groundedness, guardrails, PII and people
date: 2026-11-28
excerpt: A model that passed validation can still fail quietly a month later. A practical guide to what to watch in a live LLM or RAG system in a bank - drift, groundedness, guardrail hits, personal data, harmful content and how people actually use it.
topic: Governance
tags:
  - Monitoring
  - Drift
  - Groundedness
  - Guardrails
  - PII
  - Model risk
---

Most teams treat launch as the finish line. For an LLM system in a regulated firm it is the point where the real work starts. The model that passed validation in March is not the system running in June, because the documents, the questions, the users and sometimes the model itself have all changed.

This article sets out what to monitor, why each signal matters, and how to turn the numbers into decisions. It uses AWB, the fictional bank from the book, as the running example. All thresholds are illustrative: set yours from your own baseline.

It builds on [Part 6 of the regulatory assistant series](/articles/evaluating-and-monitoring-agents-in-production), which covers evaluation and revalidation triggers, and on the [PRA model risk principles article](/articles/ss1-23-and-llms-what-model-risk-teams-should-do).

## Why monitoring an LLM is different

A traditional model produces a number you can compare with an outcome. An LLM system produces text, and "was it right?" often has no single answer. Three things follow:

- **There is rarely a ground-truth label in real time.** You monitor proxies: grounding in sources, user reactions, expert samples.
- **The system has several moving parts.** Model, prompt, retrieval index, documents, guardrails and tools can each change independently.
- **Inputs are free text from people.** Users will ask things you never planned for, including things you would rather they did not.

So monitoring is a set of layers, not one dashboard number.

## The monitoring map

| Layer | What you are asking | Main signals |
|---|---|---|
| Quality | Are answers right and useful? | Groundedness, citation checks, expert sample scores, user feedback |
| Drift | Has something changed? | Input drift, corpus drift, model drift, retrieval drift |
| Safety and policy | Is the system staying within its limits? | Guardrail hits, refusals, injection attempts, harmful content |
| Data protection | Is personal or confidential data leaking? | PII in inputs, outputs and logs |
| Behaviour | How are people really using it? | Query mix, overrides, overreliance, misuse |
| Operations | Is it running reliably and affordably? | Latency, errors, cost, step counts |

## 1. Quality: groundedness and citations

For a RAG assistant, the first question is whether the answer is supported by the retrieved passages. This is usually called groundedness or faithfulness.

**What to measure**

- **Citation validity.** Does every cited passage exist, and does it support the claim next to it? A deterministic check on IDs is cheap and catches fabricated references.
- **Claim support.** What share of claims in the answer are supported by the retrieved text? This is often scored with an LLM acting as a judge, or with a library such as RAGAS. Record the tool and its version, because metric definitions change.
- **Answer relevance.** Does the answer address the question asked?
- **Retrieval quality.** Did the right passages come back? Track retrieval confidence over time, and recall on a labelled question set.

**Keep in mind**

- An LLM judge is itself a model with errors and biases. Calibrate it against human scores on a sample, and re-check when the judge model changes.
- Score on live traffic by sampling, not by scoring everything, unless volume is small.
- Track the score by segment (rule area, user group, question type). A healthy average can hide one weak area.
- Have subject experts review a rotating sample every week. Automated scores tell you something moved; experts tell you whether it matters.

## 2. Drift: four kinds, four causes

"Drift" is used loosely. Separate it into types, because each has a different cure.

| Type | What changes | How to spot it | Typical response |
|---|---|---|---|
| Input drift | What users ask | Topic mix shifts, new terms appear, query length changes | Add test cases, update guardrails and scope |
| Corpus drift | The documents behind retrieval | New rules added, old ones withdrawn, formats change | Re-index, re-test, check effective dates |
| Model drift | The model's behaviour | A vendor updates the model, outputs shift on a fixed test set | Pin versions, re-run the frozen test set |
| Retrieval drift | What the search returns | Confidence falls, different passages for the same question | Re-tune chunking, embeddings, filters |

**How to detect it**

- **A frozen test set.** Run the same questions on a schedule and compare. If scores move and nothing in your system changed, suspect the model provider.
- **Embedding-space checks.** Compare the distribution of new queries with your baseline queries, for example with distance measures between embedding clusters. This is a signal to investigate, not a verdict.
- **Topic tracking.** Cluster incoming questions and watch for new clusters, especially ones with low retrieval confidence.
- **Change logging.** Record every change to model version, prompt, settings, index and documents. Most "mysterious" drift is a change nobody wrote down.

Vendors can update models behind a stable name. Where the provider allows, pin a specific model version and treat a version change as a change to your system.

## 3. Guardrails: measure them, do not just install them

A guardrail you never measure is a hope. For each control, record how often it fires, and review a sample of both what it blocked and what it let through.

**Signals to track**

- **Hit rate by guardrail.** Input scope check, retrieval gate, citation verifier, output filter, each separately.
- **False blocks.** Legitimate questions refused. A high rate drives users to workarounds.
- **Misses.** Problems found by reviewers or users that no guardrail caught. These are the most valuable data you have.
- **Refusal rate and reasons.** Too low can mean weak answers are slipping through. Too high means the tool is not useful. Log the reason for each refusal.
- **Prompt injection attempts.** Instructions hidden in user input or in retrieved documents that try to change the assistant's behaviour. Log them, and test your defences with known attack patterns.
- **Jailbreak and policy-evasion attempts.** Repeated attempts from one user or session are worth an alert.

Test guardrails on purpose. Keep a red-team set of adversarial prompts, run it on a schedule, and add every real failure to it.

## 4. Personal data (PII) and confidential information

A bank assistant sees sensitive text whether you intend it or not: customer names pasted into a question, account details in a document, internal deal information.

**Where it can leak**

- **Inputs.** Users paste personal or confidential data into prompts.
- **Retrieved documents.** The index holds material the user should not see.
- **Outputs.** The model repeats data it should not, or reveals content from other users' context.
- **Logs and traces.** The monitoring system itself stores prompts and answers. This is the most commonly forgotten place.
- **Third parties.** Data sent to an external model provider.

**What to monitor**

- Automated detection of personal data in inputs, outputs and logs, using pattern checks plus a trained detector, with the false-positive rate known.
- Access-control tests: can a user retrieve a document they have no right to see? Test with real permission differences, not only one admin account.
- Alerts when restricted categories appear in outputs.
- Retention and deletion of logs, matched to your records policy.

**Design points**

- Minimise what is logged, and mask personal data before storage where you can.
- Restrict who can read traces. Monitoring data can be more sensitive than the application.
- Under UK GDPR, an assistant that processes personal data raises lawful basis, transparency, retention and access-request questions. Involve your data protection officer early, and take advice for your own case.

## 5. Harmful and inappropriate content

Even an internal assistant for compliance staff will meet abusive, discriminatory, sexual or otherwise inappropriate content, either in what users type or in what a model produces. A bank also has conduct, employment and reputational duties that a consumer app does not.

**What to monitor**

- Categories you care about, for example hate or harassment, sexual content, violence, self-harm, and illegal activity. Use a moderation model or service for detection, and check its accuracy against your own samples.
- The direction: inputs from users, and outputs from the model, separately.
- Volume and pattern: a single flagged message is different from a user who repeatedly tries to provoke the system.
- Bias in outputs: whether answers differ in quality or tone across groups, products or customer types. This matters most where outputs touch customers or decisions about people.

**What to do when something is flagged**

- Decide in advance who reviews flagged items, how quickly, and what the escalation path is. Include HR and compliance for workplace conduct matters, and a defined route for anything involving risk to a person or to a child.
- Keep reviewer exposure to distressing material low. Show the minimum needed and offer support.
- Do not rely on one filter. Combine provider moderation, your own rules and human review of samples.

## 6. Human behaviour: how people really use it

Technical metrics miss a large part of the risk, which is people.

**Patterns to watch**

- **Overreliance.** Users who accept every answer without checking the citations. Signals: very short time on answers, near-100% approval, no one opening sources.
- **Rubber-stamping.** Approvers who sign off in seconds or never edit. A near-zero edit rate is a warning, not a success.
- **Underuse and workarounds.** Staff who stop using the tool and paste data into unapproved services instead. Low adoption in one team can point to a trust problem or to a shadow-AI problem.
- **Scope creep.** Users asking for things the tool was never approved for, such as legal advice or customer decisions.
- **Misuse.** Attempts to extract other people's data, bypass controls or use the assistant for personal tasks.
- **Feedback quality.** Thumbs up and down are noisy. Free-text comments and expert review are more useful.

**Responses**

- Show confidence and sources clearly, so checking is easy.
- Train users on what the tool can and cannot do, and repeat it.
- Randomly require users to confirm a citation for a sample of answers.
- Use the query mix as evidence for what to build or restrict next.

## 7. Operations: cost, speed and loops

- **Latency** at the 50th and 95th percentile, per stage.
- **Error and timeout rates**, including from the model provider.
- **Token use and cost** per question, per user group and per day. A sudden rise often means a loop or a prompt change.
- **Step counts** for agents. Runaway runs are both a cost and a safety problem.
- **Availability** and a clear fallback when the model is down.

## Turning signals into decisions

A dashboard nobody acts on is decoration. For each signal define three things in advance:

1. **A baseline**, from a period of observation after launch.
2. **A threshold** for review and a higher one for action. Treat any example numbers as illustrative.
3. **An owner and an action**: who looks, and what they may do, up to switching the system off.

| Signal | Example response |
|---|---|
| Groundedness falls on one rule area | Check the corpus and retrieval for that area, add test cases, tighten the gate |
| Retrieval confidence falls across the board | Check for a model, embedding or index change |
| Guardrail hits spike | Look for an attack, a new user group or a changed prompt |
| PII found in outputs or logs | Treat as an incident, contain it, review access and masking |
| Approval rate near 100% with no edits | Review whether sign-off is real, retrain approvers |
| Cost per question doubles | Look for loops, longer context or a prompt change |

## Governance: who owns what

Under the PRA's model risk principles, a model needs an owner, ongoing monitoring and independent review. For an LLM system that usually means:

- **First line:** the business owner and the engineering team watch the live signals and respond.
- **Second line:** model risk and data protection set the standards, review the monitoring itself and challenge it.
- **Third line:** internal audit tests that the controls work.
- **A monitoring policy** listing signals, thresholds, owners, review frequency and the triggers for revalidation.
- **An incident process** with severity levels, a named person who can switch the system off, user communication and a record of what changed afterwards.

If a system falls into a high-risk category under the EU AI Act, logging, human oversight and post-market monitoring become legal obligations, and the exact duties differ for providers and deployers. Whether your system is in scope depends on how it is used, so take advice.

## A starter checklist

- [ ] Frozen test set of real questions, including ones that should be refused
- [ ] Groundedness and citation checks running on a sample of live traffic
- [ ] Change log for model, prompt, index and documents, with pinned model versions where possible
- [ ] Scheduled drift checks, with an owner
- [ ] Guardrail hit, false-block and miss rates, reviewed weekly
- [ ] Red-team set run on a schedule
- [ ] PII detection on inputs, outputs and logs, with masking and retention rules
- [ ] Content moderation with a defined review and escalation path
- [ ] Behaviour metrics: overrides, edit rates, adoption by team
- [ ] Cost, latency and step-count alerts
- [ ] Written thresholds, owners and revalidation triggers
- [ ] Incident plan, tested with a drill

A one-page version for validators is in the [RAG evidence checklist](/downloads/regulatory-rag-evidence-checklist.pdf).

## Common mistakes

- **Monitoring only the model.** Most failures come from the corpus, retrieval, prompts or people.
- **Trusting one automated score.** Check it against expert samples regularly.
- **Logging everything.** The logs then become the privacy problem.
- **No baseline.** Without a starting point, "drift" is just an opinion.
- **No one allowed to switch it off.** Decide who can, before you need to.
- **Ignoring the human side.** Overreliance and workarounds are as real as model errors.

## Where to go next

Use the [regulatory calendar](/regulatory-calendar) to track dates that change what you must monitor, and the [RegTech and AI Radar](/radar) for what is live. The full build, including monitoring and validation for the AWB case study, is in [the book](/books).

*This is personal, independent writing. It does not represent the views of any current or former employer, and it is educational only, not legal, regulatory, data protection or professional advice. AWB is a fictional bank, and all thresholds are illustrative.*
