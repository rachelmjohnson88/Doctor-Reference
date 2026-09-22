import Link from "next/link";
import type { Article } from "@/lib/content";
import { getCategory } from "@/lib/content";

export default function ArticleRow({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  const category = getCategory(article.category);

  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block border-b border-(--color-rule) py-6 first:pt-0 last:border-b-0"
    >
      {category && (
        <p className="font-mono text-xs tracking-wide text-(--color-accent) uppercase">
          {category.name}
        </p>
      )}
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
        {article.contributorName} · {article.updated}
      </p>
    </Link>
  );
}
