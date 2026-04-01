"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, Loader2, ShieldCheck, Wrench } from "lucide-react";

const trace = [
  {
    icon: Bot,
    title: "Planner",
    detail: "Breaks objective into executable sub-tasks",
    status: "complete"
  },
  {
    icon: Wrench,
    title: "Tool Executor",
    detail: "Calls policy-approved systems and retrieves evidence",
    status: "active"
  },
  {
    icon: ShieldCheck,
    title: "Verifier",
    detail: "Checks citations, control rules, and confidence threshold",
    status: "queued"
  }
] as const;

export default function LiveAgentTrace() {
  return (
    <div className="glass rounded-2xl border border-primary/30 p-5">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        Live Agent Trace
      </p>
      <div className="mt-4 space-y-3">
        {trace.map((step, index) => {
          const isActive = step.status === "active";
          const isComplete = step.status === "complete";
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0.35, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.18 }}
              className={`rounded-xl border p-4 ${
                isActive
                  ? "border-primary/70 bg-primary/15"
                  : "border-secondary/30 bg-background/35"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/45 bg-primary/15 text-primary">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-xs text-secondary/75">{step.detail}</p>
                  </div>
                </div>
                {isComplete ? (
                  <CheckCircle2 size={16} className="text-emerald-300" aria-hidden="true" />
                ) : isActive ? (
                  <Loader2 size={16} className="animate-spin text-primary" aria-hidden="true" />
                ) : (
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-secondary/65">
                    Queued
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
