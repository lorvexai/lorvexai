import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import { ArrowRight, BookOpen, ClipboardCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Technical Guides | LorvexAI",
  description: "Educational research, technical guides, and reference architecture notes for controlled AI systems in regulated environments.",
  alternates: { canonical: "/research" }
};

const featuredResearch = [
  {
    icon: FileText,
    category: "AI Governance",
    title: "AI Strategy and Governance for Regulated Financial Institutions",
    desc: "A practical, board-friendly guide to AI ambition, risk appetite, ownership, controls, and evidence in regulated financial institutions.",
    href: "/blog/ai-strategy-and-governance-for-regulated-financial-institutions"
  },
  {
    icon: ClipboardCheck,
    category: "Audit & Assurance",
    title: "AI Audit Readiness: Evidence, Controls, Logs, and Human Oversight",
    desc: "A plain-language note on making AI systems easier to audit by designing evidence and human review into the workflow.",
    href: "/blog/ai-audit-readiness-evidence-controls-logs-human-oversight"
  },
  {
    icon: BookOpen,
    category: "Model Risk",
    title: "Model Risk Management for AI: PRA SS1/23 and US Supervisory Guidance",
    desc: "Educational research on model inventory, tiering, validation, monitoring, explainability, and effective challenge for AI systems.",
    href: "/blog/model-risk-management-for-ai-pra-ss1-23-us-supervisory-guidance"
  }
];

export default function ResearchPage() {
  return (
    <>
      <Section
        eyebrow="Research"
        title="Research, guides, and reference architectures"
        description="This is where I put the longer, slower-moving pieces — the research and technical guides I write for controlled AI systems in regulated environments, meant to be read rather than skimmed."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featuredResearch.map((item) => (
            <Link key={item.title} href={item.href} className="group rounded-lg border border-secondary/15 bg-background/35 p-6 transition hover:border-primary/45">
              <item.icon size={22} className="text-primary" />
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-secondary/45">{item.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary/70">{item.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-white">
                Read more
                <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <Section title="Explore books, articles, and research" description="">
        <CTA />
      </Section>
    </>
  );
}
