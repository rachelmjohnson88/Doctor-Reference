import { getPublishedArticles } from "@/lib/store";
import ArticleRow from "@/components/ArticleRow";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Articles — Surgipedia",
};

export default async function BrowsePage() {
  const articles = await getPublishedArticles();

  return (
    <div>
      <PageHeader
        eyebrow="Library"
        title="All articles"
        description={`${articles.length} published ${articles.length === 1 ? "article" : "articles"}`}
      />

      <div className="mx-auto max-w-3xl px-4 py-10">
        {articles.length > 0 ? (
          <div>
            {articles.map((article) => (
              <ArticleRow key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-(--color-ink-soft)">
            No articles have been published yet.
          </p>
        )}
      </div>
    </div>
  );
}
