import Link from "next/link";
import type { Category } from "@/lib/content";
import { categoryColors } from "@/lib/theme";

export default function CategoryCard({
  category,
  count,
}: {
  category: Category;
  count: number;
}) {
  const colors = categoryColors[category.color];

  return (
    <Link
      href={`/category/${category.slug}`}
      className={`group flex overflow-hidden rounded-sm border border-(--color-rule) bg-white/60 shadow-[0_1px_2px_rgba(36,31,26,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(36,31,26,0.12)] ${colors.ring}`}
    >
      <span className={`w-2.5 shrink-0 ${colors.spine}`} aria-hidden="true" />
      <div className="p-5">
        <h3 className="font-serif text-lg font-semibold text-(--color-ink)">
          {category.name}
        </h3>
        <p className="mt-1.5 text-[15px] text-(--color-ink-soft)">
          {category.description}
        </p>
        <p
          className={`small-caps mt-3 text-xs font-bold tracking-wide ${colors.text}`}
        >
          {count} {count === 1 ? "Article" : "Articles"}
        </p>
      </div>
    </Link>
  );
}
