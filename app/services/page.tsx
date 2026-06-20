import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import { ArrowRight, BookOpen, CheckCircle2, Compass, FileText, FlaskConical, Network, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Educational Advisory, Architecture Reviews & AI Design Support | LorvexAI",
  description: "Educational workshops, architecture reviews, governance design patterns, and prototype-scoping support for controlled AI systems in regulated environments.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Educational Advisory, Architecture Reviews & AI Design Support | LorvexAI",
    description: "AI architecture and governance support for regulated teams, subject to professional boundary review and conflict checks.",
    url: "/services",
    type: "website"
  }
};

const capabilityPillars = [
  {
    icon: Compass,
    title: "AI Education & Executive Briefings",
    bullets: [
      "Board and leadership briefings on controlled AI adoption",
      "AI risk, governance, and operating model education",
      "Finance/risk/compliance AI awareness sessions"
    ]
  },
  {
    icon: Network,
    title: "Architecture Review & Design Support",
    bullets: [
      "Reference architecture review",
      "RAG, agentic workflow, and LLMOps design patterns",
      "Data, access-control, and governance considerations"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Regulated AI Governance Design",
    bullets: [
      "AI control framework design support",
      "Model/agent inventory concepts",
      "Evidence-pack and audit-trail design patterns"
    ]
  },
  {
    icon: FlaskConical,
    title: "Prototype and Product-Lab Scoping",
    bullets: [
      "Pilot scope definition",
      "Feasibility and risk assessment",
      "Evaluation framework and success criteria"
    ]
  },
  {
    icon: BookOpen,
    title: "Technical Content, Books & Templates",
    bullets: [
      "Books and technical guides",
      "Governance templates and checklists",
      "Reference diagrams and implementation notes"
    ]
  }
];

const guardrails = [
  "Engagements are subject to conflict checks, professional boundary review, and written scope agreement.",
  "Framework references are mapped to selected public materials for educational design purposes.",
  "Any prototype or architecture support requires independent validation before use.",
  "Human oversight, accountability, and local governance remain mandatory."
];

export default function ServicesPage() {
  return (
    <>
      <section className="section pb-6 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-lg border border-primary/30 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Services</p>
                <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                  <span className="text-white">AI Architecture and Governance Support </span>
                  <span className="text-gradient">for Regulated Teams</span>
                </h1>
                <p className="mt-5 max-w-2xl text-secondary/80">
                  LorvexAI supports professionals and teams with educational workshops, architecture reviews, governance design patterns, and prototype-scoping support for AI systems in regulated environments. Engagements are subject to conflict checks, professional boundary review, and written scope agreement.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary text-sm">
                    Request a Scoping Conversation
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/books" className="btn-outline text-sm">
                    Explore Research &amp; Books
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {guardrails.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/10 px-4 py-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm text-secondary">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Educational advisory and design support"
        title="Five support areas with clear boundaries."
        description="Each area is educational and architecture-support focused unless separately agreed in writing and legally appropriate."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilityPillars.map((pillar) => (
            <article key={pillar.title} className="glass rounded-lg border border-primary/15 p-6">
              <div className="mb-4 inline-flex rounded-lg border border-primary/30 bg-primary/10 p-2.5 text-primary">
                <pillar.icon size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <ul className="mt-4 space-y-2">
                {pillar.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-secondary/65">
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-y border-secondary/10 bg-background/50 py-8">
        <div className="mx-auto w-full max-w-6xl px-6">
          <LegalDisclaimerBanner />
        </div>
      </section>

      <Section
        accent
        eyebrow="Service disclaimer"
        title="Educational and architecture-support focused."
        description="LorvexAI does not provide regulated financial, legal, regulatory, clinical, tax, investment, or compliance advice. Services are educational and architecture-support focused unless separately agreed in writing and legally appropriate."
      >
        <div className="rounded-lg border border-secondary/15 bg-background/35 p-6">
          <FileText className="text-primary" size={22} />
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-secondary/70">
            Any advisory or scoping conversation is subject to availability, professional boundary review, conflict checks, confidentiality obligations, and written scope agreement. LorvexAI does not accept work that would conflict with employment duties, confidentiality obligations, professional obligations, regulatory responsibilities, or legal restrictions.
          </p>
        </div>
      </Section>

      <Section title="Request a bounded scoping conversation" description="">
        <CTA />
      </Section>
    </>
  );
}
