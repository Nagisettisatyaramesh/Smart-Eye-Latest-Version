import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/session";

export { SESSION_COOKIE, createSessionToken } from "@/lib/session";

export async function verifyAdminPassword(password: string): Promise<boolean> {
  const hash = process.env.ADMIN_PASSWORD_HASH;
  const plain = process.env.ADMIN_PASSWORD;

  if (hash) {
    return bcrypt.compare(password, hash);
  }
  if (plain) {
    // Plain-text comparison is fine here — this never leaves the server and
    // is only as strong as the admin password itself. For production, set
    // ADMIN_PASSWORD_HASH (a bcrypt hash) instead of ADMIN_PASSWORD.
    return password === plain;
  }
  // Neither configured — fail closed rather than allowing an empty password.
  return false;
}

export async function getAdminSession(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  return verifySessionToken(token);
}
