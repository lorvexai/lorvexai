import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { CALENDAR, CALENDAR_REVIEWED } from "@/utils/calendar";

export const metadata: Metadata = {
  title: "AI and Financial Regulation Calendar: EU AI Act, PRA, FCA, FinCEN | LorvexAI",
  description:
    "Upcoming dates for AI and financial regulation: EU AI Act milestones, UK PRA and FCA consultations, US rules. Each date links to a source.",
  alternates: { canonical: "/regulatory-calendar" },
  openGraph: {
    title: "AI and Financial Regulation Calendar | LorvexAI",
    description: "Upcoming EU, UK and US dates for AI and financial regulation, each with a source.",
    url: "/regulatory-calendar",
    type: "website"
  }
};

export default function CalendarPage() {
  const entries = [...CALENDAR].sort((a, b) => (a.sort < b.sort ? -1 : 1));
  return (
    <section className="section pt-12 md:pt-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "AI and Financial Regulation Calendar",
          url: "https://lorvexai.com/regulatory-calendar/"
        }}
      />
      <div className="mx-auto w-full max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">Last reviewed {CALENDAR_REVIEWED}</p>
        <h1 className="mt-3 text-4xl font-bold text-heading md:text-5xl">AI and financial regulation calendar</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary/85">
          Dates that matter to risk, model governance and regulatory reporting teams across the EU, UK and US. Each date links
          to the source, and the page is reviewed as new dates are confirmed.
        </p>
        <ol className="mt-10 space-y-4">
          {entries.map((e) => (
            <li key={e.sort + e.area} className="card-solid p-6">
              <div className="flex flex-wrap items-center gap-3">
                <time dateTime={e.sort} className="font-mono text-sm font-semibold text-primary">{e.date}</time>
                <span className="chip">{e.area}</span>
              </div>
              <p className="mt-3 text-base leading-relaxed text-secondary/85">{e.text}</p>
              {e.note && <p className="mt-2 text-sm leading-relaxed text-secondary/70">{e.note}</p>}
              <a
                href={e.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 rounded-full border border-secondary/20 px-3 py-1 text-xs text-secondary/75 transition hover:border-primary/50 hover:text-primary"
              >
                {e.source.label}
                <ArrowUpRight size={11} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-secondary/70">
          Personal opinion and a summary of public sources. Not legal, regulatory or investment advice. Dates can change, so
          confirm against the primary document. How to cite: Kotha, S. R. (2026). AI and financial regulation calendar. LorvexAI. https://lorvexai.com/regulatory-calendar/. See also the{" "}
          <Link href="/radar" className="text-primary underline underline-offset-2">RegTech and AI Radar</Link>.
        </p>
      </div>
    </section>
  );
}
