import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategory } from "@/lib/content";
import { getPublishedArticle } from "@/lib/store";

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

          {category && (
            <p className="mt-4 font-mono text-xs tracking-wide text-(--color-accent) uppercase">
              {category.name}
            </p>
          )}

          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-(--color-ink)">
            {article.title}
          </h1>
          <p className="mt-3 text-lg text-(--color-ink-soft)">{article.summary}</p>
          <p className="mt-2 font-mono text-xs tracking-wide text-(--color-ink-soft)/70 uppercase">
            Contributed by {article.contributorName},{" "}
            {article.contributorCredentials} · Last updated {article.updated}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="divide-y divide-(--color-rule)">
          {article.sections.map((section) => (
            <section key={section.heading} className="py-6 first:pt-0">
              <h2 className="font-serif text-lg font-semibold text-(--color-ink)">
                {section.heading}
              </h2>
              <ul className="mt-3 space-y-2">
                {section.body.map((line, i) => (
                  <li key={i} className="flex gap-2.5 text-(--color-ink)">
                    <span
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-(--color-accent)"
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs tracking-wide text-(--color-ink-soft) uppercase">
          {article.tags.join(" · ")}
        </p>
      </div>
    </div>
  );
}
