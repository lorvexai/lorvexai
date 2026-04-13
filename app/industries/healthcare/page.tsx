import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, AlertTriangle, Clock,
  Users, FileText, ShieldCheck, Activity
} from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI for NHS & Healthcare | LorvexAI",
  description: "Regulated AI for NHS organisations — referral triage, clinical workflow automation, and patient pathway optimisation built for NHS IG, DCB0129, and clinical safety.",
  alternates: { canonical: "/industries/healthcare" },
  openGraph: {
    title: "AI for NHS & Healthcare | LorvexAI",
    description: "On-premise AI that never moves patient data outside NHS infrastructure — NHS IG, DCB0129 clinical safety, and DSPT aligned.",
    url: "/industries/healthcare",
    type: "website"
  }
};

const painPoints = [
  {
    icon: Clock,
    title: "Referral backlogs are growing faster than capacity",
    body: "Over 7.5 million patients on NHS waiting lists. Manual referral triage takes clinicians 15–30 minutes per letter. AI triage reduces that to seconds — with a clinician reviewing the structured summary, not the raw letter.",
    color: "border-emerald-400/25 bg-emerald-400/5 text-emerald-300"
  },
  {
    icon: FileText,
    title: "Clinical documentation consumes 40% of clinician time",
    body: "Discharge summaries, referral letters, and clinic notes are time-consuming to produce and inconsistent in quality. AI-drafted documentation for clinician review can reclaim hours of clinical time per week.",
    color: "border-blue-400/25 bg-blue-400/5 text-blue-300"
  },
  {
    icon: ShieldCheck,
    title: "Patient data cannot leave NHS infrastructure",
    body: "NHS IG Toolkit and DSPT requirements mean patient-identifiable data must stay within NHS-controlled systems. Cloud-only AI vendors cannot serve these workloads. LorvexAI supports full on-premise deployment.",
    color: "border-orange-400/25 bg-orange-400/5 text-orange-300"
  },
  {
    icon: AlertTriangle,
    title: "AI clinical safety is a regulatory requirement, not a choice",
    body: "DCB0129 requires a named Clinical Safety Officer, a documented Safety Case, and hazard log for any software used in clinical pathways. Deploying AI without this is a governance failure.",
    color: "border-red-400/25 bg-red-400/5 text-red-300"
  }
];

const frameworks = [
  {
    name: "NHS IG Toolkit / DSPT",
    category: "Information Governance",
    requirement: "Demonstrate compliance with NHS data security and protection standards across all systems handling patient data.",
    coverage: "On-premise Llama 3.3 70B deployment keeps all patient data within NHS infrastructure. PII masking prevents patient data reaching any external API. Quarterly IG access log review supported.",
    status: "Aligned" as const
  },
  {
    name: "DCB0129",
    category: "Clinical Safety",
    requirement: "Named Clinical Safety Officer, documented Safety Case, and hazard log for clinical software. Mandatory for NHS deployment.",
    coverage: "NHS Flow Optimizer ships with a DCB0129 Safety Case template, hazard log, and Clinical Safety Officer engagement framework. Escalation pathway routes high-risk triage outputs to immediate human review.",
    status: "Aligned" as const
  },
  {
    name: "UK GDPR / Data Protection Act",
    category: "Data Protection",
    requirement: "Lawful basis for processing special category health data, data minimisation, and right to erasure.",
    coverage: "Patient identifiers anonymised before any processing. Role-based access controls limit data exposure. On-prem deployment eliminates Article 46 third-country transfer concerns.",
    status: "Aligned" as const
  },
  {
    name: "NHS England AI Framework",
    category: "AI Governance",
    requirement: "Transparency, accountability, safety, and fairness in NHS AI deployments. Workforce engagement and clinical oversight required.",
    coverage: "Human-in-the-loop design means clinicians confirm all triage classifications. Model outputs are clearly marked as AI-generated drafts. Performance monitored with bias detection across demographic groups.",
    status: "Aligned" as const
  },
  {
    name: "CQC Fundamental Standards",
    category: "Care Quality",
    requirement: "Safe, effective, and well-led care. Technology must not introduce patient safety risk.",
    coverage: "Red flag detection escalates potentially serious referrals immediately. Confidence indicators on all AI outputs. Full override audit trail when clinicians override AI classification.",
    status: "Aligned" as const
  },
  {
    name: "MHRA AI as Medical Device",
    category: "Medical Device Regulation",
    requirement: "AI systems making or informing clinical decisions may require UKCA marking as a medical device.",
    coverage: "NHS Flow Optimizer is designed as a clinical decision support tool — not a medical device. All clinical decisions remain with the clinician. Regulatory boundary is documented in the Safety Case.",
    status: "Aligned" as const
  }
];

const STATUS_STYLE = {
  Aligned:       "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  Certified:     "bg-blue-400/15 text-blue-300 border-blue-400/30",
  "In Progress": "bg-yellow-400/15 text-yellow-300 border-yellow-400/30"
};

export default function HealthcarePage() {
  return (
    <>
      {/* Hero */}
      <section className="section pb-10 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-emerald-400/30 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-300">NHS & Healthcare</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              <span className="text-white">AI that passes clinical safety review — </span>
              <span className="text-gradient">designed for NHS from day one.</span>
            </h1>
            <p className="mt-5 max-w-3xl text-secondary/80">
              Patient data stays on NHS infrastructure. Every output is a clinician-reviewed draft. DCB0129 clinical safety documentation is included. LorvexAI's NHS Flow Optimizer is built for the reality of NHS deployment — not adapted from a generic AI tool.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { value: "34%",   label: "Faster referral processing" },
                { value: "4.2s",  label: "Average triage time" },
                { value: "94%",   label: "Triage accuracy vs clinician" },
                { value: "100%",  label: "Data stays on NHS infrastructure" }
              ].map((m) => (
                <div key={m.label} className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-emerald-300">{m.value}</p>
                  <p className="mt-1 text-[11px] text-secondary/60">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-sm">Book an NHS Pilot</Link>
              <Link href="/products" className="btn-outline text-sm">View NHS Flow Optimizer</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section pt-2">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-secondary/50">Challenges</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Where NHS teams face the biggest AI barriers</h2>
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

      {/* Product */}
      <section className="section border-y border-secondary/10 bg-background/40 py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-secondary/50">Product for NHS</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">NHS Flow Optimizer</h2>
          <p className="mt-3 max-w-2xl text-secondary/65">Purpose-built for NHS clinical workflow — not a generic AI tool adapted for healthcare.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Referral Triage",
                description: "AI-structured triage summaries from GP referral letters in 4.2 seconds. Red flag detection escalates immediately. Clinician reviews summary, not raw letter.",
                bullets: ["Structured urgency classification", "Automatic red flag escalation", "Clinician override with full audit", "DCB0129 compliant pathway"]
              },
              {
                title: "Discharge Summary Drafting",
                description: "Draft discharge summaries from structured clinical notes for clinician review and sign-off. Consistent format, no missed medications, clear follow-up actions.",
                bullets: ["ICD-10 coded diagnoses", "All medications with doses", "Outstanding investigations flagged", "Clearly marked as AI draft"]
              },
              {
                title: "Waiting List Intelligence",
                description: "Weekly intelligence briefs showing patients approaching 18-week RTT threshold, capacity constraints, and operational recommendations for specialty teams.",
                bullets: ["18-week RTT risk flagging", "Week-on-week comparisons", "Capacity constraint alerts", "Operational recommendations"]
              }
            ].map((feature) => (
              <div key={feature.title} className="glass rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-xs leading-relaxed text-secondary/65 mb-3">{feature.description}</p>
                <ul className="space-y-1.5">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-xs text-secondary/65">
                      <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-emerald-300 opacity-80" />{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300 transition hover:gap-2.5">
              Full NHS Flow Optimizer details <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance frameworks */}
      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-secondary/50">Clinical Safety & IG</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">NHS compliance frameworks we address</h2>
          <p className="mt-3 max-w-2xl text-sm text-secondary/65">
            Each framework is a specific NHS deployment requirement. We document how we address it — not just claim alignment.
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

      {/* On-prem highlight */}
      <section className="section border-t border-secondary/10 bg-background/40 py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-emerald-400/20 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-300">Data Sovereignty</p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Patient data never leaves your infrastructure. Ever.
            </h2>
            <p className="mt-4 max-w-2xl text-secondary/70">
              NHS Flow Optimizer runs Llama 3.3 70B on-premise on NHS hardware. No patient data reaches OpenAI, Anthropic, Google, or any external API. For workloads that don't involve PII, a hybrid mode routes anonymised queries to cloud models for cost efficiency — with PII detection before every external call.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { label: "Full On-Premise", body: "Llama 3.3 70B on NHS hardware. Zero data leaves NHS infrastructure." },
                { label: "Hybrid Mode", body: "PII stays on-prem. Anonymised queries optionally use cloud models." },
                { label: "NHS Private Cloud", body: "Deployment on N3/HSCN-connected infrastructure with NHS IG controls." }
              ].map((opt) => (
                <div key={opt.label} className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 px-4 py-3">
                  <p className="text-xs font-semibold text-emerald-300 mb-1">{opt.label}</p>
                  <p className="text-xs text-secondary/60">{opt.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-sm">Discuss NHS Deployment</Link>
              <Link href="/models" className="btn-outline text-sm">See Llama On-Prem Details</Link>
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
