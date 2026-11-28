import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { NEWSLETTER_NAME } from "@/utils/site";
import { formatIssueDate, getIssue, getIssues, type Item } from "@/utils/newsletter";

export function generateStaticParams() {
  return getIssues().map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const issue = getIssue(params.slug);
  if (!issue) return {};
  return {
    title: `${NEWSLETTER_NAME} #${issue.number}: ${issue.title} | LorvexAI`,
    description: issue.summary,
    alternates: { canonical: `/newsletter/${issue.slug}` },
    robots: issue.status === "preview" ? { index: false, follow: false } : undefined
  };
}

function Sources({ sources }: { sources: Item["sources"] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {sources.map((s) => (
        <a
          key={s.url}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-secondary/20 px-3 py-1 text-xs text-secondary/75 transition hover:border-primary/50 hover:text-primary"
        >
          {s.label}
          <ArrowUpRight size={11} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default function IssuePage({ params }: { params: { slug: string } }) {
  const issue = getIssue(params.slug);
  if (!issue) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: issue.title,
          description: issue.summary,
          datePublished: issue.date,
          author: { "@type": "Person", name: "Sreedhara Reddy Kotha" },
          publisher: { "@type": "Organization", name: "LorvexAI", url: "https://lorvexai.com/" },
          mainEntityOfPage: `https://lorvexai.com/newsletter/${issue.slug}/`
        }}
      />
      <section className="section pb-6 pt-12 md:pt-16">
        <div className="mx-auto w-full max-w-4xl px-6">
          <Link href="/newsletter" className="inline-flex items-center gap-2 text-sm text-primary hover:text-heading">
            <ArrowLeft size={14} aria-hidden="true" /> All issues
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="chip">
              {NEWSLETTER_NAME} · Issue {issue.number}
            </span>
            <span className="font-mono text-xs text-secondary/75">{formatIssueDate(issue.date)}</span>
            {issue.status === "preview" && (
              <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
                Preview: publishes {formatIssueDate(issue.date)}
              </span>
            )}
          </div>
          <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">{issue.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary/75">{issue.summary}</p>
          <nav className="mt-6 flex flex-wrap gap-2 text-xs" aria-label="In this issue">
            {issue.sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="btn-outline !px-4 !py-1.5 text-xs">
                {s.title}
              </a>
            ))}
            <a href="#takeaways" className="btn-outline !px-4 !py-1.5 text-xs">
              Practitioner takeaways
            </a>
          </nav>
        </div>
      </section>

      <section className="pb-6">
        <div className="mx-auto w-full max-w-4xl px-6">
          <article className="card-glow p-7 md:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">Headline · {issue.headline.region}</p>
            <h2 className="mt-3 text-2xl font-semibold leading-snug md:text-3xl">{issue.headline.title}</h2>
            {issue.headline.body.map((p) => (
              <p key={p.slice(0, 30)} className="mt-4 leading-relaxed text-secondary/80">
                {p}
              </p>
            ))}
            <p className="mt-5 rounded-xl border border-primary/25 bg-primary/10 p-4 text-sm leading-relaxed text-heading/90">
              <strong className="text-primary">Why it matters. </strong>
              {issue.headline.why}
            </p>
            <Sources sources={issue.headline.sources} />
          </article>
        </div>
      </section>

      {issue.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28 py-8">
          <div className="mx-auto w-full max-w-4xl px-6">
            <h2 className="text-2xl font-semibold md:text-3xl">{section.title}</h2>
            <div className="mt-5 space-y-5">
              {section.items.map((item) => (
                <article key={item.title} className="card-glow p-6">
                  <span className="chip">{item.region}</span>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/80 md:text-base">{item.body}</p>
                  <p className="mt-4 text-sm leading-relaxed text-secondary/85">
                    <strong className="text-primary">Why it matters. </strong>
                    {item.why}
                  </p>
                  <Sources sources={item.sources} />
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="takeaways" className="scroll-mt-28 py-8">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="card-glow p-7">
            <h2 className="text-2xl font-semibold">Practitioner takeaways</h2>
            <p className="mt-1 text-xs text-secondary/70">The author&apos;s own view, not regulatory advice.</p>
            <ul className="mt-5 space-y-3">
              {issue.takeaways.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-secondary/85">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {issue.related && issue.related.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-heading">Related reading</h2>
              <ul className="mt-3 space-y-2">
                {issue.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-heading">
                      {r.label} <ArrowUpRight size={13} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="mt-8 text-xs leading-relaxed text-secondary/70">
            Educational content, not legal, regulatory or investment advice. Facts are drawn from the linked sources and should
            be checked against the primary documents. The weekly drafting is assisted by AI and reviewed by the author before
            publication.
          </p>
          <Link href="/books" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-heading">
            Go deeper in the book <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
