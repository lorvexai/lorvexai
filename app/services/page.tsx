import Link from "next/link";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import {
  Activity,
  Bot,
  Compass,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wrench,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const capabilityPillars = [
  {
    icon: Compass,
    title: "AI Strategy & Value Realization",
    summary: "Turn board-level ambition into a practical roadmap with measurable outcomes.",
    bullets: [
      "Use-case prioritization and ROI cases",
      "AI portfolio and funding model",
      "Operating model and leadership alignment"
    ]
  },
  {
    icon: Network,
    title: "Enterprise AI Architecture",
    summary: "Design scalable AI foundations that integrate with your existing data and controls.",
    bullets: [
      "Reference architecture and integration blueprint",
      "Data, security, and model access patterns",
      "Environment strategy across cloud and on-prem"
    ]
  },
  {
    icon: Wrench,
    title: "LLM Engineering",
    summary: "Build production-grade generative AI systems with reliability, speed, and quality controls.",
    bullets: [
      "RAG pipelines and retrieval quality tuning",
      "Prompt orchestration and evaluation harnesses",
      "Model routing, latency, and cost optimization"
    ]
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    summary: "Deploy supervised AI agents that execute workflows across enterprise tools.",
    bullets: [
      "Single-agent and multi-agent orchestration",
      "Tool integration and guarded action execution",
      "Human-in-the-loop checkpoints for critical decisions"
    ]
  },
  {
    icon: ShieldCheck,
    title: "AI Risk & Governance",
    summary: "Embed control, explainability, and compliance into delivery from day one.",
    bullets: [
      "Risk taxonomy and control mapping",
      "Model/agent policy enforcement",
      "Auditability, monitoring, and incident playbooks"
    ]
  },
  {
    icon: Sparkles,
    title: "AI Enablement & Change",
    summary: "Build the internal capability to scale safely beyond a single pilot.",
    bullets: [
      "Role-based enablement and playbooks",
      "Cross-functional delivery governance",
      "Adoption planning and KPI instrumentation"
    ]
  }
];

const deliveryModel = [
  {
    icon: Activity,
    title: "1. Diagnose",
    detail: "We assess strategic priorities, data reality, architecture constraints, and risk exposure."
  },
  {
    icon: Bot,
    title: "2. Deliver",
    detail: "We design and ship production-ready AI systems with measurable business outcomes."
  },
  {
    icon: TrendingUp,
    title: "3. Scale",
    detail: "We establish governance, enable teams, and optimize performance to sustain value."
  }
];

const trustSignals = [
  "Regulated sector expertise — Finance, NHS, Banking",
  "Governance-first — FCA, NHS Digital, ISO 42001 aligned",
  "Production delivery — not just pilots and PowerPoints",
  "End-to-end — from strategy through to running system"
];

export default function ServicesPage() {
  return (
    <>
      {/* Full-width hero banner */}
      <section className="section pb-6 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-primary/30 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Services</p>
                <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                  <span className="text-white">AI Services Built for </span>
                  <span className="text-gradient">Real Enterprise Adoption</span>
                </h1>
                <p className="mt-5 max-w-xl text-secondary/80">
                  From strategy to engineering to governance — we help teams move from pilot activity to dependable, production-grade AI capability.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary text-sm">
                    Book a Discovery Call
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/products" className="btn-outline text-sm">
                    See Our Products
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "Outcome-driven AI portfolio design",
                  "Production-grade LLM and agent systems",
                  "Governance-ready deployment in regulated settings",
                  "4-week blueprint sprint to first pilot"
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3">
                    <CheckCircle2 size={16} className="shrink-0 text-primary" />
                    <span className="text-sm text-secondary">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability pillars */}
      <Section
        eyebrow="Capability Pillars"
        title="Six disciplines. One integrated delivery."
        description="Each pillar is a standalone engagement or part of an end-to-end programme — designed to fit where you are on the AI maturity curve."
      >
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilityPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="glass card-hover rounded-2xl border border-primary/15 p-6"
            >
              <div className="mb-4 inline-flex rounded-xl border border-primary/30 bg-primary/10 p-2.5 text-primary">
                <pillar.icon size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-secondary/75">{pillar.summary}</p>
              <ul className="mt-4 space-y-2 pl-0">
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

      {/* Trust signals strip */}
      <section className="border-y border-secondary/10 bg-background/50 py-8">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-start gap-3">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-primary" />
                <p className="text-sm text-secondary/75">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery model */}
      <Section
        eyebrow="How We Work"
        title="A delivery model designed to reduce execution risk"
        description="We combine strategic clarity, engineering depth, and governance discipline in every phase."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {deliveryModel.map((stage, i) => (
            <article key={stage.title} className="relative glass card-hover rounded-2xl border border-primary/15 p-6">
              <span className="absolute right-5 top-5 select-none font-mono text-4xl font-bold text-primary/10">
                0{i + 1}
              </span>
              <div className="mb-4 inline-flex rounded-xl border border-primary/30 bg-primary/10 p-2.5 text-primary">
                <stage.icon size={18} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{stage.title}</h3>
              <p className="mt-3 text-sm text-secondary/75">{stage.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Launch your AI programme with confidence" description="">
        <CTA />
      </Section>
    </>
  );
}
