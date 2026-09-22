import Link from "next/link";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <header className="border-b border-(--color-rule) bg-(--color-page)">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-(--color-ink)">
          Surgipedia
        </Link>
        <div className="flex items-center gap-5">
          <SearchBox />
          <Link
            href="/browse"
            className="hidden font-mono text-xs tracking-wide text-(--color-ink-soft) uppercase transition hover:text-(--color-accent) sm:inline"
          >
            Articles
          </Link>
          <Link
            href="/submit"
            className="shrink-0 font-mono text-xs tracking-wide whitespace-nowrap text-(--color-accent) uppercase transition hover:text-(--color-ink)"
          >
            Submit →
          </Link>
        </div>
      </div>
    </header>
  );
}
