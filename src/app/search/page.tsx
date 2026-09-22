import { searchPublished } from "@/lib/store";
import ArticleRow from "@/components/ArticleRow";
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

      <div className="mx-auto max-w-3xl px-4 py-10">
        {query && (
          <p className="font-mono text-xs tracking-wide text-(--color-ink-soft) uppercase">
            {results.length} {results.length === 1 ? "result" : "results"} for
            &ldquo;{query}&rdquo;
          </p>
        )}

        <div className="mt-4">
          {results.map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}
        </div>

        {query && results.length === 0 && (
          <p className="mt-6 text-(--color-ink-soft)">
            No articles matched your search.
          </p>
        )}
      </div>
    </div>
  );
}
