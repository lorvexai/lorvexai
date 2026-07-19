import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Lightbulb, MessageSquareText } from "lucide-react";

export const metadata: Metadata = {
  title: "Books & Book Reviews | LorvexAI",
  description: "Books, long-form publications, reading notes, and practitioner book reviews from Sreedhara Reddy Kotha.",
  alternates: { canonical: "/books" }
};

const reviewPrinciples = [
  "The central argument in plain language",
  "What the book explains particularly well",
  "Where its argument or evidence is weaker",
  "How the ideas translate into enterprise practice"
];

export default function BooksPage() {
  return (
    <>
      <section className="section pb-8 pt-14 md:pt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Books and reading notes</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold text-white md:text-6xl">Long-form thinking for people building real systems.</h1>
          </div>
          <p className="text-base leading-relaxed text-secondary/80">Books, practitioner guides, and critical reading notes on controlled AI, financial technology, governance, and enterprise architecture.</p>
        </div>
      </section>

      <section className="section pt-4">
        <div className="mx-auto w-full max-w-6xl px-6">
          <article className="grid gap-8 overflow-hidden rounded-3xl border border-primary/30 bg-[linear-gradient(145deg,rgba(18,49,90,0.94),rgba(8,26,46,0.98))] p-7 md:grid-cols-[0.7fr_1.3fr] md:p-10">
            <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl border border-primary/35 bg-[radial-gradient(circle_at_top,rgba(184,134,58,0.22),transparent_55%),rgba(7,23,41,0.75)] text-primary">
              <div className="absolute inset-4 border border-secondary/10" />
              <div className="relative px-6 text-center">
                <BookOpen size={48} className="mx-auto" aria-hidden="true" />
                <p className="mt-8 font-serif text-xl font-semibold text-white">AI for Financial Risk, Compliance and Regulatory Reporting</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-secondary/65">Sreedhara Reddy Kotha</p>
              </div>
            </div>
            <div className="self-center">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Featured book project</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">AI for Financial Risk, Compliance and Regulatory Reporting</h2>
              <p className="mt-2 text-lg text-secondary/75">Production Systems and Architecture for Modern Banking</p>
              <p className="mt-6 max-w-2xl leading-relaxed text-secondary/80">A practitioner-focused guide to controlled AI adoption across financial risk, compliance, regulatory reporting, governance, RAG, agents, MLOps, LLMOps, and enterprise banking architecture.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Architecture grounded in regulated workflows", "Governance and evidence built into the design", "RAG, agents, MLOps, and LLMOps", "Written for practitioners and decision-makers"].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-secondary/75"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />{item}</div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#subscribe" className="btn-primary min-h-12 text-sm">Get publication updates <ArrowRight size={15} /></Link>
                <Link href="/research" className="btn-outline min-h-12 text-sm">Read related research</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="reviews" className="section scroll-mt-24 border-t border-secondary/10">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Book reviews</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Reading notes with a practitioner&apos;s point of view.</h2>
            <p className="mt-5 leading-relaxed text-secondary/75">This collection is for books that materially change how we think about AI, finance, risk, organisations, and technology. Reviews will focus on the argument and its practical consequences, not simply summarise chapters.</p>
            <Link href="/contact#form" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-white">Suggest a book to review <ArrowRight size={15} /></Link>
          </div>
          <div className="rounded-2xl border border-secondary/15 bg-background/35 p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary"><MessageSquareText size={20} /></div>
              <div><p className="font-semibold text-white">The review standard</p><p className="text-sm text-secondary/65">Four questions for every title</p></div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {reviewPrinciples.map((principle, index) => (
                <div key={principle} className="rounded-xl border border-secondary/15 bg-[#0d2745]/55 p-4">
                  <span className="font-mono text-xs text-primary">0{index + 1}</span>
                  <p className="mt-2 text-sm leading-relaxed text-secondary/80">{principle}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/10 p-4">
              <Lightbulb size={18} className="mt-0.5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-secondary/75">The first reviews will be announced to research subscribers and added here as a permanent collection.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
