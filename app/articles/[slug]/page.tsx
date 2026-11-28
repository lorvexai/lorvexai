import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostContent, prepareArticle } from "@/utils/posts";
import MermaidRenderer from "@/components/MermaidRenderer";
import CopyCodeButton from "@/components/CopyCodeButton";
import DiagramMounter from "@/components/DiagramMounter";
import BlogCard from "@/components/BlogCard";
import SubscribeForm from "@/components/SubscribeForm";
import { NEWSLETTER_NAME } from "@/utils/site";
import { ArrowLeft, Calendar, Clock, Tag, Linkedin } from "lucide-react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lorvexai.com";
const normalizedSiteUrl = siteUrl.replace(/\/$/, "");

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

  const canonicalPath = `/articles/${params.slug}`;
  const maybeDate = new Date(post.publishedAt);
  const publishedTime = Number.isNaN(maybeDate.getTime())
    ? undefined
    : maybeDate.toISOString();

  return {
    title: `${post.title} | LorvexAI`,
    description: post.excerpt,
    alternates: { canonical: canonicalPath },
    authors: [{ name: "Sreedhara Reddy Kotha" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${normalizedSiteUrl}${canonicalPath}`,
      type: "article",
      publishedTime,
      authors: ["Sreedhara Reddy Kotha"]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt
    },
    other: publishedTime ? { "article:published_time": publishedTime } : undefined
  };
}

function getTagAccent(_tag: string): string {
  return "border-primary/30 bg-primary/10 text-primary";
}

function estimateReadingTime(html: string): number {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const allPosts = getAllPosts();
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const rawHtml = await getPostContent(params.slug);
  const { html, toc } = prepareArticle(rawHtml);
  const readingTime = post.readingTime ?? estimateReadingTime(html);

  const relatedPosts = allPosts
    .filter((c) => c.slug !== post.slug)
    .map((c) => ({
      ...c,
      score: c.tags.filter((t) => post.tags.includes(t)).length
    }))
    .sort((a, b) => b.score - a.score || (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 3);

  const inSeries = post.series
    ? getAllPosts()
        .filter((p) => p.series === post.series && p.seriesPart)
        .sort((a, b) => (a.seriesPart ?? 0) - (b.seriesPart ?? 0))
    : [];
  const at = inSeries.findIndex((p) => p.slug === post.slug);
  const seriesNav: { dir: "prev" | "next"; p: (typeof inSeries)[number] }[] = [];
  if (at > 0) seriesNav.push({ dir: "prev", p: inSeries[at - 1] });
  if (at >= 0 && at < inSeries.length - 1) seriesNav.push({ dir: "next", p: inSeries[at + 1] });

  const canonical = `${normalizedSiteUrl}/articles/${params.slug}/`;
  const published = new Date(post.publishedAt);
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    ...(Number.isNaN(published.getTime()) ? {} : { datePublished: published.toISOString(), dateModified: published.toISOString() }),
    author: { "@type": "Person", name: "Sreedhara Reddy Kotha", url: `${normalizedSiteUrl}/about/`, sameAs: ["https://www.linkedin.com/in/sreekotha/"] },
    publisher: { "@type": "Organization", name: "LorvexAI", url: normalizedSiteUrl },
    mainEntityOfPage: canonical,
    image: `${canonical}opengraph-image`,
    keywords: post.tags.join(", "),
    inLanguage: "en-GB",
    ...(post.series ? { isPartOf: { "@type": "CreativeWorkSeries", name: post.series } } : {})
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Article hero */}
      <section className="border-b border-secondary/10 bg-background/60 py-10 md:py-14">
        <div className="mx-auto w-full max-w-4xl px-6">
          {/* Back link */}
          <Link
            href="/articles"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-secondary/70 transition hover:text-heading"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            All articles
          </Link>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap items-center gap-1.5">
              <Tag size={12} className="text-secondary/70" aria-hidden="true" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border px-2.5 py-1 text-xs font-medium uppercase tracking-[0.15em] ${getTagAccent(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.series && (
            <p className="mb-3 text-sm font-semibold text-primary">
              {post.series}
              {post.seriesPart && post.seriesTotal ? ` · Part ${post.seriesPart} of ${post.seriesTotal}` : ""}
            </p>
          )}

          {/* Title */}
          <h1 className="text-3xl font-semibold leading-snug text-heading md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary/70">
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-secondary/10 pt-5">
            <div className="flex items-center gap-1.5 text-sm text-secondary/70">
              <Calendar size={13} aria-hidden="true" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-secondary/70">
              <Clock size={13} aria-hidden="true" />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-secondary/70">
              <span className="h-1 w-1 rounded-full bg-secondary/30" />
              <span>By Sreedhara Reddy Kotha</span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs text-secondary/70">Share:</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${normalizedSiteUrl}/articles/${params.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-secondary/20 bg-background/40 px-3 py-1.5 text-xs text-secondary/75 transition hover:border-primary/40 hover:text-primary"
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
          <aside className="card-glow mb-8 p-6" aria-label="At a glance">
            <p className="text-sm font-semibold text-primary">At a glance</p>
            <p className="mt-2 text-sm text-secondary/80">
              {readingTime} min read · Published {post.date}
              {toc.filter((t) => t.level === 2).length > 0 ? ` · ${toc.filter((t) => t.level === 2).length} sections` : ""}
            </p>
            {toc.filter((t) => t.level === 2).length >= 3 && (
              <nav className="mt-4 border-t border-secondary/15 pt-4" aria-label="Table of contents">
                <p className="text-sm font-semibold text-heading">In this article</p>
                <ol className="mt-2 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
                  {toc
                    .filter((t) => t.level === 2)
                    .map((t) => (
                      <li key={t.id}>
                        <a href={`#${t.id}`} className="text-secondary/80 transition hover:text-primary">
                          {t.text}
                        </a>
                      </li>
                    ))}
                </ol>
              </nav>
            )}
          </aside>
          <CopyCodeButton />
          {rawHtml.includes("language-mermaid") && <MermaidRenderer />}
          {rawHtml.includes("data-diagram") && <DiagramMounter />}
          <article
            className="prose prose-invert max-w-none
              prose-headings:font-semibold prose-headings:text-heading
              prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-headings:scroll-mt-28
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-secondary/80 prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:text-heading
              prose-strong:text-heading
              prose-li:text-secondary/80
              prose-code:text-primary prose-code:bg-primary/10 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-background/60 prose-pre:border prose-pre:border-secondary/15 prose-pre:rounded-xl
              prose-blockquote:border-primary/50 prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-0.5
              prose-hr:border-secondary/15
              prose-img:rounded-2xl prose-img:border prose-img:border-secondary/15"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {seriesNav.length > 0 && (
            <nav className="mt-12 grid gap-4 sm:grid-cols-2" aria-label="Series navigation">
              {seriesNav.map(({ dir, p }) => (
                <Link
                  key={p.slug}
                  href={`/articles/${p.slug}`}
                  className={`card-glow group block p-5 ${dir === "next" ? "sm:col-start-2 sm:text-right" : ""}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    {dir === "next" ? "Next" : "Previous"} · Part {p.seriesPart}
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug text-heading">{p.title}</p>
                </Link>
              ))}
            </nav>
          )}

          <aside className="card-glow mt-12 border-primary/30 bg-primary/5 p-6 md:p-8" aria-label="Subscribe">
            <p className="text-xl font-semibold text-heading">
              {post.series ? "Get the next part by email" : "Get new articles by email"}
            </p>
            <p className="mb-4 mt-2 text-base text-secondary/80">
              {NEWSLETTER_NAME} is a short weekly briefing on AI in financial risk and regulation. Each new article is
              flagged there. Unsubscribe at any time.
            </p>
            <SubscribeForm id="article-email" />
          </aside>
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-secondary/10 bg-background/40 py-12">
          <div className="mx-auto w-full max-w-4xl px-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="mb-1 font-mono text-xs uppercase tracking-[0.14em] text-secondary/70">
                  Continue Reading
                </p>
                <h2 className="text-xl font-semibold text-heading">Related Insights</h2>
              </div>
              <Link
                href="/articles"
                className="text-sm text-secondary/70 transition hover:text-heading"
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
