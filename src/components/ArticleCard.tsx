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
      className={`group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md ${colors?.ring ?? ""}`}
    >
      <div className={`h-1 w-full ${colors?.bar ?? "bg-slate-300"}`} />
      <div className="p-4">
        {category && (
          <span
            className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${colors?.badge}`}
          >
            {category.name}
          </span>
        )}
        <h3 className="mt-2 font-serif font-semibold text-slate-900 group-hover:text-[#0f4c5c]">
          {article.title}
        </h3>
        <p className="mt-1 text-sm text-slate-600">{article.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
