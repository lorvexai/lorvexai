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
      aria-label="Ask the archive"
      className="btn-primary fixed bottom-20 right-4 z-50 h-12 w-12 !gap-2 !rounded-full !p-0 text-sm md:bottom-6 md:right-6 md:h-12 md:w-auto md:!px-5"
    >
      <MessageCircleQuestion size={18} aria-hidden="true" />
      <span className="hidden md:inline">Ask</span>
    </Link>
  );
}
