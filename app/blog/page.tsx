import Link from "next/link";
import Section from "@/components/Section";
import BlogTopicView from "@/components/BlogTopicView";
import { getAllPosts } from "@/utils/posts";
import { ArrowRight, BookOpen, ClipboardCheck, FileText, Rss } from "lucide-react";

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

export default function BlogPage() {
  const posts = getAllPosts();

  const topicCounts: { topic: string; count: number }[] = [
    {
      topic: "Governance",
      count: posts.filter((p) =>
        /governance|strategy|board reporting/i.test(p.title) ||
        p.tags.some((t) => /governance|strategy|board reporting/i.test(t))
      ).length
    },
    {
      topic: "Audit",
      count: posts.filter((p) =>
        /audit|assurance/i.test(p.title) ||
        p.tags.some((t) => /audit|assurance/i.test(t))
      ).length
    },
    {
      topic: "Model Risk",
      count: posts.filter((p) =>
        /model risk|model inventory/i.test(p.title) ||
        p.tags.some((t) => /model risk/i.test(t))
      ).length
    },
    {
      topic: "Regulation",
      count: posts.filter((p) =>
        /pra|ecb|sec|fed|regulation/i.test(p.title) ||
        p.tags.some((t) => /pra|ecb|sec|federal reserve|financial regulation/i.test(t))
      ).length
    },
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
          <div className="glass rounded-lg border border-primary/30 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Writing</p>
                <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                  <span className="text-white">Everything I've written </span>
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
                <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/10 px-4 py-3">
                  <BookOpen size={16} className="shrink-0 text-primary" />
                  <div>
                    <p className="stat-glow text-lg font-bold text-white">{posts.length}</p>
                    <p className="text-xs text-secondary/60">Articles published</p>
                  </div>
                </div>
                {topicCounts.map(({ topic, count }) => (
                  <div
                    key={topic}
                    className="flex items-center justify-between rounded-lg border border-secondary/15 bg-background/30 px-4 py-2.5"
                  >
                    <span className="text-sm text-secondary/70">{topic}</span>
                    <span className="font-mono text-xs text-primary">
                      {count} article{count !== 1 ? "s" : ""}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2 rounded-lg border border-secondary/15 bg-background/30 px-4 py-2.5">
                  <Rss size={13} className="text-secondary/50" />
                  <span className="text-xs text-secondary/50">New articles published regularly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Start here"
        title="One argument, explored properly"
        description="Featured pieces for readers who want the substance before the summaries."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <Link key={item.title} href={item.href} className="group rounded-lg border border-secondary/15 bg-background/35 p-6 transition hover:border-primary/45">
              <item.icon size={22} className="text-primary" />
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-secondary/45">{item.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary/70">{item.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-white">
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
        description="Filter by governance, audit, model risk, regulation, sector, or technology."
        >
          <BlogTopicView posts={posts} />
        </Section>
      </div>
    </>
  );
}
