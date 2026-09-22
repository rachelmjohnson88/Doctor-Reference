import { getAllArticles } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Browse — RefDoc",
};

export default function BrowsePage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
        All articles
      </h1>
      <p className="mt-2 text-slate-600">{articles.length} articles</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
