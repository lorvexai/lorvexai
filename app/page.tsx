import Link from "next/link";
import SubscribeForm from "@/components/SubscribeForm";
import { getIssues, formatIssueDate } from "@/utils/newsletter";
import { NEWSLETTER_NAME } from "@/utils/site";
import { ArrowRight, Mail, Sparkles } from "lucide-react";


const CARDS = [
  [
    "Finance and risk first",
    "More than two decades across Basel, liquidity risk, financial controls, reconciliation, risk data and multi-jurisdiction regulatory reporting."
  ],
  [
    "Applied AI delivery",
    "Hands-on work across Python, document intelligence, RAG, agentic workflows, forecasting, anomaly detection, automation and cloud data platforms."
  ],
  [
    "Designed for scrutiny",
    "A focus on data quality, lineage, validation, human oversight, operational resilience and repeatable evidence from the outset."
  ]
];

const INSIDE = [
  "Production patterns for RAG, LLMs and agentic workflows",
  "Governance mapped to PRA SS1/23, the EU AI Act and DORA",
  "Tested reference code and a companion repository",
  "Examples of data, controls, evidence and human review working together"
];

export default function HomePage() {
  const latest = getIssues().find((i) => i.status === "published");

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-10 pt-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-14 md:pt-16">
          <div>
            <p className="chip">
              <Sparkles size={13} aria-hidden="true" />
              Governed AI for banking, finance and risk
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.03] md:text-6xl">
              <span className="text-heading">AI you can </span>
              <span className="text-gradient">govern, audit</span>
              <span className="text-heading"> and defend.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-secondary/85">
              Practical guidance for banking, finance, risk and regulatory-reporting teams building AI systems that must be
              useful in the business, and credible to Risk, Audit and regulators.
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
            <p className="mt-6 max-w-xl text-sm font-medium leading-relaxed text-secondary/85">
              By Sreedhara Reddy Kotha <span className="mx-1.5 text-primary">·</span> 20+ years in finance technology{" "}
              <span className="mx-1.5 text-primary">·</span> Basel, risk and regulatory reporting{" "}
              <span className="mx-1.5 text-primary">·</span> RAG, agents and automation
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

      </section>

      <section className="section py-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="max-w-3xl text-3xl font-semibold text-heading md:text-4xl">Why this work is different</h2>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-secondary/85">
            AI in a regulated firm is not only a model or a prompt. It has to work with real data, real processes, clear
            ownership and human judgement, with evidence that can withstand challenge.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {CARDS.map(([t, d]) => (
              <article key={t} className="card-glow p-6">
                <h3 className="text-xl font-semibold text-heading">{t}</h3>
                <p className="mt-2 text-base leading-relaxed text-secondary/80">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-8 md:py-10">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-2 md:items-start">
          <div>
            <p className="chip">The book</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-heading">
              The practitioner&apos;s guide to controlled AI in banking
            </h2>
            <p className="mt-3 text-base leading-relaxed text-secondary/85">
              Using the fictional Avon &amp; Wessex Bank case study, the book brings together 16 chapters, 31 AI systems and
              tested Python reference implementations across risk, compliance, regulatory reporting, model governance and
              enterprise architecture.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/books" className="btn-primary min-h-11 text-sm">
                Explore the book
              </Link>
              <Link href="/books/sample-chapter" className="btn-outline min-h-11 text-sm">
                Read a sample chapter
              </Link>
            </div>
          </div>
          <ul className="space-y-3 text-base text-secondary/85">
            <li className="font-semibold text-heading">Inside the book</li>
            {INSIDE.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section py-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="card-glow grid gap-8 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="chip">
                <Mail size={13} aria-hidden="true" />
                {NEWSLETTER_NAME}
              </p>
              <p className="mt-4 text-base leading-relaxed text-secondary/85">
                A short, sourced weekly briefing on the regulatory and technology developments that matter for AI in financial
                services: what changed, why it matters, and the questions worth taking to your organisation.
              </p>
              {latest && (
                <>
                  <h2 className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">{latest.title}</h2>
                  <Link
                    href={`/newsletter/${latest.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-heading"
                  >
                    Read Issue {latest.number}, {formatIssueDate(latest.date)} <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold text-heading">Get it every week</p>
              <p className="mb-4 mt-1 text-base text-secondary/80">Short, sourced and written for practitioners. Unsubscribe at any time.</p>
              <SubscribeForm id="home-email" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
