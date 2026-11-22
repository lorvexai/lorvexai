import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

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

const STATS = [
  ["20+", "years in finance technology"],
  ["16", "chapters, one case study"],
  ["31", "AI systems with tested code"]
];

const PRINCIPLES = [
  ["Governance first", "Controls, ownership and validation gates are designed in at the start, not added once a regulator asks."],
  ["Evidence over claims", "Every output should be traceable to a source and a log entry that a reviewer can check."],
  ["People stay accountable", "AI prepares and drafts. A named human reviews, approves and answers for the result."]
];

export default function AboutPage() {
  return (
    <>
      <section className="section pb-0 pt-12 md:pt-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.25fr_0.75fr] md:items-start">
          <div>
            <p className="chip">About</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              <span className="text-heading">AI for regulated finance, </span>
              <span className="text-gradient">built to be audited.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary/85">
              I'm Sree. I've spent two decades building the finance and risk systems behind regulatory submissions to the PRA,
              EBA, HKMA and the Federal Reserve. Now I write about the next problem: how to put AI into those same
              environments without losing control of it.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary/80">
              LorvexAI is where I publish that work: a book with tested reference code, and a weekly briefing on what
              regulators changed.
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
          </div>

          <aside className="card-glow p-6">
            <div>
                <p className="text-lg font-semibold text-heading">Sreedhara Reddy Kotha</p>
                <p className="text-sm text-secondary/80">Author and founder, LorvexAI</p>
              </div>
            <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-secondary/15 pt-5">
              {STATS.map(([n, label]) => (
                <div key={label}>
                  <dt className="text-2xl font-bold text-gradient">{n}</dt>
                  <dd className="mt-1 text-sm leading-snug text-secondary/80">{label}</dd>
                </div>
              ))}
            </dl>
            <a
              href="https://www.linkedin.com/in/sreekotha/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 border-t border-secondary/15 pt-4 text-sm font-semibold text-primary hover:text-heading"
            >
              <Linkedin size={15} aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </aside>
        </div>
      </section>

      <section className="section pb-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-heading">How I think about it</h2>
          <ol className="mt-6 grid gap-5 md:grid-cols-3">
            {PRINCIPLES.map(([t, d], i) => (
              <li key={t} className="card-glow p-6">
                <span className="font-mono text-sm font-semibold text-primary">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold text-heading">{t}</h3>
                <p className="mt-2 text-base leading-relaxed text-secondary/80">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
