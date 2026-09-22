import Link from "next/link";
import { getAllCategories } from "@/lib/content";
import {
  getLatestArticles,
  getPopularTags,
  getPublishedByCategory,
} from "@/lib/store";
import SearchBox from "@/components/SearchBox";
import ArticleCard from "@/components/ArticleCard";
import CategoryCard from "@/components/CategoryCard";
import AnatomicalFigure from "@/components/AnatomicalFigure";

export const dynamic = "force-dynamic";

export default async function Home() {
  const categories = getAllCategories();
  const [latest, popularTags] = await Promise.all([
    getLatestArticles(4),
    getPopularTags(5),
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
      {/* Hero */}
      <section className="mx-auto grid max-w-5xl gap-10 px-4 pt-12 pb-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12 lg:gap-16">
        <div>
          <p className="font-mono text-xs tracking-wide text-(--color-accent) uppercase">
            By doctors, for doctors
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-[1.05] font-semibold tracking-tight text-(--color-ink) sm:text-6xl">
            Real knowledge
            <br />
            for <span className="text-(--color-accent)">real</span> care.
          </h1>
          <p className="mt-5 max-w-md text-(--color-ink-soft)">
            Evidence-based articles, case reviews, protocols, scores, and
            exam resources — written and reviewed by doctors, for the
            questions you face every day.
          </p>

          <div className="mt-7 max-w-md">
            <SearchBox size="large" />
          </div>

          {popularTags.length > 0 && (
            <p className="mt-3 max-w-md font-mono text-xs tracking-wide text-(--color-ink-soft) uppercase">
              Popular: {popularTags.join(" · ")}
            </p>
          )}
        </div>

        <AnatomicalFigure className="mx-auto w-full max-w-xs md:mx-0 md:max-w-none" />
      </section>

      {/* Specialty cards */}
      <section className="border-t border-(--color-rule)">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-xl font-semibold text-(--color-ink)">
              Browse by specialty
            </h2>
            <Link
              href="/browse"
              className="font-mono text-xs tracking-wide text-(--color-accent) uppercase hover:text-(--color-ink)"
            >
              View all articles →
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                category={category}
                count={countBySlug[category.slug] ?? 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest / launch state */}
      <section className="border-t border-(--color-rule) bg-(--color-page-alt)">
        <div className="mx-auto max-w-5xl px-4 py-12">
          {latest.length > 0 ? (
            <>
              <div className="flex items-baseline justify-between">
                <h2 className="font-serif text-xl font-semibold text-(--color-ink)">
                  Latest
                </h2>
                <Link
                  href="/browse"
                  className="font-mono text-xs tracking-wide text-(--color-accent) uppercase hover:text-(--color-ink)"
                >
                  View all →
                </Link>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {latest.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </>
          ) : (
            <div className="py-4 text-center">
              <p className="font-mono text-xs tracking-wide text-(--color-accent) uppercase">
                Coming soon
              </p>
              <h2 className="mx-auto mt-3 max-w-sm font-serif text-2xl font-semibold text-(--color-ink)">
                Surgipedia is being built by doctors, for doctors.
              </h2>
              <p className="mx-auto mt-3 max-w-sm text-(--color-ink-soft)">
                Clinical articles, case reviews, protocols, and exam
                resources are being reviewed and added.
              </p>
              <Link
                href="/submit"
                className="mt-5 inline-block rounded-md bg-(--color-accent) px-5 py-2.5 font-mono text-xs tracking-wide text-white uppercase transition hover:brightness-90"
              >
                Be the first to contribute →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Submission CTA */}
      <section className="border-t border-(--color-rule)">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <p className="font-mono text-xs tracking-wide text-(--color-accent) uppercase">
            Contribute
          </p>
          <h2 className="mt-2 max-w-md font-serif text-2xl font-semibold text-(--color-ink)">
            Share your knowledge.
            <br />
            Help other doctors.
          </h2>
          <p className="mt-3 max-w-md text-(--color-ink-soft)">
            We welcome original articles, case reviews, protocols, and exam
            notes. All content is reviewed by doctors.
          </p>
          <Link
            href="/submit"
            className="mt-5 inline-block rounded-md border border-(--color-ink) px-5 py-2.5 font-mono text-xs tracking-wide text-(--color-ink) uppercase transition hover:border-(--color-accent) hover:text-(--color-accent)"
          >
            Submit an article →
          </Link>
        </div>
      </section>
    </div>
  );
}
