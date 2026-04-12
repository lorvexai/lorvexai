"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
};

const TOPIC_FILTERS = [
  "All",
  "Technology",
  "Finance",
  "Healthcare",
  "NHS",
  "Enterprise"
] as const;

type TopicFilter = (typeof TOPIC_FILTERS)[number];

function matchesTopic(post: InsightPost, topic: TopicFilter) {
  if (topic === "All") return true;
  const normalizedTitle = post.title.toLowerCase();
  const normalizedTags = post.tags.map((tag) => tag.toLowerCase());
  if (topic === "Technology") {
    return normalizedTags.some((tag) =>
      ["rag", "architecture", "llm engineering", "ai architecture"].includes(tag)
    );
  }
  if (topic === "Finance") {
    return (
      normalizedTitle.includes("risk") ||
      normalizedTitle.includes("treasury") ||
      normalizedTitle.includes("bank") ||
      normalizedTags.some((tag) =>
        tag.includes("finance") || tag.includes("banking") || tag.includes("risk")
      )
    );
  }
  if (topic === "Healthcare") {
    return (
      normalizedTitle.includes("healthcare") ||
      normalizedTags.some((tag) => tag.includes("healthcare"))
    );
  }
  if (topic === "NHS") {
    return (
      normalizedTitle.includes("nhs") ||
      normalizedTags.some((tag) => tag.includes("nhs"))
    );
  }
  if (topic === "Enterprise") {
    return (
      normalizedTitle.includes("enterprise") ||
      normalizedTags.some((tag) =>
        tag.includes("enterprise") || tag.includes("architecture")
      )
    );
  }
  return true;
}

export default function FeaturedInsights({ posts }: { posts: InsightPost[] }) {
  const [activeTopic, setActiveTopic] = useState<TopicFilter>("All");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => matchesTopic(post, activeTopic));
  }, [posts, activeTopic]);

  return (
    <section className="section">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.28em] text-primary">
              Featured Insights
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              <span className="text-white">Architecture &amp; </span>
              <span className="text-gradient">Risk Intelligence</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary">
              {posts.length} articles
            </span>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-secondary/65 transition hover:text-white"
            >
              View all
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Topic filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {TOPIC_FILTERS.map((topic) => {
            const isActive = topic === activeTopic;
            return (
              <button
                key={topic}
                type="button"
                onClick={() => setActiveTopic(topic)}
                className={
                  isActive
                    ? "min-h-11 rounded-full border border-primary/60 bg-primary/25 px-4 py-2 text-xs font-semibold text-white shadow-glow"
                    : "min-h-11 rounded-full border border-secondary/25 bg-background/30 px-4 py-2 text-xs text-secondary/65 transition hover:border-primary/35 hover:text-secondary/90"
                }
              >
                {topic}
              </button>
            );
          })}
        </div>

        {/* Posts grid */}
        {filteredPosts.length === 0 ? (
          <div className="rounded-2xl border border-secondary/20 bg-background/30 p-8 text-center">
            <p className="text-sm text-secondary/70">No insights in this topic yet.</p>
            <Link href="/blog" className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
              View all blog articles
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {filteredPosts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                tags={post.tags}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
