import { searchArticles } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import SearchBox from "@/components/SearchBox";

export default async function SearchPage({
  searchParams,
}: PageProps<"/search">) {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q : "";
  const results = searchArticles(query);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
        Search
      </h1>
      <div className="mt-4">
        <SearchBox initialQuery={query} />
      </div>

      {query && (
        <p className="mt-4 text-sm text-slate-600">
          {results.length} {results.length === 1 ? "result" : "results"} for
          &ldquo;{query}&rdquo;
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {results.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {query && results.length === 0 && (
        <p className="mt-6 text-slate-500">No articles matched your search.</p>
      )}
    </div>
  );
}
