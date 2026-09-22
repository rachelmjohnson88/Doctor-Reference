import { notFound } from "next/navigation";
import { getCategory } from "@/lib/content";
import { getPublishedByCategory } from "@/lib/store";
import ArticleCard from "@/components/ArticleCard";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const articles = await getPublishedByCategory(slug);

  return (
    <div>
      <PageHeader
        eyebrow="Specialty area"
        title={category.name}
        description={category.description}
      />

      <div className="mx-auto max-w-5xl px-4 py-10">
        {articles.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-(--color-ink-soft)">
            No articles have been published in this area yet.
          </p>
        )}
      </div>
    </div>
  );
}
