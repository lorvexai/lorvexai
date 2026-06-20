"use client";

import Link from "next/link";
import { useState } from "react";
import Section from "@/components/Section";
import MermaidRenderer from "@/components/MermaidRenderer";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import RegulatoryMockup from "@/components/mockups/RegulatoryMockup";
import NHSFlowMockup from "@/components/mockups/NHSFlowMockup";
import TreasurySentinelMockup from "@/components/mockups/TreasurySentinelMockup";
import { CheckCircle2 } from "lucide-react";

const products = [
  {
    key: "regulatory-intelligence",
    name: "Regulatory Intelligence Platform",
    summary:
      "An educational reference blueprint for obligation candidates, control-mapping drafts, and evidence-pack templates."
  },
  {
    key: "healthcare-flow",
    name: "Healthcare Flow Intelligence",
    summary:
      "An educational healthcare-operations blueprint for referral-flow intelligence, waiting-list analytics, and discharge-pathway visibility."
  },
  {
    key: "treasury-sentinel",
    name: "Treasury Sentinel",
    summary:
      "An educational finance-operations blueprint for liquidity monitoring, cash-flow anomaly detection, scenario analysis, and ALCO-style draft packs."
  }
] as const;

type ProductKey = (typeof products)[number]["key"];

const frameworkNotes = [
  "Mapped to selected public frameworks for educational purposes",
  "Supports governance discussion",
  "Human review required",
  "Requires independent validation before use",
  "No certification or regulatory approval implied"
];

function ProductNotice() {
  return (
    <div className="rounded-lg border border-primary/20 bg-primary/10 p-4 text-sm leading-relaxed text-secondary/75">
      LorvexAI reference blueprints, diagrams, screenshots, and conceptual examples are educational materials only. They are not products for sale, client prototypes, consulting deliverables, production banking systems, compliance engines, regulatory reporting engines, clinical systems, medical devices, model validation systems, or regulated decision systems.
    </div>
  );
}

function MermaidBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="prose prose-invert mt-8 max-w-none">
      <div className="rounded-lg border border-secondary/20 bg-background/40 p-4">
        <p className="mb-2 text-xs uppercase tracking-[0.22em] text-secondary/70">{label}</p>
        <pre>
          <code className="language-mermaid">{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [selected, setSelected] = useState<ProductKey>("regulatory-intelligence");

  return (
    <>
      <MermaidRenderer refreshKey={selected} />

      <section className="section pb-10 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-lg border border-primary/30 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">Reference Blueprints</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              <span className="text-white">LorvexAI </span>
              <span className="text-gradient">Reference Blueprints</span>
            </h1>
            <p className="mt-5 max-w-3xl text-secondary/80">
              Educational concept blueprints and reference architectures for controlled AI in finance, risk, compliance, treasury, and healthcare operations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/research" className="btn-primary text-sm">
                Read Research
              </Link>
              <a href="#products" className="btn-outline text-sm">Explore Blueprints</a>
            </div>
            <p className="mt-3 text-xs text-secondary/45">Educational concepts · Synthetic examples · Governance-aware design patterns</p>
          </div>
        </div>
      </section>

      <section className="border-y border-secondary/10 bg-background/60 py-4">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-between">
            <p className="text-[10px] uppercase tracking-[0.28em] text-secondary/45">Framework references</p>
            <div className="flex flex-wrap gap-2">
              {frameworkNotes.map((b) => (
                <span key={b} className="rounded-full border border-secondary/20 bg-background/40 px-3 py-1 text-[10px] font-medium text-secondary/55">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="products">
        <Section
          eyebrow="Reference Blueprints"
          title="Choose an educational concept"
          description="Select a blueprint to explore educational architecture, data flow, and controlled usage patterns. These are not products for sale or implementation offers."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => {
              const isActive = selected === product.key;
              return (
                <button
                  key={product.key}
                  type="button"
                  onClick={() => setSelected(product.key)}
                  className={`rounded-lg border p-6 text-left transition ${
                    isActive
                      ? "border-primary/60 bg-primary/15 shadow-glow"
                      : "border-secondary/20 bg-background/30 hover:border-primary/45"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <p className="mt-3 text-sm text-secondary/80">{product.summary}</p>
                  <p className="mt-5 text-xs uppercase tracking-[0.22em] text-primary">
                    {isActive ? "Selected" : "Open Blueprint"}
                  </p>
                </button>
              );
            })}
          </div>
        </Section>
      </div>

      {selected === "regulatory-intelligence" && (
        <Section
          eyebrow="Regulatory Intelligence Platform"
          title="Public regulation text to reviewable obligation candidates"
          description="An educational reference architecture for turning public regulatory text into structured obligation candidates, control-mapping drafts, and evidence-pack templates. Outputs require human validation and do not constitute legal or regulatory advice."
        >
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-lg border border-secondary/25 bg-background/35 p-6">
              <ProductNotice />
              <div className="mt-6">
                <RegulatoryMockup />
              </div>
              <MermaidBlock
                label="Reference Architecture"
                code={`flowchart LR
  A["Public regulatory text"] --> B["Clause and obligation candidate parser"]
  B --> C["Control mapping draft"]
  C --> D["Evidence-pack templates"]
  D --> E["Internal reviewer workflow"]
  E --> F["Human validated output"]`}
              />
            </div>
            <aside className="h-fit rounded-lg border border-primary/35 bg-[#13294B] p-6">
              <h3 className="text-2xl font-semibold text-white">Regulatory intelligence blueprint</h3>
              <ul className="mt-5 space-y-2 text-sm text-secondary/85">
                <li>Evidence-pack templates to support internal review and governance discussions</li>
                <li>Human validation required before use</li>
                <li>No legal, regulatory, or compliance advice</li>
                <li>No certification or regulatory approval implied</li>
              </ul>
              <Link href="/research" className="btn-primary mt-6 w-full text-sm">
                Read Research
              </Link>
            </aside>
          </div>
        </Section>
      )}

      {selected === "healthcare-flow" && (
        <Section
          eyebrow="Healthcare Flow Intelligence"
          title="Healthcare operations blueprint, not clinical decisioning"
          description="A conceptual healthcare-operations blueprint for exploring referral-flow intelligence, waiting-list analytics, and discharge-pathway visibility. It is not a clinical triage system, medical device, diagnostic tool, or patient-specific decision system."
        >
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-lg border border-secondary/25 bg-background/35 p-6">
              <ProductNotice />
              <div className="mt-6">
                <NHSFlowMockup />
              </div>
              <MermaidBlock
                label="Conceptual Flow"
                code={`flowchart LR
  A["Synthetic referral queue"] --> B["Operations visibility layer"]
  B --> C["Waiting-list and capacity analytics"]
  C --> D["Exception dashboard"]
  D --> E["Authorised staff review"]
  E --> F["Operational decision outside system"]`}
              />
            </div>
            <aside className="h-fit rounded-lg border border-primary/35 bg-[#13294B] p-6">
              <h3 className="text-2xl font-semibold text-white">Healthcare operations blueprint</h3>
              <p className="mt-4 text-sm text-secondary/85">
                Any real healthcare use would require formal clinical safety, information governance, data protection, procurement, and local deployment review.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-secondary/85">
                <li>Patient A, Patient B, and synthetic case labels only</li>
                <li>No medical or clinical advice</li>
                <li>No clinical safety certification implied</li>
                <li>Human accountability remains with authorised staff</li>
              </ul>
              <Link href="/research" className="btn-primary mt-6 w-full text-sm">
                Read Research
              </Link>
            </aside>
          </div>
        </Section>
      )}

      {selected === "treasury-sentinel" && (
        <Section
          eyebrow="Treasury Sentinel"
          title="Liquidity monitoring and ALCO-style draft reporting blueprint"
          description="A finance-operations reference blueprint for liquidity monitoring, cash-flow anomaly detection, scenario analysis, and ALCO-pack drafting. It is designed for educational discussion only, not autonomous treasury decision-making or implementation for others."
        >
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-lg border border-secondary/25 bg-background/35 p-6">
              <ProductNotice />
              <div className="mt-6">
                <TreasurySentinelMockup />
              </div>
              <MermaidBlock
                label="Finance Operations Blueprint"
                code={`flowchart LR
  A["Synthetic cash-flow data"] --> B["Anomaly candidate detection"]
  B --> C["Scenario analysis"]
  C --> D["ALCO-style draft packs"]
  D --> E["Treasury review"]
  E --> F["Formal governance outside prototype"]`}
              />
            </div>
            <aside className="h-fit rounded-lg border border-primary/35 bg-[#13294B] p-6">
              <h3 className="text-2xl font-semibold text-white">Treasury reference blueprint</h3>
              <ul className="mt-5 space-y-2 text-sm text-secondary/85">
                <li>ALCO-style draft packs for review</li>
                <li>Synthetic demo data only</li>
                <li>Integration feasibility depends on data availability, security, system access, and governance approval</li>
                <li>No investment, treasury, or regulated financial advice</li>
              </ul>
              <Link href="/research" className="btn-primary mt-6 w-full text-sm">
                Read Research
              </Link>
            </aside>
          </div>
        </Section>
      )}

      <section className="border-y border-secondary/10 bg-background/50 py-8">
        <div className="mx-auto w-full max-w-6xl px-6">
          <LegalDisclaimerBanner />
        </div>
      </section>
    </>
  );
}
