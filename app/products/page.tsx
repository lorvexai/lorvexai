"use client";

import Link from "next/link";
import { useState } from "react";
import Section from "@/components/Section";
import MermaidRenderer from "@/components/MermaidRenderer";

const products = [
  {
    key: "ai-compliance-copilot",
    name: "Regulatory Intelligence Platform",
    summary:
      "Regulatory knowledge engine for PRA/Basel obligations, controls, evidence, and audit outputs."
  },
  {
    key: "nhs-flow-optimizer",
    name: "NHS Flow Optimizer",
    summary:
      "Referral triage, discharge intelligence, and operational throughput optimization for NHS teams."
  },
  {
    key: "treasury-sentinel",
    name: "Treasury Sentinel",
    summary:
      "Liquidity and cashflow early-warning intelligence for finance and banking operations."
  }
] as const;

type ProductKey = (typeof products)[number]["key"];
type TabView = "overview" | "architecture" | "data-flow" | "usage";

const TABS: { key: TabView; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "architecture", label: "Architecture" },
  { key: "data-flow", label: "Data Flow" },
  { key: "usage", label: "Usage" }
];

function TabBar({
  active,
  onChange
}: {
  active: TabView;
  onChange: (v: TabView) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {TABS.map((tab) => {
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={`rounded-full border px-3 py-1 text-xs transition ${
              isActive
                ? "border-primary/60 bg-primary/20 text-white"
                : "border-primary/30 bg-primary/5 text-secondary hover:border-primary/45"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

function MermaidBlock({
  label,
  code
}: {
  label: string;
  code: string;
}) {
  return (
    <div className="prose prose-invert mt-8 max-w-none">
      <div className="rounded-xl border border-secondary/20 bg-background/40 p-4">
        <p className="mb-2 text-xs uppercase tracking-[0.22em] text-secondary/70">
          {label}
        </p>
        <pre>
          <code className="language-mermaid">{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [selected, setSelected] = useState<ProductKey>("ai-compliance-copilot");
  const [ripView, setRipView] = useState<TabView>("overview");
  const [nhsView, setNhsView] = useState<TabView>("overview");
  const [tsView, setTsView] = useState<TabView>("overview");

  return (
    <>
      <MermaidRenderer refreshKey={`${selected}:${ripView}:${nhsView}:${tsView}`} />

      {/* Hero */}
      <section className="section pb-10 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-primary/30 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
              Product Portfolio
            </p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              <span className="text-white">Products By </span>
              <span className="text-gradient">LorvexAI</span>
            </h1>
            <p className="mt-5 max-w-3xl text-secondary/80">
              We combine advisory depth with production software so clients can move
              from strategy to measurable outcomes in regulated environments.
            </p>
          </div>
        </div>
      </section>

      {/* Product selector */}
      <Section
        eyebrow="Products"
        title="Choose a product"
        description="Select a product card to explore architecture, data flow, and real-world usage patterns."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => {
            const isActive = selected === product.key;
            return (
              <button
                key={product.key}
                type="button"
                onClick={() => setSelected(product.key)}
                className={`rounded-2xl border p-6 text-left transition ${
                  isActive
                    ? "border-primary/60 bg-primary/15 shadow-glow"
                    : "border-secondary/20 bg-background/30 hover:border-primary/45"
                }`}
              >
                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                <p className="mt-3 text-sm text-secondary/80">{product.summary}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.22em] text-primary">
                  {isActive ? "Selected" : "Open Product"}
                </p>
              </button>
            );
          })}
        </div>
      </Section>

      {/* ───────────────────────────────────────────────────────────
          PRODUCT 1 — Regulatory Intelligence Platform
      ─────────────────────────────────────────────────────────── */}
      {selected === "ai-compliance-copilot" && (
        <Section
          eyebrow="Regulatory Intelligence Platform"
          title="From regulation text to auditable action"
          description="Detailed product view with architecture, data flow, and partner onboarding path."
        >
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl border border-secondary/25 bg-background/35 p-6">
              <TabBar active={ripView} onChange={setRipView} />

              {ripView === "overview" && (
                <div className="mt-6 space-y-4 text-secondary/85">
                  <p>
                    Regulatory Intelligence Platform converts complex regulatory language into
                    structured obligations, control mappings, and evidence requirements.
                    This removes the manual burden of interpreting long policy documents
                    while preserving legal traceability.
                  </p>
                  <p>
                    The product uses a core-plus-pack model: a reusable compliance core for
                    controls, evidence, ownership, and testing, and jurisdiction packs for
                    PRA Basel 3.1 and future rulebooks. This design allows organizations to
                    scale across legal entities without rebuilding their operating model.
                  </p>
                  <p>
                    A retrieval layer grounds answers in approved documents and evidence
                    records, with every response tied to sources. Risk and compliance teams
                    can trust outputs in governance meetings because recommendations remain
                    explainable and auditable.
                  </p>
                  <p>
                    The workflow layer connects obligations to owners, due dates,
                    exceptions, and remediation tasks. Instead of static checklists, teams
                    get a continuous compliance system that flags drift early and supports
                    faster audit preparation.
                  </p>
                  <p>
                    Delivery starts small and scales safely: begin with one framework and
                    one business unit, prove impact within weeks, and expand to additional
                    packs such as EBA, Fed, or HKMA.
                  </p>
                </div>
              )}

              {ripView === "architecture" && (
                <MermaidBlock
                  label="Architecture Diagram"
                  code={`flowchart LR
  A["PRA Basel 3.1 Rule Pack"] --> B["Clause + Obligation Parser"]
  B --> C["Control & Evidence Graph"]
  C --> D["Hybrid Retrieval Layer"]
  D --> E["Gemini Reasoning"]
  E --> F["Audit Pack + Action Tasks"]
  C --> G["Ownership + Workflow Engine"]
  G --> F`}
                />
              )}

              {ripView === "data-flow" && (
                <MermaidBlock
                  label="Data Flow Diagram"
                  code={`flowchart TB
  I["Regulations + Internal Policies + Logs"] --> J["Ingestion + Chunking"]
  J --> K["Obligation Mapping"]
  K --> L["Control Assignment"]
  L --> M["Evidence Validation"]
  M --> N["Risk Scoring"]
  N --> O["Recommendations + Exceptions"]
  O --> P["Board / Audit Reporting"]`}
                />
              )}

              {ripView === "usage" && (
                <MermaidBlock
                  label="Usage Flow Diagram"
                  code={`sequenceDiagram
  participant R as Risk Analyst
  participant P as Platform Engine
  participant KG as Control Graph
  participant EV as Evidence Store
  participant WF as Workflow
  R->>P: Ask Basel compliance question
  P->>KG: Retrieve mapped obligations
  P->>EV: Retrieve latest evidence
  P-->>R: Grounded answer + citations
  R->>WF: Open remediation task
  WF-->>R: Track closure + audit log`}
                />
              )}
            </div>

            <aside className="h-fit rounded-2xl border border-primary/35 bg-gradient-to-br from-[#13294B] to-[#1D4C8F] p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-secondary/75">
                Partner With LorvexAI
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Get Started In 4 Weeks
              </h3>
              <p className="mt-4 text-sm text-secondary/85">
                We run a blueprint sprint focused on your highest-risk compliance
                workflows and deliver a pilot-ready implementation plan.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-secondary/85">
                <li>- Use-case prioritization with measurable outcomes</li>
                <li>- Architecture and data connector blueprint</li>
                <li>- Governance and evidence model design</li>
                <li>- Pilot scope, timeline, and delivery plan</li>
              </ul>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary w-full text-sm">
                  Book Discovery Sprint
                </Link>
              </div>
            </aside>
          </div>
        </Section>
      )}

      {/* ───────────────────────────────────────────────────────────
          PRODUCT 2 — NHS Flow Optimizer
      ─────────────────────────────────────────────────────────── */}
      {selected === "nhs-flow-optimizer" && (
        <Section
          eyebrow="NHS Flow Optimizer"
          title="From referral to discharge — intelligently managed"
          description="Detailed product view with architecture, data flow, and clinical deployment path."
        >
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl border border-secondary/25 bg-background/35 p-6">
              <TabBar active={nhsView} onChange={setNhsView} />

              {nhsView === "overview" && (
                <div className="mt-6 space-y-4 text-secondary/85">
                  <p>
                    NHS Flow Optimizer addresses the systemic pressures facing NHS trusts:
                    growing referral backlogs, unplanned admissions, delayed discharges, and
                    fragmented care coordination. It applies AI across the entire patient pathway
                    — from GP referral through clinical triage, bed management, and discharge
                    planning — to reduce wait times and improve throughput without adding headcount.
                  </p>
                  <p>
                    The system uses a real-time intelligence layer that ingests referral queues,
                    bed occupancy, staffing, and theatre schedules to surface prioritization
                    recommendations. Clinical teams see a unified command view rather than
                    disconnected spreadsheets and phone calls.
                  </p>
                  <p>
                    A discharge prediction model flags patients 24–48 hours before they are
                    clinically ready to leave, enabling social care, pharmacy, and transport to be
                    coordinated in advance. This reduces delayed transfers of care — one of the
                    largest sources of bed blockage in NHS trusts.
                  </p>
                  <p>
                    The triage module uses clinical text from referral letters and SNOMED-coded
                    diagnoses to score urgency and route patients to the right care setting
                    automatically, reducing inappropriate referrals and consultant review time.
                  </p>
                  <p>
                    Delivery starts with a single specialty or ward, demonstrates measurable
                    throughput improvement within 6–8 weeks, and expands trust-wide.
                  </p>
                </div>
              )}

              {nhsView === "architecture" && (
                <MermaidBlock
                  label="Architecture Diagram"
                  code={`flowchart LR
  A["GP Referral / E-Referral"] --> B["Referral Intelligence Engine"]
  B --> C["Clinical Triage Scoring"]
  C --> D["Pathway Routing"]
  D --> E["Bed & Capacity Manager"]
  E --> F["Discharge Predictor"]
  F --> G["Care Coordination Hub"]
  G --> H["Trust Command Dashboard"]`}
                />
              )}

              {nhsView === "data-flow" && (
                <MermaidBlock
                  label="Data Flow Diagram"
                  code={`flowchart TB
  I["Referrals + PAS + EPR + Theatre Data"] --> J["Real-Time Ingestion Layer"]
  J --> K["Clinical NLP & Urgency Scoring"]
  K --> L["Pathway Assignment"]
  L --> M["Capacity Matching"]
  M --> N["Discharge Readiness Prediction"]
  N --> O["Coordinator Alerts & Actions"]
  O --> P["Trust Performance Dashboard"]`}
                />
              )}

              {nhsView === "usage" && (
                <MermaidBlock
                  label="Usage Flow Diagram"
                  code={`sequenceDiagram
  participant C as Clinician
  participant T as Triage Engine
  participant B as Bed Manager
  participant D as Discharge AI
  participant S as Social Care
  C->>T: Submit referral letter
  T->>C: Urgency score + recommended pathway
  C->>B: Confirm bed request
  B-->>C: Bed allocated with predicted LOS
  D->>S: Flag discharge readiness 48h ahead
  S-->>D: Confirm care package arranged
  D-->>C: Discharge cleared for action`}
                />
              )}
            </div>

            <aside className="h-fit rounded-2xl border border-primary/35 bg-gradient-to-br from-[#13294B] to-[#1D4C8F] p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-secondary/75">
                Partner With LorvexAI
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Deploy in One Ward First
              </h3>
              <p className="mt-4 text-sm text-secondary/85">
                We start with a single specialty or ward, prove throughput improvement in
                6–8 weeks, and expand trust-wide with full NHS Digital and IG Toolkit
                compliance.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-secondary/85">
                <li>- Referral triage and pathway routing</li>
                <li>- Bed and capacity intelligence layer</li>
                <li>- Discharge readiness prediction</li>
                <li>- NHS Digital and IG Toolkit alignment</li>
              </ul>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary w-full text-sm">
                  Book NHS Discovery Sprint
                </Link>
              </div>
            </aside>
          </div>
        </Section>
      )}

      {/* ───────────────────────────────────────────────────────────
          PRODUCT 3 — Treasury Sentinel
      ─────────────────────────────────────────────────────────── */}
      {selected === "treasury-sentinel" && (
        <Section
          eyebrow="Treasury Sentinel"
          title="Liquidity intelligence from data to board"
          description="Detailed product view with architecture, data flow, and treasury team onboarding path."
        >
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl border border-secondary/25 bg-background/35 p-6">
              <TabBar active={tsView} onChange={setTsView} />

              {tsView === "overview" && (
                <div className="mt-6 space-y-4 text-secondary/85">
                  <p>
                    Treasury Sentinel gives finance and treasury teams real-time liquidity
                    intelligence and early-warning scenario analysis — replacing fragmented
                    spreadsheet models with a continuously updated cashflow control tower.
                  </p>
                  <p>
                    Modern treasury operations face acute pressure: intraday liquidity
                    requirements under Basel III, complex multi-entity cash pooling, FX
                    exposure across jurisdictions, and board expectations for forward
                    visibility. Treasury Sentinel addresses all of these through an AI layer
                    that sits above existing TMS, ERP, and banking data feeds.
                  </p>
                  <p>
                    The platform continuously models cashflow across entities, currencies,
                    and time horizons. It detects anomalies — unexpected outflows,
                    concentration risk, covenant headroom erosion — and surfaces them as
                    prioritized alerts before they become breaches.
                  </p>
                  <p>
                    Scenario modelling allows treasury teams to stress-test portfolios
                    against interest rate shocks, counterparty defaults, and FX moves in
                    minutes rather than days. Each scenario is traceable and auditable for
                    ALCO and board reporting.
                  </p>
                  <p>
                    The regulatory reporting module pre-computes LCR, NSFR, and intraday
                    liquidity metrics aligned to PRA expectations, cutting the time to
                    produce liquidity returns significantly.
                  </p>
                  <p>
                    Integration is API-first: connects to major TMS platforms (Kyriba, ION,
                    FIS), ERP systems (SAP, Oracle), and bank SWIFT/API feeds without
                    replacing existing infrastructure.
                  </p>
                </div>
              )}

              {tsView === "architecture" && (
                <MermaidBlock
                  label="Architecture Diagram"
                  code={`flowchart LR
  A["TMS / ERP / Bank Feeds"] --> B["Data Ingestion & Normalisation"]
  B --> C["Cashflow Modelling Engine"]
  C --> D["Anomaly Detection Layer"]
  D --> E["Scenario Stress Testing"]
  E --> F["Liquidity Risk Scoring"]
  F --> G["Regulatory Metrics (LCR/NSFR)"]
  G --> H["Treasury Command Dashboard"]`}
                />
              )}

              {tsView === "data-flow" && (
                <MermaidBlock
                  label="Data Flow Diagram"
                  code={`flowchart TB
  I["Bank Statements + TMS + ERP + FX Feeds"] --> J["Real-Time Ingestion & Reconciliation"]
  J --> K["Multi-Entity Cash Position"]
  K --> L["Forecasting & Anomaly Detection"]
  L --> M["Scenario Simulation"]
  M --> N["Risk Scoring & Alerts"]
  N --> O["LCR / NSFR Computation"]
  O --> P["ALCO & Board Reporting Pack"]`}
                />
              )}

              {tsView === "usage" && (
                <MermaidBlock
                  label="Usage Flow Diagram"
                  code={`sequenceDiagram
  participant T as Treasurer
  participant S as Sentinel Engine
  participant A as Anomaly Detector
  participant R as Risk Model
  participant B as Board Reporting
  T->>S: Review morning liquidity position
  S-->>T: Consolidated multi-entity cashflow
  A->>T: Alert: unexpected outflow detected
  T->>R: Run stress scenario (rate +200bps)
  R-->>T: Scenario impact + headroom analysis
  T->>B: Generate ALCO reporting pack
  B-->>T: Pre-computed LCR/NSFR + audit trail`}
                />
              )}
            </div>

            <aside className="h-fit rounded-2xl border border-primary/35 bg-gradient-to-br from-[#13294B] to-[#1D4C8F] p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-secondary/75">
                Partner With LorvexAI
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Go Live in 6 Weeks
              </h3>
              <p className="mt-4 text-sm text-secondary/85">
                We connect to your existing TMS, ERP, and bank feeds, deliver a working
                liquidity dashboard, and train your treasury team — all within 6 weeks.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-secondary/85">
                <li>- Multi-entity cashflow consolidation</li>
                <li>- Anomaly detection and early-warning alerts</li>
                <li>- LCR / NSFR regulatory metric computation</li>
                <li>- ALCO and board reporting automation</li>
              </ul>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary w-full text-sm">
                  Book Treasury Discovery Sprint
                </Link>
              </div>
            </aside>
          </div>
        </Section>
      )}
    </>
  );
}
