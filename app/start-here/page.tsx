import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Start Here: Governed AI for Banking and Risk | LorvexAI",
  description:
    "New to LorvexAI? Pick the path that fits: the book, the article series, the weekly briefing or the free tools for risk and model governance teams.",
  alternates: { canonical: "/start-here" },
  openGraph: {
    title: "Start Here | LorvexAI",
    description: "Pick the path that fits: the book, the article series, the weekly briefing or the free tools.",
    url: "/start-here",
    type: "website"
  }
};

const PATHS: { who: string; line: string; links: { href: string; label: string }[] }[] = [
  {
    who: "I want the full build",
    line: "A fictional UK bank, AWB, taken from business case to production with working Python code and governance built in.",
    links: [
      { href: "/books", label: "The book" },
      { href: "/books/sample-chapter", label: "Read a sample chapter" }
    ]
  },
  {
    who: "I want to learn how to build a regulatory AI assistant",
    line: "A six-part series: why demos fail, citations, agents, orchestration, controls and monitoring. Read in order.",
    links: [
      { href: "/articles/why-rag-demos-fail-in-regulated-banks", label: "Start with Part 1" },
      { href: "/articles", label: "All articles" }
    ]
  },
  {
    who: "I work in model risk or governance",
    line: "How the PRA's model risk principles apply to LLMs and RAG, and where human sign-off belongs.",
    links: [
      { href: "/articles/ss1-23-and-llms-what-model-risk-teams-should-do", label: "SS1/23 and LLMs" },
      { href: "/articles/human-in-the-loop-gates-for-ai-agents", label: "Human-in-the-loop gates" },
      { href: "/downloads/regulatory-rag-evidence-checklist.pdf", label: "Evidence checklist (PDF)" }
    ]
  },
  {
    who: "I need to keep up with regulation",
    line: "A weekly briefing, a dated calendar and a radar of what is live, being built and worth watching.",
    links: [
      { href: "/newsletter", label: "RegAI Brief" },
      { href: "/regulatory-calendar", label: "Regulatory calendar" },
      { href: "/radar", label: "RegTech and AI Radar" }
    ]
  }
];

export default function StartHerePage() {
  return (
    <section className="section pt-12 md:pt-16">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "Start here", url: "https://lorvexai.com/start-here/" }} />
      <div className="mx-auto w-full max-w-5xl px-6">
        <h1 className="text-4xl font-bold text-heading md:text-5xl">Start here</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary/85">
          LorvexAI is an independent publication on AI that banks can govern, audit and defend, written by Sreedhara Reddy
          Kotha. Pick the path that matches what you need.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PATHS.map((p) => (
            <article key={p.who} className="card-solid flex flex-col p-6">
              <h2 className="text-xl font-semibold leading-snug text-heading">{p.who}</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary/80">{p.line}</p>
              <ul className="mt-auto flex flex-wrap gap-3 pt-5">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-primary hover:text-heading" {...(l.href.endsWith(".pdf") ? { prefetch: false } : {})}>
                      {l.label} <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-secondary/70">
          Independent, educational writing. Not legal, regulatory or investment advice, and not the view of any employer.
          Spotted a mistake? See the <Link href="/corrections" className="text-primary underline underline-offset-2">corrections log</Link>.
        </p>
      </div>
    </section>
  );
}
