import Link from "next/link";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import {
  BookOpen,
  FileText,
  Code2,
  ArrowRight,
  Clock,
  ExternalLink,
  Sparkles
} from "lucide-react";

const featuredResearch = [
  {
    category: "Whitepaper",
    title: "Enterprise RAG Governance: A Practitioner's Framework",
    desc: "A comprehensive framework for deploying retrieval-augmented generation systems in regulated financial and healthcare environments — covering data lineage, citation controls, and audit readiness.",
    tags: ["RAG", "Governance", "Enterprise"],
    href: "/blog/enterprise-rag-architectures-for-the-regulated-enterprise"
  },
  {
    category: "Technical Guide",
    title: "Agentic AI Systems: Design Patterns for Regulated Workflows",
    desc: "Step-by-step design patterns for building multi-agent systems that operate safely in environments with strict accountability requirements — including human-in-the-loop controls and policy enforcement.",
    tags: ["Agentic AI", "Architecture", "Banking"],
    href: "/blog/the-rise-of-agentic-ai"
  },
  {
    category: "Whitepaper",
    title: "AI Risk Platform Architecture: End-to-End Blueprint",
    desc: "A reference architecture for financial institutions building AI risk management platforms — from data ingestion through model monitoring, control mapping, and board-level reporting.",
    tags: ["Risk", "Finance", "Architecture"],
    href: "/blog/end-to-end-ai-risk-platform-architecture"
  }
];

const comingSoon = [
  {
    category: "Book",
    title: "LLM Engineering for Banking Operations",
    desc: "A practitioner's guide to building production LLM systems in financial services — from RAG pipeline design to regulatory compliance and model risk management.",
    tags: ["LLM", "Banking", "Production"]
  },
  {
    category: "Whitepaper",
    title: "NHS AI Triage: A Safety-First Implementation Guide",
    desc: "How NHS trusts can deploy AI-assisted clinical triage safely — with IG Toolkit alignment, explainability requirements, and clinical governance frameworks.",
    tags: ["NHS", "Healthcare", "Safety"]
  },
  {
    category: "Technical Guide",
    title: "Treasury AI Playbook: Liquidity Intelligence at Scale",
    desc: "Implementation guide for deploying AI-powered liquidity forecasting and anomaly detection in multi-entity treasury operations.",
    tags: ["Treasury", "Finance", "LCR/NSFR"]
  }
];

const categories = [
  {
    icon: BookOpen,
    title: "Books",
    desc: "Long-form explorations of LLM system design, agentic AI architecture, and evaluation methodology at enterprise scale.",
    count: "1 in progress"
  },
  {
    icon: FileText,
    title: "Whitepapers",
    desc: "Strategic research on AI risk, governance frameworks, and sector-specific deployment patterns for finance and healthcare.",
    count: "3 published"
  },
  {
    icon: Code2,
    title: "Technical Guides",
    desc: "Implementation playbooks for enterprise AI engineering teams — covering RAG, agents, evaluation, and production deployment.",
    count: "2 published"
  }
];

const tagAccent: Record<string, string> = {
  "RAG":          "border-blue-400/30 bg-blue-400/10 text-blue-300",
  "Governance":   "border-violet-400/30 bg-violet-400/10 text-violet-300",
  "Enterprise":   "border-violet-400/30 bg-violet-400/10 text-violet-300",
  "Architecture": "border-violet-400/30 bg-violet-400/10 text-violet-300",
  "Agentic AI":   "border-blue-400/30 bg-blue-400/10 text-blue-300",
  "Banking":      "border-blue-400/30 bg-blue-400/10 text-blue-300",
  "Risk":         "border-orange-400/30 bg-orange-400/10 text-orange-300",
  "Finance":      "border-blue-400/30 bg-blue-400/10 text-blue-300",
  "NHS":          "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "Healthcare":   "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "Safety":       "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "LLM":          "border-blue-400/30 bg-blue-400/10 text-blue-300",
  "Production":   "border-secondary/25 bg-secondary/10 text-secondary/75",
  "Treasury":     "border-orange-400/30 bg-orange-400/10 text-orange-300",
  "LCR/NSFR":    "border-orange-400/30 bg-orange-400/10 text-orange-300"
};

function TagPill({ tag }: { tag: string }) {
  const cls = tagAccent[tag] ?? "border-secondary/25 bg-secondary/10 text-secondary/75";
  return (
    <span className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] ${cls}`}>
      {tag}
    </span>
  );
}

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="section pb-6 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-primary/30 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Research &amp; Publications</p>
                <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                  <span className="text-white">Publishing the </span>
                  <span className="text-gradient">Future of Applied AI</span>
                </h1>
                <p className="mt-5 max-w-xl text-secondary/80">
                  Frameworks, guides, and deep dives built from real-world AI deployments in finance, banking, and NHS operations — not theoretical research.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/blog" className="btn-primary text-sm">
                    Read the Blog
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-outline text-sm">
                    Request a Briefing
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {categories.map((cat) => (
                  <div key={cat.title} className="flex items-center gap-4 rounded-xl border border-secondary/15 bg-background/30 px-4 py-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/15">
                      <cat.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{cat.title}</p>
                      <p className="text-xs text-secondary/55">{cat.count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available research */}
      <Section
        eyebrow="Available Now"
        title="Published research and frameworks"
        description="Practical, implementation-ready material drawn from live enterprise AI projects."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featuredResearch.map((item) => (
            <article key={item.title} className="glass card-hover group flex flex-col rounded-2xl border border-secondary/20 p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {item.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available
                </span>
              </div>
              <h3 className="group-title text-base font-semibold leading-snug text-white transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary/70">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
              </div>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
              >
                Read now
                <ExternalLink size={13} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* Coming soon */}
      <section className="section border-y border-secondary/10 bg-background/40">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.28em] text-primary">Coming Soon</p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                <span className="text-white">In </span>
                <span className="text-gradient">Development</span>
              </h2>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-secondary/65 transition hover:text-white">
              Get notified when published
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {comingSoon.map((item) => (
              <div key={item.title} className="glass rounded-2xl border border-secondary/15 p-6 opacity-80">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/60">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-secondary/50">
                    <Clock size={10} />
                    In progress
                  </span>
                </div>
                <h3 className="text-base font-semibold leading-snug text-white/80">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/60">{item.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
                </div>
                <p className="mt-4 flex items-center gap-1.5 text-xs text-secondary/45">
                  <Sparkles size={12} />
                  Notify me on release
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section title="Access LorvexAI research" description="">
        <CTA />
      </Section>
    </>
  );
}
