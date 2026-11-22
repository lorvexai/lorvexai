import Link from "next/link";
import Section from "@/components/Section";
import BlogTopicView from "@/components/BlogTopicView";
import { getAllPosts } from "@/utils/posts";
import { countByTopic, type RealTopic } from "@/utils/topics";
import { ArrowRight, BookOpen, ClipboardCheck, Clock, FileText } from "lucide-react";

const featured = [
  {
    icon: FileText,
    category: "AI Governance",
    title: "AI Strategy and Governance for Regulated Financial Institutions",
    desc: "A practical, board-friendly guide to AI ambition, risk appetite, ownership, controls, and evidence in regulated financial institutions.",
    href: "/blog/ai-strategy-and-governance-for-regulated-financial-institutions"
  },
  {
    icon: ClipboardCheck,
    category: "Audit & Assurance",
    title: "AI Audit Readiness: Evidence, Controls, Logs, and Human Oversight",
    desc: "A plain-language note on making AI systems easier to audit by designing evidence and human review into the workflow.",
    href: "/blog/ai-audit-readiness-evidence-controls-logs-human-oversight"
  },
  {
    icon: BookOpen,
    category: "Model Risk",
    title: "Model Risk Management for AI: PRA SS1/23 and US Supervisory Guidance",
    desc: "Educational research on model inventory, tiering, validation, monitoring, explainability, and effective challenge for AI systems.",
    href: "/blog/model-risk-management-for-ai-pra-ss1-23-us-supervisory-guidance"
  }
];

const pathways = [
  {
    audience: "Executives and boards",
    blurb: "Strategy, accountability and what to ask for.",
    slugs: [
      "ai-strategy-and-governance-for-regulated-financial-institutions",
      "board-reporting-for-ai-risk-and-model-risk-committees"
    ]
  },
  {
    audience: "Risk and compliance professionals",
    blurb: "Model risk, audit evidence and supervisory expectations.",
    slugs: [
      "model-risk-management-for-ai-pra-ss1-23-us-supervisory-guidance",
      "ai-audit-readiness-evidence-controls-logs-human-oversight",
      "ai-model-inventory-and-tiering-for-banks"
    ]
  },
  {
    audience: "Engineers and architects",
    blurb: "RAG, agents, evaluation and guardrails in production.",
    slugs: ["enterprise-rag-architectures", "agentic-ai-design-patterns", "llm-evaluation-in-production"]
  }
];

export default function BlogPage() {
  const posts = getAllPosts();

  const counts = countByTopic(posts);
  const topicCounts = (Object.keys(counts) as RealTopic[])
    .map((topic) => ({ topic, count: counts[topic] }))
    .filter((t) => t.count > 0)
    .sort((x, y) => y.count - x.count);
  const bySlug = new Map(posts.map((post) => [post.slug, post]));

  return (
    <>
      {/* Hero banner */}
      <section className="section pb-6 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-lg border border-primary/30 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">Writing</p>
                <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                  <span className="text-heading">Everything I've written </span>
                  <span className="text-gradient">on regulated AI</span>
                </h1>
                <p className="mt-5 max-w-xl text-secondary/80">
                  Educational articles on AI strategy, governance, audit readiness, model risk, and financial regulation across PRA, ECB, Federal Reserve, and SEC themes.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="#articles" className="btn-primary text-sm">
                    Browse Articles
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/ask" className="btn-outline text-sm">
                    Ask the Archive
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-lg border border-primary/25 bg-primary/10 px-4 py-3">
                  <BookOpen size={16} className="shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-lg font-bold text-heading">{posts.length}</p>
                    <p className="text-sm text-secondary/75">Articles, each filed under one topic</p>
                  </div>
                </div>
                {topicCounts.map(({ topic, count }) => (
                  <div
                    key={topic}
                    className="flex items-center justify-between rounded-lg border border-secondary/15 bg-background/30 px-4 py-2.5"
                  >
                    <span className="text-sm text-secondary/80">{topic}</span>
                    <span className="font-mono text-xs text-primary">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Start here"
        title="Pick the path that fits your role"
        description="Two or three articles in a sensible order, for each kind of reader."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {pathways.map((path) => (
            <div key={path.audience} className="card-glow p-6">
              <h2 className="text-lg font-semibold text-heading">{path.audience}</h2>
              <p className="mt-1 text-sm text-secondary/75">{path.blurb}</p>
              <ol className="mt-4 space-y-3">
                {path.slugs.map((slug, i) => {
                  const post = bySlug.get(slug);
                  if (!post) return null;
                  return (
                    <li key={slug} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">{i + 1}</span>
                      <Link href={`/blog/${slug}`} className="text-sm leading-snug text-heading hover:text-primary">
                        {post.title}
                        <span className="mt-0.5 flex items-center gap-1 text-xs text-secondary/70">
                          <Clock size={11} aria-hidden="true" /> {post.readingTime} min read
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Featured"
        title="One argument, explored properly"
        description="Featured pieces for readers who want the substance before the summaries."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <Link key={item.title} href={item.href} className="card-glow group border-primary/30 bg-gradient-to-b from-primary/10 to-transparent p-6">
              <item.icon size={22} className="text-primary" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary">{item.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-heading">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary/70">{item.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-heading">
                Read more
                <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <div id="articles">
        <Section
        eyebrow="All Articles"
        title="Browse by topic"
        description="Every article sits under one topic, and the topic counts above match these filters."
        >
          <BlogTopicView posts={posts} />
        </Section>
      </div>
    </>
  );
}
