import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategory, getContentType } from "@/lib/content";
import { getPublishedArticle } from "@/lib/store";
import { categoryColors } from "@/lib/theme";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PageProps<"/article/[slug]">) {
  const { slug } = await params;
  const article = await getPublishedArticle(slug);
  return { title: article ? `${article.title} — Surgipedia` : "Surgipedia" };
}

export default async function ArticlePage({
  params,
}: PageProps<"/article/[slug]">) {
  const { slug } = await params;
  const article = await getPublishedArticle(slug);

  if (!article) {
    notFound();
  }

  const category = getCategory(article.category);
  const contentType = getContentType(article.type);
  const colors = category ? categoryColors[category.color] : undefined;
  const words = article.sections
    .flatMap((s) => [s.heading, ...s.body])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  const readTime = Math.max(1, Math.round(words / 200));

  return (
    <div>
      <section className="border-b border-(--color-rule)">
        <div className="mx-auto max-w-3xl px-4 py-10">
          {category && (
            <Link
              href={`/category/${category.slug}`}
              className="inline-flex items-center gap-1 font-mono text-xs tracking-wide text-(--color-ink-soft) uppercase hover:text-(--color-accent)"
            >
              <span aria-hidden="true">←</span> Back
            </Link>
          )}

          <div className="mt-4">
            <span
              className={`inline-flex rounded-full px-2.5 py-0.5 font-mono text-xs tracking-wide uppercase ${colors?.badge ?? "bg-(--color-page-alt) text-(--color-ink-soft)"}`}
            >
              {contentType?.label ?? "Article"}
              {category && ` · ${category.name}`}
            </span>
          </div>

          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-(--color-ink)">
            {article.title}
          </h1>
          <p className="mt-3 text-lg text-(--color-ink-soft)">{article.summary}</p>
          <p className="mt-2 font-mono text-xs tracking-wide text-(--color-ink-soft)/70 uppercase">
            {article.contributorName}, {article.contributorCredentials} ·{" "}
            {readTime} min read · Last updated {article.updated}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="divide-y divide-(--color-rule) rounded-xl border border-(--color-rule) bg-white shadow-sm">
          {article.sections.map((section) => (
            <section key={section.heading} className="p-6 sm:p-8">
              <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-(--color-ink)">
                <span
                  className={`h-4 w-1 rounded-full ${colors?.bar ?? "bg-(--color-rule)"}`}
                  aria-hidden="true"
                />
                {section.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {section.body.map((line, i) => (
                  <li key={i} className="flex gap-2.5 text-(--color-ink)">
                    <span
                      className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors?.bar ?? "bg-(--color-rule)"}`}
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-(--color-page-alt) px-2 py-0.5 font-mono text-xs text-(--color-ink-soft)"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
