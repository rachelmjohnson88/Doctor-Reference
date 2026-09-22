import { getCategory } from "@/lib/content";
import { getPendingArticles } from "@/lib/store";
import { isAdminAuthed } from "@/lib/auth";
import PageHeader from "@/components/PageHeader";
import AdminLogin from "@/components/AdminLogin";
import AdminLogoutButton from "@/components/AdminLogoutButton";
import AdminQueueItem from "@/components/AdminQueueItem";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Review queue — Surgipedia",
};

export default async function AdminPage() {
  const authed = await isAdminAuthed();

  if (!authed) {
    return (
      <div>
        <PageHeader eyebrow="Admin" title="Review queue" />
        <div className="mx-auto max-w-5xl px-4 py-10">
          <AdminLogin />
        </div>
      </div>
    );
  }

  const pending = await getPendingArticles();

  return (
    <div>
      <PageHeader eyebrow="Admin" title="Review queue">
        <div className="mt-4">
          <AdminLogoutButton />
        </div>
      </PageHeader>

      <div className="mx-auto max-w-5xl px-4 py-10">
        {pending.length === 0 ? (
          <p className="text-slate-500">Nothing waiting for review.</p>
        ) : (
          <div className="space-y-4">
            {pending.map((entry) => (
              <AdminQueueItem
                key={entry.id}
                entry={entry}
                category={getCategory(entry.category)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
