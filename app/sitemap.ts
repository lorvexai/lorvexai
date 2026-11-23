import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { getAllPosts } from "@/utils/posts";
import { getIssues } from "@/utils/newsletter";

export const dynamic = "force-static";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://lorvexai.com").replace(/\/$/, "");

// Built from the content on every build, so new articles, issues and appendices appear without manual edits.
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (p: string) => `${SITE}${p}`;
  const statics: [string, MetadataRoute.Sitemap[number]["changeFrequency"], number][] = [
    ["/", "weekly", 1.0],
    ["/books/", "monthly", 0.9],
    ["/books/sample-chapter/", "monthly", 0.7],
    ["/newsletter/", "weekly", 0.8],
    ["/articles/", "weekly", 0.8],
    ["/about/", "monthly", 0.8],
    ["/contact/", "monthly", 0.6],
    ["/disclaimers/", "monthly", 0.4],
    ["/privacy/", "yearly", 0.3],
    ["/cookies/", "yearly", 0.3],
    ["/terms/", "yearly", 0.3]
  ];

  const appendices = fs
    .readdirSync(path.join(process.cwd(), "content", "book"))
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));

  return [
    ...statics.map(([p, changeFrequency, priority]) => ({ url: url(p), changeFrequency, priority })),
    ...appendices.map((slug) => ({ url: url(`/books/appendices/${slug}/`), changeFrequency: "monthly" as const, priority: 0.6 })),
    ...getIssues()
      .filter((i) => i.status === "published")
      .map((i) => ({ url: url(`/newsletter/${i.slug}/`), lastModified: new Date(i.date), priority: 0.7 })),
    ...getAllPosts().map((p) => ({
      url: url(`/articles/${p.slug}/`),
      lastModified: new Date(p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
