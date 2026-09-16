"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed.");
      router.push(searchParams.get("from") || "/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.02] p-8">
        <p className="eyebrow text-teal-400">SmartEye Admin</p>
        <h1 className="mt-3 font-display text-xl font-semibold text-ice-100">Sign in</h1>
        <p className="mt-2 text-sm text-ice-400">Enter the admin password to manage blog content.</p>

        <div className="mt-6">
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-ice-200">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ice-100 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50"
          />
        </div>

        {error && (
          <p className="mt-4 rounded-xl border border-signal-rose/30 bg-signal-rose/10 px-4 py-3 text-sm text-signal-rose">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
