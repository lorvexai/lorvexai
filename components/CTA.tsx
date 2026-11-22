import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-glow/10 px-8 py-12 text-center md:px-16">
      <h2 className="text-3xl font-semibold text-heading md:text-4xl">Start with the book. Stay with the briefing.</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-secondary/80">
        The full architecture in one place, and a short weekly note on what regulators changed.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/books" className="btn-primary min-h-11 text-sm">
          Explore the book
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <Link href="/newsletter" className="btn-outline min-h-11 text-sm font-semibold">
          <Mail size={15} aria-hidden="true" />
          Get the weekly briefing
        </Link>
      </div>
    </div>
  );
}
