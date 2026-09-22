import Link from "next/link";
import { getAllCategories } from "@/lib/content";
import { getPublishedArticles, getPublishedByCategory } from "@/lib/store";
import CategoryCard from "@/components/CategoryCard";

export const dynamic = "force-dynamic";

export default async function Home() {
  const categories = getAllCategories();
  const articles = await getPublishedArticles();
  const counts = await Promise.all(
    categories.map(async (category) => ({
      slug: category.slug,
      count: (await getPublishedByCategory(category.slug)).length,
    }))
  );
  const countBySlug = Object.fromEntries(counts.map((c) => [c.slug, c.count]));

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <p className="text-sm font-medium tracking-wide text-[#0f4c5c] uppercase">
            By doctors, for doctors
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            A place for doctors to publish and learn.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            Clinical articles, case reviews, and exam notes — written and
            reviewed by doctors, organized for fast reading and revision.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-slate-500">
            <span>
              <span className="font-semibold text-slate-900">{articles.length}</span>{" "}
              published articles
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
              count={countBySlug[category.slug] ?? 0}
            />
          ))}
        </div>

        {articles.length === 0 && (
          <p className="mt-8 text-sm text-slate-500">
            No articles have been published yet.{" "}
            <Link
              href="/submit"
              className="font-medium text-[#0f4c5c] underline underline-offset-4 hover:text-[#0b3a46]"
            >
              Submit the first one →
            </Link>
          </p>
        )}

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
