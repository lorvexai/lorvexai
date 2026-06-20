import type { Metadata } from "next";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Model Selection Notes | LorvexAI",
  description: "Educational model-selection considerations for controlled AI architecture, including data boundaries, evaluation, governance, cost, and deployment constraints.",
  alternates: { canonical: "/models" }
};

const considerations = [
  "Data residency, confidentiality, and approved-processing boundaries",
  "Evaluation quality, retrieval grounding, and human-review requirements",
  "Latency, cost, context window, tooling, and operational constraints",
  "Provider terms, security documentation, and local procurement review",
  "Independent validation before use in regulated or high-impact workflows"
];

export default function ModelsPage() {
  return (
    <>
      <Section
        eyebrow="Model notes"
        title="Educational AI model-selection considerations"
        description="Model selection depends on the specific data, governance, security, procurement, and operational context. LorvexAI does not certify provider compliance or recommend a model as suitable for regulated use without independent review."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {considerations.map((item) => (
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
      <Section title="Discuss model-selection education" description="">
        <CTA />
      </Section>
    </>
  );
}
