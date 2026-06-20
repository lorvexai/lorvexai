import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import {
  ArrowRight,
  Banknote,
  BookOpenCheck,
  ClipboardCheck,
  FileSearch,
  Landmark,
  Scale,
  ShieldCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Governance Topics | LorvexAI",
  description:
    "Topic-led research on AI strategy, model risk, audit readiness, financial regulation, board reporting, and reference architectures.",
  alternates: { canonical: "/topics" }
};

const topics = [
  {
    href: "/blog/ai-strategy-and-governance-for-regulated-financial-institutions",
    icon: ShieldCheck,
    label: "Governance",
    title: "AI Strategy & Governance",
    body: "Operating models, risk appetite, use-case ownership, control design, and evidence packs for regulated institutions."
  },
  {
    href: "/blog/model-risk-management-for-ai-pra-ss1-23-us-supervisory-guidance",
    icon: FileSearch,
    label: "Model Risk",
    title: "AI Model Risk Management",
    body: "Inventory, tiering, validation, explainability, monitoring, effective challenge, and lifecycle governance."
  },
  {
    href: "/blog/ai-audit-readiness-evidence-controls-logs-human-oversight",
    icon: ClipboardCheck,
    label: "Audit",
    title: "AI Audit & Assurance",
    body: "Evidence, control testing, logs, human oversight, independent challenge, and audit-ready operating records."
  },
  {
    href: "/blog/ecb-ai-supervision-governance-genai-prudential-risk",
    icon: Landmark,
    label: "ECB",
    title: "ECB AI Supervision",
    body: "Governance, GenAI, prudential risk, third-party dependency, operational resilience, and board oversight."
  },
  {
    href: "/blog/sec-and-ai-ai-washing-predictive-analytics-conflicts-disclosure-risk",
    icon: Scale,
    label: "SEC",
    title: "SEC AI Themes",
    body: "AI-washing, predictive analytics, conflicts, disclosure risk, communication controls, and substantiation."
  },
  {
    href: "/blog/board-reporting-for-ai-risk-and-model-risk-committees",
    icon: BookOpenCheck,
    label: "Board",
    title: "Board & Committee Reporting",
    body: "AI dashboards, risk tiering, incidents, validation findings, assurance status, and remediation decisions."
  },
  {
    href: "/blueprints",
    icon: Banknote,
    label: "Architecture",
    title: "Reference Architectures",
    body: "Educational blueprints for regulatory intelligence, controlled RAG, treasury monitoring, and evidence trails."
  }
];

export default function TopicsPage() {
  return (
    <>
      <Section
        eyebrow="Topics"
        title="Regulated AI research by theme"
        description="A topic-led map of LorvexAI research across AI governance, model risk, audit readiness, financial regulation, board reporting, and educational reference architectures."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group rounded-lg border border-secondary/15 bg-[#0d2745]/45 p-6 transition hover:border-primary/45 hover:bg-primary/10"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {topic.label}
                </span>
                <topic.icon size={19} className="text-primary" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-semibold leading-snug text-white">{topic.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary/65">{topic.body}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-white">
                Explore topic
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <section className="section pt-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <LegalDisclaimerBanner />
        </div>
      </section>
    </>
  );
}
