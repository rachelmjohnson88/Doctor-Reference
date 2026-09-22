import Link from "next/link";
import type { Article } from "@/lib/content";
import { getCategory, getContentType } from "@/lib/content";
import { categoryColors } from "@/lib/theme";

function estimateReadTime(article: Article): number {
  const words = article.sections
    .flatMap((s) => [s.heading, ...s.body])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export default function ArticleCard({ article }: { article: Article }) {
  const category = getCategory(article.category);
  const contentType = getContentType(article.type);
  const colors = category ? categoryColors[category.color] : undefined;
  const readTime = estimateReadTime(article);

  return (
    <Link
      href={`/article/${article.slug}`}
      className={`group block overflow-hidden rounded-xl border border-(--color-rule) bg-white shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md ${colors?.ring ?? ""}`}
    >
      <div className={`h-1 w-full ${colors?.bar ?? "bg-(--color-rule)"}`} />
      <div className="p-4">
        <span
          className={`inline-flex rounded-full px-2 py-0.5 font-mono text-xs tracking-wide uppercase ${colors?.badge ?? "bg-(--color-page-alt) text-(--color-ink-soft)"}`}
        >
          {contentType?.label ?? "Article"}
          {category && ` · ${category.name}`}
        </span>
        <h3 className="mt-2 font-serif font-semibold text-(--color-ink) group-hover:text-(--color-accent)">
          {article.title}
        </h3>
        <p className="mt-1 text-sm text-(--color-ink-soft)">{article.summary}</p>
        <p className="mt-3 font-mono text-xs tracking-wide text-(--color-ink-soft)/70 uppercase">
          {article.contributorName} · {readTime} min read · {article.updated}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-(--color-page-alt) px-2 py-0.5 font-mono text-xs text-(--color-ink-soft)"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
