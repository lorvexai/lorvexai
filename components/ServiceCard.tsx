"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ServiceCard({
  title,
  description,
  bullets
}: {
  title: string;
  description: string;
  bullets?: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 0 36px rgba(47, 128, 237, 0.22)" }}
      transition={{ duration: 0.25 }}
      className="glass flex flex-col rounded-2xl border border-primary/15 p-6"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary/75">{description}</p>
      {bullets && (
        <ul className="mt-4 space-y-2">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-secondary/65">
              <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-primary/60" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
