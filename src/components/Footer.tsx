import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

const exploreLinks = [
  { href: "/articles", label: "Articles" },
  { href: "/cases", label: "Cases" },
  { href: "/protocols", label: "Protocols" },
  { href: "/scores", label: "Scores" },
  { href: "/exam", label: "Exam" },
];

const aboutLinks = [
  { href: "/contribute", label: "For Doctors" },
  { href: "mailto:[CONTACT EMAIL]", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-(--color-ink) text-white">
      <div className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
          <div>
            <p className="font-serif text-lg font-semibold">Surgipedia</p>
            <p className="mt-2 max-w-[22ch] text-sm text-white/60">
              Clinical knowledge for a healthier tomorrow.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-wide text-white/40 uppercase">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-(--color-accent)">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-wide text-white/40 uppercase">
              About
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-(--color-accent)">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-wide text-white/40 uppercase">
              Stay updated
            </p>
            <p className="mt-3 text-sm text-white/60">
              Get notified when new content is published.
            </p>
            <div className="mt-3">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <p className="mt-12 max-w-2xl border-l-2 border-(--color-accent) pl-4 text-sm text-white/60">
          <strong className="font-semibold text-white">For reference only.</strong>{" "}
          Always verify against your institution&apos;s current protocols and
          primary literature before applying to patient care — this is not a
          substitute for clinical judgment.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 font-mono text-xs tracking-wide text-white/40 uppercase">
          <p>&copy; {new Date().getFullYear()} Surgipedia. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-(--color-accent)">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-(--color-accent)">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
