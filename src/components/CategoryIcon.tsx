import type { Category } from "@/lib/content";

const paths: Record<string, React.ReactNode> = {
  perioperative: (
    <>
      <path d="M9 3h6v3H9z" />
      <path d="M9 6h6v13a3 3 0 0 1-6 0Z" />
      <path d="m9 12 6 0" />
    </>
  ),
  "critical-care": <path d="M3 12h4l2-7 4 14 2-7h6" />,
  emergency: (
    <>
      <path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7z" />
      <path d="M12 8v5" />
      <path d="M12 16h.01" />
    </>
  ),
  "general-surgery": (
    <>
      <path d="M20 4 8.5 15.5a2.5 2.5 0 1 0 0 3.5l.5-.5" />
      <path d="m17.5 6.5 3 3" />
      <circle cx="6" cy="18" r="1.5" />
    </>
  ),
};

export default function CategoryIcon({
  slug,
  className,
}: {
  slug: Category["slug"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[slug]}
    </svg>
  );
}
