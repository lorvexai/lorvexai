"use client";

import { motion } from "framer-motion";

const stages = [
  { name: "Discover", note: "Use-case and value mapping" },
  { name: "Design", note: "Architecture and control model" },
  { name: "Prototype", note: "Pipelines, agents, integrations" },
  { name: "Review", note: "Controls, validation, and monitoring plan" },
  { name: "Refine", note: "Evaluation and governance iteration" }
];

export default function DeliveryFrameworkDiagram() {
  return (
    <div className="glass rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-semibold text-heading">AI Delivery Framework</h3>
      <p className="mt-2 text-sm text-secondary/80">
        A design model for educational prototyping, governance discussion, and evidence-oriented review.
      </p>

      <div className="mt-6 space-y-3">
        {stages.map((stage, index) => (
          <div key={stage.name} className="relative">
            <div className="rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/20 via-glow/10 to-primary/5 px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-heading">{index + 1}. {stage.name}</p>
                <p className="text-xs text-secondary/75">{stage.note}</p>
              </div>
            </div>
            {index < stages.length - 1 && (
              <motion.div
                aria-hidden="true"
                className="mx-auto h-4 w-[2px] rounded-full bg-primary/60"
                initial={{ scaleY: 0, opacity: 0.2 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{ transformOrigin: "top" }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-primary/25 bg-primary/5 p-3 text-xs text-secondary/75">
        Gate criteria: architecture notes, security considerations, quality thresholds, and governance readiness.
      </div>
    </div>
  );
}
