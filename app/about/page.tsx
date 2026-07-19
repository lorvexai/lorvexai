import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import { ArrowRight, Award, BookOpen, CheckCircle2, Cloud, Cpu, GraduationCap, Linkedin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About LorvexAI | Independent Research and Architecture",
  description: "LorvexAI is an independent education, publishing, research, and AI architecture platform created by Sreedhara Reddy Kotha.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About LorvexAI | Independent Research and Architecture",
    description: "Independent education, publishing, research, and architecture for controlled AI systems.",
    url: "/about",
    type: "website"
  }
};

const credentials = [
  { icon: GraduationCap, label: "MTech - Advanced Engineering" },
  { icon: Cloud, label: "Google Cloud Professional Architect" },
  { icon: Award, label: "SAFe Agile Leadership Credentials" },
  { icon: BookOpen, label: "Author - AI for Financial Risk, Compliance and Regulatory Reporting" }
];

const technicalSkills = [
  { icon: Cpu, label: "Agentic RAG and LLM orchestration" },
  { icon: Cloud, label: "Cloud architecture and data platforms" },
  { icon: ShieldCheck, label: "Governance-aware AI design" },
  { icon: BookOpen, label: "Regulatory reporting and finance technology education" }
];

const financeExpertise = [
  "Finance technology, risk, regulatory reporting, data, automation, and enterprise technology",
  "Controlled AI architecture, retrieval governance, evidence design, and human oversight",
  "Educational research into finance, risk, compliance, and regulatory reporting",
  "Independent writing, publishing, technical diagrams, templates, and reference blueprints"
];

const principles = [
  {
    title: "Independent Capacity",
    body: "The work published on LorvexAI is independent, educational, and personal in nature. It does not represent any current or former employer, client, regulator, vendor, financial institution, NHS body, or affiliated organisation."
  },
  {
    title: "No Confidential Information",
    body: "This profile and site do not disclose or rely on confidential employer, client, customer, transaction, regulatory filing, supervisory, or proprietary information."
  },
  {
    title: "Controlled AI Focus",
    body: "The work focuses on how AI can be designed with governance, auditability, human oversight, and operational control in mind."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="section pb-6 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-lg border border-primary/30 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">About LorvexAI</p>
                <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                  <span className="text-white">Independent Research and Architecture </span>
                  <span className="text-gradient">for Controlled AI</span>
                </h1>
                <p className="mt-5 max-w-2xl text-secondary/80">
                  I'm Sreedhara Reddy Kotha, and this is where I publish my own research, writing, and reference architecture on controlled AI — for finance, risk, compliance, regulatory reporting, and enterprise automation. Everything here is personal and independent: it isn't consulting work, product development, or a position taken on behalf of any employer, client, regulator, or organisation I've worked with.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/books" className="btn-primary text-sm">
                    Explore Books
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/disclaimers" className="btn-outline text-sm">
                    Independence Statement
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {principles.map((item) => (
                  <div key={item.title} className="rounded-lg border border-primary/20 bg-primary/10 p-5">
                    <h2 className="text-sm font-semibold text-white">{item.title}</h2>
                    <p className="mt-2 text-sm text-secondary/70">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Who I am"
        title="20+ years across finance technology, risk, regulatory reporting, data, automation, and AI"
        description="I'm a finance technology and AI practitioner with more than two decades of experience across financial services, risk, regulatory reporting, data, automation, and enterprise technology — and this site is where I write about it."
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-primary/25 bg-[#0d2745]/70 p-7">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-primary/40 bg-primary/20 text-2xl font-bold text-primary">
              SK
            </div>
            <div className="mt-5">
              <p className="text-xl font-semibold text-white">Sreedhara Reddy Kotha</p>
              <p className="mt-1 text-sm text-primary">Creator of LorvexAI</p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-secondary/75">
              I've spent more than two decades in financial services, risk, regulatory reporting, data platforms, automation, and enterprise technology. Most of what I write here comes back to one question: how do you design AI systems with governance, auditability, human oversight, and operational control built in from the start, rather than bolted on afterward.
            </p>
            <p className="mt-4 rounded-lg border border-secondary/15 bg-background/35 p-3 text-xs leading-relaxed text-secondary/65">
              I don't disclose or rely on confidential employer, client, customer, transaction, regulatory, or proprietary information here.
            </p>
            <div className="mt-5 space-y-2 border-t border-secondary/15 pt-4">
              {credentials.map((c) => (
                <div key={c.label} className="flex items-start gap-2.5">
                  <c.icon size={13} className="mt-0.5 shrink-0 text-primary/70" />
                  <span className="text-xs text-secondary/65">{c.label}</span>
                </div>
              ))}
            </div>
            <a
              href="https://www.linkedin.com/in/sreekotha/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-white"
            >
              <Linkedin size={15} />
              Connect on LinkedIn
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <div className="glass rounded-lg border border-secondary/20 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/50">
                Experience summary
              </p>
              <p className="text-sm leading-relaxed text-secondary/75">
                Experience informed by two decades across global financial services, finance technology, risk operations, regulatory reporting, data platforms, and AI-enabled transformation.
              </p>
            </div>

            <div className="glass rounded-lg border border-secondary/20 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/50">
                Core technical focus
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {technicalSkills.map((s) => (
                  <div key={s.label} className="flex items-center gap-2.5 rounded-lg border border-primary/15 bg-primary/10 px-3 py-2.5">
                    <s.icon size={14} className="shrink-0 text-primary" />
                    <span className="text-sm text-secondary/80">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-lg border border-secondary/20 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/50">
                Domain focus
              </p>
              <ul className="space-y-2">
                {financeExpertise.map((item) => (
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

      <section className="section border-y border-secondary/10 bg-background/40 py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <div className="flex h-24 w-16 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary md:h-28 md:w-20">
              <BookOpen size={28} />
            </div>
            <div>
              <p className="mb-1 font-mono text-xs uppercase tracking-[0.22em] text-primary">Published Book</p>
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                AI for Financial Risk, Compliance and Regulatory Reporting
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-secondary/70">
                Practitioner-focused educational writing on controlled AI adoption for financial risk, compliance, regulatory reporting, governance, RAG, agents, MLOps, LLMOps, and enterprise banking architecture.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/books" className="btn-outline text-sm">
                View Books
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section title="Read the books, research, and blueprints" description="">
        <CTA />
      </Section>
    </>
  );
}
