"use client";

import Link from "next/link";
import { PointerEvent, useMemo, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, CircleDot, Database, Landmark, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

type Sector = "Finance" | "Healthcare" | "Enterprise";

const sectorConfig: Record<Sector, {
  icon: typeof Landmark;
  source: string;
  intelligence: string;
  control: string;
  decision: string;
  outcome: string;
}> = {
  Finance: {
    icon: Landmark,
    source: "Approved policy and risk data",
    intelligence: "Evidence-grounded analysis",
    control: "Materiality and policy gate",
    decision: "Accountable risk owner",
    outcome: "Reviewable decision record"
  },
  Healthcare: {
    icon: Stethoscope,
    source: "Permitted operational data",
    intelligence: "Flow and exception analysis",
    control: "Safety and escalation gate",
    decision: "Authorised human review",
    outcome: "Traceable operational action"
  },
  Enterprise: {
    icon: Database,
    source: "Governed enterprise sources",
    intelligence: "Retrieval and orchestration",
    control: "Access and action boundary",
    decision: "Named process owner",
    outcome: "Auditable workflow evidence"
  }
};

const autonomyLabels = ["Assisted", "Supervised", "Bounded agent"];

export default function InteractiveResearchHero({ featuredHref }: { featuredHref: string }) {
  const [sector, setSector] = useState<Sector>("Finance");
  const [autonomy, setAutonomy] = useState(1);
  const [activeNode, setActiveNode] = useState(2);
  const stageRef = useRef<HTMLDivElement>(null);
  const config = sectorConfig[sector];
  const SectorIcon = config.icon;

  const nodes = useMemo(() => [
    { label: "01 / SOURCE", title: config.source, icon: Database, tone: "cyan" },
    { label: "02 / INTELLIGENCE", title: config.intelligence, icon: Sparkles, tone: "cyan" },
    { label: "03 / CONTROL", title: config.control, icon: ShieldCheck, tone: "gold" },
    { label: "04 / DECISION", title: config.decision, icon: CheckCircle2, tone: "green" },
    { label: "05 / EVIDENCE", title: config.outcome, icon: CircleDot, tone: "green" }
  ], [config]);

  function trackPointer(event: PointerEvent<HTMLDivElement>) {
    const stage = stageRef.current;
    if (!stage) return;
    const bounds = stage.getBoundingClientRect();
    stage.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    stage.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  }

  return (
    <section className="relative overflow-hidden border-b border-secondary/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_10%,rgba(32,197,220,0.12),transparent_30%),radial-gradient(circle_at_15%_30%,rgba(184,134,58,0.12),transparent_34%)]" />
      <div className="mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:py-16">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-200" /></span>
            Living research interface
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.96] text-white md:text-7xl xl:text-[5.4rem]">
            Explore how controlled AI <span className="text-gradient">actually works.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary/85 md:text-xl">
            Independent research, technical essays, and interactive architecture by Sreedhara Reddy Kotha—turning governance from abstract policy into systems you can inspect.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/lab" className="btn-primary min-h-12 text-sm">Open the architecture lab <ArrowRight size={16} /></Link>
            <Link href={featuredHref} className="btn-outline min-h-12 text-sm">Read featured research</Link>
          </div>
          <div className="mt-9 grid max-w-2xl grid-cols-3 gap-3 border-t border-secondary/15 pt-6">
            {[["23+", "Research notes"], ["3", "Operating contexts"], ["20+", "Years in technology"]].map(([value, label]) => (
              <div key={label}><p className="font-mono text-xl font-semibold text-white md:text-2xl">{value}</p><p className="mt-1 text-xs leading-snug text-secondary/60">{label}</p></div>
            ))}
          </div>
        </div>

        <div
          ref={stageRef}
          onPointerMove={trackPointer}
          className="interactive-stage relative overflow-hidden rounded-[1.75rem] border border-cyan-200/20 bg-[#071a2d]/90 p-4 shadow-2xl shadow-black/40 md:p-6"
        >
          <div className="pointer-glow" aria-hidden="true" />
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-secondary/10 pb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-200">Lorvex system explorer / Live</p>
              <p className="mt-1 text-sm font-semibold text-white">Controlled decision architecture</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 font-mono text-[10px] text-emerald-200"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />Controls active</div>
          </div>

          <div className="relative z-10 mt-4 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Select operating context">
            {(Object.keys(sectorConfig) as Sector[]).map((item) => {
              const Icon = sectorConfig[item].icon;
              const selected = item === sector;
              return <button key={item} type="button" onClick={() => { setSector(item); setActiveNode(2); }} className={`inline-flex min-h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl border px-3 text-xs font-semibold transition ${selected ? "border-cyan-300/45 bg-cyan-300/15 text-white" : "border-secondary/15 bg-background/20 text-secondary/60 hover:text-white"}`} aria-pressed={selected}><Icon size={14} />{item}</button>;
            })}
          </div>

          <div className="relative z-10 mt-5 grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative space-y-2 pl-4 before:absolute before:bottom-5 before:left-[29px] before:top-5 before:w-px before:bg-gradient-to-b before:from-cyan-300/60 before:via-primary/60 before:to-emerald-300/60">
              {nodes.map((node, index) => {
                const Icon = node.icon;
                const active = activeNode === index;
                return (
                  <button key={node.label} type="button" onClick={() => setActiveNode(index)} className={`relative flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${active ? "translate-x-1 border-primary/45 bg-primary/10" : "border-transparent hover:border-secondary/15 hover:bg-background/30"}`}>
                    <span className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-[#071a2d] ${node.tone === "gold" ? "border-primary text-primary" : node.tone === "green" ? "border-emerald-300/50 text-emerald-200" : "border-cyan-300/50 text-cyan-200"}`}><Icon size={13} /></span>
                    <span><span className="block font-mono text-[9px] tracking-[0.16em] text-secondary/45">{node.label}</span><span className="mt-1 block text-xs font-medium leading-snug text-secondary/85">{node.title}</span></span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col rounded-2xl border border-secondary/15 bg-background/35 p-5">
              <div className="flex items-center justify-between gap-3"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary/50">Selected stage</span><SectorIcon size={16} className="text-cyan-200" /></div>
              <p className="mt-5 text-lg font-semibold leading-snug text-white">{nodes[activeNode].title}</p>
              <p className="mt-3 text-sm leading-relaxed text-secondary/70">{activeNode < 2 ? "Information is bounded before generation begins." : activeNode === 2 ? "Policy, risk, and authority are evaluated before action." : "A named human remains accountable and the outcome is recorded."}</p>
              <div className="mt-auto pt-6">
                <div className="flex items-center justify-between text-xs"><span className="text-secondary/60">Autonomy boundary</span><span className="font-mono text-primary">{autonomyLabels[autonomy]}</span></div>
                <input aria-label="Autonomy boundary" type="range" min="0" max="2" step="1" value={autonomy} onChange={(event) => setAutonomy(Number(event.target.value))} className="lab-range mt-3 w-full" />
                <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs leading-relaxed text-secondary/70">{autonomy === 0 ? "AI drafts; a human decides every material action." : autonomy === 1 ? "AI progresses within a supervised workflow and escalates exceptions." : "Bounded tool use is permitted; material actions still require approval."}</div>
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-4 flex items-center justify-between border-t border-secondary/10 pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-secondary/40"><span>Move, select, and adjust</span><span>Educational model / v1.0</span></div>
        </div>
      </div>
    </section>
  );
}
