"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { stage: "1", agent: "Retrieve", text: "14 passages found in PRA SS1/23 and EBA guidelines" },
  { stage: "2", agent: "Validate", text: "Every claim checked against its cited source" },
  { stage: "3", agent: "Human approval", text: "Reviewer signs off. Evidence pack is attached" }
];

export default function AgentTrace() {
  const [shown, setShown] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(STEPS.length);
      return;
    }
    const id = setInterval(() => setShown((s) => (s >= STEPS.length ? 1 : s + 1)), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass rounded-2xl p-6 shadow-2xl shadow-black/30" role="img" aria-label="Illustration of a controlled agent run: retrieve, validate, human approval">
      <p className="text-sm font-semibold text-secondary/85">A controlled agent run</p>
      <ol className="mt-5 space-y-4">
        {STEPS.map((s, i) => {
          const on = i < shown;
          return (
            <li
              key={s.agent}
              className={`flex items-start gap-4 rounded-xl border p-4 transition-all duration-500 ${
                on ? "border-primary/40 bg-primary/10" : "border-secondary/15 opacity-50"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-bold ${
                  on ? "bg-primary text-[color:var(--on-primary)]" : "bg-secondary/20 text-secondary"
                }`}
              >
                {s.stage}
              </span>
              <div>
                <p className="text-lg font-semibold text-heading">{s.agent}</p>
                <p className="mt-0.5 text-base leading-snug text-secondary/85">{s.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-5 text-sm text-secondary/70">Illustrative. Every step is logged before anything is released.</p>
    </div>
  );
}
