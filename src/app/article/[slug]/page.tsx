import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles, getArticle, getCategory } from "@/lib/content";

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

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {category && (
        <Link
          href={`/category/${category.slug}`}
          className="text-sm font-medium text-slate-500 hover:text-slate-700"
        >
          ← {category.name}
        </Link>
      )}

      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
        {article.title}
      </h1>
      <p className="mt-2 text-slate-600">{article.summary}</p>
      <p className="mt-1 text-xs text-slate-400">Last updated {article.updated}</p>

      <div className="mt-8 space-y-8">
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-slate-900">
              {section.heading}
            </h2>
            <ul className="mt-3 space-y-2">
              {section.body.map((line, i) => (
                <li key={i} className="text-slate-700">
                  {line}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-1.5">
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
  );
}
