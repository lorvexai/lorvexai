import type { Metadata } from "next";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import { Bot, Database, FileCode2, MessageSquare, ShieldCheck, Sliders, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Controlled AI Architecture | LorvexAI",
  description: "Reference architecture patterns for controlled AI, retrieval governance, supervised workflows, evaluation, and evidence-oriented design.",
  alternates: { canonical: "/platform" }
};

const capabilities = [
  { icon: Database, title: "Retrieval governance", body: "Design patterns for source controls, citation checks, access boundaries, and human review." },
  { icon: Bot, title: "Supervised agent workflows", body: "Workflow orchestration patterns with approval gates, escalation paths, and clear accountability." },
  { icon: ShieldCheck, title: "Governance design", body: "Framework mapping for educational design discussion; no certification or regulatory approval implied." },
  { icon: Sliders, title: "Evaluation and monitoring", body: "Prototype-stage patterns for test sets, quality measures, drift review, and evidence-oriented records." },
  { icon: FileCode2, title: "Templates and diagrams", body: "Reference diagrams, checklists, and implementation notes using fictional, synthetic, or public examples." },
  { icon: MessageSquare, title: "Human-reviewed outputs", body: "Systems can support recommendations, retrieval, and drafting while preserving mandatory human judgement." },
  { icon: Workflow, title: "Operating model", body: "Design notes for roles, decision rights, review cadence, and controlled adoption planning." }
];

export default function PlatformPage() {
  return (
    <>
      <Section
        eyebrow="Architecture"
        title="Controlled AI architecture patterns"
        description="LorvexAI is an independent AI education, publishing, research, and architecture lab focused on controlled AI systems for finance, risk, compliance, regulatory reporting, healthcare operations, and enterprise automation."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="rounded-lg border border-secondary/15 bg-background/35 p-6">
              <item.icon size={20} className="text-primary" />
              <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-secondary/70">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <section className="section pt-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <LegalDisclaimerBanner />
        </div>
      </section>
      <Section title="Request architecture scoping" description="">
        <CTA />
      </Section>
    </>
  );
}
