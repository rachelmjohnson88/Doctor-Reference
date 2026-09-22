import Link from "next/link";
import type { Article } from "@/lib/content";
import { getCategory } from "@/lib/content";
import { categoryColors } from "@/lib/theme";

export default function ArticleCard({ article }: { article: Article }) {
  const category = getCategory(article.category);
  const colors = category ? categoryColors[category.color] : undefined;

  return (
    <Link
      href={`/article/${article.slug}`}
      className={`group flex overflow-hidden rounded-sm border border-(--color-rule) bg-white/60 shadow-[0_1px_2px_rgba(36,31,26,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(36,31,26,0.12)] ${colors?.ring ?? ""}`}
    >
      <span
        className={`w-2 shrink-0 ${colors?.spine ?? "bg-(--color-rule)"}`}
        aria-hidden="true"
      />
      <div className="p-4">
        {category && (
          <p
            className={`small-caps text-xs font-bold tracking-wide ${colors?.text}`}
          >
            {category.name}
          </p>
        )}
        <h3 className="mt-1 font-serif text-lg font-semibold text-(--color-ink) group-hover:text-(--color-brand)">
          {article.title}
        </h3>
        <p className="mt-1 text-[15px] text-(--color-ink-soft)">
          {article.summary}
        </p>
        <p className="small-caps mt-3 text-xs text-(--color-ink-soft)/70">
          {article.tags.join(" · ")}
        </p>
      </div>
    </Link>
  );
}
