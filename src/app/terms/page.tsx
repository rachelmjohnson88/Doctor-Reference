import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Terms & Conditions — Surgipedia",
};

export default function TermsPage() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />
      <div className="mx-auto max-w-3xl px-4 py-10 space-y-8 text-slate-700">
        <p className="text-sm text-slate-400">Last updated: [DATE]</p>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Acceptance of these terms
          </h2>
          <p className="mt-2">
            By using Surgipedia (&ldquo;the site&rdquo;), you agree to these
            terms. If you don&apos;t agree, please don&apos;t use the site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Not medical advice
          </h2>
          <p className="mt-2">
            Content on this site is a quick reference summarizing scoring
            systems, classifications, and protocols. It is provided for
            informational purposes only, is not a substitute for
            professional clinical judgment, and should always be verified
            against your institution&apos;s current protocols and primary
            literature before being applied to patient care. We make no
            warranty, express or implied, as to the accuracy, completeness,
            or currency of any content on this site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Contributing content
          </h2>
          <p className="mt-2">
            If you submit an article, you confirm that:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              The content is your own work, or you have the right to submit
              it.
            </li>
            <li>
              It does not contain any patient-identifiable information —
              submissions must be limited to general clinical reference
              information, never real patient cases, records, or details
              that could identify a specific patient.
            </li>
            <li>
              You&apos;re granting Surgipedia a license to publish, edit,
              format, and display the content on the site under your name,
              and to remove or amend it at our discretion (for example, if
              it&apos;s found to be inaccurate or is reported as a concern).
            </li>
          </ul>
          <p className="mt-2">
            You retain ownership of your original contribution. We may
            correct, update, or remove published content at any time without
            notice.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Acceptable use
          </h2>
          <p className="mt-2">
            Don&apos;t use the site to submit false, misleading, defamatory,
            or unlawful content; to impersonate another person; or to
            attempt to disrupt or gain unauthorized access to the site or
            its systems.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Limitation of liability
          </h2>
          <p className="mt-2">
            To the fullest extent permitted by law, Surgipedia and its
            operators are not liable for any loss or damage arising from
            your use of, or reliance on, this site or its content, including
            any clinical decision made in reliance on information found
            here.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Changes to these terms
          </h2>
          <p className="mt-2">
            We may update these terms from time to time. Continued use of
            the site after a change means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Governing law
          </h2>
          <p className="mt-2">
            These terms are governed by the laws of [JURISDICTION].
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Contact
          </h2>
          <p className="mt-2">
            Questions about these terms? Contact us at{" "}
            <a
              href="mailto:[CONTACT EMAIL]"
              className="text-[#0f4c5c] underline underline-offset-4"
            >
              [CONTACT EMAIL]
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
