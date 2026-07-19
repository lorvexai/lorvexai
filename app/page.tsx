import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Landmark, Layers3, ShieldCheck } from "lucide-react";
import { getAllPosts } from "@/utils/posts";
import NewsletterSignup from "@/components/NewsletterSignup";
import RegulatoryMockup from "@/components/mockups/RegulatoryMockup";
import NHSFlowMockup from "@/components/mockups/NHSFlowMockup";
import TreasurySentinelMockup from "@/components/mockups/TreasurySentinelMockup";
import InteractiveResearchHero from "@/components/InteractiveResearchHero";

const focusAreas = [
  {
    icon: ShieldCheck,
    title: "AI governance and audit",
    body: "Operating models, evidence, human oversight, board reporting, and the controls that turn policy into practice.",
    href: "/blog/ai-strategy-and-governance-for-regulated-financial-institutions"
  },
  {
    icon: Landmark,
    title: "Model risk and regulation",
    body: "Practical notes on validation, monitoring, PRA, ECB, Federal Reserve, and SEC supervisory themes.",
    href: "/blog/model-risk-management-for-ai-pra-ss1-23-us-supervisory-guidance"
  },
  {
    icon: Layers3,
    title: "Controlled AI architecture",
    body: "Reference designs for RAG, agentic workflows, treasury monitoring, and reviewable evidence trails.",
    href: "/blueprints"
  }
];

const blueprints = [
  {
    label: "Finance and risk",
    title: "Regulatory Intelligence",
    body: "From public regulatory text to reviewable obligation candidates and evidence-pack drafts.",
    visual: <RegulatoryMockup />
  },
  {
    label: "Healthcare operations",
    title: "Flow Intelligence",
    body: "A conceptual pattern for referral visibility, queue analytics, and supervised operational support.",
    visual: <NHSFlowMockup />
  },
  {
    label: "Treasury and finance",
    title: "Treasury Sentinel",
    body: "A reference pattern for anomaly monitoring, liquidity scenarios, and human-reviewed reporting.",
    visual: <TreasurySentinelMockup />
  }
];

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.slug === "ai-strategy-and-governance-for-regulated-financial-institutions") ?? posts[0];
  const latest = posts.filter((post) => post.slug !== featured.slug).slice(0, 3);

  return (
    <>
      <InteractiveResearchHero featuredHref={`/blog/${featured.slug}`} />

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Start here</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">One argument, explored properly.</h2>
              <p className="mt-4 text-secondary/75">Featured research for readers who want the substance before the summaries.</p>
            </div>
            <Link href="/research" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-white">Browse research <ArrowRight size={15} /></Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <Link href={`/blog/${featured.slug}`} className="group rounded-2xl border border-primary/30 bg-[linear-gradient(145deg,rgba(18,49,90,0.9),rgba(8,26,46,0.96))] p-7 transition hover:border-primary/60 md:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><FileText size={14} /> Featured research</span>
                <span className="text-xs text-secondary/60">{featured.date}</span>
              </div>
              <h3 className="mt-8 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">{featured.title}</h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary/80">{featured.excerpt}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {featured.tags.slice(0, 4).map((tag) => <span key={tag} className="rounded-full border border-secondary/20 px-3 py-1 text-xs text-secondary/70">{tag}</span>)}
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-white">Read the full paper <ArrowRight size={15} /></span>
            </Link>

            <div className="grid gap-4">
              {latest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-2xl border border-secondary/15 bg-background/35 p-5 transition hover:border-primary/45 hover:bg-primary/5">
                  <p className="text-xs text-secondary/60">{post.date}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-white">{post.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-white">Read note <ArrowRight size={13} /></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-secondary/10 bg-background/45 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Core themes</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Three threads that connect the work.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {focusAreas.map((area) => (
              <Link key={area.title} href={area.href} className="group rounded-2xl border border-secondary/15 bg-[#0d2745]/45 p-6 transition hover:-translate-y-1 hover:border-primary/45">
                <area.icon size={22} className="text-primary" />
                <h3 className="mt-5 text-xl font-semibold text-white">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/75">{area.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-white">Explore <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Reference architecture</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Ideas made visible.</h2>
              <p className="mt-4 text-secondary/75">Conceptual diagrams for thinking through controls, evidence, escalation, and human accountability before implementation.</p>
            </div>
            <Link href="/blueprints" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white">View all blueprints <ArrowRight size={15} /></Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {blueprints.map((blueprint) => (
              <article key={blueprint.title} className="overflow-hidden rounded-2xl border border-secondary/15 bg-[#0d2745]/45">
                <div className="border-b border-secondary/10 p-3">{blueprint.visual}</div>
                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">{blueprint.label}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{blueprint.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/75">{blueprint.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-secondary/10 bg-[#e8edf2] py-16 text-[#10243b] md:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-[#10243b]/15 bg-[#dce4eb]">
            <BookOpen size={58} className="text-[#9a6e2b]" aria-hidden="true" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#8b642b]">Books and reading notes</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#10243b] md:text-4xl">Long-form thinking for practitioners.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-[#334a63]">Explore the book project on AI for financial risk, compliance, and regulatory reporting, alongside reading notes that connect important books to real enterprise decisions.</p>
            <Link href="/books" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#10243b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#183653]">Explore books and reviews <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section id="subscribe" className="section scroll-mt-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 rounded-3xl border border-primary/30 bg-[radial-gradient(circle_at_top_right,rgba(184,134,58,0.18),transparent_38%),rgba(13,39,69,0.8)] p-7 md:grid-cols-[0.9fr_1.1fr] md:items-center md:p-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Research notes by email</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">One useful idea at a time.</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-secondary/75">Occasional notes on controlled AI, finance, governance, and the books shaping my thinking. No promotional noise.</p>
            </div>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </>
  );
}
