import Link from "next/link";
import type { Category } from "@/lib/content";

export default function CategoryCard({
  category,
  count,
}: {
  category: Category;
  count: number;
}) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="block rounded-lg border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
    >
      <h3 className="font-semibold text-slate-900">{category.name}</h3>
      <p className="mt-1 text-sm text-slate-600">{category.description}</p>
      <p className="mt-3 text-xs font-medium text-slate-400">
        {count} {count === 1 ? "article" : "articles"}
      </p>
    </Link>
  );
}
