import { getAllCategories } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import SubmitForm from "@/components/SubmitForm";

export const metadata = {
  title: "Submit an article — Surgipedia",
};

export default function SubmitPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contribute"
        title="Submit an article"
        description="Submissions are reviewed before they appear on the site."
      />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <SubmitForm categories={getAllCategories()} />
      </div>
    </div>
  );
}
