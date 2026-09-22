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
      className={`group block overflow-hidden rounded-xl border border-(--color-rule) bg-white shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md ${colors.ring}`}
    >
      <div className={`h-1 w-full ${colors.bar}`} />
      <div className="p-5">
        <h3 className="font-serif font-semibold text-(--color-ink)">
          {category.name}
        </h3>
        <p className="mt-1 text-sm text-(--color-ink-soft)">{category.description}</p>
        <p className="mt-4 font-mono text-xs tracking-wide text-(--color-ink-soft)/70 uppercase">
          {count} {count === 1 ? "article" : "articles"}
        </p>
      </div>
    </Link>
  );
}
