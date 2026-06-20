import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import { ArrowRight, BookOpen, Code2, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Technical Guides | LorvexAI",
  description: "Educational research, technical guides, and reference architecture notes for controlled AI systems in regulated environments.",
  alternates: { canonical: "/research" }
};

const featuredResearch = [
  {
    icon: FileText,
    category: "Technical Guide",
    title: "Enterprise RAG Governance: A Practitioner's Framework",
    desc: "A design discussion for retrieval-augmented generation systems, covering source controls, data lineage, citation checks, human review, and evidence-oriented records.",
    href: "/blog/enterprise-rag-architectures-for-the-regulated-enterprise"
  },
  {
    icon: Code2,
    category: "Architecture Note",
    title: "Agentic AI Systems: Design Patterns for Supervised Workflows",
    desc: "Reference patterns for multi-step AI workflows in environments where governance, oversight, and accountability matter.",
    href: "/blog/the-rise-of-agentic-ai"
  },
  {
    icon: BookOpen,
    category: "Book",
    title: "AI for Financial Risk, Compliance and Regulatory Reporting",
    desc: "Practitioner-focused educational writing on controlled AI adoption for financial risk, compliance, regulatory reporting, governance, RAG, agents, MLOps, LLMOps, and enterprise banking architecture.",
    href: "/books"
  }
];

export default function ResearchPage() {
  return (
    <>
      <Section
        eyebrow="Research"
        title="Research, guides, and reference architectures"
        description="LorvexAI publishes personal educational research and technical guides for controlled AI systems. Materials are informational and do not constitute professional advice, consulting, implementation services, compliance certification, regulatory approval, or delivered outcome claims."
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
      <section className="section pt-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <LegalDisclaimerBanner />
        </div>
      </section>
      <Section title="Explore books and research" description="">
        <CTA />
      </Section>
    </>
  );
}
