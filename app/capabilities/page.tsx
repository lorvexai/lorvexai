import Link from "next/link";
import Section from "@/components/Section";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import DeliveryFrameworkDiagram from "@/components/DeliveryFrameworkDiagram";
import CTA from "@/components/CTA";
import {
  CheckCircle2,
  ArrowRight,
  Layers,
  Cpu,
  Bot,
  ShieldCheck,
  TrendingUp,
  Zap,
  BarChart3,
  Lock
} from "lucide-react";

const capabilityTracks = [
  {
    icon: Layers,
    number: "01",
    title: "AI Platform Architecture",
    summary: "Design the backbone your AI systems will run on — integrated, secure, and built to scale.",
    points: [
      "Reference architectures for retrieval, agent orchestration, and governance",
      "Data integration patterns across ERP, CRM, policy, and document systems",
      "Security and identity controls for regulated enterprise environments"
    ]
  },
  {
    icon: Cpu,
    number: "02",
    title: "LLM and RAG Engineering",
    summary: "Build production retrieval and generation systems that are accurate, fast, and auditable.",
    points: [
      "Production retrieval pipelines with hybrid search, reranking, and context control",
      "Grounded response design with citations and confidence-aware behaviour",
      "Evaluation harnesses for quality, latency, and cost optimisation"
    ]
  },
  {
    icon: Bot,
    number: "03",
    title: "Agentic Workflow Systems",
    summary: "Deploy AI agents that reason, plan, and act across your enterprise tools with human oversight.",
    points: [
      "Goal-based multi-step automation with explicit human escalation rules",
      "Tool orchestration and policy-aware execution controls",
      "Traceability and audit-ready logs for every decision path"
    ]
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Governance and Model Risk",
    summary: "Embed the controls your risk, compliance, and audit teams require from day one.",
    points: [
      "Policy frameworks for safe deployment in finance, healthcare, and NHS settings",
      "Continuous monitoring for drift, failure modes, and operational regressions",
      "Control gates for release, rollback, and evidence collection"
    ]
  }
];

const outcomes = [
  {
    icon: Zap,
    title: "Speed",
    metric: "4–12 weeks",
    detail: "Faster decision cycles through retrieval and agent automation. From discovery sprint to production pilot in weeks, not quarters."
  },
  {
    icon: BarChart3,
    title: "Reliability",
    metric: "Production-grade",
    detail: "Stable quality under real-world load with continuous evaluation, failure-mode controls, and SLA-backed delivery."
  },
  {
    icon: Lock,
    title: "Governance",
    metric: "Audit-ready",
    detail: "Audit-ready traces, policy checks, and release gates for regulated and enterprise deployments aligned to FCA and NHS Digital."
  },
  {
    icon: TrendingUp,
    title: "Scale",
    metric: "Enterprise-wide",
    detail: "Systems designed to expand from a single team to organisation-wide rollout without re-architecture."
  }
];

const maturityStages = [
  { stage: "Explore",   desc: "Use-case identification, feasibility, and value prioritisation"  },
  { stage: "Architect", desc: "Platform design, data integration, and governance model"          },
  { stage: "Build",     desc: "LLM engineering, agent development, and integration"             },
  { stage: "Govern",    desc: "Risk controls, monitoring, audit trails, and policy enforcement" },
  { stage: "Scale",     desc: "Enablement, expansion, and continuous optimisation"              }
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="section pb-6 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-primary/30 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Capabilities</p>
                <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                  <span className="text-white">AI Capabilities </span>
                  <span className="text-gradient">Engineered for Outcomes</span>
                </h1>
                <p className="mt-5 max-w-xl text-secondary/80">
                  Our capability model connects strategy, architecture, delivery, and governance — so you can move at speed with control built in from the start.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary text-sm">
                    Start the Conversation
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/services" className="btn-outline text-sm">
                    See Services
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="mb-1 text-xs uppercase tracking-[0.22em] text-secondary/50">AI Maturity Stages</p>
                {maturityStages.map((s, i) => (
                  <div key={s.stage} className="flex items-start gap-3 rounded-xl border border-secondary/15 bg-background/30 px-4 py-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/15 font-mono text-[9px] font-bold text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{s.stage}</p>
                      <p className="text-xs text-secondary/55">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture diagrams */}
      <Section
        eyebrow="Architecture"
        title="How our capabilities connect"
        description="A scalable architecture that connects enterprise data, LLMs, and governance controls into a unified AI platform."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ArchitectureDiagram />
          <DeliveryFrameworkDiagram />
        </div>
      </Section>

      {/* Capability tracks */}
      <Section
        accent
        eyebrow="Capability Tracks"
        title="Four disciplines. End-to-end coverage."
        description="Each track is a standalone engagement or part of an integrated programme — designed to meet you where you are on the AI maturity curve."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {capabilityTracks.map((track) => (
            <article key={track.title} className="glass card-hover relative overflow-hidden rounded-2xl border border-primary/15 p-6">
              <span className="absolute right-5 top-4 font-mono text-5xl font-bold text-primary/8 select-none">
                {track.number}
              </span>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/15">
                <track.icon size={18} className="text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{track.title}</h3>
              <p className="mt-2 text-sm text-secondary/70">{track.summary}</p>
              <ul className="mt-4 space-y-2">
                {track.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-secondary/65">
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-primary/60" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <section className="section border-y border-secondary/10 bg-background/40">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-secondary/55">Outcomes</p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            <span className="text-white">Business impact </span>
            <span className="text-gradient">we optimise for</span>
          </h2>
          <p className="mt-4 max-w-2xl text-secondary/70">
            Capabilities are measured by operating outcomes, not slideware. Every engagement is scoped to deliver against these four dimensions.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o) => (
              <div key={o.title} className="glass card-hover rounded-2xl border border-primary/15 p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/15">
                  <o.icon size={18} className="text-primary" aria-hidden="true" />
                </div>
                <p className="stat-glow text-2xl font-bold text-white">{o.metric}</p>
                <p className="mt-1 text-base font-semibold text-white">{o.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-secondary/65">{o.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section title="Build your capability roadmap with us" description="">
        <CTA />
      </Section>
    </>
  );
}
