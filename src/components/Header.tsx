import Link from "next/link";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0f4c5c] text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-4.5 w-4.5"
              aria-hidden="true"
            >
              <path d="M3 12h4l2-7 4 14 2-7h6" />
            </svg>
          </span>
          <span className="flex items-baseline gap-2">
            <span className="font-serif text-lg font-semibold tracking-tight text-slate-900">
              Surgipedia
            </span>
            <span className="hidden font-mono text-xs tracking-wide text-slate-500 uppercase sm:inline">
              journal &amp; exam notes
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <SearchBox />
          <Link
            href="/browse"
            className="hidden font-mono text-xs tracking-wide text-slate-600 uppercase transition hover:text-[#0f4c5c] sm:inline"
          >
            Browse
          </Link>
          <Link
            href="/submit"
            className="rounded-md bg-[#0f4c5c] px-4 py-2 font-mono text-xs tracking-wide text-white uppercase transition hover:bg-[#0b3a46]"
          >
            Submit
          </Link>
        </div>
      </div>
    </header>
  );
}
