import ContentTypeArchive from "@/components/ContentTypeArchive";

export const dynamic = "force-dynamic";
export const metadata = { title: "Scores — Surgipedia" };

export default function ScoresPage() {
  return <ContentTypeArchive typeSlug="score" />;
}
