import { getPublishedArticles } from "@/lib/store";
import ArticleCard from "@/components/ArticleCard";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Browse — Surgipedia",
};

export default async function BrowsePage() {
  const articles = await getPublishedArticles();

  return (
    <div>
      <PageHeader
        eyebrow="Library"
        title="All articles"
        description={`${articles.length} published articles`}
      />

      <div className="mx-auto max-w-5xl px-4 py-10">
        {articles.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-slate-500">No articles have been published yet.</p>
        )}
      </div>
    </div>
  );
}
