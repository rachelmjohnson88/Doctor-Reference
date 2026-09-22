import Link from "next/link";
import { getAllArticles, getAllCategories, getArticlesByCategory } from "@/lib/content";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  const categories = getAllCategories();
  const articleCount = getAllArticles().length;

  return (
    <div>
      <section className="border-b border-(--color-rule) bg-(--color-page-deep)">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <p className="small-caps text-sm font-bold tracking-wide text-(--color-brand)">
            A Clinical Compendium
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-(--color-ink) sm:text-5xl">
            Evidence-based answers, at the point of care.
          </h1>
          <div
            className="mx-auto my-7 h-px w-20 bg-(--color-gold)"
            aria-hidden="true"
          />
          <p className="mx-auto max-w-xl text-lg text-(--color-ink-soft)">
            Scoring systems, classifications, and protocols — organized for
            fast lookup on the ward, in clinic, or before the case.
          </p>

          <div className="small-caps mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm text-(--color-ink-soft)">
            <span>
              <span className="font-serif text-xl font-semibold text-(--color-brand)">
                {articleCount}
              </span>{" "}
              Reference Articles
            </span>
            <span>
              <span className="font-serif text-xl font-semibold text-(--color-brand)">
                {categories.length}
              </span>{" "}
              Specialty Areas
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="font-serif text-2xl font-semibold text-(--color-ink)">
          Browse by area
        </h2>
        <div className="mt-2 h-px w-full bg-(--color-rule)" aria-hidden="true" />

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
            className="small-caps inline-flex items-center gap-1.5 text-sm font-bold tracking-wide text-(--color-brand) hover:text-(--color-brand-dark)"
          >
            Browse all articles
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
