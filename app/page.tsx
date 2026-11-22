import Link from "next/link";
import { getAllPosts } from "@/utils/posts";
import RegulatoryMockup from "@/components/mockups/RegulatoryMockup";
import TreasurySentinelMockup from "@/components/mockups/TreasurySentinelMockup";
import FeaturedInsights from "@/components/FeaturedInsights";
import AgentTrace from "@/components/AgentTrace";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import { BOOK_KINDLE_URL, BOOK_PAPERBACK_URL } from "@/utils/site";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  HeartPulse,
  Landmark,
  Mail,
  MessageSquareText,
  Sparkles
} from "lucide-react";

const blueprints = [
  {
    eyebrow: "Finance & Risk",
    title: "Regulatory Intelligence Blueprint",
    body: "A reference architecture for turning public regulatory text into structured obligation candidates, control-mapping drafts, and evidence-pack templates for internal review.",
    bullet: "Evidence-pack templates for governance discussion — human validation required.",
    href: "/blueprints",
    visual: <RegulatoryMockup />,
    accent: "text-blue-300 border-blue-400/30 bg-blue-400/10"
  },
  {
    eyebrow: "Treasury & Finance",
    title: "Treasury Sentinel Blueprint",
    body: "A finance-operations reference blueprint for liquidity monitoring, cash-flow anomaly detection, scenario analysis, and ALCO-style draft reporting.",
    bullet: "Educational discussion only — no autonomous treasury decision-making.",
    href: "/blueprints",
    visual: <TreasurySentinelMockup />,
    accent: "text-orange-300 border-orange-400/30 bg-orange-400/10"
  }
];

const focusAreas = [
  {
    href: "/blog/ai-strategy-and-governance-for-regulated-financial-institutions",
    icon: Landmark,
    title: "AI Strategy, Governance & Audit",
    body: "My take on AI operating models, evidence packs, audit readiness, human oversight, and board-level control — written plainly, not as a framework pitch."
  },
  {
    href: "/blog/model-risk-management-for-ai-pra-ss1-23-us-supervisory-guidance",
    icon: HeartPulse,
    title: "Model Risk & Financial Regulation",
    body: "Notes on model inventory, tiering, validation, monitoring, PRA SS1/23, ECB supervision, Fed guidance, and SEC AI themes."
  },
  {
    href: "/blueprints",
    icon: Database,
    title: "Reference Architectures",
    body: "The blueprints I sketch out to think through controlled RAG, regulatory intelligence, treasury monitoring, and supervised AI workflows."
  }
];

const regulatedResearchSeries = [
  {
    href: "/blog/ai-strategy-and-governance-for-regulated-financial-institutions",
    label: "Strategy",
    title: "AI Strategy and Governance",
    body: "A board-friendly way to connect AI ambition, risk appetite, ownership, controls, and evidence."
  },
  {
    href: "/blog/ai-audit-readiness-evidence-controls-logs-human-oversight",
    label: "Audit",
    title: "AI Audit Readiness",
    body: "How evidence, controls, logs, and human oversight make AI systems easier to test and challenge."
  },
  {
    href: "/blog/model-risk-management-for-ai-pra-ss1-23-us-supervisory-guidance",
    label: "Model Risk",
    title: "Model Risk Management for AI",
    body: "A practical view of AI inventory, tiering, validation, monitoring, and effective challenge."
  },
  {
    href: "/blog/ecb-ai-supervision-governance-genai-prudential-risk",
    label: "ECB",
    title: "ECB AI Supervision",
    body: "Governance, GenAI, prudential risk, strategy, and control themes for supervised banks."
  },
  {
    href: "/blog/sec-and-ai-ai-washing-predictive-analytics-conflicts-disclosure-risk",
    label: "SEC",
    title: "SEC and AI",
    body: "AI-washing, predictive analytics, conflicts, disclosure risk, and governance evidence."
  },
  {
    href: "/blog/board-reporting-for-ai-risk-and-model-risk-committees",
    label: "Board",
    title: "AI Risk Reporting",
    body: "How to report AI adoption, incidents, assurance, validation findings, and remediation."
  }
];

const MARQUEE = [
  "PRA SS1/23", "EU AI Act", "DORA", "BCBS 239", "SM&CR", "IFRS 9", "Basel 3.1", "FRTB", "COREP / FINREP",
  "Consumer Duty", "Model Risk", "Agentic RAG", "Human-in-the-loop", "Audit Evidence"
];

const STATS = [
  ["16", "Book chapters"],
  ["31", "AI systems built"],
  ["66K+", "Lines of Python"],
  ["20+", "Years in finance tech"]
];

export default function HomePage() {
  const hiddenHomePostTitles = new Set([
    "From Waiting Lists to Smart Pathways",
    "NHS AI Triage Without Harm",
    "AI-Native Treasury Control Tower",
    "AI in Financial Risk Management",
    "AI Agents in Banking Operations"
  ]);

  const posts = getAllPosts().filter((post) => !hiddenHomePostTitles.has(post.title));

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-14 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pb-24 md:pt-20">
          <div>
            <p className="chip">
              <Sparkles size={13} aria-hidden="true" />
              AI governance · model risk · financial regulation
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] md:text-7xl">
              <span className="text-heading">AI you can </span>
              <span className="text-gradient">govern, audit</span>
              <span className="text-heading"> and defend.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary/80">
              I&apos;m Sreedhara Reddy Kotha. Research, reference architectures, a weekly newsletter and a book on controlled AI in
              banking, written plainly, with the caveats included.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/books" className="btn-primary min-h-11 text-sm">
                Explore the book
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/newsletter" className="btn-outline min-h-11 text-sm font-semibold">
                <Mail size={15} aria-hidden="true" />
                Newsletter
              </Link>
              <Link href="/blog" className="btn-outline min-h-11 text-sm font-semibold">
                Read writing
              </Link>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
              {STATS.map(([value, label]) => (
                <div key={label}>
                  <dt className="text-xs text-secondary/60">{label}</dt>
                  <dd className="stat-glow mt-1 font-semibold text-heading text-3xl">
                    <CountUp value={value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <AgentTrace />
        </div>

        <div className="marquee border-y border-secondary/10 py-4" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={`${m}-${i}`} className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.22em] text-secondary/55">
                {m}
                <span className="ml-10 text-primary/60">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section pb-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="grid gap-5 md:grid-cols-6">
              <article className="card-glow p-8 md:col-span-4">
                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p className="chip">The book</p>
                    <h2 className="mt-4 text-3xl font-semibold leading-tight">
                      AI for Financial Risk, Compliance and Regulatory Reporting
                    </h2>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-secondary/75">
                      16 chapters, 31 AI systems and tested Python, governed from day one against PRA SS1/23, the EU AI Act and DORA.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href={BOOK_PAPERBACK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                        Buy paperback
                      </a>
                      <a href={BOOK_KINDLE_URL} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                        Kindle
                      </a>
                      <Link href="/books" className="btn-outline text-sm">
                        Contents &amp; code
                      </Link>
                    </div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/books/title_page.jpg`}
                    alt="Book cover"
                    width={150}
                    height={225}
                    className="mx-auto hidden w-36 rounded-lg border border-primary/30 shadow-2xl shadow-black/40 sm:block"
                  />
                </div>
              </article>

              <div className="grid gap-5 md:col-span-2">
                <Link href="/newsletter" className="card-glow group p-6">
                  <Mail size={20} className="text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-semibold">Weekly newsletter</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary/70">What PRA, FCA, EBA and Fed changes mean for AI in risk.</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
                <Link href="/ask" className="card-glow group p-6">
                  <MessageSquareText size={20} className="text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-semibold">Ask the archive</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary/70">Questions answered from the writing, with citations.</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Try it <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">What I'm writing about</p>
              <h2 className="mt-3 text-3xl font-semibold text-heading md:text-4xl">
                AI governance, audit, model risk, and financial regulation.
              </h2>
              <p className="mt-4 text-secondary/70">
                A connected series I'm building for regulated financial institutions — written as research, not as a pitch.
              </p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-heading">
              Browse all articles
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {regulatedResearchSeries.map((item) => (
              <Link key={item.href} href={item.href} className="card-glow group p-6">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.label}
                </span>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-heading">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/65">{item.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-heading">
                  Read article
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
              Blueprints
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-heading md:text-5xl">
              Reference architectures I sketch out to think this through.
            </h2>
            <p className="mt-4 text-secondary/70">
              These are concepts, not products — a way to work through how controlled AI systems should behave in finance and treasury before anyone builds the real thing.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {blueprints.map((product, index) => (
              <div key={product.title} className="grid items-center gap-8 md:grid-cols-2">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <span className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${product.accent}`}>
                    {product.eyebrow}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-heading md:text-3xl">{product.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-secondary/72">{product.body}</p>
                  <p className="mt-5 flex items-start gap-2 text-sm text-secondary/70">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary/75" aria-hidden="true" />
                    {product.bullet}
                  </p>
                  <Link href={product.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-heading">
                    See blueprints
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>{product.visual}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-secondary/10 bg-panel/30 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">What I keep coming back to</p>
            <h2 className="mt-3 text-3xl font-semibold text-heading md:text-4xl">
              Three threads that run through most of what I write.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area) => (
              <Link key={area.title} href={area.href} className="card-glow group p-6">
                <area.icon size={22} className="text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-heading">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/65">{area.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-heading">
                  Explore
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeaturedInsights posts={posts} />
    </>
  );
}
