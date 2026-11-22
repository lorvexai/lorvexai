import type { Metadata } from "next";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

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


const PERSPECTIVE = [
  [
    "Finance, risk and regulatory reporting",
    "My career has included work across Basel, liquidity risk, financial controls, reconciliation, risk data, regulatory reporting and finance transformation in global banking environments."
  ],
  [
    "AI and automation in practice",
    "More recently, my work has expanded into generative AI, RAG, agentic workflows, document intelligence, forecasting, anomaly detection, Python automation and cloud data architecture."
  ],
  [
    "From prototype to operating model",
    "I'm interested in AI that moves beyond an impressive demonstration: systems with clear ownership, sound data, appropriate validation, human oversight and evidence that a business, auditor or regulator can understand."
  ]
];

const QUESTIONS = [
  "Is the data suitable and governed?",
  "Can the output be explained and challenged?",
  "Who remains accountable for decisions?",
  "What evidence will be available when something goes wrong?",
  "Can the system be monitored, improved, paused or retired responsibly?"
];

export default function AboutPage() {
  return (
    <>
      <section className="section pb-0 pt-12 md:pt-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6">
          <div>
            <p className="chip">About</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              <span className="text-heading">Hi, I'm Sree. I write about </span>
              <span className="text-gradient">AI that regulated firms can trust.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary/85">
              I'm an AI transformation leader and practitioner-author with more than 20 years of experience at the intersection
              of finance technology, risk, regulatory reporting, data and automation.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary/80">
              My work has focused on a consistent challenge: how to turn complex finance, risk and regulatory processes into
              systems that are useful in operation, transparent in their decisions and credible under scrutiny.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary/80">
              LorvexAI is where I publish that perspective, through a book, practical reference material and the weekly
              briefing.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/books" className="btn-primary min-h-11 text-sm">
                Explore the book
              </Link>
              <Link href="/newsletter" className="btn-outline min-h-11 text-sm font-semibold">
                <Mail size={15} aria-hidden="true" />
                Get the weekly briefing
              </Link>
              <a
                href="https://www.linkedin.com/in/sreekotha/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline min-h-11 text-sm font-semibold"
              >
                <Linkedin size={15} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-heading">My perspective</h2>
          <div className="mt-5 max-w-3xl space-y-5">
            {PERSPECTIVE.map(([t, d]) => (
              <p key={t} className="text-base leading-relaxed text-secondary/85">
                <strong className="text-heading">{t}. </strong>
                {d}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-8 md:py-10">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-heading">Why LorvexAI exists</h2>
            <p className="mt-4 text-base leading-relaxed text-secondary/85">
              AI will be most valuable in financial services when it is treated as an operating-model and control challenge
              as well as a technology opportunity. LorvexAI explores that in plain language, with practical examples rather
              than generic AI promises.
            </p>
            <p className="mt-4 text-base leading-relaxed text-secondary/85">
              I'm also the author of <em>AI for Financial Risk, Compliance and Regulatory Reporting: Production Systems and
              Architecture for Modern Banking</em>.
            </p>
          </div>
          <div className="card-glow p-6">
            <p className="font-semibold text-heading">The questions I keep coming back to</p>
            <ul className="mt-3 space-y-2.5">
              {QUESTIONS.map((q) => (
                <li key={q} className="flex gap-3 text-base text-secondary/85">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section pt-2 md:pt-4">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-2xl border border-primary/25 bg-primary/10 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-heading">Independence</h2>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-secondary/85">
              LorvexAI is personal, independent research and publishing. It does not represent the views of any current or
              former employer, client, regulator or other organisation. The material is educational and informational only;
              it is not legal, financial, regulatory, compliance or professional advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
