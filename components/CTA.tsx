import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

export default function CTA() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-[#0d2745]/70 px-8 py-12 text-center md:px-16">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
        Scoping conversation
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
        Discuss controlled AI architecture with clear professional boundaries.
      </h3>
      <p className="mx-auto mt-4 max-w-2xl text-secondary/75">
        Subject to availability, professional boundary review, and conflict checks, LorvexAI may provide educational workshops, architecture reviews, AI governance design support, and prototype-scoping support.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 text-sm">
          <CalendarCheck size={16} aria-hidden="true" />
          Request Scoping
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <Link href="/books" className="btn-outline min-h-11 text-sm">
          Explore Research &amp; Books
        </Link>
      </div>
    </div>
  );
}
