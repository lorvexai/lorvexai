"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircleQuestion } from "lucide-react";

export default function AskLauncher() {
  const pathname = usePathname();
  if (pathname === "/ask" || pathname === "/ask/") return null;

  return (
    <Link
      href="/ask"
      className="corner-ticks fixed bottom-20 right-4 z-50 flex items-center gap-2 border border-primary/40 bg-[#0d2745]/95 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-primary shadow-2xl shadow-black/40 transition hover:bg-primary/10 md:bottom-6 md:right-6"
    >
      <MessageCircleQuestion size={14} aria-hidden="true" />
      Ask
    </Link>
  );
}
