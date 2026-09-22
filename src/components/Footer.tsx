export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="h-px bg-(--color-brand)" />
      <div className="h-px bg-(--color-gold)" />
      <div className="bg-(--color-page-deep)">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <p className="max-w-2xl text-[15px] leading-relaxed text-(--color-ink-soft) italic">
            For reference only. Always verify against your institution&apos;s
            current protocols and primary literature before applying to
            patient care — this is not a substitute for clinical judgment.
          </p>
          <p className="small-caps mt-4 text-xs text-(--color-ink-soft)/70">
            &copy; {new Date().getFullYear()} RefDoc
          </p>
        </div>
      </div>
    </footer>
  );
}
