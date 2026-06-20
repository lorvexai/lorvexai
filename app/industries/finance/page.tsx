import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Finance, Risk & Compliance Research | LorvexAI",
  description: "Educational reference architecture and research for controlled AI patterns in finance, risk, compliance, regulatory reporting, and treasury operations.",
  alternates: { canonical: "/industries/finance" }
};

const topics = [
  "Public-framework mapping for educational design discussion",
  "RAG-assisted evidence retrieval patterns with human review",
  "Model risk evidence assistant reference scenarios",
  "Treasury anomaly candidate dashboards using synthetic data",
  "Governance-aware implementation notes for supervised AI workflows"
];

export default function FinanceIndustryPage() {
  return (
    <>
      <Section
        eyebrow="Finance research"
        title="Controlled AI patterns for finance, risk, and compliance"
        description="This page is educational and informational. LorvexAI does not provide regulated financial services, investment advice, legal advice, regulatory advice, tax advice, compliance certification, or regulatory sign-off."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <div key={topic} className="flex items-start gap-3 rounded-lg border border-secondary/15 bg-background/35 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-secondary/75">{topic}</p>
            </div>
          ))}
        </div>
        <Link href="/products" className="btn-primary mt-8 text-sm">
          View Blueprints
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
