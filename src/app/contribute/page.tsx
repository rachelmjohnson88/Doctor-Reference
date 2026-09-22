import PageHeader from "@/components/PageHeader";
import ContributorForm from "@/components/ContributorForm";

export const metadata = {
  title: "Request contributor access — Surgipedia",
};

export default function ContributePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contribute"
        title="Request access"
        description="Tell us who you are and we'll be in touch with an access code once approved."
      />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <ContributorForm />
      </div>
    </div>
  );
}
