import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Folder, Github } from "lucide-react";
import { PARTS, REPO } from "@/utils/book-data";
import { BOOK_KINDLE_URL, BOOK_PAPERBACK_URL } from "@/utils/site";

export const metadata: Metadata = {
  title: "Book: AI for Financial Risk, Compliance and Regulatory Reporting | LorvexAI",
  description:
    "Production Systems and Architecture for Modern Banking. 16 chapters, 31 primary AI systems, 11 agentic pipelines and 66,000+ lines of tested Python, engineered to PRA SS1/23, the EU AI Act and DORA.",
  alternates: { canonical: "/books" },
  openGraph: {
    title: "AI for Financial Risk, Compliance and Regulatory Reporting",
    description: "Production Systems and Architecture for Modern Banking.",
    url: "/books",
    type: "book",
    images: ["/books/title_page.jpg"]
  }
};

const LEANPUB = "https://leanpub.com/aibankingriskplatform";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const img = (name: string) => `${basePath}/books/${name}`;

const STATS = [
  ["16", "Chapters"],
  ["31", "Primary AI systems"],
  ["11", "Agentic pipelines"],
  ["66K+", "Lines of Python"],
  ["£12.1M", "Cumulative annual savings"],
  ["8", "Regulatory frameworks"]
];

const WHY = [
  [
    "Governed from day one",
    "PRA SS1/23's four-gate deployment framework, EU AI Act human-oversight checkpoints and DORA's 70% LLM-concentration cap are load-bearing design constraints in every chapter, not a compliance appendix bolted on afterward."
  ],
  [
    "Working code, not pseudocode",
    "Every system described, 31 primary AI/ML systems and 11 agentic oversight pipelines, ships as tested Python 3.11+ in the companion repository, each carrying its own AWB Model Registry (MR) reference."
  ],
  [
    "Failures included, deliberately",
    "A £12M near-miss from an ungrounded RAG query, an £840 overnight agent API bill and a PRA s166 skilled-person review are worked through with the same rigour as the wins."
  ]
];

const JOURNEY = [
  ["Business Case", "Three converging pressures, the £3.2M programme case, and the ROI methodology used throughout.", "Ch. 1"],
  ["LLMs & Document Intelligence", "Transformer foundations and the Credit Document Analyser cutting extraction from 90 to 18 minutes.", "Ch. 2"],
  ["Agents & Regulatory RAG", "The Credit Decision Agent and a RAG assistant grounded across 847 regulatory documents.", "Ch. 3–4"],
  ["Risk & Compliance Systems", "Credit, market, operational, liquidity, model risk, regulatory reporting and AML/KYC in production.", "Ch. 6–12"],
  ["Governance & MLOps", "The governance platform, model risk committee, enterprise architecture and CI/CD gates keeping it all trustworthy.", "Ch. 5, 10, 13–15"],
  ["Integrated Platform", "Every system unified into one CRO/CFO dashboard the bank runs on Monday morning.", "Ch. 16"]
];

const AUDIENCE = [
  ["Risk & Compliance Professionals", "Start with the regulatory map in Chapter 1, then the governance platform (Ch. 5), model risk framework (Ch. 10) and regulatory reporting automation (Ch. 11).", "Ch. 1, 5, 10, 11"],
  ["Software Developers & ML Engineers", "Chapters 2–4 and 14 are the technical core: document extraction, the LangGraph agentic pattern, RAG evaluation with RAGAS and the CI/CD gates.", "Ch. 2, 3, 4, 14"],
  ["Enterprise & Solution Architects", "Chapters 13, 15 and 16 cover the shared awb_commons library, multi-cloud DORA resilience, the BCBS 239-aligned data platform and the orchestration layer.", "Ch. 13, 15, 16"],
  ["Model Risk Managers & Validators", "Chapters 1, 5 and 10 walk through the full PRA SS1/23 lifecycle: registration, independent validation and ongoing monitoring.", "Ch. 1, 5, 10"],
  ["CROs, CCOs, CTOs & Transformation Leaders", "Chapter 1 for the business case, the risk-domain chapters (6–10) for what each system saves, and Chapter 16 for the integrated CRO/CFO dashboard.", "Ch. 1, 6–10, 16"]
];

const APPENDICES = [
  ["A", "Glossary of Terms", "/books/appendices/glossary/"],
  ["B", "UK/EU Regulatory Reference Guide", "/books/appendices/regulatory-reference/"],
  ["C", "Technology Stack Reference", "/books/appendices/tech-stack/"],
  ["D", "AI Model Registry Index", "/books/appendices/model-registry/"]
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "AI for Financial Risk, Compliance and Regulatory Reporting",
  alternateName: "Production Systems and Architecture for Modern Banking",
  author: { "@type": "Person", name: "Sreedhara Reddy Kotha" },
  datePublished: "2026",
  bookFormat: "https://schema.org/EBook",
  inLanguage: "en",
  url: "https://lorvexai.com/books/",
  image: "https://lorvexai.com/books/title_page.jpg",
  sameAs: [BOOK_PAPERBACK_URL, BOOK_KINDLE_URL, LEANPUB]
};

function Ext({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${primary ? "btn-primary" : "btn-outline"} text-sm`}>
      {children}
      <ExternalLink size={14} aria-hidden="true" />
    </a>
  );
}

export default function BooksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section pb-8 pt-14 md:pt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.4fr_0.6fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Companion repository and book</p>
            <h1 className="mt-3 text-4xl font-semibold text-heading md:text-5xl">
              AI for Financial Risk, Compliance and Regulatory Reporting
            </h1>
            <p className="mt-3 text-lg text-secondary/70">Production Systems and Architecture for Modern Banking</p>
            <p className="mt-5 max-w-2xl text-secondary/75">
              Built around Avon &amp; Wessex Bank plc (AWB), a fictional £40 billion UK bank regulated by the PRA and FCA, this
              book follows the complete AWB-AI-2026 transformation from business case to production operation. It shows how
              LLMs, AI agents, RAG and predictive models apply across credit, market, liquidity and operational risk, AML/KYC,
              regulatory reporting and model governance.
            </p>
            <p className="mt-4 max-w-2xl text-secondary/75">
              The companion repository provides working, tested Python reference implementations, not pseudocode. Governance is
              engineered into every solution through PRA SS1/23 controls, EU AI Act human-oversight checkpoints, auditable
              decision trails, validation gates and DORA-aligned operational resilience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Ext href={BOOK_PAPERBACK_URL} primary>
                Paperback
              </Ext>
              <Ext href={BOOK_KINDLE_URL}>Kindle</Ext>
              <Ext href={LEANPUB}>Leanpub (ebook)</Ext>
              <a href="#chapters" className="btn-outline text-sm">
                Browse chapter code
              </a>
              <a href={REPO} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                <Github size={14} aria-hidden="true" />
                View on GitHub
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img("title_page.jpg")}
            alt="Book cover: AI for Financial Risk, Compliance and Regulatory Reporting"
            width={420}
            height={630}
            className="mx-auto w-full max-w-[280px] rounded-lg border border-primary/25 shadow-2xl shadow-black/30 md:max-w-none"
          />
        </div>
      </section>

      <section className="section pt-4">
        <div className="mx-auto w-full max-w-6xl px-6">
          <dl className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {STATS.map(([value, label]) => (
              <div key={label} className="rounded-lg border border-primary/25 bg-panel/70 p-4">
                <dt className="text-xs text-secondary/60">{label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-heading">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-secondary/55">
            Figures reflect the book&apos;s full AI Model Registry Index (Appendix D): 31 primary systems plus 11 agentic
            governance pipelines built on top of them.
          </p>
        </div>
      </section>

      <section className="section" id="why">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Why this book</p>
          <h2 className="mt-3 text-3xl font-semibold text-heading">Built for production, not for a demo day</h2>
          <p className="mt-3 max-w-2xl text-secondary/70">
            Most AI-in-banking material stops at the proof of concept. This book starts where that ends.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {WHY.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-primary/25 bg-panel/70 p-6">
                <h3 className="text-lg font-semibold text-heading">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">The AWB case study</p>
          <h2 className="mt-3 text-3xl font-semibold text-heading">One bank, sixteen chapters, one continuous build</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {JOURNEY.map(([title, text, ch], i) => (
              <li key={title} className="rounded-lg border border-secondary/15 bg-panel/45 p-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                    {i + 1}
                  </span>
                  <span className="font-mono text-xs text-secondary/55">{ch}</span>
                </div>
                <h3 className="mt-3 font-semibold text-heading">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-secondary/70">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Who it&apos;s for</p>
          <h2 className="mt-3 text-3xl font-semibold text-heading">Find your entry point</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {AUDIENCE.map(([who, text, chapters]) => (
              <article key={who} className="rounded-lg border border-primary/25 bg-panel/70 p-6">
                <h3 className="font-semibold text-heading">{who}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary/75">{text}</p>
                <p className="mt-3 font-mono text-xs text-primary">{chapters}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="chapters">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Inside the book</p>
          <h2 className="mt-3 text-3xl font-semibold text-heading">Sixteen chapters, five parts</h2>
          <p className="mt-3 max-w-2xl text-secondary/70">
            Each chapter maps to one or more production AI systems in the AWB model registry. Open a chapter for its summary
            and MR reference, or jump straight to the folder and core file.
          </p>
          <p className="mt-2 max-w-2xl text-xs text-secondary/55">
            Risk labels are a fictional AWB governance classification used for teaching, not a regulatory rating.
          </p>

          {PARTS.map((p) => (
            <div key={p.part} className="mt-10">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {p.part} · {p.name}
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-secondary/70">{p.desc}</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {p.chapters.map((c) => (
                  <details key={c.num} className="group rounded-lg border border-secondary/15 bg-panel/45 p-4 open:border-primary/40">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-sm text-primary">{c.num}</span>
                        <span className="font-semibold text-heading">{c.title}</span>
                      </span>
                      <span className="shrink-0 rounded-full border border-secondary/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-secondary/60">
                        {c.risk}
                      </span>
                    </summary>
                    <div className="mt-3 text-sm leading-relaxed text-secondary/75">
                      {c.mr && <p className="font-mono text-xs text-primary">{c.mr}</p>}
                      <p className="mt-2">{c.summary}</p>
                      <div className="mt-3 flex flex-wrap gap-3 text-xs">
                        <a
                          href={`${REPO}/tree/main/${c.folder}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:text-heading"
                        >
                          <Folder size={12} aria-hidden="true" /> Folder
                        </a>
                        {c.file && (
                          <a
                            href={`${REPO}/blob/main/${c.file}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-primary hover:text-heading"
                          >
                            {c.file.split("/").pop()}
                          </a>
                        )}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Appendices</p>
          <h2 className="mt-3 text-3xl font-semibold text-heading">Reference material, kept current</h2>
          <p className="mt-3 max-w-2xl text-secondary/70">
            These appendices live online so they can be updated as regulations and technology evolve between print editions.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {APPENDICES.map(([letter, title, href]) => (
              <Link
                key={letter}
                href={href}
                className="group rounded-lg border border-secondary/15 bg-panel/45 p-5 transition hover:border-primary/45 hover:bg-primary/10"
              >
                <span className="font-mono text-xs text-primary">Appendix {letter}</span>
                <h3 className="mt-2 font-semibold text-heading">{title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary group-hover:text-heading">
                  Read <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-[0.3fr_1fr] md:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img("author-avatar.png")}
            alt="Sreedhara Reddy Kotha"
            width={200}
            height={200}
            className="h-40 w-40 rounded-lg border border-primary/25 object-cover"
          />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">The author</p>
            <h2 className="mt-2 text-2xl font-semibold text-heading">Sreedhara Reddy Kotha</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary/75">
              Sreedhara has spent over two decades working across global banking, financial risk and regulatory technology. He
              writes as a practitioner, focused on how AI and automation can help risk and compliance teams do their jobs
              rather than replace the judgement they bring to it.
            </p>
            <p className="mt-3 text-xs text-secondary/55">
              The views expressed in this book are the author&apos;s own and do not represent the views of any current or former
              employer.
            </p>
            <Link href="/about" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-heading">
              More about the author <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-lg border border-primary/25 bg-panel/70 p-8 text-center">
            <h2 className="text-3xl font-semibold text-heading">Stop experimenting. Start operating.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-secondary/75">
              Sixteen chapters, 31 primary AI systems and 11 agentic governance pipelines, all working, tested and built to
              survive a real regulator&apos;s scrutiny.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Ext href={BOOK_PAPERBACK_URL} primary>
                Paperback
              </Ext>
              <Ext href={BOOK_KINDLE_URL}>Kindle</Ext>
              <Ext href={LEANPUB}>Leanpub (ebook)</Ext>
              <Ext href={REPO}>GitHub</Ext>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-secondary/55">
            Avon and Wessex Bank plc (AWB) is entirely fictional. Nothing on this page or in the book constitutes regulatory or
            legal advice. The companion code is published under the MIT License.
          </p>
        </div>
      </section>
    </>
  );
}
