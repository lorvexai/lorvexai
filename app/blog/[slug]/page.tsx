import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostContent } from "@/utils/posts";
import MermaidRenderer from "@/components/MermaidRenderer";
import CopyCodeButton from "@/components/CopyCodeButton";
import BlogCard from "@/components/BlogCard";
import { ArrowLeft, Calendar, Clock, Tag, Linkedin } from "lucide-react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lorvexai.github.io/lorvexai";
const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
const socialImageUrl = `${normalizedSiteUrl}/og-image.png`;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getAllPosts().find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found | LorvexAI" };

  const canonicalPath = `/blog/${params.slug}`;
  const maybeDate = new Date(post.publishedAt);
  const publishedTime = Number.isNaN(maybeDate.getTime())
    ? undefined
    : maybeDate.toISOString();

  return {
    title: `${post.title} | LorvexAI`,
    description: post.excerpt,
    alternates: { canonical: canonicalPath },
    authors: [{ name: "LorvexAI" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${normalizedSiteUrl}${canonicalPath}`,
      type: "article",
      publishedTime,
      authors: ["LorvexAI"],
      images: [{ url: socialImageUrl, width: 1200, height: 630, type: "image/png", alt: "LorvexAI" }]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [socialImageUrl]
    },
    other: publishedTime ? { "article:published_time": publishedTime } : undefined
  };
}

const TAG_ACCENT: Record<string, string> = {
  finance:       "border-blue-400/30 bg-blue-400/10 text-blue-300",
  banking:       "border-blue-400/30 bg-blue-400/10 text-blue-300",
  nhs:           "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  healthcare:    "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  enterprise:    "border-violet-400/30 bg-violet-400/10 text-violet-300",
  architecture:  "border-violet-400/30 bg-violet-400/10 text-violet-300",
  risk:          "border-orange-400/30 bg-orange-400/10 text-orange-300",
  treasury:      "border-orange-400/30 bg-orange-400/10 text-orange-300",
  default:       "border-secondary/25 bg-secondary/10 text-secondary/75"
};

function getTagAccent(tag: string): string {
  const key = tag.toLowerCase();
  for (const [pattern, cls] of Object.entries(TAG_ACCENT)) {
    if (key.includes(pattern)) return cls;
  }
  return TAG_ACCENT.default;
}

function estimateReadingTime(html: string): number {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const allPosts = getAllPosts();
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const html = await getPostContent(params.slug);
  const readingTime = estimateReadingTime(html);

  const relatedPosts = allPosts
    .filter((c) => c.slug !== post.slug)
    .map((c) => ({
      ...c,
      score: c.tags.filter((t) => post.tags.includes(t)).length
    }))
    .sort((a, b) => b.score - a.score || (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 3);

  return (
    <>
      {/* Article hero */}
      <section className="border-b border-secondary/10 bg-background/60 py-10 md:py-14">
        <div className="mx-auto w-full max-w-4xl px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-secondary/55 transition hover:text-white"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            All articles
          </Link>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap items-center gap-1.5">
              <Tag size={12} className="text-secondary/40" aria-hidden="true" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] ${getTagAccent(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl font-semibold leading-snug text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary/70">
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-secondary/10 pt-5">
            <div className="flex items-center gap-1.5 text-sm text-secondary/55">
              <Calendar size={13} aria-hidden="true" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-secondary/55">
              <Clock size={13} aria-hidden="true" />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-secondary/55">
              <span className="h-1 w-1 rounded-full bg-secondary/30" />
              <span>LorvexAI</span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs text-secondary/40">Share:</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${normalizedSiteUrl}/blog/${params.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-secondary/20 bg-background/40 px-3 py-1.5 text-xs text-secondary/60 transition hover:border-primary/40 hover:text-primary"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={12} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-4xl px-6">
          <CopyCodeButton />
          <MermaidRenderer />
          <article
            className="prose prose-invert max-w-none
              prose-headings:font-semibold prose-headings:text-white
              prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-secondary/80 prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:text-white
              prose-strong:text-white
              prose-li:text-secondary/80
              prose-code:text-primary prose-code:bg-primary/10 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-background/60 prose-pre:border prose-pre:border-secondary/15 prose-pre:rounded-xl
              prose-blockquote:border-primary/50 prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-0.5
              prose-hr:border-secondary/15
              prose-img:rounded-2xl prose-img:border prose-img:border-secondary/15"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-secondary/10 bg-background/40 py-12">
          <div className="mx-auto w-full max-w-4xl px-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="mb-1 font-mono text-xs uppercase tracking-[0.28em] text-secondary/50">
                  Continue Reading
                </p>
                <h2 className="text-xl font-semibold text-white">Related Insights</h2>
              </div>
              <Link
                href="/blog"
                className="text-sm text-secondary/55 transition hover:text-white"
              >
                View all →
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard
                  key={related.slug}
                  slug={related.slug}
                  title={related.title}
                  excerpt={related.excerpt}
                  tags={related.tags}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
