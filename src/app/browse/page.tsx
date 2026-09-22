import { getAllArticles } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Browse — RefDoc",
};

export default function BrowsePage() {
  const articles = getAllArticles();

  return (
    <div>
      <PageHeader
        eyebrow="Library"
        title="All articles"
        description={`${articles.length} reference articles`}
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
