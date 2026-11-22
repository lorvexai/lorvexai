import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const SLUGS = ["glossary", "regulatory-reference", "tech-stack", "model-registry"];

type Appendix = { kicker: string; title: string; html: string };

function load(slug: string): Appendix | null {
  if (!SLUGS.includes(slug)) return null;
  const file = path.join(process.cwd(), "content", "book", `${slug}.json`);
  return JSON.parse(fs.readFileSync(file, "utf8")) as Appendix;
}

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = load(params.slug);
  if (!a) return {};
  return {
    title: `${a.kicker}: ${a.title} | AI for Financial Risk | LorvexAI`,
    description: `${a.title}, companion appendix to AI for Financial Risk, Compliance and Regulatory Reporting.`,
    alternates: { canonical: `/books/appendices/${params.slug}` }
  };
}

export default function AppendixPage({ params }: { params: { slug: string } }) {
  const a = load(params.slug);
  if (!a) notFound();

  return (
    <section className="section pt-14 md:pt-20">
      <div className="mx-auto w-full max-w-4xl px-6">
        <Link href="/books" className="inline-flex items-center gap-2 text-sm text-primary hover:text-heading">
          <ArrowLeft size={14} aria-hidden="true" />
          Back to the book
        </Link>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-primary">{a.kicker}</p>
        <h1 className="mt-2 text-4xl font-semibold text-heading">{a.title}</h1>
        <article
          className="prose mt-8 max-w-none
            prose-headings:font-semibold prose-headings:text-heading
            prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl
            prose-p:leading-relaxed prose-p:text-secondary/80
            prose-a:text-primary prose-a:no-underline hover:prose-a:text-heading
            prose-strong:text-heading prose-li:text-secondary/80
            prose-th:text-heading prose-td:text-secondary/80
            prose-code:text-primary prose-code:before:content-none prose-code:after:content-none"
          dangerouslySetInnerHTML={{ __html: a.html }}
        />
        <p className="mt-10 text-xs text-secondary/70">
          Avon and Wessex Bank plc is fictional. This content is educational and is not legal or regulatory advice.
        </p>
      </div>
    </section>
  );
}
