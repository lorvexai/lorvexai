"use client";

import Link from "next/link";
import { useState } from "react";
import Section from "@/components/Section";
import MermaidRenderer from "@/components/MermaidRenderer";
import RegulatoryMockup from "@/components/mockups/RegulatoryMockup";
import TreasurySentinelMockup from "@/components/mockups/TreasurySentinelMockup";
import { CheckCircle2 } from "lucide-react";

const blueprints = [
  {
    key: "regulatory-intelligence",
    name: "Regulatory Intelligence Blueprint",
    summary:
      "An educational reference blueprint for obligation candidates, control-mapping drafts, and evidence-pack templates."
  },
  {
    key: "treasury-sentinel",
    name: "Treasury Sentinel Blueprint",
    summary:
      "An educational finance-operations blueprint for liquidity monitoring, cash-flow anomaly detection, scenario analysis, and ALCO-style draft packs."
  }
] as const;

type BlueprintKey = (typeof blueprints)[number]["key"];

const architecturePatterns = [
  "Retrieval governance",
  "Supervised agent workflows",
  "Evaluation & monitoring",
  "Evidence-oriented design",
  "Human-reviewed outputs"
];

function BlueprintNotice() {
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

export default function BlueprintsPage() {
  const [selected, setSelected] = useState<BlueprintKey>("regulatory-intelligence");

  return (
    <>
      <MermaidRenderer refreshKey={selected} />

      <section className="section pb-10 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-lg border border-primary/30 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">Blueprints</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              <span className="text-heading">How I'd architect </span>
              <span className="text-gradient">controlled AI systems</span>
            </h1>
            <p className="mt-5 max-w-3xl text-secondary/80">
              These are the reference architectures I sketch out when I'm thinking through how AI should work inside regulated environments — retrieval governance, supervised agent workflows, evaluation, and evidence-oriented design. Concepts, not products: synthetic data, human review built in, nothing autonomous.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/blog" className="btn-primary text-sm">
                Read Writing
              </Link>
              <a href="#blueprints" className="btn-outline text-sm">Explore Blueprints</a>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {architecturePatterns.map((b) => (
                <span key={b} className="rounded-full border border-secondary/20 bg-background/40 px-3 py-1 text-[10px] font-medium text-secondary/55">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="blueprints">
        <Section
          eyebrow="Reference Blueprints"
          title="Choose an educational concept"
          description="Select a blueprint to explore educational architecture, data flow, and controlled usage patterns. These are not products for sale or implementation offers."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {blueprints.map((blueprint) => {
              const isActive = selected === blueprint.key;
              return (
                <button
                  key={blueprint.key}
                  type="button"
                  onClick={() => setSelected(blueprint.key)}
                  className={`rounded-lg border p-6 text-left transition ${
                    isActive
                      ? "border-primary/60 bg-primary/15 shadow-glow"
                      : "border-secondary/20 bg-background/30 hover:border-primary/45"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-heading">{blueprint.name}</h3>
                  <p className="mt-3 text-sm text-secondary/80">{blueprint.summary}</p>
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
          eyebrow="Regulatory Intelligence Blueprint"
          title="Public regulation text to reviewable obligation candidates"
          description="An educational reference architecture for turning public regulatory text into structured obligation candidates, control-mapping drafts, and evidence-pack templates. Outputs require human validation and do not constitute legal or regulatory advice."
        >
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-lg border border-secondary/25 bg-background/35 p-6">
              <BlueprintNotice />
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
            <aside className="h-fit rounded-lg border border-primary/35 bg-panel2 p-6">
              <h3 className="text-2xl font-semibold text-heading">Regulatory intelligence blueprint</h3>
              <ul className="mt-5 space-y-2 text-sm text-secondary/85">
                <li>Evidence-pack templates to support internal review and governance discussions</li>
                <li>Human validation required before use</li>
                <li>No legal, regulatory, or compliance advice</li>
                <li>No certification or regulatory approval implied</li>
              </ul>
              <Link href="/blog" className="btn-primary mt-6 w-full text-sm">
                Read Writing
              </Link>
            </aside>
          </div>
        </Section>
      )}

      {selected === "treasury-sentinel" && (
        <Section
          eyebrow="Treasury Sentinel Blueprint"
          title="Liquidity monitoring and ALCO-style draft reporting blueprint"
          description="A finance-operations reference blueprint for liquidity monitoring, cash-flow anomaly detection, scenario analysis, and ALCO-pack drafting. It is designed for educational discussion only, not autonomous treasury decision-making or implementation for others."
        >
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-lg border border-secondary/25 bg-background/35 p-6">
              <BlueprintNotice />
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
            <aside className="h-fit rounded-lg border border-primary/35 bg-panel2 p-6">
              <h3 className="text-2xl font-semibold text-heading">Treasury reference blueprint</h3>
              <ul className="mt-5 space-y-2 text-sm text-secondary/85">
                <li>ALCO-style draft packs for review</li>
                <li>Synthetic demo data only</li>
                <li>Integration feasibility depends on data availability, security, system access, and governance approval</li>
                <li>No investment, treasury, or regulated financial advice</li>
              </ul>
              <Link href="/blog" className="btn-primary mt-6 w-full text-sm">
                Read Writing
              </Link>
            </aside>
          </div>
        </Section>
      )}

    </>
  );
}
