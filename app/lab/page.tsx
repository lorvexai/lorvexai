import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Beaker, BookOpen, ShieldCheck } from "lucide-react";
import ArchitectureLab from "@/components/ArchitectureLab";

export const metadata: Metadata = {
  title: "Interactive Controlled AI Architecture Lab | LorvexAI",
  description: "Configure a conceptual controlled AI system and explore how sector, materiality, autonomy, controls, human review, and evidence shape its architecture.",
  alternates: { canonical: "/lab" }
};

export default function LabPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-secondary/10 py-14 md:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_0%,rgba(93,214,232,0.12),transparent_36%)]" />
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-cyan-200"><Beaker size={15} /> Lorvex interactive lab</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight text-white md:text-6xl">Configure the system. Watch the controls change.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-secondary/80">Explore how operating context, AI pattern, materiality, and autonomy alter the architecture of a controlled AI workflow. Every configuration keeps accountability and evidence visible.</p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto w-full max-w-7xl px-6"><ArchitectureLab /></div>
      </section>

      <section id="method" className="section border-t border-secondary/10 bg-background/40 scroll-mt-24">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-[0.8fr_1.2fr]">
          <div><p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">The method</p><h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Control follows consequence.</h2><p className="mt-4 leading-relaxed text-secondary/75">As an AI system becomes more autonomous, handles more sensitive information, or influences more material outcomes, its evidence and approval requirements should become stronger and more explicit.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[{ icon: ShieldCheck, title: "Bound the system", body: "Define permitted sources, tools, actions, users, and escalation conditions." }, { icon: BookOpen, title: "Preserve the evidence", body: "Record inputs, versions, retrieved sources, control results, review, and outcome." }].map((item) => <div key={item.title} className="rounded-2xl border border-secondary/15 bg-[#0d2745]/50 p-6"><item.icon size={21} className="text-primary" /><h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-secondary/70">{item.body}</p></div>)}
            <Link href="/blueprints" className="sm:col-span-2 flex items-center justify-between rounded-2xl border border-primary/25 bg-primary/5 p-5 text-sm font-semibold text-white transition hover:border-primary/50"><span>Continue into the full reference blueprints</span><ArrowRight size={16} className="text-primary" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
