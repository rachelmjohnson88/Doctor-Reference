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

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/browse"
            className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-slate-300"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4.5 w-4.5"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </span>
              <div>
                <h3 className="font-serif font-semibold text-slate-900">
                  Browse all articles
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  See every published article across all areas.
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs font-medium tracking-wide text-slate-400 uppercase">
              {articles.length} {articles.length === 1 ? "article" : "articles"}
            </p>
          </Link>

          <Link
            href="/submit"
            className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-[#0f4c5c]/30"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0f4c5c]/10 text-[#0f4c5c]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4.5 w-4.5"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
              <div>
                <h3 className="font-serif font-semibold text-slate-900">
                  Submit an article
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Contribute a clinical article, case review, or exam note.
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs font-medium tracking-wide text-slate-400 uppercase">
              Reviewed before publishing
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
