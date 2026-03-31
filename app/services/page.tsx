import Section from "@/components/Section";
import CTA from "@/components/CTA";

const capabilityPillars = [
  {
    title: "AI Strategy & Value Realization",
    summary:
      "Turn board-level ambition into a practical roadmap with measurable outcomes.",
    bullets: [
      "Use-case prioritization and ROI cases",
      "AI portfolio and funding model",
      "Operating model and leadership alignment"
    ]
  },
  {
    title: "Enterprise AI Architecture",
    summary:
      "Design scalable AI foundations that integrate with your existing data and controls.",
    bullets: [
      "Reference architecture and integration blueprint",
      "Data, security, and model access patterns",
      "Environment strategy across cloud and on-prem"
    ]
  },
  {
    title: "LLM Engineering",
    summary:
      "Build production-grade generative AI systems with reliability, speed, and quality controls.",
    bullets: [
      "RAG pipelines and retrieval quality tuning",
      "Prompt orchestration and evaluation harnesses",
      "Model routing, latency, and cost optimization"
    ]
  },
  {
    title: "Agentic AI Systems",
    summary:
      "Deploy supervised AI agents that execute workflows across enterprise tools.",
    bullets: [
      "Single-agent and multi-agent orchestration",
      "Tool integration and guarded action execution",
      "Human-in-the-loop checkpoints for critical decisions"
    ]
  },
  {
    title: "AI Risk & Governance",
    summary:
      "Embed control, explainability, and compliance into delivery from day one.",
    bullets: [
      "Risk taxonomy and control mapping",
      "Model/agent policy enforcement",
      "Auditability, monitoring, and incident playbooks"
    ]
  },
  {
    title: "AI Enablement & Change",
    summary:
      "Build the internal capability to scale safely beyond a single pilot.",
    bullets: [
      "Role-based enablement and playbooks",
      "Cross-functional delivery governance",
      "Adoption planning and KPI instrumentation"
    ]
  }
];

const deliveryModel = [
  {
    title: "1. Diagnose",
    detail:
      "We assess strategic priorities, data reality, architecture constraints, and risk exposure."
  },
  {
    title: "2. Deliver",
    detail:
      "We design and ship production-ready AI systems with measurable business outcomes."
  },
  {
    title: "3. Scale",
    detail:
      "We establish governance, enable teams, and optimize performance to sustain value."
  }
];

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="AI services built for real enterprise adoption"
        description="From strategy to engineering to governance, we help teams move from pilot activity to dependable AI capability."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="glass rounded-xl p-4 text-sm text-secondary/80">
            Outcome-driven AI portfolio
          </div>
          <div className="glass rounded-xl p-4 text-sm text-secondary/80">
            Production-grade LLM and agent systems
          </div>
          <div className="glass rounded-xl p-4 text-sm text-secondary/80">
            Governance-ready deployment in regulated settings
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilityPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="glass rounded-2xl p-6 shadow-glow transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-secondary/80">{pillar.summary}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-secondary/70">
                {pillar.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How We Work"
        title="A delivery model designed to reduce execution risk"
        description="We combine strategic clarity, engineering depth, and governance discipline in every phase."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {deliveryModel.map((stage) => (
            <article key={stage.title} className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white">{stage.title}</h3>
              <p className="mt-3 text-sm text-secondary/80">{stage.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Launch your AI program with confidence" description="">
        <CTA />
      </Section>
    </>
  );
}
