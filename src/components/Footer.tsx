export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-slate-500">
        <p className="max-w-2xl rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900">
          <strong className="font-semibold">For reference only.</strong> Always
          verify against your institution&apos;s current protocols and primary
          literature before applying to patient care — this is not a substitute
          for clinical judgment.
        </p>
        <p className="mt-4 text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Surgipedia.
        </p>
      </div>
    </footer>
  );
}
