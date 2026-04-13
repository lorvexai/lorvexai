import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, AlertTriangle, Lock,
  Building2, FileCheck, Eye, Cpu
} from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI for Regulated Enterprise | LorvexAI",
  description: "Enterprise AI governance that satisfies board, legal, and IT security — ISO 42001, SOC 2, GDPR, and EU AI Act aligned. 8-week pilot to production.",
  alternates: { canonical: "/industries/enterprise" },
  openGraph: {
    title: "AI for Regulated Enterprise | LorvexAI",
    description: "AI governance frameworks, explainable outputs, and audit trails for regulated enterprise — compliant by design, not by retrofit.",
    url: "/industries/enterprise",
    type: "website"
  }
};

const painPoints = [
  {
    icon: FileCheck,
    title: "AI governance frameworks don't match enterprise risk",
    body: "ISO 42001 and the EU AI Act require documented AI risk assessment, governance policies, and accountability structures. Most enterprises are deploying AI without the governance framework in place.",
    color: "border-violet-400/25 bg-violet-400/5 text-violet-300"
  },
  {
    icon: Lock,
    title: "IT security won't approve cloud LLMs",
    body: "Enterprise IT and information security teams require data residency guarantees, vendor SOC 2 certifications, and documented data processing agreements before approving any AI system for production.",
    color: "border-red-400/25 bg-red-400/5 text-red-300"
  },
  {
    icon: Eye,
    title: "Legal needs explainable AI for audit",
    body: "When a decision is made with AI assistance, legal and compliance need to be able to explain what information the AI used, what it concluded, and why a human accepted or overrode it. Black-box AI fails this test.",
    color: "border-blue-400/25 bg-blue-400/5 text-blue-300"
  },
  {
    icon: Cpu,
    title: "Procurement requires certifications you can't produce",
    body: "Enterprise procurement and vendor assessment processes require SOC 2 Type II reports, ISO 27001 certificates, data processing agreements, and AI-specific governance documentation before sign-off.",
    color: "border-orange-400/25 bg-orange-400/5 text-orange-300"
  }
];

const frameworks = [
  {
    name: "ISO 42001",
    category: "AI Management System",
    requirement: "Establish, implement, and maintain an AI management system covering AI risk, governance, accountability, and continuous improvement.",
    coverage: "Every LorvexAI deployment includes an AI governance layer with documented risk assessment, model inventory, accountability mapping, and ongoing evaluation framework — the building blocks of an ISO 42001-aligned AIMS.",
    status: "Aligned" as const
  },
  {
    name: "EU AI Act",
    category: "AI Regulation (High-Risk)",
    requirement: "High-risk AI systems (including those used in employment, credit, and critical infrastructure) require conformity assessment, transparency, human oversight, and registration.",
    coverage: "LorvexAI designs all systems as human-in-the-loop with explicit AI output labelling, confidence indicators, override mechanisms, and immutable audit logs — core requirements for high-risk AI system compliance.",
    status: "Aligned" as const
  },
  {
    name: "SOC 2 Type II",
    category: "Security & Availability",
    requirement: "Demonstrate security, availability, processing integrity, confidentiality, and privacy controls over a sustained period.",
    coverage: "LorvexAI platform components are deployed on SOC 2 Type II certified cloud infrastructure (AWS, Azure, GCP). On-premise deployments use customer-owned infrastructure with customer-defined security controls.",
    status: "Aligned" as const
  },
  {
    name: "ISO 27001",
    category: "Information Security",
    requirement: "Information security management system covering risk assessment, controls, and continuous improvement.",
    coverage: "Access controls, encryption at rest and in transit, audit logging, and incident response procedures are standard in all deployments. Deployment architecture documentation supports customer ISO 27001 assessments.",
    status: "Aligned" as const
  },
  {
    name: "GDPR / UK GDPR",
    category: "Data Protection",
    requirement: "Lawful basis for processing, data minimisation, DPIA for high-risk processing, and rights of data subjects including explanation of automated decisions.",
    coverage: "PII detection and masking, data minimisation by design, documented lawful basis for each processing activity, and explainable AI outputs satisfy GDPR Article 22 requirements for automated decision-making.",
    status: "Aligned" as const
  },
  {
    name: "UK ICO AI Guidance",
    category: "AI & Data Protection",
    requirement: "Transparency about AI use, fairness in AI processing, meaningful human oversight, and accountability documentation.",
    coverage: "All AI-generated outputs are explicitly labelled, confidence indicators communicate uncertainty, human override is always available, and accountability is documented in the AI governance layer.",
    status: "Aligned" as const
  }
];

const STATUS_STYLE = {
  Aligned:       "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  Certified:     "bg-blue-400/15 text-blue-300 border-blue-400/30",
  "In Progress": "bg-yellow-400/15 text-yellow-300 border-yellow-400/30"
};

const products = [
  {
    name: "Regulatory Intelligence Platform",
    sector: "All regulated industries",
    description: "Obligation extraction, control gap analysis, and compliance monitoring for any regulatory framework — not just finance.",
    color: "border-blue-400/25 bg-blue-400/5",
    accent: "text-blue-300"
  },
  {
    name: "NHS Flow Optimizer",
    sector: "Healthcare & public sector",
    description: "Clinical workflow automation with full on-premise deployment — applicable beyond NHS to any health-adjacent regulated organisation.",
    color: "border-emerald-400/25 bg-emerald-400/5",
    accent: "text-emerald-300"
  },
  {
    name: "Treasury Sentinel",
    sector: "Finance, insurance & investment",
    description: "Liquidity and risk monitoring with board-grade auditability — applicable to any organisation with treasury, liquidity, or capital risk reporting.",
    color: "border-orange-400/25 bg-orange-400/5",
    accent: "text-orange-300"
  }
];

export default function EnterprisePage() {
  return (
    <>
      {/* Hero */}
      <section className="section pb-10 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-violet-400/30 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-violet-300">Regulated Enterprise</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              <span className="text-white">Enterprise AI governance that satisfies </span>
              <span className="text-gradient">your board, legal, and IT security.</span>
            </h1>
            <p className="mt-5 max-w-3xl text-secondary/80">
              Enterprise AI deployments fail at procurement, legal review, or IT security — not at the demo stage. LorvexAI builds AI systems that pass the governance gauntlet: ISO 42001, SOC 2, EU AI Act, and GDPR documentation included, not retrofitted.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { value: "8 wks",  label: "Pilot to production" },
                { value: "ISO 42001", label: "AI governance aligned" },
                { value: "SOC 2",  label: "Infrastructure certified" },
                { value: "3",      label: "Products for enterprise" }
              ].map((m) => (
                <div key={m.label} className="rounded-2xl border border-violet-400/20 bg-violet-400/5 px-4 py-3 text-center">
                  <p className="text-xl font-bold text-violet-300 leading-tight mt-1">{m.value}</p>
                  <p className="mt-1 text-[11px] text-secondary/60">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-sm">Start an Enterprise Pilot</Link>
              <Link href="/platform" className="btn-outline text-sm">View the Regulated AI Stack</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section pt-2">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-secondary/50">Enterprise AI Barriers</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Why enterprise AI projects stall before go-live</h2>
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
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-secondary/50">Products</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Three products. All enterprise-ready.</h2>
          <p className="mt-3 max-w-2xl text-secondary/65">
            Every product ships with the governance documentation enterprise procurement teams require.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {products.map((prod) => (
              <div key={prod.name} className={`glass card-hover rounded-2xl border p-5 ${prod.color}`}>
                <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${prod.accent}`}>{prod.sector}</p>
                <h3 className="mt-2 font-semibold text-white">{prod.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/65">{prod.description}</p>
                <Link href="/products" className={`mt-4 inline-flex items-center gap-1 text-xs font-medium ${prod.accent} transition hover:gap-2`}>
                  View product <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance frameworks */}
      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-secondary/50">Governance Frameworks</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Enterprise AI compliance frameworks</h2>
          <p className="mt-3 max-w-2xl text-sm text-secondary/65">
            Documentation your procurement, legal, and IT security teams will ask for — produced as a standard deliverable, not an afterthought.
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

      {/* What's included */}
      <section className="section border-t border-secondary/10 bg-background/40 py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-violet-400/20 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-violet-300">What's Included</p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Every enterprise deployment includes governance documentation
            </h2>
            <p className="mt-4 text-secondary/70 max-w-2xl">
              The artefacts your procurement, legal, information security, and board require — produced as standard deliverables, not billable extras.
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {[
                "AI Risk Assessment (ISO 42001 aligned)",
                "Data Processing Agreement (GDPR Article 28)",
                "Model Inventory and Governance Policy",
                "Audit Trail Architecture Documentation",
                "Security Architecture and Data Flow Diagrams",
                "Evaluation Framework and Performance Baselines",
                "Human Oversight and Override Procedures",
                "Incident Response Plan for AI Systems"
              ].map((item) => (
                <div key={item} className="flex gap-2 rounded-xl border border-secondary/15 bg-background/30 px-4 py-2.5">
                  <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-violet-300" />
                  <span className="text-sm text-secondary/75">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-sm">Discuss Your Requirements</Link>
              <Link href="/platform" className="btn-outline text-sm">See the Regulated AI Stack</Link>
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
