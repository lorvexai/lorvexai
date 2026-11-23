import { ImageResponse } from "next/og";
import { getAllPosts } from "@/utils/posts";

export const dynamic = "force-static";
export const alt = "LorvexAI article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// One branded social preview per article, generated at build time from the article's own title and series.
export default function Image({ params }: { params: { slug: string } }) {
  const post = getAllPosts().find((p) => p.slug === params.slug);
  const title = post?.title ?? "LorvexAI";
  const series = post?.series
    ? `${post.series}${post.seriesPart && post.seriesTotal ? ` · Part ${post.seriesPart} of ${post.seriesTotal}` : ""}`
    : "Article";
  const fontSize = title.length > 70 ? 56 : title.length > 45 ? 68 : 80;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#F8FAFC", padding: "64px 72px", borderLeft: "16px solid #0E6982" }}>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#0E6982" }}>{series}</div>
        <div style={{ display: "flex", flex: 1, alignItems: "center", fontSize, fontWeight: 700, lineHeight: 1.1, color: "#0F172A", letterSpacing: -1 }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30, color: "#334155" }}>
          <div style={{ display: "flex" }}>Sreedhara Reddy Kotha</div>
          <div style={{ display: "flex", fontWeight: 700, color: "#0F172A" }}>
            Lorvex<span style={{ color: "#0E6982" }}>AI</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
