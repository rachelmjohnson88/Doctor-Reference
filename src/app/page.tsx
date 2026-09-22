import Link from "next/link";
import { getAllArticles, getAllCategories, getArticlesByCategory } from "@/lib/content";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  const categories = getAllCategories();
  const articleCount = getAllArticles().length;

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <p className="text-sm font-medium tracking-wide text-[#0f4c5c] uppercase">
            Clinical quick reference
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Evidence-based answers, at the point of care.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            Scoring systems, classifications, and protocols — organized for
            fast lookup on the ward, in clinic, or before the case.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-slate-500">
            <span>
              <span className="font-semibold text-slate-900">{articleCount}</span>{" "}
              reference articles
            </span>
            <span>
              <span className="font-semibold text-slate-900">
                {categories.length}
              </span>{" "}
              specialty areas
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="font-serif text-xl font-semibold text-slate-900">
          Browse by area
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
              count={getArticlesByCategory(category.slug).length}
            />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/browse"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#0f4c5c] hover:text-[#0b3a46]"
          >
            Browse all articles
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
