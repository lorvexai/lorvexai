"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, ArrowRight, Bot, CheckCircle2, Database, FileCheck2, Gauge, ShieldCheck, UserCheck } from "lucide-react";

type Sector = "Banking" | "Healthcare" | "Enterprise";
type UseCase = "Knowledge assistant" | "Decision support" | "Bounded agent";
type Risk = "Low" | "Medium" | "High";

const sectors: Record<Sector, { sources: string; owner: string; accent: string }> = {
  Banking: { sources: "Policies, controls, risk data", owner: "Accountable risk owner", accent: "text-blue-200" },
  Healthcare: { sources: "Permitted operational data", owner: "Authorised clinical or operational owner", accent: "text-emerald-200" },
  Enterprise: { sources: "Governed enterprise sources", owner: "Named process owner", accent: "text-violet-200" }
};

const cases: Record<UseCase, { engine: string; action: string; baseline: number }> = {
  "Knowledge assistant": { engine: "Grounded retrieval and synthesis", action: "Draft answer with citations", baseline: 24 },
  "Decision support": { engine: "Analysis, scoring, and explanation", action: "Recommendation for review", baseline: 48 },
  "Bounded agent": { engine: "Planning, tools, and policy checks", action: "Constrained workflow action", baseline: 68 }
};

const riskControls: Record<Risk, string[]> = {
  Low: ["Source allowlist", "Output disclaimer", "Basic activity log"],
  Medium: ["Source and access controls", "Evaluation evidence", "Exception escalation", "Human approval"],
  High: ["Independent validation", "Mandatory human approval", "Full evidence trace", "Kill switch and incident route", "Continuous monitoring"]
};

export default function ArchitectureLab() {
  const [sector, setSector] = useState<Sector>("Banking");
  const [useCase, setUseCase] = useState<UseCase>("Decision support");
  const [risk, setRisk] = useState<Risk>("High");
  const [autonomy, setAutonomy] = useState(1);

  const model = useMemo(() => {
    const riskWeight = risk === "High" ? 24 : risk === "Medium" ? 12 : 2;
    const autonomyWeight = autonomy * 8;
    const score = Math.min(96, cases[useCase].baseline + riskWeight + autonomyWeight);
    const approval = risk === "High" || autonomy > 0 || useCase !== "Knowledge assistant";
    const controls = [...riskControls[risk]];
    if (autonomy === 2 && !controls.includes("Kill switch and incident route")) controls.push("Kill switch and incident route");
    if (useCase === "Bounded agent") controls.push("Tool permission boundary");
    return { score, approval, controls };
  }, [autonomy, risk, useCase]);

  const stages = [
    { label: "Sources", value: sectors[sector].sources, icon: Database, tone: "cyan" },
    { label: "Intelligence", value: cases[useCase].engine, icon: Bot, tone: "cyan" },
    { label: "Control plane", value: `${risk} risk / ${model.controls.length} controls`, icon: ShieldCheck, tone: "gold" },
    { label: "Accountability", value: sectors[sector].owner, icon: UserCheck, tone: "green" },
    { label: "Evidence", value: "Inputs, versions, review, outcome", icon: FileCheck2, tone: "green" }
  ];

  return (
    <div className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
      <aside className="rounded-3xl border border-secondary/15 bg-[#081c31]/90 p-5 md:p-6">
        <div className="flex items-center justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-200">Configuration</p><h2 className="mt-2 text-2xl font-semibold text-white">Define the system</h2></div><Gauge size={22} className="text-primary" /></div>

        <fieldset className="mt-7">
          <legend className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/55">Operating context</legend>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {(Object.keys(sectors) as Sector[]).map((item) => <button key={item} type="button" onClick={() => setSector(item)} className={`min-h-11 rounded-xl border px-2 text-xs font-semibold transition ${sector === item ? "border-cyan-300/45 bg-cyan-300/15 text-white" : "border-secondary/15 text-secondary/65 hover:text-white"}`} aria-pressed={sector === item}>{item}</button>)}
          </div>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/55">AI pattern</legend>
          <div className="mt-3 grid gap-2">
            {(Object.keys(cases) as UseCase[]).map((item) => <button key={item} type="button" onClick={() => setUseCase(item)} className={`flex min-h-12 items-center justify-between rounded-xl border px-4 text-left text-sm transition ${useCase === item ? "border-primary/45 bg-primary/10 text-white" : "border-secondary/15 text-secondary/70 hover:text-white"}`} aria-pressed={useCase === item}><span>{item}</span>{useCase === item && <CheckCircle2 size={15} className="text-primary" />}</button>)}
          </div>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary/55">Materiality</legend>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {(Object.keys(riskControls) as Risk[]).map((item) => <button key={item} type="button" onClick={() => setRisk(item)} className={`min-h-11 rounded-xl border px-3 text-xs font-semibold transition ${risk === item ? item === "High" ? "border-red-300/45 bg-red-300/10 text-red-100" : item === "Medium" ? "border-amber-300/45 bg-amber-300/10 text-amber-100" : "border-emerald-300/45 bg-emerald-300/10 text-emerald-100" : "border-secondary/15 text-secondary/65 hover:text-white"}`} aria-pressed={risk === item}>{item}</button>)}
          </div>
        </fieldset>

        <div className="mt-7">
          <div className="flex items-center justify-between text-xs"><span className="font-semibold uppercase tracking-[0.16em] text-secondary/55">Autonomy</span><span className="font-mono text-primary">{["Draft only", "Supervised", "Bounded action"][autonomy]}</span></div>
          <input type="range" className="lab-range mt-4 w-full" aria-label="Degree of autonomy" min="0" max="2" step="1" value={autonomy} onChange={(event) => setAutonomy(Number(event.target.value))} />
        </div>
      </aside>

      <section className="interactive-stage relative overflow-hidden rounded-3xl border border-cyan-200/20 bg-[#071a2d]/90 p-5 md:p-7">
        <div className="flex flex-col gap-4 border-b border-secondary/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-200">Generated reference architecture</p><h2 className="mt-2 text-2xl font-semibold text-white">{sector} / {useCase}</h2></div>
          <div className="flex items-center gap-3 rounded-xl border border-secondary/15 bg-background/35 px-4 py-3"><div><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-secondary/45">Control intensity</p><p className="mt-1 text-lg font-semibold text-white">{model.score}<span className="text-xs text-secondary/45"> / 100</span></p></div><div className="h-10 w-10 rounded-full border-4 border-primary/20 border-t-primary" /></div>
        </div>

        <div className="relative mt-7 grid gap-3 md:grid-cols-5">
          <svg className="pointer-events-none absolute left-[9%] right-[9%] top-8 hidden h-4 w-[82%] md:block" viewBox="0 0 800 20" preserveAspectRatio="none" aria-hidden="true"><path d="M0 10 H800" fill="none" stroke="rgba(93,214,232,.45)" strokeWidth="2" className="flow-pulse" /></svg>
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return <div key={stage.label} className="relative z-10 rounded-2xl border border-secondary/15 bg-[#0b2742]/95 p-4"><div className={`flex h-9 w-9 items-center justify-center rounded-full border bg-[#071a2d] ${stage.tone === "gold" ? "border-primary/60 text-primary" : stage.tone === "green" ? "border-emerald-300/50 text-emerald-200" : "border-cyan-300/50 text-cyan-200"}`}><Icon size={16} /></div><p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-secondary/45">0{index + 1} / {stage.label}</p><p className="mt-2 text-xs font-medium leading-relaxed text-secondary/85">{stage.value}</p></div>;
          })}
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-secondary/15 bg-background/30 p-5">
            <div className="flex items-center justify-between"><p className="font-semibold text-white">Control requirements</p><span className="font-mono text-[10px] text-secondary/45">{model.controls.length} active</span></div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {model.controls.map((control) => <div key={control} className="flex items-start gap-2 rounded-xl border border-secondary/10 bg-[#0b2742]/70 p-3 text-xs leading-relaxed text-secondary/75"><CheckCircle2 size={13} className="mt-0.5 shrink-0 text-emerald-200" />{control}</div>)}
            </div>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Decision boundary</p>
            <div className="mt-4 flex items-start gap-3"><AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-200" /><div><p className="font-semibold text-white">{model.approval ? "Human approval required" : "Human review available"}</p><p className="mt-2 text-sm leading-relaxed text-secondary/70">The system may produce: <span className="text-secondary/90">{cases[useCase].action}</span>. Accountability remains with the {sectors[sector].owner.toLowerCase()}.</p></div></div>
            <a href="#method" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white">How this model works <ArrowRight size={14} /></a>
          </div>
        </div>

        <p className="mt-5 border-t border-secondary/10 pt-4 text-xs leading-relaxed text-secondary/45">Educational reference model only. It is not a risk assessment, compliance determination, clinical system, or implementation recommendation.</p>
      </section>
    </div>
  );
}
