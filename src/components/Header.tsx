import Link from "next/link";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <header className="sticky top-0 z-10">
      <div className="border-b border-(--color-rule) bg-(--color-page)/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-(--color-brand) text-(--color-gold-soft) ring-1 ring-(--color-gold)/60">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4.5 w-4.5"
                aria-hidden="true"
              >
                <path d="M6 4h9a3 3 0 0 1 3 3v13H9a3 3 0 0 1-3-3Z" />
                <path d="M6 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3" />
                <path d="M9 8h6M9 11h6" />
              </svg>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-xl font-semibold tracking-tight text-(--color-ink)">
                RefDoc
              </span>
              <span className="small-caps text-xs text-(--color-brand)">
                A Clinical Compendium
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-5">
            <SearchBox />
            <nav className="hidden text-sm font-medium text-(--color-ink-soft) sm:flex sm:gap-5">
              <Link
                href="/browse"
                className="small-caps font-bold tracking-wide transition hover:text-(--color-brand)"
              >
                Browse
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="h-px bg-(--color-gold)" />
      <div className="h-px bg-(--color-brand)" />
    </header>
  );
}
