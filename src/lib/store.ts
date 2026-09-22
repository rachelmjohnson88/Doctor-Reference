import { Redis } from "@upstash/redis";
import type { Article, Section } from "./content";

export type PendingArticle = Article & {
  id: string;
  submittedAt: string;
};

export type SubmissionInput = {
  title: string;
  category: string;
  summary: string;
  tags: string[];
  sections: Section[];
  contributorName: string;
  contributorCredentials: string;
};

export type ContributorStatus = "pending" | "approved" | "rejected";

export type ContributorRequest = {
  id: string;
  name: string;
  email: string;
  note: string;
  submittedAt: string;
  status: ContributorStatus;
  decidedAt?: string;
};

export type ContributorRequestInput = {
  name: string;
  email: string;
  note: string;
};

const PUBLISHED_KEY = "surgipedia:articles:published";
const PENDING_KEY = "surgipedia:articles:pending";
const CONTRIBUTORS_KEY = "surgipedia:contributors";

const redisUrl =
  process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const redisToken =
  process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

const redis = redisUrl && redisToken ? new Redis({ url: redisUrl, token: redisToken }) : null;

// In-memory fallback so `npm run dev` works end-to-end before a Redis
// database is wired up. Resets on server restart — production always
// uses Redis once UPSTASH_REDIS_REST_URL / _TOKEN are set in Vercel.
// Stashed on `globalThis` because Next's dev bundler can give each route
// its own module instance, which would otherwise give each route its own
// (empty) copy of this object.
type MemoryStore = {
  published: Article[];
  pending: PendingArticle[];
  contributors: ContributorRequest[];
};
const globalForStore = globalThis as unknown as {
  __surgipediaMemory?: Partial<MemoryStore>;
};
const stashed = (globalForStore.__surgipediaMemory ??= {});
stashed.published ??= [];
stashed.pending ??= [];
stashed.contributors ??= [];
const memory = stashed as MemoryStore;

async function readPublished(): Promise<Article[]> {
  if (!redis) return memory.published;
  return (await redis.get<Article[]>(PUBLISHED_KEY)) ?? [];
}

async function writePublished(articles: Article[]): Promise<void> {
  if (!redis) {
    memory.published = articles;
    return;
  }
  await redis.set(PUBLISHED_KEY, articles);
}

async function readPending(): Promise<PendingArticle[]> {
  if (!redis) return memory.pending;
  return (await redis.get<PendingArticle[]>(PENDING_KEY)) ?? [];
}

async function writePending(articles: PendingArticle[]): Promise<void> {
  if (!redis) {
    memory.pending = articles;
    return;
  }
  await redis.set(PENDING_KEY, articles);
}

async function readContributors(): Promise<ContributorRequest[]> {
  if (!redis) return memory.contributors;
  return (await redis.get<ContributorRequest[]>(CONTRIBUTORS_KEY)) ?? [];
}

async function writeContributors(requests: ContributorRequest[]): Promise<void> {
  if (!redis) {
    memory.contributors = requests;
    return;
  }
  await redis.set(CONTRIBUTORS_KEY, requests);
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function uniqueSlug(title: string, existing: Article[]): Promise<string> {
  const base = slugify(title) || "article";
  const taken = new Set(existing.map((a) => a.slug));
  if (!taken.has(base)) return base;
  let n = 2;
  while (taken.has(`${base}-${n}`)) n++;
  return `${base}-${n}`;
}

export async function getPublishedArticles(): Promise<Article[]> {
  return readPublished();
}

export async function getPublishedArticle(slug: string): Promise<Article | undefined> {
  const articles = await readPublished();
  return articles.find((a) => a.slug === slug);
}

export async function getPublishedByCategory(categorySlug: string): Promise<Article[]> {
  const articles = await readPublished();
  return articles.filter((a) => a.category === categorySlug);
}

export async function searchPublished(query: string): Promise<Article[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const articles = await readPublished();
  return articles.filter((a) => {
    const haystack = [a.title, a.summary, a.category, ...a.tags].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

export async function getPendingArticles(): Promise<PendingArticle[]> {
  return readPending();
}

export async function submitArticle(input: SubmissionInput): Promise<PendingArticle> {
  const pending = await readPending();
  const entry: PendingArticle = {
    id: crypto.randomUUID(),
    slug: "",
    category: input.category,
    title: input.title,
    summary: input.summary,
    tags: input.tags,
    sections: input.sections,
    contributorName: input.contributorName,
    contributorCredentials: input.contributorCredentials,
    updated: new Date().toISOString().slice(0, 10),
    submittedAt: new Date().toISOString(),
  };
  await writePending([...pending, entry]);
  return entry;
}

export async function approveArticle(id: string): Promise<boolean> {
  const [pending, published] = await Promise.all([readPending(), readPublished()]);
  const entry = pending.find((p) => p.id === id);
  if (!entry) return false;

  const slug = await uniqueSlug(entry.title, published);
  const { id: _id, submittedAt: _submittedAt, ...articleFields } = entry;
  void _id;
  void _submittedAt;
  const article: Article = {
    ...articleFields,
    slug,
    updated: new Date().toISOString().slice(0, 10),
  };

  await Promise.all([
    writePublished([...published, article]),
    writePending(pending.filter((p) => p.id !== id)),
  ]);
  return true;
}

export async function rejectArticle(id: string): Promise<boolean> {
  const pending = await readPending();
  const next = pending.filter((p) => p.id !== id);
  if (next.length === pending.length) return false;
  await writePending(next);
  return true;
}

export async function getContributorRequests(): Promise<ContributorRequest[]> {
  return readContributors();
}

export async function submitContributorRequest(
  input: ContributorRequestInput
): Promise<ContributorRequest> {
  const requests = await readContributors();
  const entry: ContributorRequest = {
    id: crypto.randomUUID(),
    name: input.name,
    email: input.email,
    note: input.note,
    submittedAt: new Date().toISOString(),
    status: "pending",
  };
  await writeContributors([...requests, entry]);
  return entry;
}

export async function decideContributorRequest(
  id: string,
  status: "approved" | "rejected"
): Promise<boolean> {
  const requests = await readContributors();
  const entry = requests.find((r) => r.id === id);
  if (!entry) return false;

  const next = requests.map((r) =>
    r.id === id ? { ...r, status, decidedAt: new Date().toISOString() } : r
  );
  await writeContributors(next);
  return true;
}
