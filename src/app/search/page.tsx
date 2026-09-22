import { searchPublished } from "@/lib/store";
import ArticleCard from "@/components/ArticleCard";
import SearchBox from "@/components/SearchBox";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: PageProps<"/search">) {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q : "";
  const results = await searchPublished(query);

  return (
    <div>
      <PageHeader eyebrow="Library" title="Search">
        <div className="mt-4 max-w-sm">
          <SearchBox initialQuery={query} />
        </div>
      </PageHeader>

      <div className="mx-auto max-w-5xl px-4 py-10">
        {query && (
          <p className="text-sm text-slate-600">
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
    </div>
  );
}
