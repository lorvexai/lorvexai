import type { Metadata } from "next";
import Link from "next/link";
import { getIssues, formatIssueDate } from "@/utils/newsletter";
import { getAllPosts } from "@/utils/posts";
import { NEWSLETTER_NAME } from "@/utils/site";
import { ArrowRight, Linkedin, Mail, Sparkles } from "lucide-react";


export const metadata: Metadata = {
  alternates: { canonical: "/" }
};

const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "LorvexAI",
      url: "https://lorvexai.com/",
      description: "Books, articles and a weekly briefing on governed AI for banking, finance and risk."
    },
    {
      "@type": "Person",
      name: "Sreedhara Reddy Kotha",
      url: "https://lorvexai.com/about/",
      jobTitle: "Finance and AI consultant and author",
      sameAs: ["https://www.linkedin.com/in/sreekotha/"]
    }
  ]
};

export default function HomePage() {
  const latest = getIssues().find((i) => i.status === "published");
  const posts = getAllPosts();
  const seriesParts = posts
    .filter((p) => p.series && p.seriesPart)
    .sort((x, y) => (x.seriesPart ?? 0) - (y.seriesPart ?? 0));
  const seriesTotal = seriesParts[0]?.seriesTotal ?? seriesParts.length;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_JSON_LD) }} />
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-10 pt-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-14 md:pt-16">
          <div>
            <p className="chip">
              <Sparkles size={13} aria-hidden="true" />
              Governed AI for banking, finance and risk
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.03] md:text-6xl">
              <span className="text-heading">AI you can govern, audit and defend.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-secondary/85">
              Follow a fictional UK bank as it builds a regulatory AI assistant. Explore the architecture, controls and audit
              evidence behind each design decision, and read a weekly briefing on the regulatory changes that matter to
              banking teams.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/articles/${seriesParts[0]?.slug ?? ""}`} className="btn-primary min-h-11 text-sm">
                Start the banking AI series
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href={latest ? `/newsletter/${latest.slug}` : "/newsletter"} className="btn-outline min-h-11 text-sm font-semibold">
                <Mail size={15} aria-hidden="true" />
                Read the latest RegAI Brief
              </Link>
            </div>
            <p className="mt-4 text-sm text-secondary/80">
              New here?{" "}
              <Link href="/start-here" className="font-semibold text-primary hover:text-heading">Start here</Link>
            </p>
          </div>
          <Link href={`/articles/${seriesParts[1]?.slug ?? ""}`} className="group mx-auto block w-full max-w-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/diagrams/cited-answer-pipeline.svg`}
              alt="Diagram: the steps that turn a question into a cited, verified answer"
              width={1200}
              height={620}
              className="w-full rounded-lg border border-primary/30 bg-white shadow-xl shadow-black/20 transition duration-300 group-hover:-translate-y-1"
            />
            <p className="mt-3 text-center text-sm font-medium text-secondary/85">
              From Part 2: the anatomy of a cited answer <span className="text-primary">→</span>
            </p>
          </Link>
        </div>
      </section>

      <section className="section py-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-3xl font-semibold text-heading">Building a regulatory AI assistant the bank can trust</h2>
            <p className="text-sm font-semibold text-primary">{seriesParts.length} of {seriesTotal} parts published</p>
          </div>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-secondary/85">
            One fictional bank, taken from a convincing RAG demo to citations, agent permissions, human review and audit
            evidence. Read the parts in order.
          </p>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {seriesParts.map((p) => (
              <li key={p.slug}>
                <Link href={`/articles/${p.slug}`} className="card-solid group block h-full p-5">
                  <p className="font-mono text-xs text-primary">Part {p.seriesPart}</p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug text-heading">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-secondary/80">{p.excerpt}</p>
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-secondary/80">
            <Link href="/articles" className="font-semibold text-primary hover:text-heading">All articles</Link>
          </p>
        </div>
      </section>

      <section className="section py-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="card-glow grid gap-8 border-primary/30 bg-primary/5 p-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="chip">
                <Mail size={13} aria-hidden="true" />
                {NEWSLETTER_NAME}
              </p>
              {latest && (
                <>
                  <p className="mt-4 text-sm text-secondary/80">Issue {latest.number} · {formatIssueDate(latest.date)}</p>
                  <h2 className="mt-1 text-2xl font-semibold leading-snug md:text-3xl">{latest.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-secondary/85">{latest.summary}</p>
                  <Link
                    href={`/newsletter/${latest.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-heading"
                  >
                    Read this issue <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold text-heading">Email subscriptions are opening soon</p>
              <p className="mt-1 text-base text-secondary/80">Until then, read every issue on the site or follow new articles on LinkedIn.</p>
              <Link href="/newsletter" className="btn-outline mt-4 min-h-11 text-sm font-semibold">All issues</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-heading">Practitioner resources</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["/downloads/regulatory-rag-evidence-checklist.pdf", "RAG evidence checklist", "A one-page PDF of what validators and auditors ask for.", "Download the evidence checklist"],
              ["/regulatory-calendar", "Regulatory calendar", "EU, UK and US dates for AI and financial regulation, each with a source.", "Check upcoming deadlines"],
              ["/radar", "RegTech and AI Radar", "What is live, being built and worth watching, with no vendor rankings.", "Explore the Radar"]
            ].map(([href, title, text, action]) => (
              <Link key={href} href={href} className="card-solid group block p-6">
                <h3 className="text-lg font-semibold text-heading">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/80">{text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-heading">
                  {action} <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-8 md:py-10">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 md:grid-cols-[200px_1fr]">
          <Link href="/books" className="mx-auto block w-40 md:w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/books/title_page.jpg`}
              alt="Cover of AI for Financial Risk, Compliance and Regulatory Reporting"
              width={300}
              height={450}
              className="w-full rounded-lg border border-primary/30 shadow-xl shadow-black/30"
            />
          </Link>
          <div>
            <p className="chip">The book</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-heading">
              The full design, in one book
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-secondary/85">
              The series is the short version. The book follows the fictional Avon &amp; Wessex Bank through 16 chapters and 31
              AI systems across risk, compliance, regulatory reporting and model governance, with tested Python reference
              code and governance mapped to PRA SS1/23, the EU AI Act and DORA.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/books/sample-chapter" className="btn-primary min-h-11 text-sm">
                Read a sample chapter
              </Link>
              <Link href="/books" className="btn-outline min-h-11 text-sm">
                Explore the book
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-8 md:py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-heading">Written by Sreedhara Reddy Kotha</p>
            <p className="mt-1 max-w-2xl text-base leading-relaxed text-secondary/80">
              Over 20 years in finance, risk and regulatory technology across global banks, now building AI and automation
              for financial operations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className="btn-outline min-h-11 text-sm font-semibold">About the author</Link>
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
      </section>
    </>
  );
}
