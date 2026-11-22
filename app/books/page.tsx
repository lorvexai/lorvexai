import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Book: AI for Financial Risk, Compliance and Regulatory Reporting | LorvexAI",
  description:
    "A practitioner's guide to governed AI in UK banking: 16 chapters, 31 AI systems, 11 agentic pipelines and tested Python reference code, aligned to PRA SS1/23, the EU AI Act and DORA.",
  alternates: { canonical: "/books" }
};

const LINKS = {
  paperback: "https://www.amazon.co.uk/dp/B0HBR8JG9V",
  kindle: "https://www.amazon.co.uk/dp/B0HD2KSJJB",
  leanpub: "https://leanpub.com/aibankingriskplatform",
  repo: "https://github.com/lorvexai/ai-banking-risk-platform",
  ch6: "https://github.com/lorvexai/ai-banking-risk-platform/blob/main/chapter-06-credit-risk/README.md"
};

const STATS = [
  { value: "16", label: "Chapters" },
  { value: "31", label: "Primary AI systems" },
  { value: "11", label: "Agentic pipelines" },
  { value: "66,000+", label: "Lines of Python" },
  { value: "£12.1M", label: "Cumulative annual savings" },
  { value: "8", label: "Regulatory frameworks" }
];

const WHY = [
  {
    title: "Governed from day one",
    text: "PRA SS1/23's four-gate deployment framework, EU AI Act oversight and DORA's 70% LLM-concentration cap are design constraints in every chapter."
  },
  {
    title: "Working code, not pseudocode",
    text: "Each system ships as tested Python 3.11+ with its own AWB Model Registry reference."
  },
  {
    title: "Failures included",
    text: "Case studies cover a £12M near-miss from an ungrounded RAG query, an £840 overnight agent API bill, and a PRA s166 skilled-person review."
  }
];

const PARTS = [
  {
    part: "Part I: Foundations (Ch. 1–5)",
    chapters: [
      "AI Transformation: business case for the £3.2M programme, ROI methodology, UK/EU regulatory map",
      "GenAI & LLMs: Credit Document Analyser, extraction time down from up to 90 minutes to 18",
      "AI Agents: Credit Decision Agent with four sub-agents; Treasury Operations Agent",
      "RAG Systems: Regulatory Knowledge Assistant grounded in 847 PRA, FCA and EBA documents",
      "AI Governance: registration, independent validation and ongoing monitoring"
    ]
  },
  {
    part: "Part II: Risk Domains (Ch. 6–10)",
    chapters: [
      "Credit Risk: Credit Intelligence Monitor, IFRS 9 staging, covenants, drift",
      "Market Risk: Monte Carlo VaR, expected shortfall, FRTB and CVA",
      "Operational Risk: payment fraud detection, loss-event classifier",
      "Liquidity Risk: real-time LCR/NSFR engines and intraday monitor",
      "Model Risk: enterprise model risk management platform"
    ]
  },
  {
    part: "Part III: Compliance (Ch. 11–12)",
    chapters: [
      "Regulatory Compliance: COREP, LCR/NSFR and leverage ratio returns automated",
      "AML & KYC: identity verification, ML transaction monitoring, 80% fewer false-positive alerts"
    ]
  },
  {
    part: "Part IV: Enterprise (Ch. 13–15)",
    chapters: [
      "Enterprise Architecture: microservices, multi-cloud DORA resilience, core-banking integration",
      "MLOps & LLMOps: CI/CD retraining, prompt versioning, four-gate deployment",
      "Data Infrastructure: BCBS 239-aligned warehouse and point-in-time feature store"
    ]
  },
  {
    part: "Part V: Integration (Ch. 16)",
    chapters: ["Integrated Platform: one CRO/CFO dashboard with real-time risk and BCBS 239 views"]
  }
];

const AUDIENCE = [
  ["Risk & compliance professionals", "Ch. 1, 5, 10, 11"],
  ["Software developers & ML engineers", "Ch. 2, 3, 4, 14"],
  ["Enterprise & solution architects", "Ch. 13, 15, 16"],
  ["Model risk managers & validators", "Ch. 1, 5, 10"],
  ["CROs, CCOs, CTOs & transformation leaders", "Ch. 1, 6–10, 16"]
];

const BUILD = [
  "Governed enterprise LLM gateway (Ch. 13)",
  "Regulatory RAG with citations (Ch. 4)",
  "Human-in-the-loop agent workflows (Ch. 3)",
  "PRA SS1/23-aligned model registry (Ch. 5, 10)",
  "Document and financial statement analysers (Ch. 2)",
  "AI-assisted regulatory reporting (Ch. 11)",
  "Prompt, model and data drift monitoring (Ch. 14)",
  "Auditable risk and compliance systems with 7-year logs (Ch. 15)",
  "Core-banking integration patterns (Ch. 13)",
  "Integrated CRO/CFO risk dashboard (Ch. 16)"
];

const FRAMEWORKS = [
  "PRA SS1/23: four-gate deployment and model registry",
  "EU AI Act: high-risk classification and human oversight",
  "DORA: LLM concentration cap and recovery time objectives",
  "CRR3 / Basel IV: output floor",
  "FCA PS22/9: Consumer Duty fairness",
  "BCBS 239: data quality",
  "FCA COBS 9: 7-year audit log retention",
  "POCA 2002 / JMLSG: SAR handling",
  "UK GDPR / DPA 2018: data governance"
];

function ExternalLinkButton({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${primary ? "btn-primary" : "btn-outline"} text-sm`}
    >
      {children}
      <ExternalLink size={15} aria-hidden="true" />
    </a>
  );
}

export default function BooksPage() {
  return (
    <>
      <section className="section pb-8 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">The book</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-heading md:text-5xl">
            AI for Financial Risk, Compliance and Regulatory Reporting
          </h1>
          <p className="mt-3 text-lg text-secondary/70">Production Systems and Architecture for Modern Banking</p>
          <p className="mt-5 max-w-2xl text-secondary/75">
            By Sreedhara Reddy Kotha. A practitioner&apos;s guide built around Avon &amp; Wessex Bank plc (AWB), a fictional
            £40 billion UK bank regulated by the PRA and FCA. It follows the AWB-AI-2026 programme from business case to
            production operation, showing how LLMs, agents, RAG and predictive models apply to credit, market, liquidity and
            operational risk, AML/KYC, regulatory reporting and model governance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ExternalLinkButton href={LINKS.paperback} primary>
              Paperback (Amazon UK)
            </ExternalLinkButton>
            <ExternalLinkButton href={LINKS.kindle}>Kindle (Amazon UK)</ExternalLinkButton>
            <ExternalLinkButton href={LINKS.leanpub}>Leanpub ebook</ExternalLinkButton>
            <a href={LINKS.repo} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
              <Github size={15} aria-hidden="true" />
              Companion code
            </a>
          </div>
        </div>
      </section>

      <section className="section pt-4">
        <div className="mx-auto w-full max-w-6xl px-6">
          <dl className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-lg border border-primary/25 bg-panel/70 p-4">
                <dt className="text-xs text-secondary/60">{s.label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-heading">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-heading">Why this book</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {WHY.map((w) => (
              <article key={w.title} className="rounded-lg border border-primary/25 bg-panel/70 p-6">
                <h3 className="text-lg font-semibold text-heading">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/75">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-heading">Table of contents</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {PARTS.map((p) => (
              <article key={p.part} className="rounded-lg border border-primary/25 bg-panel/70 p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{p.part}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-secondary/75">
                  {p.chapters.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-heading">Who it&apos;s for</h2>
            <ul className="mt-4 space-y-2 text-sm text-secondary/75">
              {AUDIENCE.map(([who, chapters]) => (
                <li key={who}>
                  <span className="font-medium text-heading">{who}:</span> {chapters}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-heading">What you will build</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-secondary/75">
              {BUILD.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-2xl font-semibold text-heading">Regulatory frameworks covered</h2>
          <ul className="mt-4 grid gap-2 text-sm text-secondary/75 md:grid-cols-2">
            {FRAMEWORKS.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <article className="rounded-lg border border-primary/25 bg-panel/70 p-8">
            <div className="flex items-center gap-3 text-primary">
              <BookOpen size={22} aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-heading">Companion resources</h2>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary/75">
              Tested Python reference implementations for every system, plus appendices: glossary (about 100 terms),
              regulatory reference, tech stack and model registry index. The Chapter 6 architecture diagram is rendered from
              the repository&apos;s Mermaid source.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ExternalLinkButton href={LINKS.repo} primary>
                GitHub repository
              </ExternalLinkButton>
              <ExternalLinkButton href={LINKS.ch6}>Chapter 6 architecture</ExternalLinkButton>
              <Link href="/blog" className="btn-outline text-sm">
                Related writing
                <ArrowRight size={15} />
              </Link>
            </div>
          </article>

          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-secondary/55">
            Avon and Wessex Bank plc is fictional. The content is educational and is not legal or regulatory advice; verify
            current requirements with your own legal and compliance function. The views expressed are the author&apos;s own and
            not those of any employer.
          </p>
        </div>
      </section>
    </>
  );
}
