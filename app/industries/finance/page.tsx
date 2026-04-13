import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, AlertTriangle, FileText,
  BarChart3, ShieldCheck, Clock, TrendingDown, Scale
} from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI for Financial Services & Banking | LorvexAI",
  description: "Regulated AI for FCA, PRA, and Basel-governed organisations — compliance automation, model risk governance, and treasury intelligence built for UK banking.",
  alternates: { canonical: "/industries/finance" },
  openGraph: {
    title: "AI for Financial Services & Banking | LorvexAI",
    description: "Reduce regulatory burden, automate compliance workflows, and govern AI risk — built for FCA, PRA SS1/23, and Basel IV.",
    url: "/industries/finance",
    type: "website"
  }
};

const painPoints = [
  {
    icon: FileText,
    title: "Regulatory volume is outpacing capacity",
    body: "FCA, PRA, and Basel papers arrive faster than compliance teams can read, extract, and map them to controls. Manual obligation tracking creates gaps, delays, and audit risk.",
    color: "border-orange-400/25 bg-orange-400/5 text-orange-300"
  },
  {
    icon: Scale,
    title: "Model risk governance under PRA SS1/23",
    body: "SS1/23 requires documented model validation, ongoing monitoring, and explainability for every AI system in scope. Most firms have models running without compliant governance.",
    color: "border-red-400/25 bg-red-400/5 text-red-300"
  },
  {
    icon: BarChart3,
    title: "Treasury reporting is still manual",
    body: "ALCO packs, LCR/NSFR calculations, and stress test reports are assembled by hand from multiple systems — time-consuming, error-prone, and hard to audit.",
    color: "border-blue-400/25 bg-blue-400/5 text-blue-300"
  },
  {
    icon: AlertTriangle,
    title: "AI audit trails don't exist",
    body: "SMCR requires that Senior Managers can explain AI-assisted decisions. Without immutable reasoning traces and session logs, you cannot satisfy a regulator's request for evidence.",
    color: "border-violet-400/25 bg-violet-400/5 text-violet-300"
  }
];

const frameworks = [
  {
    name: "FCA Consumer Duty",
    category: "Conduct Regulation",
    requirement: "Demonstrate good outcomes for retail customers across all products and services.",
    coverage: "Scope enforcement guardrails prevent AI from providing regulated advice; outcome logging creates evidence trail for Consumer Duty assessments.",
    status: "Aligned" as const
  },
  {
    name: "PRA SS1/23",
    category: "Model Risk Governance",
    requirement: "Documented model inventory, validation, monitoring, and explainability for all material models.",
    coverage: "Every LLM call logs the model version, parameters, prompt template, and output. Evaluation framework provides ongoing performance monitoring with drift detection.",
    status: "Aligned" as const
  },
  {
    name: "Basel IV / Basel 3.1",
    category: "Capital & Liquidity",
    requirement: "Accurate, auditable calculations for LCR, NSFR, SA-CCR, and FRTB across all positions.",
    coverage: "Treasury Sentinel computes LCR/NSFR against live position data with source references for every metric. Immutable audit log satisfies PRA reporting requirements.",
    status: "Aligned" as const
  },
  {
    name: "SMCR",
    category: "Senior Manager Accountability",
    requirement: "Senior Managers must be able to explain and evidence decisions made with AI assistance.",
    coverage: "Full session audit trail captures the query, retrieved sources, model reasoning, output, and human decision for every interaction. 7-year retention standard.",
    status: "Aligned" as const
  },
  {
    name: "Market Abuse Regulation",
    category: "Market Integrity",
    requirement: "Detect, prevent, and report potential market abuse including insider trading patterns.",
    coverage: "MNPI pattern detection in Treasury Sentinel flags outputs that may reference material non-public information before they reach users.",
    status: "Aligned" as const
  },
  {
    name: "UK GDPR",
    category: "Data Protection",
    requirement: "Lawful basis for processing, data minimisation, right to explanation for automated decisions.",
    coverage: "PII masking before LLM calls, role-based data scoping, and explainable AI outputs with source citations. On-prem deployment option eliminates third-party data transfer.",
    status: "Aligned" as const
  }
];

const STATUS_STYLE = {
  Aligned:     "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  Certified:   "bg-blue-400/15 text-blue-300 border-blue-400/30",
  "In Progress": "bg-yellow-400/15 text-yellow-300 border-yellow-400/30"
};

const products = [
  {
    name: "Regulatory Intelligence Platform",
    tagline: "Turn regulatory documents into mapped obligations in minutes, not weeks.",
    bullets: [
      "Automated obligation extraction from FCA, PRA, and Basel publications",
      "Control gap analysis against your existing control inventory",
      "Continuous monitoring for new regulatory changes with alert scoring",
      "Full audit trail for every output — ready for regulator review"
    ],
    color: "border-blue-400/25 bg-blue-400/5",
    accent: "text-blue-300"
  },
  {
    name: "Treasury Sentinel",
    tagline: "Real-time liquidity intelligence with PRA-grade auditability.",
    bullets: [
      "LCR, NSFR, and SA-CCR computed against live position data",
      "Automated ALCO report generation with human review workflow",
      "Threshold breach alerting with stress scenario modelling",
      "Every metric references its source data for audit"
    ],
    color: "border-orange-400/25 bg-orange-400/5",
    accent: "text-orange-300"
  }
];

export default function FinancePage() {
  return (
    <>
      {/* Hero */}
      <section className="section pb-10 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-blue-400/30 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blue-300">Financial Services & Banking</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              <span className="text-white">AI built for the </span>
              <span className="text-gradient">regulatory reality of UK finance.</span>
            </h1>
            <p className="mt-5 max-w-3xl text-secondary/80">
              FCA, PRA, and Basel-governed organisations face a regulatory burden that grows faster than teams can handle. LorvexAI automates compliance workflows, governs AI risk under SS1/23, and produces the audit evidence regulators actually ask for.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { value: "60%",    label: "Faster compliance analysis" },
                { value: "8 wks",  label: "From pilot to production" },
                { value: "7-yr",   label: "Audit trail retention" },
                { value: "40–70%", label: "Cost reduction via model routing" }
              ].map((m) => (
                <div key={m.label} className="rounded-2xl border border-blue-400/20 bg-blue-400/5 px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-blue-300">{m.value}</p>
                  <p className="mt-1 text-[11px] text-secondary/60">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-sm">Book a Finance Pilot</Link>
              <Link href="/products" className="btn-outline text-sm">View Products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section pt-2">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-secondary/50">Challenges</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Where regulated finance teams lose time and create risk</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {painPoints.map((p) => (
              <div key={p.title} className={`glass rounded-2xl border p-6 ${p.color}`}>
                <div className="mb-3 flex items-center gap-3">
                  <div className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border ${p.color}`}>
                    <p.icon size={16} aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-white">{p.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-secondary/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section border-y border-secondary/10 bg-background/40 py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-secondary/50">Products for Finance</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Two products built for regulated finance</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {products.map((prod) => (
              <div key={prod.name} className={`glass card-hover rounded-2xl border p-6 ${prod.color}`}>
                <p className={`font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${prod.accent}`}>Product</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{prod.name}</h3>
                <p className="mt-2 text-sm text-secondary/70">{prod.tagline}</p>
                <ul className="mt-4 space-y-2">
                  {prod.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-secondary/70">
                      <CheckCircle2 size={13} className={`mt-0.5 shrink-0 ${prod.accent} opacity-80`} />{b}
                    </li>
                  ))}
                </ul>
                <Link href="/products" className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${prod.accent} transition hover:gap-2.5`}>
                  Learn more <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance frameworks */}
      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-secondary/50">Regulatory Coverage</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Compliance frameworks we address</h2>
          <p className="mt-3 max-w-2xl text-sm text-secondary/65">
            Each framework card explains the specific requirement and how LorvexAI's platform addresses it technically — not just a badge, but a documented approach.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((f) => (
              <div key={f.name} className="glass rounded-2xl border border-secondary/15 p-5">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-white">{f.name}</p>
                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-secondary/45">{f.category}</p>
                  </div>
                  <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] ${STATUS_STYLE[f.status]}`}>
                    {f.status}
                  </span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-secondary/55 italic border-l-2 border-secondary/20 pl-3">{f.requirement}</p>
                <p className="text-xs leading-relaxed text-secondary/70">{f.coverage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="section border-t border-secondary/10 bg-background/40 py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-blue-400/20 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blue-300">Case Outcome</p>
            <blockquote className="mt-4 text-xl font-medium leading-relaxed text-white md:text-2xl">
              "We reduced the time to map a new PRA circular to our control framework from 3 weeks to 2 days. The audit trail means we can respond to a regulator request in hours, not weeks."
            </blockquote>
            <p className="mt-4 text-sm text-secondary/55">— Head of Regulatory Change, UK Tier 1 Bank (pilot client)</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-sm">Start Your Finance Pilot</Link>
              <Link href="/blog/agentic-ai-design-patterns" className="btn-outline text-sm">Read: Agents for Compliance</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <CTA />
        </div>
      </section>
    </>
  );
}
