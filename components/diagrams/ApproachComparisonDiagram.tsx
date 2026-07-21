import { MessageSquare, Database, SlidersHorizontal, ArrowRight } from "lucide-react";

const approaches = [
  {
    icon: MessageSquare,
    accent: "border-blue-400/30 bg-blue-400/10 text-blue-300",
    label: "Prompt Engineering",
    tagline: "Model weights unchanged",
    rows: [
      ["Setup time", "Hours"],
      ["Best for", "Format, tone, reasoning steps"],
      ["Risk", "No audit trail of knowledge used"]
    ]
  },
  {
    icon: Database,
    accent: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    label: "RAG",
    tagline: "Docs injected at query time",
    rows: [
      ["Setup time", "Days – weeks"],
      ["Best for", "Live knowledge, source citations"],
      ["Risk", "Only as good as retrieval quality"]
    ]
  },
  {
    icon: SlidersHorizontal,
    accent: "border-violet-400/30 bg-violet-400/10 text-violet-300",
    label: "Fine-Tuning",
    tagline: "Model weights updated",
    rows: [
      ["Setup time", "Weeks – months"],
      ["Best for", "Consistent style/format at scale"],
      ["Risk", "Expensive, needs 1,000+ examples"]
    ]
  }
] as const;

export default function ApproachComparisonDiagram() {
  return (
    <div className="corner-ticks not-prose my-8 border border-secondary/15 bg-panel/60 p-5 md:p-7">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
        Three approaches, Fig. 01
      </p>
      <h3 className="mt-2 text-xl font-semibold text-heading md:text-2xl">
        Prompting, RAG, or fine-tuning?
      </h3>
      <p className="mt-1 text-sm text-secondary/70">Same question, three different levers.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {approaches.map((a) => (
          <div key={a.label} className="flex flex-col border border-secondary/15 bg-panel2/50 p-4">
            <span className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${a.accent}`}>
              <a.icon size={12} aria-hidden="true" />
              {a.label}
            </span>
            <p className="mt-3 font-mono text-xs text-secondary/60">{a.tagline}</p>
            <div className="mt-4 space-y-2.5 border-t border-secondary/15 pt-3">
              {a.rows.map(([k, v]) => (
                <div key={k} className="text-xs leading-relaxed">
                  <span className="text-secondary/50">{k}: </span>
                  <span className="text-secondary/85">{v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-heading">
        <span>Prompting shapes the question.</span>
        <ArrowRight size={13} className="text-primary" aria-hidden="true" />
        <span>RAG supplies the facts.</span>
        <ArrowRight size={13} className="text-primary" aria-hidden="true" />
        <span>Fine-tuning shapes the behaviour.</span>
      </div>
    </div>
  );
}
