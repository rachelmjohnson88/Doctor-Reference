import { getContentType } from "@/lib/content";
import { getPublishedByType } from "@/lib/store";
import ArticleRow from "@/components/ArticleRow";
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
      <div className="mx-auto max-w-3xl px-4 py-10">
        {articles.length > 0 ? (
          <div>
            {articles.map((article) => (
              <ArticleRow key={article.slug} article={article} />
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
