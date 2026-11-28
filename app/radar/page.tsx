import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { RADAR, RADAR_REVIEWED, type RadarStatus } from "@/utils/radar";

export const metadata: Metadata = {
  title: "RegTech and AI Radar | LorvexAI",
  description:
    "What is live, what is being built and what to watch in AI and RegTech for banks, with a primary source on every item. Reviewed regularly.",
  alternates: { canonical: "/radar" },
  openGraph: {
    title: "RegTech and AI Radar | LorvexAI",
    description: "What is live, what is being built and what to watch in AI and RegTech for banks.",
    url: "/radar",
    type: "website"
  }
};

const GROUPS: [RadarStatus, string][] = [
  ["Now", "Live or in force today."],
  ["Building", "Dated and coming. Prepare now."],
  ["Watch", "Early signals. No action yet."]
];

export default function RadarPage() {
  return (
    <section className="section pt-12 md:pt-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "RegTech and AI Radar",
          url: "https://lorvexai.com/radar/",
          description: "Status of AI and RegTech developments relevant to banks."
        }}
      />
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">Last reviewed {RADAR_REVIEWED}</p>
        <h1 className="mt-3 text-4xl font-bold text-heading md:text-5xl">RegTech and AI Radar</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary/85">
          A short, honest view of what is live, what is being built and what to watch. No vendor rankings. Every item links to
          a source, and anything not confirmed is left out.
        </p>
        {GROUPS.map(([status, blurb]) => (
          <div key={status} className="mt-12">
            <h2 className="text-2xl font-semibold text-heading">{status}</h2>
            <p className="mt-1 text-sm text-secondary/75">{blurb}</p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {RADAR.filter((r) => r.status === status).map((r) => (
                <article key={r.title} className="card-solid p-6">
                  <h3 className="text-lg font-semibold leading-snug text-heading">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/80">{r.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.sources.map((s) => (
                      <a
                        key={s.url}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-secondary/20 px-3 py-1 text-xs text-secondary/75 transition hover:border-primary/50 hover:text-primary"
                      >
                        {s.label}
                        <ArrowUpRight size={11} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
        <p className="mt-12 max-w-3xl text-xs leading-relaxed text-secondary/70">
          Personal opinion and a summary of public sources. Not legal, regulatory or investment advice. Check the linked
          documents before you act. How to cite: Kotha, S. R. (2026). RegTech and AI Radar. LorvexAI. https://lorvexai.com/radar/. See also the <Link href="/regulatory-calendar" className="text-primary underline underline-offset-2">regulatory calendar</Link>.
        </p>
      </div>
    </section>
  );
}
