"use client";

import { useState } from "react";
import { MessageCircleQuestion, X } from "lucide-react";
import AskPanel from "@/components/AskPanel";

export default function AskLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="ask-launcher-panel"
        className="corner-ticks fixed bottom-20 right-4 z-50 flex items-center gap-2 border border-primary/40 bg-[#0d2745]/95 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-primary shadow-2xl shadow-black/40 transition hover:bg-primary/10 md:bottom-6 md:right-6"
      >
        {open ? <X size={14} aria-hidden="true" /> : <MessageCircleQuestion size={14} aria-hidden="true" />}
        Ask
      </button>

      {open && (
        <div
          id="ask-launcher-panel"
          className="fixed bottom-32 right-4 z-50 w-[min(92vw,380px)] md:bottom-24 md:right-6"
        >
          <AskPanel compact />
        </div>
      )}
    </>
  );
}
