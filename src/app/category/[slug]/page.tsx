import { notFound } from "next/navigation";
import {
  getAllCategories,
  getArticlesByCategory,
  getCategory,
} from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import PageHeader from "@/components/PageHeader";

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
    <div>
      <PageHeader
        eyebrow="Specialty area"
        title={category.name}
        description={category.description}
      />

      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
