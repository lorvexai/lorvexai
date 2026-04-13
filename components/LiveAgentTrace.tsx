"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, CheckCircle2, Loader2, ShieldCheck, Wrench, FileOutput } from "lucide-react";

const trace = [
  {
    icon: Bot,
    title: "Planner",
    detail: "Breaks objective into executable sub-tasks",
    step: 0
  },
  {
    icon: Wrench,
    title: "Tool Executor",
    detail: "Calls policy-approved systems and retrieves evidence",
    step: 1
  },
  {
    icon: ShieldCheck,
    title: "Verifier",
    detail: "Checks citations, control rules, and confidence threshold",
    step: 2
  },
  {
    icon: FileOutput,
    title: "Output Generator",
    detail: "Produces auditable response with full trace",
    step: 3
  }
] as const;

const STEP_DURATION = 2200; // ms per step

export default function LiveAgentTrace() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        const next = prev + 1;
        if (next >= trace.length) {
          // Loop: reset after brief pause
          setTimeout(() => {
            setActiveStep(0);
            setCompletedSteps([]);
          }, 900);
          return prev;
        }
        setCompletedSteps((c) => [...c, prev]);
        return next;
      });
    }, STEP_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass rounded-2xl border border-primary/30 p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Live Agent Trace
        </p>
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[10px] text-emerald-400">Running</span>
        </span>
      </div>

      <div className="space-y-2.5">
        {trace.map((step) => {
          const isActive = activeStep === step.step;
          const isComplete = completedSteps.includes(step.step);
          const isQueued = !isActive && !isComplete;
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0.4, x: -6 }}
              animate={{
                opacity: isQueued ? 0.45 : 1,
                x: 0,
                scale: isActive ? 1.01 : 1
              }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl border p-3.5 transition-colors ${
                isActive
                  ? "border-primary/70 bg-primary/15 shadow-glow"
                  : isComplete
                  ? "border-emerald-500/30 bg-emerald-500/5"
                  : "border-secondary/20 bg-background/30"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                      isComplete
                        ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-300"
                        : isActive
                        ? "border-primary/50 bg-primary/20 text-primary"
                        : "border-secondary/20 bg-background/40 text-secondary/40"
                    }`}
                  >
                    <Icon size={13} aria-hidden="true" />
                  </span>
                  <div>
                    <p className={`text-xs font-semibold ${isQueued ? "text-secondary/40" : "text-white"}`}>
                      {step.title}
                    </p>
                    <p className={`mt-0.5 text-[11px] leading-snug ${isQueued ? "text-secondary/35" : "text-secondary/65"}`}>
                      {step.detail}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 pt-0.5">
                  {isComplete ? (
                    <CheckCircle2 size={14} className="text-emerald-400" aria-hidden="true" />
                  ) : isActive ? (
                    <Loader2 size={14} className="animate-spin text-primary" aria-hidden="true" />
                  ) : (
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-secondary/35">
                      Queued
                    </span>
                  )}
                </div>
              </div>

              {/* Active step progress bar */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="progress"
                    className="mt-2.5 h-0.5 overflow-hidden rounded-full bg-primary/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Footer context */}
      <div className="mt-4 flex items-center gap-2 border-t border-secondary/10 pt-3">
        <span className="font-mono text-[10px] text-secondary/40 uppercase tracking-[0.12em]">
          Policy: PRA Compliance · Confidence: 94%
        </span>
      </div>
    </div>
  );
}
