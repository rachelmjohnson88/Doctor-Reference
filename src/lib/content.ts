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

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "perioperative",
    name: "Perioperative Care",
    description: "Pre-operative assessment, optimization, and post-operative recovery.",
  },
  {
    slug: "critical-care",
    name: "Critical Care",
    description: "Scoring systems and criteria used in the ICU and on the wards.",
  },
  {
    slug: "emergency",
    name: "Emergency Medicine",
    description: "Acute assessment and emergency management.",
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    description: "Classification systems and staging used day to day in surgery.",
  },
];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
