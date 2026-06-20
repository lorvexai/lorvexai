import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Automation Research | LorvexAI",
  description: "Educational reference architecture for controlled AI patterns in enterprise automation, governance, retrieval, evaluation, and human-reviewed workflows.",
  alternates: { canonical: "/industries/enterprise" }
};

const topics = [
  "Governance-aware implementation patterns for supervised AI workflows",
  "Access-control, retrieval, evidence, and evaluation reference designs",
  "Public-framework mapping for educational design purposes only",
  "Prototype-stage operating model and control-design notes",
  "Independent validation required before any real use"
];

export default function EnterpriseIndustryPage() {
  return (
    <>
      <Section
        eyebrow="Enterprise automation"
        title="Reference patterns for controlled AI adoption"
        description="LorvexAI publishes educational architecture material for enterprise automation. References to standards or governance frameworks do not imply certification, audit approval, regulatory approval, or legal interpretation."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <div key={topic} className="flex items-start gap-3 rounded-lg border border-secondary/15 bg-background/35 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-secondary/75">{topic}</p>
            </div>
          ))}
        </div>
        <Link href="/platform" className="btn-primary mt-8 text-sm">
          View Architecture
          <ArrowRight size={15} />
        </Link>
      </Section>
      <section className="section pt-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <LegalDisclaimerBanner />
        </div>
      </section>
    </>
  );
}
