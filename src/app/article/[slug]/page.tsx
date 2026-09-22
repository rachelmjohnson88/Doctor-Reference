import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategory } from "@/lib/content";
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
  const colors = category ? categoryColors[category.color] : undefined;

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          {category && (
            <Link
              href={`/category/${category.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-700"
            >
              <span aria-hidden="true">←</span> Back
            </Link>
          )}

          {category && (
            <div className="mt-4">
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${colors?.badge}`}
              >
                {category.name}
              </span>
            </div>
          )}

          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900">
            {article.title}
          </h1>
          <p className="mt-3 text-lg text-slate-600">{article.summary}</p>
          <p className="mt-2 text-xs text-slate-400">
            Contributed by {article.contributorName},{" "}
            {article.contributorCredentials} · Last updated {article.updated}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
          {article.sections.map((section) => (
            <section key={section.heading} className="p-6 sm:p-8">
              <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-slate-900">
                <span
                  className={`h-4 w-1 rounded-full ${colors?.bar ?? "bg-slate-300"}`}
                  aria-hidden="true"
                />
                {section.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {section.body.map((line, i) => (
                  <li key={i} className="flex gap-2.5 text-slate-700">
                    <span
                      className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors?.bar ?? "bg-slate-300"}`}
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
              className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
