import Link from "next/link";
import type { Article } from "@/lib/content";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="block rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm"
    >
      <h3 className="font-medium text-slate-900">{article.title}</h3>
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
    </Link>
  );
}
