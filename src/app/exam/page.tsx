import ContentTypeArchive from "@/components/ContentTypeArchive";

export const dynamic = "force-dynamic";
export const metadata = { title: "Exam — Surgipedia" };

export default function ExamPage() {
  return <ContentTypeArchive typeSlug="exam-note" />;
}
