import Link from "next/link";
import Image from "next/image";
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
      className={`group block rounded-xl border border-(--color-rule) bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md ${colors.ring}`}
    >
      <div className="flex items-start gap-3.5">
        <Image
          src={`/icons/${category.slug}.jpg`}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-lg object-cover"
        />
        <div>
          <h3 className="font-serif font-semibold text-(--color-ink)">
            {category.name}
          </h3>
          <p className="mt-1 text-sm text-(--color-ink-soft)">{category.description}</p>
        </div>
      </div>
      <p className="mt-4 font-mono text-xs tracking-wide text-(--color-ink-soft)/70 uppercase">
        {count} {count === 1 ? "article" : "articles"}
      </p>
    </Link>
  );
}
