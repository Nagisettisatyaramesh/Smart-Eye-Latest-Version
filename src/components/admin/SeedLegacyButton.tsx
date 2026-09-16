"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SeedLegacyButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/seed-legacy", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to seed articles.");
      setMessage(`Migrated ${data.migrated} article${data.migrated === 1 ? "" : "s"}.`);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to seed articles.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-8 rounded-2xl border border-teal-400/20 bg-teal-400/5 p-6">
      <p className="text-sm font-medium text-ice-100">No blogs yet.</p>
      <p className="mt-1 text-sm text-ice-400">
        Import the 8 existing SmartEye articles into this database, preserving their original URLs. Safe to run
        more than once — already-imported articles are skipped.
      </p>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="mt-4 rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-teal-300 disabled:opacity-60"
      >
        {loading ? "Importing…" : "Seed legacy articles"}
      </button>
      {message && <p className="mt-3 text-sm text-teal-300">{message}</p>}
      {error && <p className="mt-3 text-sm text-signal-rose">{error}</p>}
    </div>
  );
}
