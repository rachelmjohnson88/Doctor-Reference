import Link from "next/link";
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
      >
        <p className="mt-4 text-sm text-slate-500">
          Don&apos;t have an access code?{" "}
          <Link
            href="/contribute"
            className="font-medium text-[#0f4c5c] underline underline-offset-4 hover:text-[#0b3a46]"
          >
            Request contributor access
          </Link>
        </p>
      </PageHeader>
      <div className="mx-auto max-w-2xl px-4 py-10">
        <SubmitForm categories={getAllCategories()} />
      </div>
    </div>
  );
}
