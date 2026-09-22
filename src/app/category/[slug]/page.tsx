import { notFound } from "next/navigation";
import {
  getAllCategories,
  getArticlesByCategory,
  getCategory,
} from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({
  params,
}: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(slug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
        {category.name}
      </h1>
      <p className="mt-2 text-slate-600">{category.description}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
