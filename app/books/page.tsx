import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Download, ExternalLink } from "lucide-react";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";

export const metadata: Metadata = {
  title: "Books & Publications | LorvexAI",
  description: "Books and educational publications from LorvexAI on controlled AI adoption for financial risk, compliance, regulatory reporting, governance, RAG, agents, MLOps, and LLMOps.",
  alternates: { canonical: "/books" }
};

export default function BooksPage() {
  return (
    <>
      <section className="section pb-8 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Books &amp; Publications</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-white md:text-5xl">
            Educational resources for controlled AI in regulated environments.
          </h1>
          <p className="mt-5 max-w-2xl text-secondary/75">
            Long-form books, technical guides, and companion resources are presented as personal educational publishing. LorvexAI does not offer consulting, client delivery, product implementation, or system development for others.
          </p>
        </div>
      </section>

      <section className="section pt-4">
        <div className="mx-auto w-full max-w-6xl px-6">
          <article className="grid gap-8 rounded-lg border border-primary/25 bg-[#0d2745]/70 p-8 md:grid-cols-[0.75fr_1.25fr]">
            <div className="flex aspect-[3/4] items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
              <BookOpen size={54} aria-hidden="true" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Featured book</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                AI for Financial Risk, Compliance and Regulatory Reporting
              </h2>
              <p className="mt-2 text-lg text-secondary/70">
                Production Systems and Architecture for Modern Banking
              </p>
              <p className="mt-5 leading-relaxed text-secondary/75">
                A practitioner-focused book on controlled AI adoption for financial risk, compliance, regulatory reporting, governance, RAG, agents, MLOps, LLMOps, and enterprise banking architecture.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary/60">
                Digital editions, updates, and companion resources may be available through the author&apos;s official channels.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/research" className="btn-primary text-sm">
                  View book details
                  <ArrowRight size={15} />
                </Link>
                <span className="btn-outline cursor-not-allowed text-sm opacity-60" aria-disabled="true">
                  <ExternalLink size={15} />
                  Paperback link coming soon
                </span>
                <span className="btn-outline cursor-not-allowed text-sm opacity-60" aria-disabled="true">
                  <Download size={15} />
                  Digital edition coming soon
                </span>
              </div>
            </div>
          </article>

          <div className="mt-8">
            <LegalDisclaimerBanner compact />
          </div>
        </div>
      </section>
    </>
  );
}
