import { getContentType } from "@/lib/content";
import { getPublishedByType } from "@/lib/store";
import ArticleCard from "@/components/ArticleCard";
import PageHeader from "@/components/PageHeader";
import { notFound } from "next/navigation";

export default async function ContentTypeArchive({ typeSlug }: { typeSlug: string }) {
  const contentType = getContentType(typeSlug);
  if (!contentType) notFound();

  const articles = await getPublishedByType(typeSlug);

  return (
    <div>
      <PageHeader
        eyebrow="Library"
        title={contentType.plural}
        description={contentType.description}
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
            No {contentType.plural.toLowerCase()} have been published yet.
          </p>
        )}
      </div>
    </div>
  );
}
