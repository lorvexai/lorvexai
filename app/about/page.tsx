import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About LorvexAI | Founders & Mission",
  description: "LorvexAI is founded by AI and finance practitioners with 20+ years building production systems for HSBC, JPMorgan, and Deutsche Bank.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About LorvexAI | Founders & Mission",
    description: "Founded by practitioners with 20+ years at HSBC, JPMorgan, and Deutsche Bank — building production AI for regulated industries.",
    url: "/about",
    type: "website"
  }
};
import CTA from "@/components/CTA";
import MethodologySection from "@/components/MethodologySection";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import DeliveryFrameworkDiagram from "@/components/DeliveryFrameworkDiagram";
import {
  ArrowRight,
  CheckCircle2,
  Linkedin,
  BookOpen,
  ShieldCheck,
  Cpu,
  Cloud,
  BarChart3,
  GraduationCap,
  Award
} from "lucide-react";

const founder = {
  name: "Sreedhara Kotha",
  shortName: "Sree",
  role: "Founder, LorvexAI Technologies Ltd",
  linkedin: "https://www.linkedin.com/in/sreekotha/",
  summary:
    "Sreedhara Reddy Kotha (Sree) is a Senior Finance Techno-Functional Consultant with over 20 years of experience driving AI and technology transformation for global financial institutions. He works at the intersection of finance, risk, and AI — creating high-performance, production-ready solutions that tackle the industry's most difficult regulatory and operational challenges.",
  experience: [
    { company: "HSBC",            role: "Senior Finance Technology Consultant" },
    { company: "JPMorgan Chase",  role: "Finance & Risk Technology Lead"       },
    { company: "Deutsche Bank",   role: "Regulatory Reporting Architect"       },
    { company: "Lehman Brothers", role: "Finance Systems Consultant"           }
  ],
  regulators: ["Bank of England", "US Federal Reserve", "HKMA"],
  technicalSkills: [
    { icon: Cpu,       label: "Agentic RAG & LLM Orchestration"     },
    { icon: Cloud,     label: "Google Cloud Professional Architect"  },
    { icon: BarChart3, label: "Advanced Python & ML Engineering"     },
    { icon: ShieldCheck, label: "Regulatory Reporting & Basel III/IV" }
  ],
  financeExpertise: [
    "Regulatory reporting — Basel III/IV capital frameworks",
    "RWA forecasting, projection, and financial controls",
    "Risk data aggregation aligned to BCBS 239 principles",
    "Finance data quality, lineage, and reconciliation",
    "PRA, Fed, and HKMA regulatory platform builds"
  ],
  credentials: [
    { icon: GraduationCap, label: "MTech — Advanced Engineering"          },
    { icon: Cloud,         label: "Google Cloud Professional Architect"   },
    { icon: Award,         label: "SAFe® Agile Leadership Credentials"    },
    { icon: BookOpen,      label: "Author — AI for Financial Risk, Compliance & Regulatory Reporting" }
  ]
};

const principles = [
  {
    title: "Responsible by Design",
    body: "Governance and safety are embedded across every stage of delivery — not added at the end. Every system ships with audit trails, explainability hooks, and control boundaries."
  },
  {
    title: "Performance at Scale",
    body: "Systems optimised for latency, reliability, and operational cost. We build for production load from day one — not proof-of-concept benchmarks."
  },
  {
    title: "Research-Driven",
    body: "We ship with the latest advances in evaluation, agentic design, and LLM tooling. Our work is grounded in published research and real-world enterprise deployments."
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section pb-6 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-primary/30 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">About LorvexAI</p>
                <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                  <span className="text-white">Built by People Who </span>
                  <span className="text-gradient">Know the Problem</span>
                </h1>
                <p className="mt-5 max-w-xl text-secondary/80">
                  LorvexAI was founded by practitioners with two decades of experience inside the world&apos;s largest financial institutions — building the systems that regulators rely on, and applying that insight to AI systems that actually work in production.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary text-sm">
                    Work With Us
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/services" className="btn-outline text-sm">
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="glass rounded-2xl border border-primary/20 p-5">
                  <h3 className="text-sm font-semibold text-white">Mission</h3>
                  <p className="mt-2 text-sm text-secondary/70">
                    Deliver enterprise AI systems that transform how organisations reason, automate, and stay compliant — in environments where the stakes are real.
                  </p>
                </div>
                <div className="glass rounded-2xl border border-primary/20 p-5">
                  <h3 className="text-sm font-semibold text-white">Vision</h3>
                  <p className="mt-2 text-sm text-secondary/70">
                    Build intelligent systems that augment human decision-making without sacrificing governance, auditability, or institutional trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder profile */}
      <Section
        eyebrow="Our Founder"
        title="20+ years at the frontier of finance and AI"
        description="LorvexAI is led by a practitioner who has built production systems for the world's most demanding financial institutions."
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Profile card */}
          <div
            className="relative overflow-hidden rounded-3xl p-px"
            style={{
              background:
                "linear-gradient(135deg, rgba(47,128,237,0.6) 0%, rgba(86,163,255,0.25) 50%, rgba(15,42,74,0.5) 100%)"
            }}
          >
            <div
              className="relative flex flex-col gap-5 rounded-[calc(1.5rem-1px)] p-7"
              style={{
                background:
                  "linear-gradient(160deg, rgba(11,31,58,0.95) 0%, rgba(19,41,75,0.9) 100%)"
              }}
            >
              {/* Glow orb */}
              <div
                className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full opacity-15 blur-3xl"
                style={{ background: "#2F80ED" }}
                aria-hidden="true"
              />
              {/* Avatar placeholder */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/40 bg-primary/20 text-2xl font-bold text-primary">
                SK
              </div>
              <div>
                <p className="text-xl font-semibold text-white">{founder.name}</p>
                <p className="mt-1 text-sm text-primary">{founder.role}</p>
              </div>
              <p className="text-sm leading-relaxed text-secondary/75">{founder.summary}</p>

              {/* Credentials */}
              <div className="space-y-2 border-t border-secondary/15 pt-4">
                {founder.credentials.map((c) => (
                  <div key={c.label} className="flex items-start gap-2.5">
                    <c.icon size={13} className="mt-0.5 shrink-0 text-primary/70" />
                    <span className="text-xs text-secondary/65">{c.label}</span>
                  </div>
                ))}
              </div>

              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-white"
              >
                <Linkedin size={15} />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Detail columns */}
          <div className="flex flex-col gap-6">
            {/* Experience */}
            <div className="glass rounded-2xl border border-secondary/20 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/50">
                Enterprise Experience
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {founder.experience.map((e) => (
                  <div key={e.company} className="flex items-start gap-3 rounded-xl border border-secondary/15 bg-background/30 px-4 py-3">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-primary/60" />
                    <div>
                      <p className="text-sm font-semibold text-white">{e.company}</p>
                      <p className="text-xs text-secondary/55">{e.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulator platforms */}
            <div className="glass rounded-2xl border border-secondary/20 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/50">
                Regulatory Platforms Delivered For
              </p>
              <div className="flex flex-wrap gap-2">
                {founder.regulators.map((r) => (
                  <span key={r} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical skills */}
            <div className="glass rounded-2xl border border-secondary/20 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/50">
                Core Technical Expertise
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {founder.technicalSkills.map((s) => (
                  <div key={s.label} className="flex items-center gap-2.5 rounded-xl border border-primary/15 bg-primary/10 px-3 py-2.5">
                    <s.icon size={14} className="shrink-0 text-primary" />
                    <span className="text-sm text-secondary/80">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Finance expertise */}
            <div className="glass rounded-2xl border border-secondary/20 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/50">
                Finance Domain Expertise
              </p>
              <ul className="space-y-2">
                {founder.financeExpertise.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-secondary/70">
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Book highlight */}
      <section className="section border-y border-secondary/10 bg-background/40 py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <div className="flex h-24 w-16 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-gradient-to-br from-[#13294B] to-[#1D4C8F] text-primary md:h-28 md:w-20">
              <BookOpen size={28} />
            </div>
            <div>
              <p className="mb-1 font-mono text-xs uppercase tracking-[0.22em] text-primary">Published Book</p>
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                AI for Financial Risk, Compliance and Regulatory Reporting
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-secondary/70">
                Sree&apos;s published work on applying AI and LLM systems to financial risk management, regulatory reporting, and compliance automation — drawing from two decades of hands-on experience at tier-1 banks.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/research" className="btn-outline text-sm">
                View Research
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <Section
        accent
        eyebrow="Operating Principles"
        title="Engineering excellence and trusted AI systems"
        description="We blend research depth with production pragmatism — built on principles shaped by 20+ years in regulated environments."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((p, i) => (
            <article key={p.title} className="glass card-hover relative overflow-hidden rounded-2xl border border-primary/15 p-6">
              <span className="absolute right-4 top-4 font-mono text-5xl font-bold text-primary/8 select-none">
                0{i + 1}
              </span>
              <h4 className="text-lg font-semibold text-white">{p.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-secondary/70">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Architecture diagrams */}
      <Section
        eyebrow="Architecture"
        title="AI Capabilities"
        description="A scalable architecture that connects enterprise data, LLMs, and governance controls."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ArchitectureDiagram />
          <DeliveryFrameworkDiagram />
        </div>
      </Section>

      <MethodologySection />

      <Section title="Partner with LorvexAI" description="">
        <CTA />
      </Section>
    </>
  );
}
