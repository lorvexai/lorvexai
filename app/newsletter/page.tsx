import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SubscribeForm from "@/components/SubscribeForm";
import { NEWSLETTER_NAME } from "@/utils/site";
import { formatIssueDate, getIssues } from "@/utils/newsletter";

export const metadata: Metadata = {
  title: `${NEWSLETTER_NAME} | Weekly AI and Financial Regulation Briefing | LorvexAI`,
  description:
    "A weekly briefing on what PRA, FCA, EBA and Federal Reserve developments mean for AI in financial risk and regulatory reporting.",
  alternates: { canonical: "/newsletter" }
};

const FORMAT = [
  ["One headline development", "A supervisory statement, policy statement or consultation that matters this week."],
  ["So what for practitioners", "What it changes for risk, model governance and regulatory reporting teams."],
  ["One AI use case", "A pattern or tool worth knowing about, with the caveats included."],
  ["Three to five links", "Primary sources first: PRA, Bank of England, FCA, EBA, BCBS, Fed, HKMA."]
];

export default function NewsletterPage() {
  const issues = getIssues();

  return (
    <>
      <section className="section pb-8 pt-14 md:pt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold text-heading md:text-5xl">{NEWSLETTER_NAME}</h1>
            <p className="mt-4 max-w-2xl text-lg text-secondary/75">
              A short weekly briefing on what PRA, FCA, EBA and Federal Reserve changes mean for AI in financial risk and
              regulatory reporting. Written for risk leaders, regulatory reporting heads and RegTech builders.
            </p>
            <div className="mt-8">
              <SubscribeForm id="newsletter-email" />
            </div>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-secondary/75">
              Written by Sreedhara Reddy Kotha, author of the book behind this site, with over 20 years in finance, risk and
              regulatory technology. <Link href="/about" className="font-semibold text-primary hover:text-heading">About the author</Link>
            </p>
          </div>
          {issues[0] && (
            <Link href={`/newsletter/${issues[0].slug}`} className="card-glow group block p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Sample: Issue {issues[0].number}</p>
              <h2 className="mt-3 text-xl font-semibold leading-snug text-heading">{issues[0].headline.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary/80">{issues[0].headline.why}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-heading">
                Read the full issue <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          )}
        </div>
      </section>

      <section className="section pt-4">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-2xl font-semibold text-heading">Issues</h2>
          <div className="mt-6 grid gap-5">
            {issues.map((i) => (
              <Link key={i.slug} href={`/newsletter/${i.slug}`} className="card-glow group p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="chip">Issue {i.number}</span>
                  <span className="font-mono text-xs text-secondary/75">{formatIssueDate(i.date)}</span>
                  {i.status === "preview" && (
                    <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
                      Preview
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-snug">{i.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-secondary/75">{i.summary}</p>
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
          <h2 className="text-2xl font-semibold text-heading">What each issue contains</h2>
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
