import Section from "@/components/Section";
import BlogTopicView from "@/components/BlogTopicView";
import { getAllPosts } from "@/utils/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section
      eyebrow="Blog"
      title="Technical insights and AI strategy"
      description="Explore practical guidance by topic: Technology, Finance, Healthcare, and Enterprise."
    >
      <BlogTopicView posts={posts} />
    </Section>
  );
}
