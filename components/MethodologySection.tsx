import {
  Radar,
  Network,
  Blocks,
  ShieldCheck,
  RefreshCw
} from "lucide-react";

const phases = [
  {
    title: "AI Opportunity Discovery",
    description:
      "Identify AI education, architecture, and prototype opportunities with feasibility, risk, and data-readiness review.",
    icon: Radar
  },
  {
    title: "AI System Architecture",
    description:
      "Design resilient system blueprints across data, retrieval, model serving, and evaluation layers.",
    icon: Network
  },
  {
    title: "AI Reference Design",
    description:
      "Document conceptual LLM pipelines, agent orchestration patterns, and integration considerations.",
    icon: Blocks
  },
  {
    title: "Review & Governance",
    description:
      "Define monitoring, policy enforcement, responsible AI controls, and human-review points.",
    icon: ShieldCheck
  },
  {
    title: "Continuous AI Optimization",
    description:
      "Iterate with evaluation harnesses, feedback loops, and cost-performance tuning.",
    icon: RefreshCw
  }
];

export default function MethodologySection() {
  return (
    <section className="section">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-secondary/70">
          Methodology
        </p>
        <h2 className="text-3xl font-semibold text-heading md:text-4xl">
          AI Methodology & Design Framework
        </h2>
        <p className="mt-4 max-w-2xl text-secondary/80">
          A structured design model that aligns education, architecture, governance,
          and educational prototyping for controlled AI systems.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.title}
                className="glass rounded-2xl p-6 shadow-glow"
              >
                <div className="flex items-center gap-3 text-heading">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/20 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{phase.title}</h3>
                </div>
                <p className="mt-3 text-sm text-secondary/80">
                  {phase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
