import type { Metadata } from "next";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Controlled AI Capabilities | LorvexAI",
  description: "Educational capability patterns for controlled AI architecture, governance, retrieval, evaluation, and supervised workflows.",
  alternates: { canonical: "/capabilities" }
};

const capabilities = [
  "Educational reference architecture notes for RAG, agents, LLMOps, and evidence-oriented workflows",
  "Governance-aware implementation patterns mapped to selected public frameworks for educational purposes",
  "Synthetic examples for evaluation, human oversight, monitoring, and audit-supporting records",
  "Prototype-stage design notes for data access, retrieval quality, controls, and escalation paths",
  "Human-reviewed recommendations, not autonomous operational decisions"
];

export default function CapabilitiesPage() {
  return (
    <>
      <Section
        eyebrow="Capabilities"
        title="Controlled AI capability patterns"
        description="LorvexAI publishes educational architecture patterns for controlled AI systems in regulated environments. These materials support personal research and learning; they are not consulting offers, compliance certification, professional advice, or production implementation claims."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg border border-secondary/15 bg-background/35 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-secondary/75">{item}</p>
            </div>
          ))}
        </div>
      </Section>
      <section className="section pt-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <LegalDisclaimerBanner />
        </div>
      </section>
      <Section title="Explore educational capability notes" description="">
        <CTA />
      </Section>
    </>
  );
}
