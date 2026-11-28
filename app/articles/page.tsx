import type { Metadata } from "next";
import Link from "next/link";
import ArticleList from "@/components/ArticleList";
import JsonLd from "@/components/JsonLd";
import { getAllPosts } from "@/utils/posts";

export const metadata: Metadata = {
  title: "AI Articles for Regulated Banks: RAG, Agents, Model Risk | LorvexAI",
  description:
    "Practical articles on RAG, agents and multi-agent orchestration for regulated financial services, from the author of the AWB case-study book.",
  alternates: { canonical: "/articles" }
};

export default function ArticlesPage() {
  const posts = getAllPosts();
  return (
    <section className="section pt-12 md:pt-16">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Articles | LorvexAI", url: "https://lorvexai.com/articles/", description: "Practical articles on RAG, agents and orchestration for regulated financial services." }} />
      <div className="mx-auto w-full max-w-6xl px-6">
        <h1 className="text-4xl font-bold leading-tight text-heading md:text-5xl">
          AI systems a regulated bank can defend
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary/85">
          Practical writing on RAG, agents and orchestration in finance, risk and regulatory reporting. Most pieces build
          on the AWB case study from the book.
        </p>
        <p className="mt-5 text-sm text-secondary/80">
          <Link href="/start-here" className="font-semibold text-primary hover:text-heading">New here? Start here &rarr;</Link>
        </p>
        <p className="mt-2 text-sm text-secondary/80">
          Resources:{" "}
          <a href="/downloads/regulatory-rag-evidence-checklist.pdf" className="font-semibold text-primary hover:text-heading">RAG evidence checklist (PDF)</a>
          {" · "}
          <Link href="/regulatory-calendar" className="font-semibold text-primary hover:text-heading">Regulatory calendar</Link>
          {" · "}
          <Link href="/radar" className="font-semibold text-primary hover:text-heading">RegTech and AI Radar</Link>
        </p>
        <ArticleList posts={posts} />
      </div>
    </section>
  );
}
