export type Section = {
  heading: string;
  body: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  updated: string;
  tags: string[];
  sections: Section[];
  contributorName: string;
  contributorCredentials: string;
};

export type CategoryColor = "blue" | "rose" | "amber" | "teal";

export type Category = {
  slug: string;
  name: string;
  description: string;
  color: CategoryColor;
};

export const categories: Category[] = [
  {
    slug: "perioperative",
    name: "Perioperative Care",
    description: "Pre-op assessment, optimization, and post-op recovery.",
    color: "blue",
  },
  {
    slug: "critical-care",
    name: "Critical Care",
    description: "Scoring systems and criteria used in the ICU and on the wards.",
    color: "rose",
  },
  {
    slug: "emergency",
    name: "Emergency Medicine",
    description: "Rapid-assessment tools for triage and acute presentations.",
    color: "amber",
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    description: "Classification systems and staging used day to day in surgery.",
    color: "teal",
  },
];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
