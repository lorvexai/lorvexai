import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { NEWSLETTER_NAME } from "@/utils/site";
import { formatIssueDate, getIssues } from "@/utils/newsletter";

export const metadata: Metadata = {
  title: `${NEWSLETTER_NAME} | Weekly AI and Financial Regulation Briefing | LorvexAI`,
  description:
    "A weekly briefing on what PRA, FCA, EBA and Federal Reserve developments mean for AI in financial risk and regulatory reporting.",
  alternates: { canonical: "/newsletter" }
};

const FORMAT = [
  ["Lead story", "The one development this week that matters most, with what it changes for you and a short list of actions."],
  ["Finance regulation", "PRA, FCA, Bank of England, EBA, Basel Committee, FSB and US agencies: capital, resilience, AML and stablecoins."],
  ["Global AI regulation", "EU AI Act dates, UK supervisory expectations, FSB work and US state law, in plain terms."],
  ["AI and fintech technology", "What is live, what is being built and what is hype, with primary sources linked on every item."]
];

const AUDIENCE = ["Chief risk officers", "Model risk teams", "Regulatory reporting heads", "RegTech builders"];

export default function NewsletterPage() {
  const issues = getIssues();
  const latest = issues[0];
  const sourceCount = (i: (typeof issues)[number]) =>
    i.headline.sources.length + i.sections.reduce((n, sec) => n + sec.items.reduce((m, it) => m + it.sources.length, 0), 0);

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: NEWSLETTER_NAME, url: "https://lorvexai.com/newsletter/", description: "A weekly briefing on AI and financial regulation." }} />
      <section className="section pb-8 pt-14 md:pt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold text-heading md:text-5xl">{NEWSLETTER_NAME}</h1>
            <p className="mt-4 max-w-2xl text-lg text-secondary/75">
              A short weekly briefing on what PRA, FCA, EBA and Federal Reserve changes mean for AI in financial risk and
              regulatory reporting. Written for risk leaders, regulatory reporting heads and RegTech builders.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Who it is for">
              {AUDIENCE.map((a) => (
                <li key={a} className="chip">{a}</li>
              ))}
            </ul>
            <p className="mt-7 max-w-xl rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm leading-relaxed text-secondary/85">
              Email subscriptions are opening soon. Until then, every issue is free to read on this site.
              {issues[0] && (
                <>
                  {" "}
                  <Link href={`/newsletter/${issues[0].slug}`} className="font-semibold text-primary hover:text-heading">
                    Read Issue {issues[0].number}
                  </Link>
                  .
                </>
              )}
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-secondary/75">
              Written by Sreedhara Reddy Kotha, author of the book behind this site, with over 20 years in finance, risk and
              regulatory technology. <Link href="/about" className="font-semibold text-primary hover:text-heading">About the author</Link>
            </p>
          </div>
          {latest && (
            <Link href={`/newsletter/${latest.slug}`} className="card-glow group block p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Latest: Issue {latest.number}</span>
                <span className="font-mono text-xs text-secondary/75">{formatIssueDate(latest.date)}</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold leading-snug text-heading">{latest.headline.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary/80">{latest.summary}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-secondary/75">Do this week</p>
              <ul className="mt-2 grid gap-2 text-sm leading-relaxed text-secondary/80">
                {latest.takeaways.slice(0, 2).map((t) => (
                  <li key={t} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-xs text-secondary/70">
                {latest.sections.reduce((n, sec) => n + sec.items.length, 1)} items · {sourceCount(latest)} linked sources
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-heading">
                Read the full issue <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          )}
        </div>
      </section>

      <section className="section pt-4">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-2xl font-semibold text-heading">All issues</h2>
          <div className="mt-6 grid gap-5">
            {issues.map((i) => (
              <Link key={i.slug} href={`/newsletter/${i.slug}`} className="card-glow group p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="chip">Issue {i.number}</span>
                  <span className="sr-only"> · </span>
                  <span className="font-mono text-xs text-secondary/75">{formatIssueDate(i.date)}</span>
                  {i.status === "preview" && (
                    <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
                      Preview
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-snug">{i.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-secondary/75">{i.summary}</p>
                <p className="mt-3 font-mono text-xs text-secondary/70">
                  {i.sections.reduce((n, sec) => n + sec.items.length, 1)} items · {sourceCount(i)} linked sources
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-heading">
                  Read issue <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-4">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-2xl font-semibold text-heading">What is in each issue</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {FORMAT.map(([title, text]) => (
              <article key={title} className="card-glow p-6">
                <h3 className="text-lg font-semibold text-heading">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/75">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-secondary/70">
            Opinion is the author&apos;s own and is labelled as such. Issues cite primary sources and are educational, not
            legal, regulatory or investment advice.
          </p>
          <Link href="/books" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-heading">
            Read the book behind it
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
