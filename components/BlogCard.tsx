import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TAG_ACCENT: Record<string, string> = {
  finance:      "border-blue-400/30 bg-blue-400/10 text-blue-300",
  banking:      "border-blue-400/30 bg-blue-400/10 text-blue-300",
  nhs:          "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  healthcare:   "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  enterprise:   "border-violet-400/30 bg-violet-400/10 text-violet-300",
  architecture: "border-violet-400/30 bg-violet-400/10 text-violet-300",
  default:      "border-secondary/25 bg-secondary/10 text-secondary/75"
};

function getTagAccent(tag: string): string {
  const key = tag.toLowerCase();
  for (const [pattern, cls] of Object.entries(TAG_ACCENT)) {
    if (key.includes(pattern)) return cls;
  }
  return TAG_ACCENT.default;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  tags = []
}: {
  slug: string;
  title: string;
  excerpt: string;
  tags?: string[];
}) {
  const displayTags = tags.slice(0, 2);

  return (
    <article className="glass card-hover group flex flex-col rounded-2xl border border-secondary/20 p-6">
      {displayTags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-1.5">
          {displayTags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] ${getTagAccent(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <h3 className="group-title text-base font-semibold leading-snug text-white transition-colors md:text-lg">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary/75 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
        {excerpt}
      </p>

      <Link
        href={`/blog/${slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
      >
        Read article
        <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </article>
  );
}
