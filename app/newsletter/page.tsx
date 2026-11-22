import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { NEWSLETTER_NAME, NEWSLETTER_URL } from "@/utils/site";

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
  const external = NEWSLETTER_URL.length > 0;
  const cta = external ? (
    <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
      <Mail size={15} aria-hidden="true" />
      Subscribe
    </a>
  ) : (
    <Link href="/contact" className="btn-primary text-sm">
      <Mail size={15} aria-hidden="true" />
      Ask to be notified at launch
    </Link>
  );

  return (
    <>
      <section className="section pb-8 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Newsletter</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-heading md:text-5xl">{NEWSLETTER_NAME}</h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary/75">
            A short weekly briefing on what PRA, FCA, EBA and Federal Reserve changes mean for AI in financial risk and
            regulatory reporting. Written for risk leaders, regulatory reporting heads and RegTech builders.
          </p>
          <div className="mt-8">{cta}</div>
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
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-secondary/55">
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
