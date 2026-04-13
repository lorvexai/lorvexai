"use client";

import { useState } from "react";
import { X, Check, Minus, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

/* ─── Types ─────────────────────────────────────────────────────── */
type Score  = "Excellent" | "Good" | "Fair" | "Limited";
type Tab    = "overview" | "features" | "info";
type Status = "Active" | "Preview" | "Legacy" | "Deprecated" | "Open Source";

interface ModelVariant {
  name: string;
  contextWindow: string;
  pricingInput: string;
  pricingOutput: string;
  releaseDate: string;
  status: Status;
  parameters?: string;
  note?: string;
}

interface Model {
  id: string;
  provider: string;
  family: string;
  tagline: string;
  badge: string;
  cardStyle: string;
  iconBg: string;
  iconText: string;
  accentText: string;
  initial: string;

  /* comparison row */
  contextWindow: string;
  onPremise: boolean | "Partial";
  euResidency: string;
  ragScore: Score;
  reasoningScore: Score;
  speed: Score;
  costTier: string;
  bestFor: string;

  /* vendor links */
  docsUrl: string;
  vendorUrl: string;

  /* modal — overview */
  overview: string;
  strengths: string[];
  limitations: string[];
  regulatedFit: string;

  /* modal — features */
  capabilities: string[];
  specialFeatures: string[];
  toolUse: boolean;
  multimodal: boolean;
  streaming: boolean;
  functionCalling: boolean;

  /* modal — model variants */
  variants: ModelVariant[];
  certifications: string[];
  deploymentOptions: string[];
}

/* ─── Data ───────────────────────────────────────────────────────── */
const models: Model[] = [
  {
    id: "openai",
    provider: "OpenAI",
    family: "GPT Series",
    tagline: "The industry benchmark for enterprise AI",
    badge: "Industry Standard",
    cardStyle: "border-emerald-400/25 bg-emerald-400/5",
    iconBg: "bg-emerald-400/15 border-emerald-400/30",
    iconText: "text-emerald-300",
    accentText: "text-emerald-300",
    initial: "O",

    contextWindow: "Up to 200K",
    onPremise: false,
    euResidency: "Via Azure OpenAI",
    ragScore: "Excellent",
    reasoningScore: "Excellent",
    speed: "Good",
    costTier: "Low → Very High",
    bestFor: "Complex compliance analysis, structured output, general reasoning",

    docsUrl: "https://platform.openai.com/docs/models",
    vendorUrl: "https://openai.com",

    overview: "OpenAI's GPT series is the industry benchmark — the models most enterprise AI teams evaluate first. The family spans from fast, cheap task models (GPT-4o mini) through balanced frontier models (GPT-4o) to specialised reasoning models (o1, o3) built for multi-step problem solving. GPT-4.5 was released in February 2025 as a research preview, representing OpenAI's largest dense model to date. For regulated industries, Azure OpenAI Service provides EU data residency, private networking, and enterprise compliance certifications.",
    strengths: [
      "Strongest general instruction-following and structured output (JSON mode, Structured Outputs API)",
      "Widest third-party integration ecosystem of any LLM provider",
      "o1 / o3 reasoning models purpose-built for multi-step analysis",
      "Azure OpenAI provides enterprise SLAs, VNET isolation, and data residency",
      "Batch API offers 50% cost reduction for async workloads at scale"
    ],
    limitations: [
      "No on-premise deployment — data must traverse OpenAI or Azure infrastructure",
      "GPT-4.5 and o3 are very expensive for high-volume production use",
      "Training cutoff means real-time regulatory changes require RAG augmentation",
      "Vendor lock-in risk without abstraction layer"
    ],
    regulatedFit: "Strong fit for finance and banking via Azure OpenAI with FCA/PRA-aligned data governance. Not suitable for NHS patient-identifiable data without on-prem or NHS-approved cloud infrastructure.",

    capabilities: [
      "Text generation, summarisation, classification, extraction",
      "Structured data output (JSON schema enforcement)",
      "Multi-step chain-of-thought reasoning",
      "Code generation, review, and debugging",
      "Image and document understanding (multimodal)",
      "Long document processing (128K–200K context)"
    ],
    specialFeatures: [
      "Structured Outputs API — guaranteed JSON schema compliance",
      "Parallel tool calling — multiple functions in one turn",
      "Reasoning models (o1/o3) — extended internal chain-of-thought",
      "Batch API — 50% cost savings for asynchronous workloads",
      "Assistants API — stateful multi-turn with file retrieval"
    ],
    toolUse: true,
    multimodal: true,
    streaming: true,
    functionCalling: true,

    variants: [
      {
        name: "GPT-4o",
        contextWindow: "128K",
        pricingInput: "$2.50 / 1M",
        pricingOutput: "$10.00 / 1M",
        releaseDate: "May 2024",
        status: "Active",
        note: "Primary production model — best balance of quality and cost"
      },
      {
        name: "GPT-4o mini",
        contextWindow: "128K",
        pricingInput: "$0.15 / 1M",
        pricingOutput: "$0.60 / 1M",
        releaseDate: "July 2024",
        status: "Active",
        note: "Cost-optimised for high-volume routing and simple tasks"
      },
      {
        name: "GPT-4.5",
        contextWindow: "128K",
        pricingInput: "$75.00 / 1M",
        pricingOutput: "$150.00 / 1M",
        releaseDate: "Feb 2025",
        status: "Preview",
        note: "Largest dense model — research preview, very high cost"
      },
      {
        name: "o1",
        contextWindow: "200K",
        pricingInput: "$15.00 / 1M",
        pricingOutput: "$60.00 / 1M",
        releaseDate: "Dec 2024",
        status: "Active",
        note: "Reasoning model — excels at complex multi-step compliance analysis"
      },
      {
        name: "o1-mini",
        contextWindow: "128K",
        pricingInput: "$3.00 / 1M",
        pricingOutput: "$12.00 / 1M",
        releaseDate: "Sept 2024",
        status: "Active",
        note: "Fast reasoning at lower cost — good for structured analysis tasks"
      },
      {
        name: "o3",
        contextWindow: "200K",
        pricingInput: "$10.00 / 1M",
        pricingOutput: "$40.00 / 1M",
        releaseDate: "Early 2025",
        status: "Active",
        note: "Next-generation reasoning model — strongest complex reasoning available"
      },
      {
        name: "o3-mini",
        contextWindow: "200K",
        pricingInput: "$1.10 / 1M",
        pricingOutput: "$4.40 / 1M",
        releaseDate: "Early 2025",
        status: "Active",
        note: "Cost-efficient reasoning — recommended for production reasoning workloads"
      },
      {
        name: "GPT-4 Turbo",
        contextWindow: "128K",
        pricingInput: "$10.00 / 1M",
        pricingOutput: "$30.00 / 1M",
        releaseDate: "Nov 2023",
        status: "Legacy",
        note: "Being replaced by GPT-4o — migrate before deprecation"
      }
    ],

    deploymentOptions: ["OpenAI API", "Azure OpenAI Service", "AWS Marketplace"],
    certifications: ["SOC 2 Type II", "ISO 27001", "GDPR (via Azure)", "HIPAA (via Azure)", "UK Cyber Essentials"]
  },

  {
    id: "claude",
    provider: "Anthropic",
    family: "Claude Series",
    tagline: "Safety-first reasoning for high-stakes decisions",
    badge: "Best for Regulated",
    cardStyle: "border-primary/25 bg-primary/5",
    iconBg: "bg-primary/15 border-primary/30",
    iconText: "text-primary",
    accentText: "text-primary",
    initial: "A",

    contextWindow: "200K",
    onPremise: false,
    euResidency: "Via AWS / GCP",
    ragScore: "Excellent",
    reasoningScore: "Excellent",
    speed: "Good",
    costTier: "Low → High",
    bestFor: "Long regulatory document analysis, NHS clinical summarisation, safety-critical outputs",

    docsUrl: "https://docs.anthropic.com/en/docs/about-claude/models/overview",
    vendorUrl: "https://anthropic.com",

    overview: "Claude is Anthropic's model family, trained with Constitutional AI — a methodology that embeds safety and harm avoidance directly into training rather than adding it as a post-processing layer. The Claude 4 series (current as of 2025) includes Opus 4 for maximum reasoning quality, Sonnet 4 as the primary production model, and Haiku 4 for high-speed, cost-efficient workloads. With a 200K token context window — the largest of any cloud-hosted frontier model — Claude is especially well-suited for long regulatory documents and clinical records.",
    strengths: [
      "Largest context window (200K) — processes entire regulatory rulebooks in one call",
      "Constitutional AI training reduces harmful, non-compliant, or hallucinated outputs",
      "Extended thinking mode enables deeper multi-step reasoning traces",
      "Haiku tier offers fastest response times for high-volume routing",
      "Strong citation and attribution behaviour — explicitly names source passages"
    ],
    limitations: [
      "No on-premise deployment option",
      "EU data residency requires careful AWS/GCP region selection",
      "Smaller third-party integration ecosystem compared to OpenAI",
      "Conservative output style on sensitive topics may require prompt calibration"
    ],
    regulatedFit: "Highest fit for NHS and healthcare due to safety-first Constitutional AI training. Strong fit for FCA/PRA workloads requiring long-document reasoning. Available on AWS Bedrock (UK/EU regions) with NHS and financial services compliance.",

    capabilities: [
      "Long-document reading and analysis (200K context)",
      "Regulatory text extraction and obligation mapping",
      "Clinical document summarisation and triage support",
      "Complex multi-step reasoning with explicit chain-of-thought",
      "Code generation with security-aware output",
      "Multi-turn conversation with persistent session context"
    ],
    specialFeatures: [
      "Constitutional AI — safety guardrails built into training weights",
      "Extended thinking mode — visible reasoning trace for audit",
      "Vision — analyse regulatory PDFs, charts, scanned forms",
      "Model tier system: Opus (quality) → Sonnet (balanced) → Haiku (speed)",
      "Tool use with parallel execution across multiple tools"
    ],
    toolUse: true,
    multimodal: true,
    streaming: true,
    functionCalling: true,

    variants: [
      {
        name: "Claude Opus 4.6",
        contextWindow: "200K",
        pricingInput: "~$15.00 / 1M",
        pricingOutput: "~$75.00 / 1M",
        releaseDate: "2025",
        status: "Active",
        note: "Maximum reasoning quality — use for most complex compliance and clinical tasks"
      },
      {
        name: "Claude Sonnet 4.6",
        contextWindow: "200K",
        pricingInput: "~$3.00 / 1M",
        pricingOutput: "~$15.00 / 1M",
        releaseDate: "2025",
        status: "Active",
        note: "Primary production model — best balance of quality, speed, and cost"
      },
      {
        name: "Claude Haiku 4.5",
        contextWindow: "200K",
        pricingInput: "~$0.80 / 1M",
        pricingOutput: "~$4.00 / 1M",
        releaseDate: "2025",
        status: "Active",
        note: "Fastest and cheapest — ideal for high-volume routing and triage"
      },
      {
        name: "Claude 3.5 Sonnet",
        contextWindow: "200K",
        pricingInput: "$3.00 / 1M",
        pricingOutput: "$15.00 / 1M",
        releaseDate: "Oct 2024",
        status: "Legacy",
        note: "Previous generation — still strong, being superseded by Sonnet 4.6"
      },
      {
        name: "Claude 3.5 Haiku",
        contextWindow: "200K",
        pricingInput: "$0.80 / 1M",
        pricingOutput: "$4.00 / 1M",
        releaseDate: "Oct 2024",
        status: "Legacy",
        note: "Previous fast tier — superseded by Haiku 4.5"
      },
      {
        name: "Claude 3 Opus",
        contextWindow: "200K",
        pricingInput: "$15.00 / 1M",
        pricingOutput: "$75.00 / 1M",
        releaseDate: "Mar 2024",
        status: "Deprecated",
        note: "Scheduled for deprecation — migrate to Opus 4.6"
      }
    ],

    deploymentOptions: ["Anthropic API", "Amazon Bedrock", "Google Cloud Vertex AI"],
    certifications: ["SOC 2 Type II", "GDPR (via AWS/GCP regions)", "HIPAA (via AWS Bedrock)"]
  },

  {
    id: "gemini",
    provider: "Google DeepMind",
    family: "Gemini Series",
    tagline: "Unmatched context for document-heavy workloads",
    badge: "Largest Context",
    cardStyle: "border-blue-400/25 bg-blue-400/5",
    iconBg: "bg-blue-400/15 border-blue-400/30",
    iconText: "text-blue-300",
    accentText: "text-blue-300",
    initial: "G",

    contextWindow: "1M",
    onPremise: false,
    euResidency: "Via Google Cloud",
    ragScore: "Excellent",
    reasoningScore: "Good",
    speed: "Excellent",
    costTier: "Low → Medium",
    bestFor: "Entire regulatory library ingestion, massive document corpus, cost-optimised RAG",

    docsUrl: "https://ai.google.dev/gemini-api/docs/models/gemini",
    vendorUrl: "https://deepmind.google/technologies/gemini",

    overview: "Google DeepMind's Gemini family offers the largest publicly available context window at 1 million tokens — the equivalent of roughly 10 thick regulatory rulebooks in a single API call. The 2.0 series brings improved reasoning and speed with Gemini 2.0 Flash becoming the default cost-efficient choice for most workloads. Available on Google Cloud Vertex AI with enterprise compliance certifications and EU data residency options.",
    strengths: [
      "1M token context window — entire regulatory corpus in a single call",
      "Gemini Flash is one of the fastest and most cost-efficient frontier models",
      "Native multimodal: text, images, audio, video, code",
      "Google Search grounding — verifiable answers linked to live sources",
      "Vertex AI provides enterprise compliance, audit logging, and EU regions"
    ],
    limitations: [
      "Reasoning depth slightly behind Claude Opus and o3 on complex multi-step tasks",
      "1M context at full utilisation is expensive — cost management needed",
      "No on-premise deployment",
      "Google ecosystem dependency for full enterprise feature set"
    ],
    regulatedFit: "Good fit for finance workloads requiring large document corpus analysis. Vertex AI provides GDPR-aligned data governance. For NHS, EU regions available but NHS IG Toolkit compliance verification required before patient data processing.",

    capabilities: [
      "1M token context — entire corpora in one call",
      "Multimodal reasoning (text, image, audio, video, code)",
      "Document understanding including PDFs, slides, spreadsheets",
      "Code generation and execution (via Code Execution tool)",
      "Long-context summarisation and extraction",
      "Real-time grounding via Google Search API"
    ],
    specialFeatures: [
      "1M token context window — industry's largest",
      "Gemini 2.0 Flash — ultra-fast, lowest cost per token among frontier models",
      "Code Execution — runs Python in-context for data analysis",
      "Google Search grounding — live, citable answers",
      "Native video understanding for compliance and training footage"
    ],
    toolUse: true,
    multimodal: true,
    streaming: true,
    functionCalling: true,

    variants: [
      {
        name: "Gemini 2.5 Pro",
        contextWindow: "1M",
        pricingInput: "$1.25 / 1M",
        pricingOutput: "$10.00 / 1M",
        releaseDate: "2025",
        status: "Active",
        note: "Latest flagship — strongest reasoning in Gemini family, recommended for complex tasks"
      },
      {
        name: "Gemini 2.0 Flash",
        contextWindow: "1M",
        pricingInput: "$0.10 / 1M",
        pricingOutput: "$0.40 / 1M",
        releaseDate: "Feb 2025",
        status: "Active",
        note: "Default for high-volume workloads — exceptional speed and cost efficiency"
      },
      {
        name: "Gemini 2.0 Flash-Lite",
        contextWindow: "1M",
        pricingInput: "$0.075 / 1M",
        pricingOutput: "$0.30 / 1M",
        releaseDate: "Feb 2025",
        status: "Active",
        note: "Cheapest Gemini model — use for simple classification and extraction"
      },
      {
        name: "Gemini 1.5 Pro",
        contextWindow: "1M",
        pricingInput: "$1.25 / 1M (≤128K)",
        pricingOutput: "$5.00 / 1M (≤128K)",
        releaseDate: "Feb 2024",
        status: "Legacy",
        note: "First 1M context model — still capable, being superseded by 2.5 Pro"
      },
      {
        name: "Gemini 1.5 Flash",
        contextWindow: "1M",
        pricingInput: "$0.075 / 1M",
        pricingOutput: "$0.30 / 1M",
        releaseDate: "May 2024",
        status: "Legacy",
        note: "Previous fast tier — superseded by 2.0 Flash"
      }
    ],

    deploymentOptions: ["Google AI Studio", "Google Cloud Vertex AI"],
    certifications: ["SOC 2 Type II", "ISO 27001", "ISO 27017", "GDPR", "HIPAA (Vertex AI)"]
  },

  {
    id: "mistral",
    provider: "Mistral AI",
    family: "Mistral Series",
    tagline: "European sovereignty — GDPR by design",
    badge: "EU Native",
    cardStyle: "border-orange-400/25 bg-orange-400/5",
    iconBg: "bg-orange-400/15 border-orange-400/30",
    iconText: "text-orange-300",
    accentText: "text-orange-300",
    initial: "M",

    contextWindow: "128K",
    onPremise: "Partial",
    euResidency: "Native (France)",
    ragScore: "Good",
    reasoningScore: "Good",
    speed: "Good",
    costTier: "Free → Medium",
    bestFor: "GDPR-strict workloads, EU data sovereignty, multilingual European regulatory text",

    docsUrl: "https://docs.mistral.ai/getting-started/models/models_overview/",
    vendorUrl: "https://mistral.ai",

    overview: "Mistral AI is a French AI company offering a unique combination of frontier model performance, EU-native data residency, and extensive open-source availability. Unlike US-headquartered providers, Mistral processes data within the EU by default. Mistral Large 2 is the flagship API model, while a range of smaller open-source models (Mistral 7B, Mixtral 8x7B, Mixtral 8x22B, Mistral Nemo) can be fully self-hosted. For European regulated industries with strict data sovereignty requirements, Mistral offers the strongest compliance story.",
    strengths: [
      "EU-native: French company, data processed in EU by default",
      "Open-source smaller models (7B, Mixtral, Nemo) fully self-hostable",
      "Best multilingual performance for European regulatory text",
      "Codestral — specialist model for code generation workflows",
      "Pixtral — multimodal model for document and image analysis"
    ],
    limitations: [
      "Mistral Large is API-only (not open source)",
      "Reasoning ceiling below Claude Opus and o3 for very complex tasks",
      "Smaller enterprise integration ecosystem",
      "Context window (128K) smaller than Claude or Gemini"
    ],
    regulatedFit: "Best fit for EU-headquartered regulated firms and UK firms demonstrating EU data residency for GDPR compliance. Open-source variants support on-prem deployments. Strongest choice for multilingual European compliance documentation.",

    capabilities: [
      "Text generation, summarisation, classification",
      "Multilingual — strongest European language performance",
      "Code generation (Codestral specialised model)",
      "Function calling and tool use",
      "Document and image analysis (Pixtral)",
      "Self-hostable via open-source variants"
    ],
    specialFeatures: [
      "EU data residency by default — data never leaves EU",
      "Open-source models: 7B, Mixtral 8x7B, Mixtral 8x22B, Nemo",
      "Codestral — dedicated code generation model",
      "Pixtral — multimodal vision model (open source)",
      "Mistral Embeddings — optimised for European-language RAG"
    ],
    toolUse: true,
    multimodal: true,
    streaming: true,
    functionCalling: true,

    variants: [
      {
        name: "Mistral Large 2",
        contextWindow: "128K",
        pricingInput: "~€2.00 / 1M",
        pricingOutput: "~€6.00 / 1M",
        releaseDate: "July 2024",
        status: "Active",
        note: "Flagship API model — top reasoning quality in the Mistral family"
      },
      {
        name: "Mistral Small 3",
        contextWindow: "32K",
        pricingInput: "~€0.10 / 1M",
        pricingOutput: "~€0.30 / 1M",
        releaseDate: "2025",
        status: "Active",
        note: "Cost-efficient — good for classification and extraction at scale"
      },
      {
        name: "Codestral",
        contextWindow: "32K",
        pricingInput: "~€0.20 / 1M",
        pricingOutput: "~€0.60 / 1M",
        releaseDate: "May 2024",
        status: "Active",
        note: "Specialist code model — fill-in-the-middle and generation"
      },
      {
        name: "Pixtral 12B",
        contextWindow: "128K",
        pricingInput: "~€0.15 / 1M",
        pricingOutput: "~€0.15 / 1M",
        releaseDate: "Sept 2024",
        status: "Open Source",
        parameters: "12B",
        note: "Multimodal — document and image understanding, self-hostable"
      },
      {
        name: "Mistral Nemo 12B",
        contextWindow: "128K",
        pricingInput: "~€0.15 / 1M",
        pricingOutput: "~€0.15 / 1M",
        releaseDate: "July 2024",
        status: "Open Source",
        parameters: "12B",
        note: "Open source — strong multilingual, fully self-hostable"
      },
      {
        name: "Mixtral 8x22B",
        contextWindow: "65K",
        pricingInput: "~€2.00 / 1M",
        pricingOutput: "~€6.00 / 1M",
        releaseDate: "Apr 2024",
        status: "Open Source",
        parameters: "141B (MoE)",
        note: "Mixture-of-Experts — open source, strong reasoning, self-hostable"
      },
      {
        name: "Mixtral 8x7B",
        contextWindow: "32K",
        pricingInput: "~€0.70 / 1M",
        pricingOutput: "~€0.70 / 1M",
        releaseDate: "Dec 2023",
        status: "Open Source",
        parameters: "46.7B (MoE)",
        note: "Widely deployed open-source model — proven in production"
      }
    ],

    deploymentOptions: ["Mistral La Plateforme (EU)", "Azure AI Foundry", "AWS Bedrock", "Self-hosted (open-source models)"],
    certifications: ["ISO 27001 (in progress)", "GDPR compliant by design", "French ANSSI cloud provider"]
  },

  {
    id: "llama",
    provider: "Meta",
    family: "Llama Series",
    tagline: "Full data sovereignty — runs entirely on your infrastructure",
    badge: "On-Premise Ready",
    cardStyle: "border-violet-400/25 bg-violet-400/5",
    iconBg: "bg-violet-400/15 border-violet-400/30",
    iconText: "text-violet-300",
    accentText: "text-violet-300",
    initial: "L",

    contextWindow: "128K",
    onPremise: true,
    euResidency: "Yes (self-hosted)",
    ragScore: "Good",
    reasoningScore: "Good",
    speed: "Excellent",
    costTier: "Free / Self-hosted",
    bestFor: "NHS on-premise patient data, banks requiring zero third-party data exposure, cost at scale",

    docsUrl: "https://www.llama.com/docs/model-cards-and-prompt-formats/",
    vendorUrl: "https://llama.meta.com",

    overview: "Meta's Llama series is the most capable open-source LLM family available, with models released under a permissive community licence for commercial deployment. Llama 3.1 and 3.3 match frontier API models on many benchmarks while running entirely on your own infrastructure. For NHS deployments — where patient identifiable data must never leave NHS-controlled systems — Llama on NHS hardware is the only viable frontier-model option. The Llama 3.2 vision models also add multimodal capability to on-prem deployments.",
    strengths: [
      "Fully open weights — runs on your infrastructure, zero data exposure to third parties",
      "No per-token API cost — only your infrastructure cost at scale",
      "NHS patient data stays on NHS hardware — only compliant option for PII",
      "Llama 3.3 70B matches frontier API models on most tasks",
      "Fine-tunable on clinical or regulatory domain data"
    ],
    limitations: [
      "Requires GPU infrastructure (NVIDIA A100/H100 for 70B+)",
      "Your team owns infrastructure, uptime, and maintenance",
      "405B variant requires significant GPU cluster investment",
      "No managed SLAs or vendor support out of the box"
    ],
    regulatedFit: "Essential for NHS patient-identifiable data workloads — only frontier option that keeps data on NHS infrastructure. Ideal for banks and insurers with strict third-party processor policies under GDPR Article 28. LorvexAI supports Llama 3.3 70B in hybrid and full on-prem configurations.",

    capabilities: [
      "Text generation, summarisation, classification",
      "Instruction following and multi-turn dialogue",
      "Code generation and analysis",
      "RAG with any vector store (no API dependency)",
      "Function calling (Llama 3.1+)",
      "Fine-tuning on domain-specific clinical or regulatory data"
    ],
    specialFeatures: [
      "Fully open weights — inspect, audit, and modify the model",
      "Multiple sizes: 1B / 3B / 8B / 70B / 405B for different hardware",
      "Vision variants: Llama 3.2 11B and 90B for multimodal on-prem",
      "No data sharing with Meta or any third party",
      "Runs on vLLM, Ollama, llama.cpp, TGI — wide deployment options"
    ],
    toolUse: true,
    multimodal: true,
    streaming: true,
    functionCalling: true,

    variants: [
      {
        name: "Llama 3.3 70B",
        contextWindow: "128K",
        pricingInput: "Free (self-hosted)",
        pricingOutput: "Free (self-hosted)",
        releaseDate: "Dec 2024",
        status: "Active",
        parameters: "70B",
        note: "Best current Llama — matches GPT-4o on most tasks, recommended for production"
      },
      {
        name: "Llama 3.1 405B",
        contextWindow: "128K",
        pricingInput: "Free (self-hosted)",
        pricingOutput: "Free (self-hosted)",
        releaseDate: "July 2024",
        status: "Active",
        parameters: "405B",
        note: "Largest open-source model — frontier quality, requires significant GPU cluster"
      },
      {
        name: "Llama 3.1 70B",
        contextWindow: "128K",
        pricingInput: "Free / ~$0.27 via cloud",
        pricingOutput: "Free / ~$0.85 via cloud",
        releaseDate: "July 2024",
        status: "Active",
        parameters: "70B",
        note: "Proven production model — widely deployed, strong community support"
      },
      {
        name: "Llama 3.2 Vision 90B",
        contextWindow: "128K",
        pricingInput: "Free (self-hosted)",
        pricingOutput: "Free (self-hosted)",
        releaseDate: "Sept 2024",
        status: "Active",
        parameters: "90B",
        note: "Multimodal on-prem — vision + text for document analysis without cloud dependency"
      },
      {
        name: "Llama 3.2 Vision 11B",
        contextWindow: "128K",
        pricingInput: "Free (self-hosted)",
        pricingOutput: "Free (self-hosted)",
        releaseDate: "Sept 2024",
        status: "Active",
        parameters: "11B",
        note: "Lightweight vision model — edge/hybrid deployments with image understanding"
      },
      {
        name: "Llama 3.1 8B",
        contextWindow: "128K",
        pricingInput: "Free (self-hosted)",
        pricingOutput: "Free (self-hosted)",
        releaseDate: "July 2024",
        status: "Active",
        parameters: "8B",
        note: "Lightweight model — runs on single GPU, good for routing and simple tasks"
      },
      {
        name: "Llama 3.2 3B / 1B",
        contextWindow: "128K",
        pricingInput: "Free (self-hosted)",
        pricingOutput: "Free (self-hosted)",
        releaseDate: "Sept 2024",
        status: "Active",
        parameters: "3B / 1B",
        note: "Edge models — runs on CPU/mobile hardware, classification and triage routing"
      }
    ],

    deploymentOptions: ["Self-hosted (on-prem)", "AWS SageMaker / Bedrock", "Azure AI", "Google Cloud Vertex AI", "Ollama", "vLLM", "llama.cpp", "TGI (HuggingFace)"],
    certifications: ["N/A — open source (certifications depend on deployment infrastructure)", "NHS IG Toolkit compliance achievable on NHS hardware"]
  }
];

/* ─── Helpers ─────────────────────────────────────────────────────── */
const SCORE_COLORS: Record<Score, string> = {
  Excellent: "bg-emerald-400",
  Good:      "bg-blue-400",
  Fair:      "bg-yellow-400",
  Limited:   "bg-secondary/25"
};
const SCORE_FILLED: Record<Score, number> = {
  Excellent: 4, Good: 3, Fair: 2, Limited: 1
};
const STATUS_STYLE: Record<Status, string> = {
  "Active":      "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  "Preview":     "bg-blue-400/15 text-blue-300 border-blue-400/30",
  "Open Source": "bg-violet-400/15 text-violet-300 border-violet-400/30",
  "Legacy":      "bg-yellow-400/15 text-yellow-300 border-yellow-400/30",
  "Deprecated":  "bg-red-400/15 text-red-300 border-red-400/30"
};

function ScoreDots({ level }: { level: Score }) {
  const fill  = SCORE_FILLED[level];
  const color = SCORE_COLORS[level];
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className={`h-2 w-2 rounded-full ${i <= fill ? color : "bg-secondary/15"}`} />
      ))}
    </div>
  );
}

function BoolBadge({ value }: { value: boolean | "Partial" }) {
  if (value === true)
    return <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-300"><Check size={12} /> Yes</span>;
  if (value === "Partial")
    return <span className="inline-flex items-center gap-1 text-xs font-medium text-yellow-300"><Check size={12} /> Partial</span>;
  return <span className="inline-flex items-center gap-1 text-xs font-medium text-secondary/40"><Minus size={12} /> No</span>;
}

/* ─── Modal ───────────────────────────────────────────────────────── */
function ModelModal({ model, onClose }: { model: Model; onClose: () => void }) {
  const [tab, setTab] = useState<Tab>("overview");

  const tabs: { key: Tab; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "features", label: "Features & Capabilities" },
    { key: "info",     label: "Model Information" }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={`relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border bg-[#0a1628] shadow-2xl ${model.cardStyle}`}>

        {/* ── Modal header ── */}
        <div className="sticky top-0 z-10 rounded-t-3xl border-b border-secondary/10 bg-[#0a1628]/95 px-6 pt-6 pb-0 backdrop-blur">
          <button type="button" onClick={onClose} aria-label="Close"
            className="absolute right-5 top-5 rounded-full border border-secondary/20 bg-background/60 p-1.5 text-secondary/60 transition hover:text-white">
            <X size={15} />
          </button>

          <div className="flex items-start gap-3 pr-10">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-lg font-bold ${model.iconBg} ${model.iconText}`}>
              {model.initial}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${model.accentText}`}>{model.provider}</p>
                <span className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] ${model.cardStyle} ${model.accentText}`}>
                  {model.badge}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-white">{model.family}</h2>
              <p className="text-xs text-secondary/55 mt-0.5">{model.variants.length} models in this family</p>
            </div>
          </div>

          {/* Vendor links */}
          <div className="mt-3 flex flex-wrap gap-3">
            <a href={model.docsUrl} target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs font-medium ${model.accentText} hover:opacity-80 transition`}>
              <ExternalLink size={11} /> Official model docs
            </a>
            <a href={model.vendorUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-secondary/50 hover:text-secondary/80 transition">
              <ExternalLink size={11} /> {model.provider} website
            </a>
          </div>

          {/* Tabs */}
          <div className="mt-4 flex gap-1 border-t border-secondary/10 pt-3 pb-3">
            {tabs.map((t) => (
              <button key={t.key} type="button" onClick={() => setTab(t.key)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  tab === t.key ? "bg-primary/25 text-white" : "text-secondary/55 hover:text-secondary/90"
                }`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Tab content ── */}
        <div className="px-6 py-5">

          {/* Overview */}
          {tab === "overview" && (
            <div className="space-y-5">
              <p className="text-sm leading-relaxed text-secondary/75">{model.overview}</p>
              <div>
                <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary/40">Strengths</p>
                <ul className="space-y-2">
                  {model.strengths.map((s) => (
                    <li key={s} className="flex gap-2 text-sm text-secondary/75">
                      <Check size={13} className="mt-0.5 shrink-0 text-emerald-400" />{s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary/40">Limitations</p>
                <ul className="space-y-2">
                  {model.limitations.map((l) => (
                    <li key={l} className="flex gap-2 text-sm text-secondary/65">
                      <Minus size={13} className="mt-0.5 shrink-0 text-yellow-400" />{l}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-2xl border p-4 ${model.cardStyle}`}>
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary/40">Regulated Industry Fit</p>
                <p className="text-sm leading-relaxed text-secondary/80">{model.regulatedFit}</p>
              </div>
            </div>
          )}

          {/* Features */}
          {tab === "features" && (
            <div className="space-y-5">
              <div>
                <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary/40">Core Capabilities</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {model.capabilities.map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-secondary/75">
                      <Check size={13} className={`mt-0.5 shrink-0 ${model.iconText}`} />{c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary/40">Special Features</p>
                <ul className="space-y-2">
                  {model.specialFeatures.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-secondary/75">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${SCORE_COLORS.Excellent}`} />{f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: "Tool Use",   value: model.toolUse },
                  { label: "Multimodal", value: model.multimodal },
                  { label: "Streaming",  value: model.streaming },
                  { label: "Fn Calling", value: model.functionCalling }
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl border border-secondary/15 bg-background/30 px-3 py-2.5 text-center">
                    <p className="text-[10px] text-secondary/45">{label}</p>
                    <p className={`mt-1 text-xs font-semibold ${value ? "text-emerald-300" : "text-secondary/40"}`}>
                      {value ? "Yes" : "No"}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary/40">Deployment Options</p>
                <div className="flex flex-wrap gap-2">
                  {model.deploymentOptions.map((d) => (
                    <span key={d} className="rounded-full border border-secondary/20 bg-background/30 px-2.5 py-1 text-xs text-secondary/65">{d}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Model Info — variant table */}
          {tab === "info" && (
            <div className="space-y-5">
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary/40">
                  All models in the {model.family} ({model.variants.length} total)
                </p>
                <div className="space-y-2">
                  {model.variants.map((v) => (
                    <div key={v.name} className={`rounded-xl border border-secondary/15 bg-background/30 p-3.5`}>
                      <div className="flex flex-wrap items-start gap-2 mb-1.5">
                        <span className={`font-semibold text-sm ${model.accentText}`}>{v.name}</span>
                        <span className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold ${STATUS_STYLE[v.status]}`}>
                          {v.status}
                        </span>
                        {v.parameters && (
                          <span className="rounded-full border border-secondary/20 bg-background/30 px-2 py-0.5 text-[9px] text-secondary/55">
                            {v.parameters}
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mb-2 sm:grid-cols-4">
                        <div>
                          <span className="text-secondary/40">Context: </span>
                          <span className="text-secondary/70">{v.contextWindow}</span>
                        </div>
                        <div>
                          <span className="text-secondary/40">Released: </span>
                          <span className="text-secondary/70">{v.releaseDate}</span>
                        </div>
                        <div>
                          <span className="text-secondary/40">In: </span>
                          <span className="text-secondary/70">{v.pricingInput}</span>
                        </div>
                        <div>
                          <span className="text-secondary/40">Out: </span>
                          <span className="text-secondary/70">{v.pricingOutput}</span>
                        </div>
                      </div>
                      {v.note && <p className="text-[11px] leading-relaxed text-secondary/50 italic">{v.note}</p>}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary/40">Compliance Certifications</p>
                <div className="flex flex-wrap gap-2">
                  {model.certifications.map((c) => (
                    <span key={c} className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${model.cardStyle} ${model.accentText}`}>{c}</span>
                  ))}
                </div>
              </div>

              <div className={`rounded-2xl border p-4 ${model.cardStyle}`}>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary/40">Official documentation</p>
                <div className="flex flex-col gap-2">
                  <a href={model.docsUrl} target="_blank" rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${model.accentText} hover:opacity-80 transition`}>
                    <ExternalLink size={13} /> Model docs & API reference — {model.provider}
                  </a>
                  <a href={model.vendorUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-secondary/55 hover:text-secondary/80 transition">
                    <ExternalLink size={13} /> {model.provider} website
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Main ────────────────────────────────────────────────────────── */
export default function ModelGardenClient() {
  const [selected, setSelected] = useState<Model | null>(null);

  const totalVariants = models.reduce((sum, m) => sum + m.variants.length, 0);

  return (
    <>
      {/* Hero */}
      <section className="section pb-10 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-primary/30 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">Model Garden</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              <span className="text-white">Choose the right model. </span>
              <span className="text-gradient">For the right task.</span>
            </h1>
            <p className="mt-5 max-w-3xl text-secondary/80">
              LorvexAI routes queries intelligently across {totalVariants}+ models from 5 providers — matching complexity, data residency, and compliance requirements automatically. Compare providers and click any card to explore every model variant, pricing, and official documentation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {models.map((m) => (
                <span key={m.id} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${m.cardStyle} ${m.accentText}`}>
                  <span className="font-bold">{m.initial}</span> {m.provider} · {m.variants.length} models
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Model cards */}
      <section className="section pt-2">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-secondary/50">5 Providers · {totalVariants}+ Models</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Provider families</h2>
          <p className="mt-3 max-w-2xl text-sm text-secondary/65">
            Click a card to explore all model variants, full specifications, pricing, and links to official vendor documentation.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {models.map((m) => (
              <button key={m.id} type="button" onClick={() => setSelected(m)}
                className={`card-hover glass group text-left rounded-2xl border p-5 transition ${m.cardStyle}`}>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl border text-sm font-bold ${m.iconBg} ${m.iconText}`}>
                    {m.initial}
                  </div>
                  <div>
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${m.accentText}`}>{m.provider}</p>
                    <p className="text-sm font-semibold text-white">{m.family}</p>
                  </div>
                </div>

                <span className={`inline-block rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] ${m.cardStyle} ${m.accentText} mb-3`}>
                  {m.badge}
                </span>

                <p className="text-xs leading-relaxed text-secondary/65 mb-4">{m.tagline}</p>

                <div className="space-y-2 border-t border-secondary/10 pt-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-secondary/45">Models</span>
                    <span className={`font-semibold ${m.accentText}`}>{m.variants.length} variants</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-secondary/45">Max context</span>
                    <span className={`font-semibold ${m.accentText}`}>{m.contextWindow}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-secondary/45">On-Prem</span>
                    <BoolBadge value={m.onPremise} />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-secondary/45">Reasoning</span>
                    <ScoreDots level={m.reasoningScore} />
                  </div>
                </div>

                <p className={`mt-4 flex items-center gap-1 text-xs font-medium ${m.accentText} transition group-hover:gap-2`}>
                  Explore {m.variants.length} models <ArrowRight size={11} />
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section border-y border-secondary/10 bg-background/40 py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-secondary/50">Side-by-Side</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Regulated enterprise comparison</h2>
          <p className="mt-3 max-w-2xl text-sm text-secondary/65">
            Dimensions that matter for FCA, PRA, NHS, and GDPR compliance. Click any provider name to see full model variants.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-secondary/15">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-secondary/15 bg-background/60">
                  <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary/40 w-36">Dimension</th>
                  {models.map((m) => (
                    <th key={m.id} className="px-3 py-3 text-center">
                      <button type="button" onClick={() => setSelected(m)}
                        className="inline-flex flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 transition hover:bg-primary/10">
                        <span className={`text-xs font-semibold ${m.accentText}`}>{m.family}</span>
                        <span className="text-[9px] text-secondary/40">{m.provider}</span>
                        <span className="text-[9px] text-secondary/35">{m.variants.length} models</span>
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Max Context", render: (m: Model) => <span className="font-semibold text-white">{m.contextWindow}</span> },
                  { label: "On-Premise",  render: (m: Model) => <BoolBadge value={m.onPremise} /> },
                  { label: "EU / UK Residency", render: (m: Model) => <span className="text-xs text-secondary/70">{m.euResidency}</span> },
                  { label: "Reasoning", render: (m: Model) => (
                    <div className="flex flex-col items-center gap-1">
                      <ScoreDots level={m.reasoningScore} />
                      <span className="text-[10px] text-secondary/45">{m.reasoningScore}</span>
                    </div>
                  )},
                  { label: "RAG Suitability", render: (m: Model) => (
                    <div className="flex flex-col items-center gap-1">
                      <ScoreDots level={m.ragScore} />
                      <span className="text-[10px] text-secondary/45">{m.ragScore}</span>
                    </div>
                  )},
                  { label: "Speed",  render: (m: Model) => (
                    <div className="flex flex-col items-center gap-1">
                      <ScoreDots level={m.speed} />
                      <span className="text-[10px] text-secondary/45">{m.speed}</span>
                    </div>
                  )},
                  { label: "Cost Range", render: (m: Model) => <span className="text-xs text-secondary/70">{m.costTier}</span> },
                  { label: "Multimodal", render: (m: Model) => <BoolBadge value={m.multimodal} /> },
                  { label: "Vendor Docs", render: (m: Model) => (
                    <a href={m.docsUrl} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-xs ${m.accentText} hover:opacity-70 transition`}>
                      <ExternalLink size={10} /> Docs
                    </a>
                  )},
                  { label: "Best Regulated Use", render: (m: Model) => <span className="text-[10px] leading-relaxed text-secondary/60">{m.bestFor}</span> }
                ].map((row, i) => (
                  <tr key={row.label} className={`border-b border-secondary/10 ${i % 2 === 0 ? "" : "bg-background/20"}`}>
                    <td className="px-4 py-3 text-xs font-medium text-secondary/55 align-top">{row.label}</td>
                    {models.map((m) => (
                      <td key={m.id} className="px-3 py-3 text-center align-middle">{row.render(m)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Routing section */}
      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.28em] text-primary">Intelligent Routing</p>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                You don't choose. We route automatically.
              </h2>
              <p className="mt-4 text-secondary/70">
                LorvexAI's multi-model router classifies every query and sends it to the optimal model — balancing quality, data residency, and cost targets without manual configuration.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Simple queries → Llama 3.3 8B or Gemini 2.0 Flash-Lite (fast, cheap)",
                  "Complex compliance analysis → Claude Opus 4.6 or o3",
                  "NHS patient data → Llama 3.3 70B on-prem only",
                  "EU data residency required → Mistral Large or EU-region cloud",
                  "Documents > 128K tokens → Gemini 2.5 Pro (1M context)"
                ].map((rule) => (
                  <li key={rule} className="flex gap-2 text-sm text-secondary/70">
                    <ArrowRight size={13} className="mt-0.5 shrink-0 text-primary" />{rule}
                  </li>
                ))}
              </ul>
              <Link href="/platform" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition hover:gap-2.5">
                See the full platform architecture <ArrowRight size={14} />
              </Link>
            </div>

            <div className="glass rounded-2xl border border-primary/20 p-6">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary/40">Live routing decisions</p>
              <div className="space-y-2.5">
                {[
                  { query: "Summarise this regulatory circular", model: "Gemini 2.0 Flash", reason: "Long doc, cost-optimised", color: "text-blue-300" },
                  { query: "Map Basel IV obligations to controls", model: "Claude Opus 4.6", reason: "Complex reasoning", color: "text-primary" },
                  { query: "Triage this patient referral (PII)", model: "Llama 3.3 70B (on-prem)", reason: "NHS data stays on-site", color: "text-violet-300" },
                  { query: "Generate ALCO report section", model: "GPT-4o / o3-mini", reason: "Structured output quality", color: "text-emerald-300" },
                  { query: "EU GDPR compliance gap analysis", model: "Mistral Large 2", reason: "EU data residency", color: "text-orange-300" },
                ].map((row) => (
                  <div key={row.query} className="rounded-xl border border-secondary/10 bg-background/40 px-3 py-2.5">
                    <p className="text-[10px] text-secondary/50 truncate">{row.query}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <span className={`text-xs font-semibold ${row.color}`}>{row.model}</span>
                      <span className="text-[9px] text-secondary/40">{row.reason}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && <ModelModal model={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
