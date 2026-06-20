import Link from "next/link";
import { getAllPosts } from "@/utils/posts";
import RegulatoryMockup from "@/components/mockups/RegulatoryMockup";
import NHSFlowMockup from "@/components/mockups/NHSFlowMockup";
import TreasurySentinelMockup from "@/components/mockups/TreasurySentinelMockup";
import FeaturedInsights from "@/components/FeaturedInsights";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Database,
  HeartPulse,
  Landmark,
  Layers3,
  Lock,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

const badges = [
  "AI Strategy & Governance",
  "Model Risk Management",
  "AI Audit & Assurance",
  "PRA, ECB, Fed & SEC Themes",
  "Reference Architectures",
  "Board Risk Reporting"
];

const proofPoints = [
  { label: "Research-led AI governance notes", icon: BookOpen },
  { label: "Model risk and audit evidence patterns", icon: Layers3 },
  { label: "Financial regulation themes from public sources", icon: Lock },
  { label: "Finance, risk, compliance, and assurance focus", icon: ShieldCheck }
];

const blueprints = [
  {
    eyebrow: "Finance & Risk",
    title: "Regulatory Intelligence Blueprint",
    body: "A reference architecture for turning public regulatory text into structured obligation candidates, control-mapping drafts, and evidence-pack templates for internal review.",
    bullets: [
      "Human validation required",
      "Evidence-pack templates for governance discussion",
      "No legal or regulatory advice"
    ],
    href: "/blueprints",
    visual: <RegulatoryMockup />,
    accent: "text-blue-300 border-blue-400/30 bg-blue-400/10"
  },
  {
    eyebrow: "Healthcare Operations",
    title: "Healthcare Flow Intelligence",
    body: "A conceptual healthcare-operations blueprint for referral-flow intelligence, waiting-list analytics, and discharge-pathway visibility.",
    bullets: [
      "Not a clinical triage system",
      "Synthetic demo data only",
      "Formal safety and IG review required for real use"
    ],
    href: "/blueprints",
    visual: <NHSFlowMockup />,
    accent: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10"
  },
  {
    eyebrow: "Treasury & Finance",
    title: "Treasury Sentinel Blueprint",
    body: "A finance-operations reference blueprint for liquidity monitoring, cash-flow anomaly detection, scenario analysis, and ALCO-style draft reporting.",
    bullets: [
      "Educational discussion only",
      "No autonomous treasury decision-making",
      "Integration feasibility depends on governance approval"
    ],
    href: "/blueprints",
    visual: <TreasurySentinelMockup />,
    accent: "text-orange-300 border-orange-400/30 bg-orange-400/10"
  }
];

const scenarios = [
  {
    title: "Model Risk Evidence Assistant",
    lines: [
      "Scenario: A model risk team wants to reduce manual evidence gathering for periodic model review.",
      "AI pattern: RAG-assisted evidence retrieval, reviewer workflow, control checklist, audit trail.",
      "Human control: Model validator approval remains mandatory.",
      "Status: Fictionalised reference scenario."
    ]
  },
  {
    title: "Healthcare Operations Flow Intelligence",
    lines: [
      "Scenario: An operations team wants visibility over referral queues and capacity constraints.",
      "AI pattern: demand forecasting, workflow prioritisation support, exception dashboards.",
      "Human control: Clinical and operational accountability remains with authorised staff.",
      "Status: Fictionalised reference scenario."
    ]
  },
  {
    title: "Treasury Early-Warning Dashboard",
    lines: [
      "Scenario: A treasury team wants earlier visibility of cash-flow anomalies and liquidity stress indicators.",
      "AI pattern: anomaly detection, scenario triggers, ALCO-style draft reporting.",
      "Human control: Treasury judgement and formal governance remain mandatory.",
      "Status: Fictionalised reference scenario."
    ]
  }
];

const focusAreas = [
  {
    href: "/blog/ai-strategy-and-governance-for-regulated-financial-institutions",
    icon: Landmark,
    title: "AI Strategy, Governance & Audit",
    body: "Plain-language research on AI operating models, evidence packs, audit readiness, human oversight, and board-level control."
  },
  {
    href: "/blog/model-risk-management-for-ai-pra-ss1-23-us-supervisory-guidance",
    icon: HeartPulse,
    title: "Model Risk & Financial Regulation",
    body: "Educational notes on model inventory, tiering, validation, monitoring, PRA SS1/23, ECB supervision, Fed guidance, and SEC AI themes."
  },
  {
    href: "/blueprints",
    icon: Database,
    title: "Reference Architectures",
    body: "Conceptual blueprints for controlled RAG, regulatory intelligence, treasury monitoring, evidence trails, and supervised AI workflows."
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
      <section className="relative overflow-hidden border-b border-secondary/10">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pb-24 md:pt-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles size={14} aria-hidden="true" />
              AI governance, model risk, audit, and financial regulation research
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] text-white md:text-7xl">
              Controlled AI Governance for Regulated Financial Institutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary/78">
              LorvexAI publishes educational research, reference architectures, and practical notes on AI strategy, model risk, auditability, and financial regulation across PRA, ECB, Federal Reserve, and SEC supervisory themes.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full border border-secondary/20 bg-background/40 px-3 py-1 text-xs text-secondary/75">
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/blog" className="btn-primary min-h-11 text-sm font-semibold">
                Read Blog
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/research" className="btn-outline min-h-11 text-sm font-semibold">
                Read Research
              </Link>
              <Link href="/blueprints" className="btn-outline min-h-11 text-sm font-semibold">
                View Blueprints
              </Link>
            </div>
            <div className="mt-8 max-w-2xl">
              <LegalDisclaimerBanner compact />
            </div>
          </div>

          <div className="relative rounded-lg border border-secondary/15 bg-[#0d2745]/75 p-4 shadow-2xl shadow-black/30">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Reference architecture note</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Controlled AI system pattern</h2>
            <div className="mt-6 grid gap-3">
              {[
                ["1", "Public or approved information sources"],
                ["2", "Retrieval, workflow, and evidence controls"],
                ["3", "Human review and approval gates"],
                ["4", "Educational blueprint or prototype scope"]
              ].map(([n, text]) => (
                <div key={n} className="flex items-center gap-3 rounded-lg border border-secondary/15 bg-background/35 p-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">{n}</span>
                  <span className="text-sm text-secondary/75">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-secondary/10 bg-background/45 py-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 md:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point.label} className="flex items-start gap-3">
              <point.icon size={18} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm leading-snug text-secondary/70">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">New research series</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                AI governance, audit, model risk, and financial regulation.
              </h2>
              <p className="mt-4 text-secondary/70">
                A connected article series for regulated financial institutions, written as educational research rather than consulting or advisory material.
              </p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-white">
              Browse all articles
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {regulatedResearchSeries.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-lg border border-secondary/15 bg-[#0d2745]/45 p-6 transition hover:border-primary/45 hover:bg-primary/10">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.label}
                </span>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/65">{item.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-white">
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
              Reference Blueprints
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
              Educational blueprints and reference architectures.
            </h2>
            <p className="mt-4 text-secondary/70">
              These concepts are educational reference designs. They are not products for sale, client prototypes, consulting deliverables, production banking systems, compliance engines, regulatory reporting engines, clinical systems, medical devices, model validation systems, or regulated decision systems.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {blueprints.map((product, index) => (
              <div key={product.title} className="grid items-center gap-8 md:grid-cols-2">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <span className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${product.accent}`}>
                    {product.eyebrow}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">{product.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-secondary/72">{product.body}</p>
                  <ul className="mt-5 space-y-2.5">
                    {product.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-secondary/70">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary/75" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={product.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-white">
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

      <section className="border-y border-secondary/10 bg-background/45 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Architecture support</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Production-aware design thinking without regulated-advice claims.
              </h2>
              <p className="mt-4 text-secondary/70">
                LorvexAI publishes educational notes, diagrams, and reference blueprints only. It does not offer consulting, advisory services, client delivery, product implementation, or system development for others.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: "Governance discussion", body: "Designed with reference to public governance frameworks for educational mapping and design purposes." },
                { icon: Workflow, title: "Supervised workflows", body: "Systems can support planning, retrieval, workflow orchestration, and human-reviewed recommendations." },
                { icon: Database, title: "Information boundaries", body: "Examples use public, fictional, synthetic, or illustrative data rather than confidential information." },
                { icon: Lock, title: "Human accountability", body: "Independent validation, approval, and formal governance remain mandatory before any real use." }
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-secondary/15 bg-[#0d2745]/45 p-5">
                  <item.icon size={20} className="text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary/65">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                Illustrative Use-Case Scenarios
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Fictionalised scenarios for controlled AI patterns.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-secondary/65">
              Fictionalised scenarios showing how controlled AI patterns may apply in regulated environments. They are not client testimonials, case studies, or claims of delivered outcomes.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {scenarios.map((item) => (
              <article key={item.title} className="rounded-lg border border-secondary/15 bg-[#0d2745]/45 p-6">
                <h3 className="text-xl font-semibold leading-snug text-white">{item.title}</h3>
                <ul className="mt-4 space-y-3">
                  {item.lines.map((line) => (
                    <li key={line} className="text-sm leading-relaxed text-secondary/65">{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-secondary/10 bg-background/45 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Focus areas</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Independent research across regulated operating contexts.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area) => (
              <Link key={area.title} href={area.href} className="group rounded-lg border border-secondary/15 bg-[#0d2745]/45 p-6 transition hover:border-primary/45 hover:bg-primary/10">
                <area.icon size={22} className="text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-white">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/65">{area.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-white">
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
