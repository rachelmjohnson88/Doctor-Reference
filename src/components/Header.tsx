import Link from "next/link";

const navLinks = [
  { href: "/articles", label: "Articles" },
  { href: "/cases", label: "Cases" },
  { href: "/protocols", label: "Protocols" },
  { href: "/scores", label: "Scores" },
  { href: "/exam", label: "Exam" },
  { href: "/contribute", label: "For Doctors" },
];

export default function Header() {
  return (
    <header className="border-b border-(--color-rule) bg-(--color-page)">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-(--color-ink)"
        >
          Surgipedia
        </Link>

        <nav className="hidden items-center gap-5 font-mono text-xs tracking-wide text-(--color-ink-soft) uppercase lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-(--color-accent)"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <Link
            href="/search"
            aria-label="Search"
            className="text-(--color-ink-soft) transition hover:text-(--color-accent)"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </Link>
          <Link
            href="/submit"
            className="bg-(--color-ink) px-4 py-2 font-mono text-xs tracking-wide text-white uppercase transition hover:bg-(--color-accent)"
          >
            Submit
          </Link>
        </div>
      </div>
    </header>
  );
}
