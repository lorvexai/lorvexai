import Link from "next/link";
import AgentTrace from "@/components/AgentTrace";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { getIssues, formatIssueDate } from "@/utils/newsletter";
import { BOOK_KINDLE_URL, BOOK_PAPERBACK_URL } from "@/utils/site";
import { ArrowRight, Mail, Scale, ScrollText, ShieldCheck, Sparkles } from "lucide-react";

const MARQUEE = [
  "PRA SS1/23", "EU AI Act", "DORA", "BCBS 239", "SM&CR", "IFRS 9", "Basel 3.1", "FRTB", "COREP / FINREP",
  "Consumer Duty", "Model Risk", "Agentic RAG", "Human-in-the-loop", "Audit Evidence"
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Govern",
    text: "Model inventory, tiering, validation gates and clear accountability, mapped to PRA SS1/23 and the EU AI Act."
  },
  {
    icon: ScrollText,
    title: "Audit",
    text: "Every retrieval, prompt and decision is logged, so a reviewer can reconstruct what the system did and why."
  },
  {
    icon: Scale,
    title: "Defend",
    text: "Human approval points and evidence packs that stand up when a regulator, auditor or board asks questions."
  }
];

export default function HomePage() {
  const latest = getIssues().find((i) => i.status === "published");

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-10 pt-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-14 md:pt-16">
          <div>
            <p className="chip">
              <Sparkles size={13} aria-hidden="true" />
              Controlled AI for regulated firms
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.03] md:text-6xl">
              <span className="text-heading">AI you can </span>
              <span className="text-gradient">govern, audit</span>
              <span className="text-heading"> and defend</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-secondary/85">
              Research and reference architectures for banking, risk and regulatory technology.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/books" className="btn-primary min-h-11 text-sm">
                Explore the book
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/newsletter" className="btn-outline min-h-11 text-sm font-semibold">
                <Mail size={15} aria-hidden="true" />
                Get the weekly briefing
              </Link>
            </div>
            <p className="mt-6 text-sm font-medium text-secondary/85">
              16 chapters <span className="mx-1.5 text-primary">·</span> 31 AI systems{" "}
              <span className="mx-1.5 text-primary">·</span> 20+ years in finance technology
            </p>
          </div>
          <AgentTrace />
        </div>

        <div className="marquee border-y border-secondary/10 py-3" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={`${m}-${i}`} className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.14em] text-secondary/70">
                {m}
                <span className="ml-10 text-primary/60">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section pb-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <article className="card-glow p-8">
              <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="chip">The book</p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight">
                    AI for Financial Risk, Compliance and Regulatory Reporting
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-secondary/80">
                    One fictional bank, Avon &amp; Wessex Bank (AWB), taken from business case to production. Working Python,
                    governance controls and architecture for credit, market, liquidity and operational risk, AML/KYC and reporting.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={BOOK_PAPERBACK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary min-h-11 text-sm">
                      Buy paperback
                    </a>
                    <a href={BOOK_KINDLE_URL} target="_blank" rel="noopener noreferrer" className="btn-outline min-h-11 text-sm">
                      Kindle
                    </a>
                    <Link href="/books" className="btn-outline min-h-11 text-sm">
                      Contents &amp; code
                    </Link>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/books/title_page.jpg`}
                  alt="Book cover"
                  width={150}
                  height={225}
                  className="mx-auto hidden w-36 rounded-lg border border-primary/30 shadow-2xl shadow-black/40 sm:block"
                />
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section pb-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="max-w-2xl text-3xl font-semibold text-heading md:text-4xl">What controlled AI means here</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {PILLARS.map((p) => (
              <article key={p.title} className="card-glow p-6">
                <p.icon size={22} className="text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-xl font-semibold text-heading">{p.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-secondary/80">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {latest && (
        <section className="section pb-0">
          <div className="mx-auto w-full max-w-6xl px-6">
            <Link href={`/newsletter/${latest.slug}`} className="card-glow group block border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8">
              <p className="chip">
                <Mail size={13} aria-hidden="true" />
                Latest briefing · Issue {latest.number} · {formatIssueDate(latest.date)}
              </p>
              <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-snug md:text-3xl">{latest.title}</h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary/80">{latest.summary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-heading">
                Read the issue <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>
      )}

      <section className="section pb-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-xl font-bold text-primary" aria-hidden="true">
              SK
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-secondary/85">
              <strong className="text-heading">Sreedhara Reddy Kotha</strong> has spent 20+ years in finance technology, risk
              and regulatory reporting. LorvexAI is where he publishes independent work on controlled AI.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-heading">
              About the author <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <CTA />
        </div>
      </section>
    </>
  );
}
