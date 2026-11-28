import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  publishedAt: string;
  excerpt: string;
  tags: string[];
  readingTime: number;
  series?: string;
  seriesPart?: number;
  seriesTotal?: number;
  topic?: string;
};

function formatDate(value: unknown) {
  const d = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(d.getTime())) return String(value ?? "");
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const words = content.split(/\s+/).filter(Boolean).length;
      return {
        slug,
        title: data.title as string,
        date: formatDate(data.date),
        publishedAt: String(data.date ?? ""),
        excerpt: data.excerpt as string,
        tags: (data.tags as string[]) || [],
        readingTime: Math.max(1, Math.ceil(words / 200)),
        series: data.series as string | undefined,
        seriesPart: data.seriesPart as number | undefined,
        seriesTotal: data.seriesTotal as number | undefined,
        topic: data.topic as string | undefined,
        hidden: Boolean(data.hidden)
      };
    })
    .filter((post) => !post.hidden);

  return posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export async function getPostContent(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content } = matter(fileContents);
  const processed = await remark().use(remarkGfm).use(html).process(content);
  return processed
    .toString()
    .replace(/<p>\[\[diagram:([a-z0-9-]+)\]\]<\/p>/g, '<div data-diagram="$1"></div>');
}

export type TocItem = { id: string; text: string; level: 2 | 3 };

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Removes the leading H1 (the page hero already shows the title), adds ids to H2/H3 and returns a TOC.
export function prepareArticle(rawHtml: string): { html: string; toc: TocItem[] } {
  let htmlOut = rawHtml.replace(/^\s*<h1[^>]*>.*?<\/h1>\s*/s, "");
  const toc: TocItem[] = [];
  const seen = new Map<string, number>();
  htmlOut = htmlOut.replace(/<h([23])>(.*?)<\/h\1>/gs, (_m, level: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    let id = slugify(text) || "section";
    const n = seen.get(id) ?? 0;
    seen.set(id, n + 1);
    if (n > 0) id = `${id}-${n + 1}`;
    toc.push({ id, text, level: Number(level) as 2 | 3 });
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });
  return { html: htmlOut, toc };
}
