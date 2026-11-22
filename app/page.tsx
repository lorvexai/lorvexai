import Link from "next/link";
import CTA from "@/components/CTA";
import { getIssues, formatIssueDate } from "@/utils/newsletter";
import { PARTS } from "@/utils/book-data";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

const FEATURED_CHAPTERS = ["03", "05", "12"];

function firstSentence(text: string) {
  const m = text.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : text).trim();
}

export default function HomePage() {
  const chapters = PARTS.flatMap((p) => p.chapters).filter((c) => FEATURED_CHAPTERS.includes(c.num));
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
              A book with tested code, and a weekly briefing on regulation, for banking and risk teams.
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
          <Link href="/books" className="group mx-auto block w-full max-w-xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/books/title_page.jpg`}
              alt="Cover of AI for Financial Risk, Compliance and Regulatory Reporting"
              width={300}
              height={450}
              className="w-full rounded-lg border border-primary/30 shadow-2xl shadow-black/40 transition duration-300 group-hover:-translate-y-1"
            />
            <p className="mt-4 text-center text-sm font-medium text-secondary/85">
              Paperback, Kindle and Leanpub <span className="text-primary">→</span>
            </p>
          </Link>
        </div>

        <div className="border-y border-secondary/10 py-4">
          <p className="mx-auto max-w-6xl px-6 text-center text-sm text-secondary/80">
            <span className="font-semibold text-heading">Maps to </span>
            PRA SS1/23 <span className="mx-1.5 text-primary">·</span> EU AI Act{" "}
            <span className="mx-1.5 text-primary">·</span> DORA <span className="mx-1.5 text-primary">·</span> BCBS 239{" "}
            <span className="mx-1.5 text-primary">·</span> SM&amp;CR <span className="mx-1.5 text-primary">·</span> Consumer Duty
          </p>
        </div>
      </section>

      <section className="section pb-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-3xl font-semibold text-heading md:text-4xl">Inside the book</h2>
            <Link href="/books#chapters" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-heading">
              All 16 chapters <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {chapters.map((c) => (
              <article key={c.num} className="card-glow p-6">
                <p className="font-mono text-sm font-semibold text-primary">Chapter {c.num}</p>
                <h3 className="mt-2 text-xl font-semibold text-heading">{c.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-secondary/80">{firstSentence(c.summary)}</p>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/books/author-avatar.png`}
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 rounded-full"
            />
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

      <section className="section py-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <CTA />
        </div>
      </section>
    </>
  );
}
