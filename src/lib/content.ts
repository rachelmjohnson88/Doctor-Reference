export type Section = {
  heading: string;
  body: string[];
};

export type ContentType = {
  slug: string;
  label: string;
  plural: string;
  description: string;
};

export const contentTypes: ContentType[] = [
  {
    slug: "article",
    label: "Article",
    plural: "Articles",
    description: "General clinical articles covering a topic in depth.",
  },
  {
    slug: "case",
    label: "Case Review",
    plural: "Cases",
    description: "Real-world case reviews and the reasoning behind them.",
  },
  {
    slug: "protocol",
    label: "Protocol",
    plural: "Protocols",
    description: "Step-by-step clinical and perioperative protocols.",
  },
  {
    slug: "score",
    label: "Score",
    plural: "Scores",
    description: "Scoring systems, calculators, and diagnostic criteria.",
  },
  {
    slug: "exam-note",
    label: "Exam Note",
    plural: "Exam",
    description: "Concise notes written for exam revision.",
  },
  {
    slug: "guide",
    label: "Guide",
    plural: "Guides",
    description: "Practical how-to guides for common clinical tasks.",
  },
];

export function getAllContentTypes(): ContentType[] {
  return contentTypes;
}

export function getContentType(slug: string): ContentType | undefined {
  return contentTypes.find((t) => t.slug === slug);
}

export type Article = {
  slug: string;
  category: string;
  type: string;
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
    description: "Pre-operative assessment, optimization, and post-operative recovery.",
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
    description: "Acute assessment and emergency management.",
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
