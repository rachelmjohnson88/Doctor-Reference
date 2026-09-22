import { createHash } from "crypto";
import { cookies } from "next/headers";

const ADMIN_COOKIE = "surgipedia_admin";

function hash(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

export function hashAdminPassphrase(passphrase: string): string {
  return hash(passphrase);
}

export const adminCookieName = ADMIN_COOKIE;

export async function isAdminAuthed(): Promise<boolean> {
  const adminPassphrase = process.env.ADMIN_PASSPHRASE;
  if (!adminPassphrase) return false;
  const store = await cookies();
  const cookie = store.get(ADMIN_COOKIE)?.value;
  return cookie === hashAdminPassphrase(adminPassphrase);
}
