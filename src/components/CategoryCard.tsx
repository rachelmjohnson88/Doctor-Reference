import Link from "next/link";
import type { Category } from "@/lib/content";
import { categoryColors } from "@/lib/theme";

export default function CategoryCard({
  category,
  count,
  index,
}: {
  category: Category;
  count: number;
  index: number;
}) {
  const colors = categoryColors[category.color];

  return (
    <Link
      href={`/category/${category.slug}`}
      className={`group flex gap-4 rounded-xl border border-(--color-rule) bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md ${colors.ring}`}
    >
      <span className={`font-serif text-2xl ${colors.text}/60`}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
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
