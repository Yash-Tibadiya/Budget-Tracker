"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { WifiOff, RefreshCw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // If the device is offline, route to our dedicated offline page
    if (typeof window !== "undefined" && !navigator.onLine) {
      router.replace("/offline");
      return;
    }
  }, [router]);

  return (
    <main className="min-h-dvh bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200 flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-slate-800/80 border border-white/10 grid place-content-center">
                <WifiOff className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Something went wrong
                </h1>
                <p className="text-slate-400 mt-1">
                  {typeof window !== "undefined" && !navigator.onLine
                    ? "You appear to be offline. Redirecting to offline page…"
                    : "Please try again."}
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && !navigator.onLine) {
                    router.replace("/offline");
                  } else {
                    reset();
                  }
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-cyan-300 hover:bg-cyan-500/15 hover:border-cyan-400/50 transition"
              >
                <RefreshCw className="h-4 w-4 transition group-active:rotate-180" />
                Retry
              </button>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              If the issue persists, check your connection and try again.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}