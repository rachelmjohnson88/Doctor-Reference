import ContentTypeArchive from "@/components/ContentTypeArchive";

export const dynamic = "force-dynamic";
export const metadata = { title: "Protocols — Surgipedia" };

export default function ProtocolsPage() {
  return <ContentTypeArchive typeSlug="protocol" />;
}
