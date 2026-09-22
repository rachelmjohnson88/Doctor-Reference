import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles, getArticle, getCategory } from "@/lib/content";
import { categoryColors } from "@/lib/theme";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/article/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  return { title: article ? `${article.title} — RefDoc` : "RefDoc" };
}

export default async function ArticlePage({
  params,
}: PageProps<"/article/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const category = getCategory(article.category);
  const colors = category ? categoryColors[category.color] : undefined;

  return (
    <div>
      <section className="border-b border-(--color-rule) bg-(--color-page-deep)">
        <div className="mx-auto max-w-3xl px-4 py-10">
          {category && (
            <Link
              href={`/category/${category.slug}`}
              className="small-caps inline-flex items-center gap-1 text-xs font-bold tracking-wide text-(--color-ink-soft) hover:text-(--color-brand)"
            >
              <span aria-hidden="true">←</span> Back to {category.name}
            </Link>
          )}

          {category && (
            <p
              className={`small-caps mt-5 text-sm font-bold tracking-wide ${colors?.text}`}
            >
              {category.name}
            </p>
          )}

          <h1 className="mt-1 font-serif text-4xl font-semibold tracking-tight text-(--color-ink)">
            {article.title}
          </h1>
          <div
            className="my-5 h-px w-16 bg-(--color-gold)"
            aria-hidden="true"
          />
          <p className="max-w-xl text-lg text-(--color-ink-soft)">
            {article.summary}
          </p>
          <p className="small-caps mt-4 text-xs text-(--color-ink-soft)/70">
            Last Updated {article.updated}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="divide-y divide-(--color-rule) border-y border-(--color-rule)">
          {article.sections.map((section) => (
            <section key={section.heading} className="py-7">
              <h2 className="small-caps text-base font-bold tracking-wide text-(--color-ink)">
                {section.heading}
              </h2>
              <div
                className="mt-2 mb-4 h-px w-10 bg-(--color-gold)"
                aria-hidden="true"
              />
              <ul className="space-y-3">
                {section.body.map((line, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[17px] leading-relaxed text-(--color-ink)"
                  >
                    <span
                      className={`mt-2.5 h-[5px] w-[5px] shrink-0 rounded-full ${colors?.spine ?? "bg-(--color-rule)"}`}
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="small-caps mt-8 text-xs text-(--color-ink-soft)/70">
          {article.tags.join(" · ")}
        </p>
      </div>
    </div>
  );
}
