import Link from "next/link";
import type { Category } from "@/lib/content";

export default function SpecialtyRow({
  category,
  count,
}: {
  category: Category;
  count: number;
}) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex items-baseline justify-between gap-6 border-b border-(--color-rule) py-5 first:pt-0 last:border-b-0"
    >
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
    </Link>
  );
}
