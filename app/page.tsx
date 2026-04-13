import Link from "next/link";
import { getAllPosts } from "@/utils/posts";
import {
  ArrowRight,
  ShieldCheck,
  Workflow,
  Database,
  Cpu,
  Landmark,
  HeartPulse,
  Building2,
  Factory,
  Lock,
  Clock,
  Zap,
  TrendingUp,
  ChevronRight,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import LiveAgentTrace from "@/components/LiveAgentTrace";
import FeaturedInsights from "@/components/FeaturedInsights";

export default function HomePage() {
  const hiddenHomePostTitles = new Set([
    "From Waiting Lists to Smart Pathways",
    "NHS AI Triage Without Harm",
    "AI-Native Treasury Control Tower",
    "AI in Financial Risk Management",
    "AI Agents in Banking Operations"
  ]);

  const posts = getAllPosts().filter((post) => !hiddenHomePostTitles.has(post.title));

  const sectors = [
    { icon: Landmark,   label: "Finance"             },
    { icon: HeartPulse, label: "Healthcare"           },
    { icon: Building2,  label: "NHS"                  },
    { icon: Factory,    label: "Enterprise Platforms" }
  ];

  const differentiators = [
    {
      icon: ShieldCheck,
      title: "Governance-First by Design",
      body: "Every system we build includes audit trails, explainability hooks, and control boundaries aligned to FCA, NHS Digital, and ISO 42001 standards.",
      accent: "Finance & NHS compliance built in"
    },
    {
      icon: Zap,
      title: "Agentic, Not Just Automated",
      body: "Our systems reason, plan, and self-correct across multi-step workflows — moving beyond rule-based RPA into genuinely autonomous AI operations.",
      accent: "Multi-step agent orchestration"
    },
    {
      icon: TrendingUp,
      title: "Speed to Production",
      body: "We run structured discovery sprints and deliver working production pilots in under 12 weeks, with clear SLAs and measurable business outcomes.",
      accent: "< 12 weeks to working pilot"
    }
  ];

  const stats = [
    { value: "3",    label: "AI Products in Market",         icon: BarChart3    },
    { value: "4",    label: "Regulated Sectors Served",      icon: ShieldCheck  },
    { value: "100%", label: "Governance-First Architecture", icon: Lock         },
    { value: "4wk",  label: "Blueprint Sprint to Pilot",     icon: Clock        }
  ];

  const caseStudies = [
    {
      sector: "Tier 1 UK Bank",
      icon: Landmark,
      color: "border-blue-400/25",
      iconColor: "text-blue-300",
      outcome: "60% reduction in model validation cycle time",
      detail: "Deployed an agentic AI layer over existing risk models, automating evidence collection, challenger model testing, and PRA-aligned documentation — cutting quarterly validation from 6 weeks to under 2.",
      tags: ["Model Risk", "PRA Compliance", "Agentic AI"]
    },
    {
      sector: "NHS Trust",
      icon: HeartPulse,
      color: "border-emerald-400/25",
      iconColor: "text-emerald-300",
      outcome: "34% improvement in referral triage accuracy",
      detail: "Implemented our NHS Flow Optimizer to intelligently route incoming referrals against capacity and clinical urgency signals — reducing waiting-list growth and improving pathway efficiency.",
      tags: ["NHS Flow", "Clinical Safety", "RAG Pipeline"]
    },
    {
      sector: "Global Asset Manager",
      icon: Building2,
      color: "border-violet-400/25",
      iconColor: "text-violet-300",
      outcome: "8-week delivery from brief to production pilot",
      detail: "Built a Treasury Sentinel liquidity early-warning system integrated with existing data warehouse — live cashflow anomaly detection and ALCO-ready reporting from sprint to production.",
      tags: ["Treasury AI", "Liquidity Risk", "4-week Sprint"]
    }
  ];

  const trustCards = [
    {
      sector: "Financial Services",
      icon: Landmark,
      color: "border-blue-400/25 bg-blue-400/5",
      iconColor: "text-blue-300",
      quote: "We bring banking-grade control to AI deployment — PRA compliance, model risk governance, and full auditability built in from day one.",
      highlights: ["Basel 3.1 / PRA alignment", "Model risk framework", "ALCO-ready reporting"]
    },
    {
      sector: "NHS & Healthcare",
      icon: HeartPulse,
      color: "border-emerald-400/25 bg-emerald-400/5",
      iconColor: "text-emerald-300",
      quote: "Our NHS systems are designed around clinical safety, IG Toolkit compliance, and real throughput gains — not demo-ware.",
      highlights: ["IG Toolkit & NHS Digital aligned", "Clinical safety by design", "Referral-to-discharge intelligence"]
    },
    {
      sector: "Enterprise Operations",
      icon: Building2,
      color: "border-violet-400/25 bg-violet-400/5",
      iconColor: "text-violet-300",
      quote: "We architect enterprise AI platforms that scale from a single team to organisation-wide deployment without rebuilding the foundation.",
      highlights: ["Multi-system integration", "Role-based governance", "Scalable agentic architecture"]
    }
  ];

  return (
    <>
      {/* Sector strip */}
      <section className="border-b border-secondary/10 bg-background/75 py-2.5">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-[10px] uppercase tracking-[0.28em] text-secondary/55">
              Who We Help
            </p>
            <div className="flex flex-wrap gap-1.5">
              {sectors.map((area) => (
                <span
                  key={area.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-secondary"
                >
                  <area.icon size={12} className="text-primary" aria-hidden="true" />
                  {area.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="section pb-4 pt-14 md:pb-6 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass grid gap-8 rounded-3xl border border-primary/30 p-7 md:grid-cols-[1.15fr_0.85fr] md:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                LorvexAI Control Plane
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
                Operationalizing{" "}
                <span className="text-gradient">Agentic AI</span>
                {" "}for Enterprise Scale.
              </h1>
              <p className="mt-5 max-w-2xl text-secondary/80">
                We engineer agentic AI systems, enterprise RAG governance layers, and
                LLM engineering platforms for banking, healthcare, and NHS operations.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary min-h-11 text-sm">
                  Request an Agentic Audit
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/products" className="btn-outline min-h-11 text-sm">
                  Explore Products
                </Link>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Workflow,     label: "Agentic AI Systems"         },
                  { icon: Database,    label: "Enterprise RAG Governance"   },
                  { icon: Cpu,         label: "LLM Engineering for Banking" },
                  { icon: ShieldCheck, label: "NHS AI Triage Blueprint"     }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex min-h-11 items-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 text-sm text-secondary"
                  >
                    <item.icon size={16} className="text-primary" aria-hidden="true" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <LiveAgentTrace />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-secondary/10 bg-background/50 py-10 md:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <stat.icon size={20} className="mb-2 text-primary" aria-hidden="true" />
                <p className="stat-glow text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                <p className="mt-1.5 max-w-[120px] text-xs leading-snug text-secondary/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LorvexAI */}
      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-primary">
              Why LorvexAI
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              <span className="text-white">Built for </span>
              <span className="text-gradient">Regulated Enterprise</span>
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-secondary/70">
              We don&apos;t just prototype — we architect, govern, and deliver
              production-grade AI in environments where failure has real consequences.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="glass card-hover rounded-2xl border border-primary/20 p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/35 bg-primary/15">
                  <item.icon size={20} className="text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/70">{item.body}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <ChevronRight size={12} aria-hidden="true" />
                  {item.accent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section border-y border-secondary/10 bg-background/40 py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.28em] text-primary">Client Outcomes</p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              <span className="text-white">Real outcomes from </span>
              <span className="text-gradient">production deployments</span>
            </h2>
            <p className="mt-4 max-w-2xl text-secondary/70">
              Anonymised case studies from live enterprise AI engagements across banking, NHS, and asset management.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <div key={cs.sector} className={`glass card-hover rounded-2xl border p-6 ${cs.color}`}>
                <div className="mb-4 flex items-center gap-3">
                  <cs.icon size={18} className={cs.iconColor} aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary/60">{cs.sector}</span>
                </div>
                <p className="stat-glow text-lg font-bold leading-snug text-white">{cs.outcome}</p>
                <p className="mt-3 text-sm leading-relaxed text-secondary/70">{cs.detail}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-secondary/20 bg-background/40 px-2.5 py-1 text-[10px] font-medium text-secondary/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof / trust by sector */}
      <section className="section py-14">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.28em] text-secondary/50">
              Trusted by teams across
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Regulated industries that can&apos;t afford to get AI wrong
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {trustCards.map((card) => (
              <div key={card.sector} className={`card-hover rounded-2xl border p-6 ${card.color}`}>
                <div className="mb-4 flex items-center gap-3">
                  <card.icon size={20} className={card.iconColor} aria-hidden="true" />
                  <h3 className="font-semibold text-white">{card.sector}</h3>
                </div>
                <p className="text-sm italic leading-relaxed text-secondary/70">
                  &ldquo;{card.quote}&rdquo;
                </p>
                <ul className="mt-4 space-y-1.5">
                  {card.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-secondary/60">
                      <CheckCircle2 size={11} className="shrink-0 text-primary/60" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "No generic AI — every system is sector-specific",
              "Governance built in, not bolted on after",
              "Production delivery with measurable SLAs",
              "From sprint to scale without re-architecture"
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 rounded-xl border border-secondary/15 bg-background/30 px-4 py-3">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-primary/70" aria-hidden="true" />
                <p className="text-xs leading-snug text-secondary/65">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedInsights posts={posts} />
    </>
  );
}
