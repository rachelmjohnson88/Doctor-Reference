import Link from "next/link";
import type { Category } from "@/lib/content";

export default function SpecialtyRow({
  category,
  count,
  index,
}: {
  category: Category;
  count: number;
  index: number;
}) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex items-baseline gap-6 border-b border-(--color-rule) py-6 first:pt-0 last:border-b-0"
    >
      <span className="w-10 shrink-0 font-serif text-2xl text-(--color-accent)/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex flex-1 items-baseline justify-between gap-6">
        <div>
          <h3 className="font-serif text-lg font-semibold text-(--color-ink) group-hover:text-(--color-accent)">
            {category.name}
          </h3>
          <p className="mt-1 max-w-xl text-sm text-(--color-ink-soft)">
            {category.description}
          </p>
        </div>
        <p className="shrink-0 font-mono text-xs tracking-wide text-(--color-ink-soft) uppercase">
          {count} {count === 1 ? "article" : "articles"}{" "}
          <span aria-hidden="true" className="text-(--color-accent)">
            →
          </span>
        </p>
      </div>
    </Link>
  );
}
