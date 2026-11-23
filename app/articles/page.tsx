import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getAllPosts } from "@/utils/posts";

export const metadata: Metadata = {
  title: "Articles | LorvexAI",
  description:
    "Practical articles on RAG, agents and multi-agent orchestration for regulated financial services, from the author of the AWB case-study book.",
  alternates: { canonical: "/articles" }
};

export default function ArticlesPage() {
  const posts = getAllPosts();
  return (
    <section className="section pt-12 md:pt-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="chip">Articles</p>
        <h1 className="mt-5 text-4xl font-bold leading-tight text-heading md:text-5xl">
          AI systems a regulated bank can defend
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary/85">
          Practical writing on RAG, agents and orchestration in finance, risk and regulatory reporting. Most pieces build
          on the AWB case study from the book.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/articles/${post.slug}`}
              className="group rounded-2xl border border-secondary/15 bg-panel p-6 transition hover:border-primary/40"
            >
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">{post.tags.slice(0, 3).join(" · ")}</p>
              <h2 className="mt-3 text-2xl font-semibold text-heading">{post.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-secondary/80">{post.excerpt}</p>
              <p className="mt-5 flex items-center gap-4 text-sm text-secondary/70">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={13} aria-hidden="true" /> {post.readingTime} min read
                </span>
                <span className="ml-auto inline-flex items-center gap-1 font-semibold text-primary">
                  Read <ArrowRight size={14} aria-hidden="true" />
                </span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
