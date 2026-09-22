import ContentTypeArchive from "@/components/ContentTypeArchive";

export const dynamic = "force-dynamic";
export const metadata = { title: "Articles — Surgipedia" };

export default function ArticlesPage() {
  return <ContentTypeArchive typeSlug="article" />;
}
