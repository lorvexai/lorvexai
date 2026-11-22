export const REPO = "https://github.com/lorvexai/ai-banking-risk-platform";

export type Chapter = { num: string; title: string; risk: string; mr: string; summary: string; folder: string; file: string };
export type Part = { part: string; name: string; desc: string; chapters: Chapter[] };

export const PARTS: Part[] = [
  {
    "part": "Part I",
    "name": "Foundations",
    "desc": "Every production AI system rests on three pillars: a compelling business case, a well-governed LLM layer, and a shared technical foundation. Part I builds all three for AWB, ending with four registered models and a reusable awb_commons library used in every chapter that follows.",
    "chapters": [
      {
        "num": "01",
        "title": "AI Transformation",
        "risk": "SS1/23: N/A",
        "mr": "",
        "summary": "AWB faces three converging pressures — regulatory complexity, cost, and AI-native competitors — that make this the decisive moment for AI adoption in UK banking. This chapter lays the foundation: the £3.2M AWB-AI-2026 programme business case, the six-step ROI methodology used throughout the book, and the UK/EU regulatory map every later system is built against.",
        "folder": "chapter-01-ai-transformation",
        "file": "chapter-01-ai-transformation/chatbot/pipeline.py"
      },
      {
        "num": "02",
        "title": "GenAI & LLMs",
        "risk": "SS1/23: MEDIUM",
        "mr": "MR-2026-035 · MR-2026-036",
        "summary": "Introduces the transformer architecture and prompt-engineering patterns behind every LLM in the book, then builds the Credit Document Analyser (MR-2026-035) — cutting financial data extraction from up to 90 minutes to 18 minutes per document at 97.3% accuracy, fully PRA SS1/23 and EU AI Act compliant.",
        "folder": "chapter-02-genai-llms",
        "file": "chapter-02-genai-llms/document_analyser/extractor.py"
      },
      {
        "num": "03",
        "title": "AI Agents",
        "risk": "SS1/23: HIGH",
        "mr": "MR-2026-037",
        "summary": "Extends the Document Analyser into a full agentic workflow — the Credit Decision Agent (MR-2026-037) — orchestrating four sub-agents into a Basel III IRB/CRR3-compliant credit recommendation. A parallel Treasury Operations Agent cuts the morning cash-positioning cycle from 6 hours to 25 minutes, for £2.1M/year combined saving.",
        "folder": "chapter-03-ai-agents",
        "file": "chapter-03-ai-agents/credit_agent/agentic_ai_patterns.py"
      },
      {
        "num": "04",
        "title": "RAG Systems",
        "risk": "SS1/23: LOW",
        "mr": "MR-2026-038",
        "summary": "Builds the Regulatory Knowledge Assistant (MR-2026-038), grounding answers across 847 PRA, FCA, and EBA documents after a near-miss where an ungrounded query nearly caused a £12M capital miscalculation. Introduces the RAGAS evaluation harness and hybrid retrieval that make regulatory RAG auditable.",
        "folder": "chapter-04-rag-systems",
        "file": "chapter-04-rag-systems/rag_assistant/agentic_rag.py"
      },
      {
        "num": "05",
        "title": "AI Governance",
        "risk": "SS1/23: LOW",
        "mr": "MR-2026-039",
        "summary": "Builds the AI Governance Platform that registers, validates, and monitors every model in the book under PRA SS1/23's three pillars — registration, independent validation, and ongoing monitoring. Cost £48.5K to build against the £2.8M s166 skilled-person review it protects AWB from.",
        "folder": "chapter-05-ai-governance",
        "file": "chapter-05-ai-governance/model_governance/operational_mrm.py"
      }
    ]
  },
  {
    "part": "Part II",
    "name": "Risk Domains",
    "desc": "Part II applies the Part I foundations to the five core risk domains every UK bank must manage — credit, market, operational, liquidity, and model risk — each delivered as a production-grade system with a full ROI derivation.",
    "chapters": [
      {
        "num": "06",
        "title": "Credit Risk",
        "risk": "SS1/23: HIGH",
        "mr": "MR-2026-041, 043–045, 055, 066–068, 070",
        "summary": "Replaces AWB's fragmented credit monitoring with the Credit Intelligence Monitor — five modules spanning covenant compliance, adverse news, PSI drift, IFRS 9 staging, and CFO narrative — on one Airflow DAG and one governance registration. Its credit API becomes the PD source for Chapter 7's CVA and the staging feed for Chapter 11's regulatory reporting.",
        "folder": "chapter-06-credit-risk",
        "file": "chapter-06-credit-risk/agentic_cim.py"
      },
      {
        "num": "07",
        "title": "Market Risk",
        "risk": "SS1/23: HIGH",
        "mr": "MR-2026-046–048",
        "summary": "Applies the same platform discipline to the trading book — Monte Carlo VaR, expected shortfall, FRTB SA/IMA, and a CVA calculator consuming Chapter 6's PD term structure. Cut FRTB back-test exceptions from ~10/year to 3, avoiding a capital multiplier that would have raised SA-FRTB capital up to 4×.",
        "folder": "chapter-07-market-risk",
        "file": "chapter-07-market-risk/agentic_market_risk.py"
      },
      {
        "num": "08",
        "title": "Operational Risk",
        "risk": "SS1/23: MEDIUM",
        "mr": "MR-2026-049–051",
        "summary": "Builds AWB's payment fraud detector, NLP loss-event classifier, and application fraud scorer inside the same governance frame. The fraud model scores 2.4M daily transactions at P99 54ms, targeting a reduction from £7.2M to under £1.5M/year in fraud losses.",
        "folder": "chapter-08-operational-risk",
        "file": "chapter-08-operational-risk/agentic_op_risk.py"
      },
      {
        "num": "09",
        "title": "Liquidity Risk",
        "risk": "SS1/23: HIGH",
        "mr": "MR-2026-052, 054, 073",
        "summary": "Moves to the tightest time constraints in the book — a miscalculated intraday position can trigger a CHAPS settlement failure within hours. Builds real-time LCR/NSFR engines and an intraday monitor (BCBS 248) that fixed the architectural gap behind a March 2025 CLAR breach, for £2.75M net annual benefit.",
        "folder": "chapter-09-liquidity-risk",
        "file": "chapter-09-liquidity-risk/agentic_liquidity_risk.py"
      },
      {
        "num": "10",
        "title": "Model Risk",
        "risk": "SS1/23: HIGH",
        "mr": "MR-2026-056, 058",
        "summary": "Builds the enterprise Model Risk Management platform — validation, monitoring, and governance for every AI/ML model built through Chapter 9 — answering not \"can we build a better model\" but \"can we prove it can be trusted.\" Governs all registered systems under one Model Risk Committee.",
        "folder": "chapter-10-model-risk",
        "file": "chapter-10-model-risk/agentic_model_risk.py"
      }
    ]
  },
  {
    "part": "Part III",
    "name": "Compliance",
    "desc": "Having mastered the five core risk domains, Part III turns to the regulatory and financial crime obligations that sit across every domain — where AI becomes a compliance accelerator, monitoring obligations in real time and generating the machine-readable evidence regulators increasingly require.",
    "chapters": [
      {
        "num": "11",
        "title": "Regulatory Compliance",
        "risk": "SS1/23: MIXED",
        "mr": "MR-2026-069-REG, 071, 072",
        "summary": "Automates what previously took 2.4 FTE per quarter — COREP capital returns, LCR/NSFR calculations, and the CRR3 Art.429 leverage ratio return — cutting the quarterly cycle from 340 analyst-hours to 45 (94% reduction). AWB's Q4 2025 leverage ratio of 4.2% clears the 3.0% Pillar 1 minimum by 120bps.",
        "folder": "chapter-11-regulatory-compliance",
        "file": "chapter-11-regulatory-compliance/agentic_regulatory_compliance.py"
      },
      {
        "num": "12",
        "title": "AML & KYC",
        "risk": "SS1/23: HIGH",
        "mr": "MR-2026-061–064",
        "summary": "Builds AWB's AML, KYC, and financial crime prevention platform — digital identity verification, ML transaction monitoring, and borrower KYC — under POCA 2002, FCA SYSC 6.3, and JMLSG guidance. Cut false-positive alerts 80% (8,400 to 1,680/month) while maintaining 340 SARs/year, saving £1.15M/year.",
        "folder": "chapter-12-aml-kyc",
        "file": "chapter-12-aml-kyc/agentic_aml_kyc.py"
      }
    ]
  },
  {
    "part": "Part IV",
    "name": "Enterprise",
    "desc": "Building individual AI models is straightforward; running them reliably in a regulated bank is a different engineering challenge. Part IV covers the microservices architecture, MLOps/LLMOps pipeline, and BCBS 239-compliant data platform that make everything else sustainable.",
    "chapters": [
      {
        "num": "13",
        "title": "Enterprise Architecture",
        "risk": "SS1/23: HIGH",
        "mr": "MR-2026-061-EA",
        "summary": "Connects everything built in Parts I–III into one enterprise platform — microservices, multi-cloud DORA resilience, and Temenos T24 integration — after three independently designed systems that couldn't integrate cost AWB eleven weeks of unplanned rework and a DORA incident. The shared awb_commons library now underpins every AI service in the registry.",
        "folder": "chapter-13-enterprise-architecture",
        "file": "chapter-13-enterprise-architecture/agentic_enterprise_architecture.py"
      },
      {
        "num": "14",
        "title": "MLOps & LLMOps",
        "risk": "SS1/23: LOW",
        "mr": "MR-2026-053",
        "summary": "Builds the operational discipline that keeps every AI model reliable in production — CI/CD retraining pipelines, prompt versioning, and drift monitoring — making it structurally impossible to deploy a model that hasn't passed the four-gate pipeline. If Chapter 13 is the motorway network, this is the traffic management system.",
        "folder": "chapter-14-mlops-llmops",
        "file": "chapter-14-mlops-llmops/agentic_mlops_llmops.py"
      },
      {
        "num": "15",
        "title": "Data Infrastructure",
        "risk": "SS1/23: MEDIUM",
        "mr": "MR-2026-063-DI",
        "summary": "Builds the least visible, most load-bearing layer of the platform — a BCBS 239-aligned risk data warehouse, a point-in-time feature store, and GDPR-compliant governance feeding 20+ AI systems. Data quality is scored across 11 BCBS 239 principles at a 9.2/10 target.",
        "folder": "chapter-15-data-infrastructure",
        "file": "chapter-15-data-infrastructure/agentic_data_infrastructure.py"
      }
    ]
  },
  {
    "part": "Part V",
    "name": "Integration",
    "desc": "The capstone: taking fifteen chapters of individually validated AI systems and integrating them into one coherent, production-ready platform the CRO can rely on at 07:30 on a Monday morning.",
    "chapters": [
      {
        "num": "16",
        "title": "Integrated Platform",
        "risk": "SS1/23: HIGH",
        "mr": "MR-2026-074-IP",
        "summary": "The capstone — unifies Customer 360, the risk data warehouse, the feature store, and all systems built across Chapters 1–15 into one CRO/CFO dashboard with real-time risk position and BCBS 239 compliance views, closing AWB's final data-distribution gap in a single orchestration layer.",
        "folder": "chapter-16-integrated-platform",
        "file": "chapter-16-integrated-platform/agentic_integrated_platform.py"
      }
    ]
  }
];
