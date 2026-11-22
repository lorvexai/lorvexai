"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { agent: "Retriever", text: "Fetched 14 passages: PRA SS1/23 §3, EBA GL/2020/06", ms: "212ms" },
  { agent: "Mapper", text: "Drafted 6 obligation candidates with citations", ms: "1.4s" },
  { agent: "Validator", text: "Grounding check passed. 0 unsupported claims", ms: "640ms" },
  { agent: "Human review", text: "Awaiting approval. Evidence pack attached", ms: "gate" }
];

export default function AgentTrace() {
  const [shown, setShown] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(STEPS.length);
      return;
    }
    const id = setInterval(() => setShown((s) => (s >= STEPS.length ? 1 : s + 1)), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass float-slow rounded-2xl p-5 shadow-2xl shadow-black/30" aria-label="Illustrative controlled agent trace">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary/60">controlled-run · illustrative</span>
      </div>
      <ol className="mt-5 space-y-3">
        {STEPS.map((s, i) => {
          const on = i < shown;
          const last = i === shown - 1;
          return (
            <li
              key={s.agent}
              className={`flex items-start gap-3 rounded-xl border p-3 transition-all duration-500 ${
                on ? "border-primary/30 bg-primary/10 opacity-100" : "border-secondary/10 opacity-30"
              }`}
            >
              <span
                className={`mt-1 h-2 w-2 shrink-0 rounded-full ${on ? "bg-primary" : "bg-secondary/40"} ${last ? "animate-pulse" : ""}`}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-heading">{s.agent}</span>
                  <span className="font-mono text-[10px] text-secondary/60">{s.ms}</span>
                </div>
                <p className={`mt-0.5 text-xs leading-relaxed text-secondary/75 ${last ? "cursor-blink" : ""}`}>{s.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 border-t border-secondary/10 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-secondary/50">
        Every step logged · human gate before output
      </p>
    </div>
  );
}
