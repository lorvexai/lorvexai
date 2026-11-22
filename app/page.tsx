import Link from "next/link";
import { getAllPosts } from "@/utils/posts";
import RegulatoryMockup from "@/components/mockups/RegulatoryMockup";
import TreasurySentinelMockup from "@/components/mockups/TreasurySentinelMockup";
import AgentTrace from "@/components/AgentTrace";
import BlogCard from "@/components/BlogCard";
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
  }
];

const MARQUEE = [
  "PRA SS1/23", "EU AI Act", "DORA", "BCBS 239", "SM&CR", "IFRS 9", "Basel 3.1", "FRTB", "COREP / FINREP",
  "Consumer Duty", "Model Risk", "Agentic RAG", "Human-in-the-loop", "Audit Evidence"
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
  const FEATURED_SLUG = "ai-strategy-and-governance-for-regulated-financial-institutions";
  const featuredPost = posts.find((p) => p.slug === FEATURED_SLUG) ?? posts[0];
  const recentPosts = posts.filter((p) => p.slug !== featuredPost?.slug).slice(0, 3);

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
              Research and reference architectures for banking, risk and regulatory technology.
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
          <AgentTrace />
        </div>

        <div className="marquee border-y border-secondary/10 py-3" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={`${m}-${i}`} className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.14em] text-secondary/70">
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
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
              Blueprints
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-heading md:text-5xl">
              A featured reference architecture.
            </h2>
            <p className="mt-4 text-secondary/70">
              These are concepts, not products — a way to work through how controlled AI systems should behave in finance and treasury before anyone builds the real thing.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {blueprints.map((product, index) => (
              <div key={product.title} className="grid items-center gap-8 md:grid-cols-2">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${product.accent}`}>
                    {product.eyebrow}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-heading md:text-3xl">{product.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-secondary/72">{product.body}</p>
                  <p className="mt-5 flex items-start gap-2 text-sm text-secondary/70">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary/75" aria-hidden="true" />
                    {product.bullet}
                  </p>
                  <Link href={product.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-heading">
                    Open blueprint
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>{product.visual}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">Research</p>
              <h2 className="mt-2 text-3xl font-semibold text-heading md:text-4xl">Latest research and writing</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-heading">
              Browse all research
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="card-glow group mb-5 block border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8">
              <span className="chip">Featured</span>
              <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-snug md:text-3xl">{featuredPost.title}</h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-secondary/80">{featuredPost.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-primary group-hover:text-heading">
                Read article <ArrowRight size={14} aria-hidden="true" />
                <span className="font-normal text-secondary/70">{featuredPost.readingTime} min read</span>
              </span>
            </Link>
          )}
          <div className="grid gap-5 md:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} slug={post.slug} title={post.title} excerpt={post.excerpt} tags={post.tags} readingTime={post.readingTime} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
