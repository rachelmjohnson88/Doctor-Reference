import Link from "next/link";
import type { Article } from "@/lib/content";
import { getCategory, getContentType } from "@/lib/content";

function estimateReadTime(article: Article): number {
  const words = article.sections
    .flatMap((s) => [s.heading, ...s.body])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export default function ArticleRow({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  const category = getCategory(article.category);
  const contentType = getContentType(article.type);
  const readTime = estimateReadTime(article);

  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block border-b border-(--color-rule) py-6 first:pt-0 last:border-b-0"
    >
      <p className="font-mono text-xs tracking-wide text-(--color-accent) uppercase">
        {contentType?.label ?? "Article"}
        {category && ` · ${category.name}`}
      </p>
      <h3
        className={`mt-1.5 font-serif font-semibold text-(--color-ink) group-hover:text-(--color-accent) ${
          featured ? "text-2xl" : "text-lg"
        }`}
      >
        {article.title}
      </h3>
      <p
        className={`mt-1.5 text-(--color-ink-soft) ${featured ? "max-w-2xl" : "max-w-xl text-sm"}`}
      >
        {article.summary}
      </p>
      <p className="mt-2.5 font-mono text-xs tracking-wide text-(--color-ink-soft)/70 uppercase">
        {article.contributorName} · {readTime} min read · {article.updated}
      </p>
    </Link>
  );
}
