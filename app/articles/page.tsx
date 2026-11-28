import type { Metadata } from "next";
import ArticleList from "@/components/ArticleList";
import { getAllPosts } from "@/utils/posts";

export const metadata: Metadata = {
  title: "Articles | LorvexAI",
  description:
    "Practical articles on RAG, agents and multi-agent orchestration for regulated financial services, from the author of the AWB case-study book.",
  alternates: { canonical: "/articles" }
};

export default function ArticlesPage() {
  const posts = getAllPosts();
  return (
    <section className="section pt-12 md:pt-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h1 className="text-4xl font-bold leading-tight text-heading md:text-5xl">
          AI systems a regulated bank can defend
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary/85">
          Practical writing on RAG, agents and orchestration in finance, risk and regulatory reporting. Most pieces build
          on the AWB case study from the book.
        </p>
        <ArticleList posts={posts} />
      </div>
    </section>
  );
}
