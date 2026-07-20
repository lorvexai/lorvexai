import type { Metadata } from "next";
import AskPanel from "@/components/AskPanel";

export const metadata: Metadata = {
  title: "Ask | LorvexAI",
  description:
    "Ask a question and get an answer grounded in Sreedhara Reddy Kotha's own writing on AI governance, model risk, and financial regulation — not general knowledge.",
  alternates: { canonical: "/ask" }
};

export default function AskPage() {
  return (
    <section className="section pt-14 md:pt-20">
      <div className="mx-auto w-full max-w-3xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Ask</p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          <span className="text-heading">Query </span>
          <span className="text-gradient">the archive</span>
        </h1>
        <p className="mt-5 max-w-2xl text-secondary/80">
          A research copilot grounded in my own articles and blueprints. It answers from what I've
          actually written, not general AI knowledge, and says so plainly when something isn't covered.
        </p>
        <div className="mt-10">
          <AskPanel />
        </div>
      </div>
    </section>
  );
}
