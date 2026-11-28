"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { PostMeta } from "@/utils/posts";

const TOPICS = ["All", "Series", "RAG", "Agents", "Governance", "RegTech"] as const;

export default function ArticleList({ posts }: { posts: PostMeta[] }) {
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>("All");
  const available = TOPICS.filter(
    (t) => t === "All" || posts.some((p) => (t === "Series" ? Boolean(p.series) : p.topic === t))
  );
  const filtered = posts.filter((p) =>
    topic === "All" ? true : topic === "Series" ? Boolean(p.series) : p.topic === topic
  );
  const shown =
    topic === "Series" ? [...filtered].sort((a, b) => (a.seriesPart ?? 0) - (b.seriesPart ?? 0)) : filtered;
  const startHere = posts.find((p) => p.series && p.seriesPart === 1);

  return (
    <>
      <div role="group" aria-label="Filter articles by topic" className="mt-8 flex flex-wrap gap-2">
        {available.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={topic === t}
            onClick={() => setTopic(t)}
            className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition ${
              topic === t
                ? "border-primary bg-primary text-[var(--on-primary)]"
                : "border-secondary/20 bg-panel text-secondary hover:border-primary/50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      {startHere && topic !== "Series" && (
        <p className="mt-6 text-sm text-secondary/80">
          New here? Start the series with{" "}
          <Link href={`/articles/${startHere.slug}`} className="font-semibold text-primary hover:text-heading">
            Part 1: {startHere.title}
          </Link>
          .
        </p>
      )}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {shown.map((post) => (
          <Link
            key={post.slug}
            href={`/articles/${post.slug}`}
            className="card-solid group flex flex-col p-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
              {post.series ? `Series · Part ${post.seriesPart} of ${post.seriesTotal}${post.seriesPart === 1 ? " · Start here" : ""}` : post.topic || post.tags[0]}
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-snug text-heading">{post.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-secondary/80">{post.excerpt}</p>
            <p className="mt-auto flex items-center gap-4 pt-5 text-sm text-secondary/70">
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
    </>
  );
}
