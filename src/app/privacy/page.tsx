import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Privacy Policy — Surgipedia",
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <div className="mx-auto max-w-3xl px-4 py-10 space-y-8 text-slate-700">
        <p className="text-sm text-slate-400">Last updated: [DATE]</p>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            What this policy covers
          </h2>
          <p className="mt-2">
            This policy explains what information Surgipedia (&ldquo;the
            site&rdquo;, &ldquo;we&rdquo;) collects, why, and how it&apos;s
            used. Surgipedia is a reference site for clinical scoring
            systems, classifications, and protocols. Most of the site is
            publicly readable and doesn&apos;t require an account.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Information we collect
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Contributor access requests</strong> (at{" "}
              <code className="text-sm">/contribute</code>): the name, email
              address, and any note you provide are stored so we can review
              your request and, if approved, contact you.
            </li>
            <li>
              <strong>Article submissions</strong> (at{" "}
              <code className="text-sm">/submit</code>): the name,
              qualifications, and article content you submit are stored and,
              once approved, published on the site publicly under your name.
            </li>
            <li>
              <strong>Standard hosting logs.</strong> Our hosting provider
              (Vercel) automatically logs basic technical information for any
              site visit (e.g. IP address, browser type, request timing) for
              security and reliability. We don&apos;t separately collect
              analytics or tracking data beyond this.
            </li>
          </ul>
          <p className="mt-2">
            We don&apos;t use cookies for advertising or tracking. The only
            cookie the site sets is a technical login session for the admin
            review page.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            How information is used
          </h2>
          <p className="mt-2">
            Contributor and submission details are used only to review
            requests and submissions, to communicate with contributors about
            their request or submission, and — for approved articles — to
            attribute published content to its author. We don&apos;t sell or
            share this information with third parties for marketing
            purposes.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Where data is stored
          </h2>
          <p className="mt-2">
            Submitted and published content is stored using Upstash (a
            third-party Redis database provider) via Vercel. The site itself
            is hosted on Vercel. Both providers may process data in
            accordance with their own privacy and security practices.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Your choices
          </h2>
          <p className="mt-2">
            If you&apos;d like your contributor details removed, or a
            published article taken down or corrected, contact us at{" "}
            <a
              href="mailto:[CONTACT EMAIL]"
              className="text-[#0f4c5c] underline underline-offset-4"
            >
              [CONTACT EMAIL]
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Changes to this policy
          </h2>
          <p className="mt-2">
            We may update this policy from time to time as the site changes.
            The &ldquo;Last updated&rdquo; date above will reflect the most
            recent revision.
          </p>
        </section>
      </div>
    </div>
  );
}
