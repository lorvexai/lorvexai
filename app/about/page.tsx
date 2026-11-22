import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

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

const focus = [
  ["Controlled AI architecture", "Retrieval governance, evidence design and human oversight built in from the start."],
  ["Finance and regulatory technology", "Risk, regulatory reporting, data platforms and automation in large institutions."],
  ["Teaching it clearly", "A book with tested code, and a weekly briefing on what regulators changed."]
];

export default function AboutPage() {
  return (
    <>
      <section className="section pb-0 pt-12 md:pt-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <p className="chip">About</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              <span className="text-heading">Hi, I'm Sree. I write about </span>
              <span className="text-gradient">AI that regulated firms can trust.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary/85">
              I've spent more than 20 years in finance technology, risk and regulatory reporting. Most of what I write comes back
              to one question: how do you build AI with governance, audit trails and human oversight in from the start, instead
              of bolted on afterwards?
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary/80">
              LorvexAI is where I publish that work: a book with tested reference code, and a weekly briefing on regulation.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/books" className="btn-primary min-h-11 text-sm">
                Explore the book
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/newsletter" className="btn-outline min-h-11 text-sm font-semibold">
                Get the weekly briefing
              </Link>
            </div>
          </div>

          <aside className="card-glow p-6">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/books/author-avatar.png`}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 rounded-full"
              />
              <div>
                <p className="text-lg font-semibold text-heading">Sreedhara Reddy Kotha</p>
                <p className="text-sm text-secondary/80">Founder, LorvexAI</p>
              </div>
            </div>
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
          <h2 className="text-3xl font-semibold text-heading">What I work on</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {focus.map(([t, d]) => (
              <article key={t} className="card-glow p-6">
                <h3 className="text-xl font-semibold text-heading">{t}</h3>
                <p className="mt-2 text-base leading-relaxed text-secondary/80">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-2xl border border-primary/25 bg-primary/10 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-heading">Independent by design</h2>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-secondary/85">
              This is my own work, done in my own time. It doesn't represent any employer, client or regulator, uses no
              confidential information, and isn't consulting or professional advice.{" "}
              <Link href="/disclaimers" className="font-semibold text-primary hover:text-heading">
                Read the full independence statement
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
