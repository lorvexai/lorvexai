import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

export default function CTA() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-panel/70 px-8 py-12 text-center md:px-16">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
        Keep reading
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-heading md:text-3xl lg:text-4xl">
        More of what I write on controlled AI architecture.
      </h3>
      <p className="mx-auto mt-4 max-w-2xl text-secondary/75">
        Books, research notes, technical guides, and reference blueprints — all written and published by me, on my own time.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/books" className="btn-primary inline-flex items-center justify-center gap-2 text-sm">
          <CalendarCheck size={16} aria-hidden="true" />
          Explore Books
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <Link href="/blog" className="btn-outline min-h-11 text-sm">
          Read Writing
        </Link>
      </div>
    </div>
  );
}
