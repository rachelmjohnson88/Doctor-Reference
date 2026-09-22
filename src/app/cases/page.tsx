import ContentTypeArchive from "@/components/ContentTypeArchive";

export const dynamic = "force-dynamic";
export const metadata = { title: "Cases — Surgipedia" };

export default function CasesPage() {
  return <ContentTypeArchive typeSlug="case" />;
}
