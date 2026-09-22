import Link from "next/link";
import { getAllCategories, getArticlesByCategory } from "@/lib/content";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          A quick reference for clinical practice
        </h1>
        <p className="mt-3 text-slate-600">
          Scoring systems, classifications, and protocols, organized for fast
          lookup on the ward or in clinic.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
            count={getArticlesByCategory(category.slug).length}
          />
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/browse"
          className="text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
        >
          Browse all articles →
        </Link>
      </div>
    </div>
  );
}
