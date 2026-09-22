import Link from "next/link";
import { getAllCategories } from "@/lib/content";
import {
  getLatestArticles,
  getPopularTags,
  getPublishedByCategory,
} from "@/lib/store";
import SearchBox from "@/components/SearchBox";
import ArticleRow from "@/components/ArticleRow";
import SpecialtyRow from "@/components/SpecialtyRow";

export const dynamic = "force-dynamic";

export default async function Home() {
  const categories = getAllCategories();
  const [latest, popularTags] = await Promise.all([
    getLatestArticles(4),
    getPopularTags(6),
  ]);
  const counts = await Promise.all(
    categories.map(async (category) => ({
      slug: category.slug,
      count: (await getPublishedByCategory(category.slug)).length,
    }))
  );
  const countBySlug = Object.fromEntries(counts.map((c) => [c.slug, c.count]));

  return (
    <div>
      <section className="mx-auto max-w-3xl px-4 pt-14 pb-10 text-center">
        <p className="font-mono text-xs tracking-wide text-(--color-accent) uppercase">
          Surgipedia
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-(--color-ink)">
          Clinical knowledge, written by doctors.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-(--color-ink-soft)">
          A growing clinical library of articles, case reviews, protocols,
          scores, and exam resources — written and reviewed by doctors.
        </p>

        <div className="mx-auto mt-6 max-w-xl">
          <SearchBox size="large" />
        </div>

        {popularTags.length > 0 && (
          <p className="mt-3 font-mono text-xs tracking-wide text-(--color-ink-soft) uppercase">
            Popular: {popularTags.join(" · ")}
          </p>
        )}
      </section>

      <section className="border-t border-(--color-rule) bg-(--color-page-alt)">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="font-mono text-xs tracking-wide text-(--color-ink-soft) uppercase">
            Latest
          </h2>

          {latest.length > 0 ? (
            <div className="mt-4">
              {latest.map((article, i) => (
                <ArticleRow key={article.slug} article={article} featured={i === 0} />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-(--color-ink-soft)">
              No articles have been published yet.{" "}
              <Link
                href="/submit"
                className="text-(--color-accent) underline underline-offset-4 hover:text-(--color-ink)"
              >
                Be the first to contribute →
              </Link>
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs tracking-wide text-(--color-ink-soft) uppercase">
            Browse by specialty
          </h2>
          <Link
            href="/browse"
            className="font-mono text-xs tracking-wide text-(--color-accent) uppercase hover:text-(--color-ink)"
          >
            View all articles →
          </Link>
        </div>

        <div className="mt-4">
          {categories.map((category) => (
            <SpecialtyRow
              key={category.slug}
              category={category}
              count={countBySlug[category.slug] ?? 0}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-(--color-rule) bg-(--color-page-alt)">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-lg font-semibold text-(--color-ink)">
              Have something to share?
            </h2>
            <p className="mt-1 text-sm text-(--color-ink-soft)">
              Articles, case reviews, protocols, and exam notes are reviewed
              before publishing.
            </p>
          </div>
          <Link
            href="/submit"
            className="shrink-0 font-mono text-xs tracking-wide text-(--color-accent) uppercase hover:text-(--color-ink)"
          >
            Submit article →
          </Link>
        </div>
      </section>
    </div>
  );
}
