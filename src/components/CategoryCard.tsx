import Link from "next/link";
import type { Category } from "@/lib/content";
import { categoryColors } from "@/lib/theme";
import CategoryIcon from "./CategoryIcon";

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
      className={`group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md ${colors.ring}`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${colors.icon}`}
        >
          <CategoryIcon slug={category.slug} className="h-4.5 w-4.5" />
        </span>
        <div>
          <h3 className="font-serif font-semibold text-slate-900">
            {category.name}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{category.description}</p>
        </div>
      </div>
      <p className="mt-4 font-mono text-xs tracking-wide text-slate-400 uppercase">
        {count} {count === 1 ? "article" : "articles"}
      </p>
    </Link>
  );
}
