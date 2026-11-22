import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SubscribeForm from "@/components/SubscribeForm";

export default function CTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-glow/10 px-8 py-12 text-center md:px-16">
      <h2 className="text-3xl font-semibold text-heading md:text-4xl">Stay with the weekly briefing.</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-secondary/80">
        A short weekly note on what regulators changed for AI in risk, written for practitioners.
      </p>
      <div className="mt-8 flex flex-col items-center gap-5">
        <SubscribeForm id="cta-email" />
        <Link href="/books" className="btn-outline min-h-11 text-sm font-semibold">
          Explore the book
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
