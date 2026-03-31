"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import type { PostMeta } from "@/utils/posts";

const TOPICS = ["All", "Technology", "Finance", "Healthcare", "Enterprise"] as const;
type Topic = (typeof TOPICS)[number];

const topicBySlug: Record<string, Exclude<Topic, "All">> = {
  "ai-agents-in-banking-operations": "Finance",
  "ai-native-treasury-control-tower": "Finance",
  "ai-in-financial-risk-management": "Finance",
  "nhs-ai-triage-without-harm": "Healthcare",
  "nhs-waiting-lists-to-smart-pathways": "Healthcare",
  "enterprise-rag-architectures": "Enterprise",
  "the-rise-of-agentic-ai": "Technology"
};

function getTopic(post: PostMeta): Exclude<Topic, "All"> {
  return topicBySlug[post.slug] ?? "Technology";
}

function toTime(dateLabel: string) {
  const ts = Date.parse(dateLabel);
  return Number.isNaN(ts) ? 0 : ts;
}

export default function BlogTopicView({ posts }: { posts: PostMeta[] }) {
  const [activeTopic, setActiveTopic] = useState<Topic>("All");

  const grouped = useMemo(() => {
    const groups: Record<Exclude<Topic, "All">, PostMeta[]> = {
      Technology: [],
      Finance: [],
      Healthcare: [],
      Enterprise: []
    };

    posts.forEach((post) => {
      groups[getTopic(post)].push(post);
    });

    (Object.keys(groups) as Array<Exclude<Topic, "All">>).forEach((topic) => {
      groups[topic].sort((a, b) => toTime(b.date) - toTime(a.date));
    });

    return groups;
  }, [posts]);

  const counts = useMemo(
    () => ({
      All: posts.length,
      Technology: grouped.Technology.length,
      Finance: grouped.Finance.length,
      Healthcare: grouped.Healthcare.length,
      Enterprise: grouped.Enterprise.length
    }),
    [grouped, posts.length]
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {TOPICS.map((topic) => {
          const active = activeTopic === topic;
          return (
            <button
              key={topic}
              type="button"
              onClick={() => setActiveTopic(topic)}
              className={
                active
                  ? "rounded-full border border-primary/50 bg-primary/20 px-4 py-2 text-sm font-semibold text-white"
                  : "rounded-full border border-secondary/35 bg-background/30 px-4 py-2 text-sm text-secondary/85 transition hover:border-secondary/55 hover:text-white"
              }
            >
              {topic} ({counts[topic]})
            </button>
          );
        })}
      </div>

      {activeTopic === "All" ? (
        <div className="space-y-8">
          {(Object.keys(grouped) as Array<Exclude<Topic, "All">>).map((topic) => {
            const topicPosts = grouped[topic];
            if (topicPosts.length === 0) return null;

            return (
              <section key={topic} className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{topic}</h3>
                  <p className="text-sm text-secondary/75">
                    {topicPosts.length} article{topicPosts.length > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {topicPosts.map((post) => (
                    <BlogCard
                      key={post.slug}
                      slug={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {grouped[activeTopic].map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      )}
    </div>
  );
}
