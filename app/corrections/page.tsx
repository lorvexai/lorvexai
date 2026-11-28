import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Corrections and Updates | LorvexAI",
  description: "A public log of corrections and material updates to LorvexAI articles and briefings.",
  alternates: { canonical: "/corrections" }
};

const LOG: { date: string; page: string; href: string; change: string }[] = [
  {
    date: "28 November 2026",
    page: "RAG that cites its sources",
    href: "/articles/rag-that-cites-its-sources",
    change:
      "Labelled the 0.65 confidence threshold and 0.85 faithfulness threshold as illustrative settings for a fictional bank, not recommended standards. Reworded the RAGAS description to say the case study uses four of its measures and that definitions change by version."
  },
  {
    date: "28 November 2026",
    page: "RAG that cites its sources, related articles",
    href: "/articles/rag-that-cites-its-sources",
    change: "Fixed related-article links that pointed to a non-existent path."
  },
  {
    date: "28 November 2026",
    page: "RegAI Brief, Issue 2",
    href: "/newsletter/2026-11-23-issue-2",
    change:
      "Removed an unsupported claim that the UK cyber package was a first, labelled an editorial judgement as the author's view, and added the official EU regulation as the first source on the AI Act item."
  },
  {
    date: "28 November 2026",
    page: "RegAI Brief signup",
    href: "/newsletter",
    change: "Removed the claim that the briefing is sent on Mondays. Issues are weekly, and dates may vary."
  },
  {
    date: "28 November 2026",
    page: "What SS1/23 means for LLMs and RAG systems",
    href: "/articles/ss1-23-and-llms-what-model-risk-teams-should-do",
    change: "Attributed a consultancy's commentary to its source and added a sources list separating primary documents from commentary."
  }
];

export default function CorrectionsPage() {
  return (
    <section className="section pt-12 md:pt-16">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "Corrections and updates", url: "https://lorvexai.com/corrections/" }} />
      <div className="mx-auto w-full max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-heading md:text-5xl">Corrections and updates</h1>
        <p className="mt-5 text-lg leading-relaxed text-secondary/85">
          When a published article or briefing changes in a way that matters, it is recorded here. If you spot an error,
          please <Link href="/contact" className="text-primary underline underline-offset-2">get in touch</Link>.
        </p>
        <ol className="mt-10 space-y-4">
          {LOG.map((e, i) => (
            <li key={i} className="card-solid p-6">
              <p className="font-mono text-xs text-primary">{e.date}</p>
              <p className="mt-2 font-semibold text-heading">
                <Link href={e.href} className="hover:text-primary">{e.page}</Link>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-secondary/80">{e.change}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
