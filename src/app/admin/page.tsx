import { getCategory, getContentType } from "@/lib/content";
import { getContributorRequests, getPendingArticles } from "@/lib/store";
import { isAdminAuthed } from "@/lib/auth";
import PageHeader from "@/components/PageHeader";
import AdminLogin from "@/components/AdminLogin";
import AdminLogoutButton from "@/components/AdminLogoutButton";
import AdminQueueItem from "@/components/AdminQueueItem";
import ContributorQueueItem from "@/components/ContributorQueueItem";

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

  const [pendingArticles, contributorRequests] = await Promise.all([
    getPendingArticles(),
    getContributorRequests(),
  ]);
  const pendingContributors = contributorRequests.filter((r) => r.status === "pending");
  const approvedContributors = contributorRequests.filter((r) => r.status === "approved");

  return (
    <div>
      <PageHeader eyebrow="Admin" title="Review queue">
        <div className="mt-4">
          <AdminLogoutButton />
        </div>
      </PageHeader>

      <div className="mx-auto max-w-5xl px-4 py-10 space-y-12">
        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Contributor requests
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Approving a request doesn&apos;t send anything automatically — copy
            their email and share the access code with them yourself.
          </p>

          <div className="mt-4">
            {pendingContributors.length === 0 ? (
              <p className="text-slate-500">No pending requests.</p>
            ) : (
              <div className="space-y-3">
                {pendingContributors.map((entry) => (
                  <ContributorQueueItem key={entry.id} entry={entry} />
                ))}
              </div>
            )}
          </div>

          {approvedContributors.length > 0 && (
            <details className="mt-6">
              <summary className="cursor-pointer text-sm font-medium text-slate-600">
                Approved contributors ({approvedContributors.length})
              </summary>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                {approvedContributors.map((entry) => (
                  <li key={entry.id}>
                    {entry.name} — {entry.email}
                  </li>
                ))}
              </ul>
            </details>
          )}
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-slate-900">
            Article submissions
          </h2>

          <div className="mt-4">
            {pendingArticles.length === 0 ? (
              <p className="text-slate-500">Nothing waiting for review.</p>
            ) : (
              <div className="space-y-4">
                {pendingArticles.map((entry) => (
                  <AdminQueueItem
                    key={entry.id}
                    entry={entry}
                    category={getCategory(entry.category)}
                    contentType={getContentType(entry.type)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
