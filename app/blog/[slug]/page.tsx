import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostContent } from "@/utils/posts";
import MermaidRenderer from "@/components/MermaidRenderer";

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

  if (!post) {
    return {
      title: "Article Not Found | Lorvex AI"
    };
  }

  const canonicalPath = `/blog/${params.slug}`;
  const maybeDate = new Date(post.publishedAt);
  const publishedTime = Number.isNaN(maybeDate.getTime())
    ? undefined
    : maybeDate.toISOString();

  return {
    title: `${post.title} | Lorvex AI`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalPath
    },
    authors: [{ name: "Lorvex AI Editorial Team" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${normalizedSiteUrl}${canonicalPath}`,
      type: "article",
      publishedTime,
      authors: ["Lorvex AI Editorial Team"],
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: "Lorvex AI"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [socialImageUrl]
    },
    other: publishedTime
      ? {
          "article:published_time": publishedTime
        }
      : undefined
  };
}

export default async function BlogPost({
  params
}: {
  params: { slug: string };
}) {
  const post = getAllPosts().find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const html = await getPostContent(params.slug);

  return (
    <section className="section">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-secondary/70">
          Blog
        </p>
        <MermaidRenderer />
        <article
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
}
