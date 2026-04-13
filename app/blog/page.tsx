import Link from "next/link";
import Section from "@/components/Section";
import BlogTopicView from "@/components/BlogTopicView";
import { getAllPosts } from "@/utils/posts";
import { ArrowRight, BookOpen, Rss } from "lucide-react";

export default function BlogPage() {
  const posts = getAllPosts();

  const topicCounts: { topic: string; count: number }[] = [
    {
      topic: "Technology",
      count: posts.filter((p) =>
        p.tags.some((t) =>
          ["rag", "architecture", "llm engineering", "ai architecture"].includes(t.toLowerCase())
        )
      ).length
    },
    {
      topic: "Finance",
      count: posts.filter(
        (p) =>
          /risk|treasury|bank/.test(p.title.toLowerCase()) ||
          p.tags.some((t) => /finance|banking|risk/.test(t.toLowerCase()))
      ).length
    },
    {
      topic: "Healthcare",
      count: posts.filter(
        (p) =>
          p.title.toLowerCase().includes("healthcare") ||
          p.tags.some((t) => t.toLowerCase().includes("healthcare"))
      ).length
    },
    {
      topic: "NHS",
      count: posts.filter(
        (p) =>
          p.title.toLowerCase().includes("nhs") ||
          p.tags.some((t) => t.toLowerCase().includes("nhs"))
      ).length
    }
  ].filter((t) => t.count > 0);

  return (
    <>
      {/* Hero banner */}
      <section className="section pb-6 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-3xl border border-primary/30 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Insights</p>
                <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                  <span className="text-white">Technical Insights &amp; </span>
                  <span className="text-gradient">AI Strategy</span>
                </h1>
                <p className="mt-5 max-w-xl text-secondary/80">
                  Practical guidance, architecture patterns, and risk intelligence from our team — built from real enterprise AI deployments across finance, banking, and NHS operations.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/research" className="btn-primary text-sm">
                    View Research
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-outline text-sm">
                    Request a Briefing
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3">
                  <BookOpen size={16} className="shrink-0 text-primary" />
                  <div>
                    <p className="stat-glow text-lg font-bold text-white">{posts.length}</p>
                    <p className="text-xs text-secondary/60">Articles published</p>
                  </div>
                </div>
                {topicCounts.map(({ topic, count }) => (
                  <div
                    key={topic}
                    className="flex items-center justify-between rounded-xl border border-secondary/15 bg-background/30 px-4 py-2.5"
                  >
                    <span className="text-sm text-secondary/70">{topic}</span>
                    <span className="font-mono text-xs text-primary">
                      {count} article{count !== 1 ? "s" : ""}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2 rounded-xl border border-secondary/15 bg-background/30 px-4 py-2.5">
                  <Rss size={13} className="text-secondary/50" />
                  <span className="text-xs text-secondary/50">New articles published regularly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="All Articles"
        title="Browse by topic"
        description="Filter by sector or technology to find the most relevant guidance for your team."
      >
        <BlogTopicView posts={posts} />
      </Section>
    </>
  );
}
