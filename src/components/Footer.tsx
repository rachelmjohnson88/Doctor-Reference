import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-(--color-rule) bg-(--color-page-alt)">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <p className="max-w-2xl border-l-2 border-(--color-accent) pl-4 text-sm text-(--color-ink-soft)">
          <strong className="font-semibold text-(--color-ink)">
            For reference only.
          </strong>{" "}
          Always verify against your institution&apos;s current protocols and
          primary literature before applying to patient care — this is not a
          substitute for clinical judgment.
        </p>

        <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs tracking-wide text-(--color-ink-soft) uppercase">
          <Link href="/privacy" className="hover:text-(--color-accent)">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-(--color-accent)">
            Terms &amp; Conditions
          </Link>
          <a href="mailto:[CONTACT EMAIL]" className="hover:text-(--color-accent)">
            Contact
          </a>
        </nav>

        <p className="mt-4 font-mono text-xs text-(--color-ink-soft)/70">
          &copy; {new Date().getFullYear()} Surgipedia
        </p>
      </div>
    </footer>
  );
}
