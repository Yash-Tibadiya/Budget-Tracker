"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { WifiOff, RefreshCw } from "lucide-react";

/**
 * Offline page:
 * - Automatically returns user to the last page when connectivity is restored.
 * - Retry button performs a real connectivity probe (not just navigator.onLine).
 * - No "Back to Home" button per request.
 */
export default function OfflinePage() {
  const router = useRouter();
  const checkingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getLastPath = () => {
    try {
      const val = sessionStorage.getItem("__last_path_before_offline__");
      return val || "/";
    } catch {
      return "/";
    }
  };

  const goBackToLast = () => {
    const last = getLastPath();
    // If coming from the same offline route (edge case), force reload to let SW fetch online.
    if (last === "/offline") {
      window.location.replace("/");
    } else {
      router.replace(last);
    }
  };

  // Robust connectivity probe that bypasses caches and SW where possible.
  const probeOnline = async (): Promise<boolean> => {
    if (typeof window === "undefined") return false;

    // Use a dedicated API probe that we set to NetworkOnly in the SW to avoid cached responses.
    try {
      const controller = new AbortController();
      const to = setTimeout(() => controller.abort(), 4000);
      const res = await fetch(`/api/ping?ts=${Date.now()}`, {
        method: "HEAD",
        cache: "no-store",
        credentials: "omit",
        signal: controller.signal,
      });
      clearTimeout(to);
      return res.ok;
    } catch {
      return false;
    }
  };

  const maybeReturnOnline = async () => {
    if (checkingRef.current) return;
    checkingRef.current = true;
    try {
      const online = await probeOnline();
      if (online) {
        goBackToLast();
      }
    } finally {
      checkingRef.current = false;
    }
  };

  const retry = async () => {
    await maybeReturnOnline();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // If we land here and are already online (fast reconnection), leave immediately.
    maybeReturnOnline();

    // Auto return as soon as browser reports online
    const onOnline = () => {
      // do a probe to avoid false positives
      maybeReturnOnline();
    };
    window.addEventListener("online", onOnline);

    // Periodic probe in case the 'online' event was missed
    timerRef.current = setInterval(maybeReturnOnline, 5000);

    return () => {
      window.removeEventListener("online", onOnline);
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  You're offline
                </h1>
                <p className="text-slate-400 mt-1">
                  No internet connection detected. This page will close automatically when you're back online.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h2 className="text-sm font-medium text-slate-300">
                What still works
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-400 list-disc list-inside">
                <li>Previously visited pages and cached assets</li>
                <li>App shell and navigation</li>
                <li>Local interactions until connection restores</li>
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <button
                onClick={retry}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-cyan-300 hover:bg-cyan-500/15 hover:border-cyan-400/50 transition"
              >
                <RefreshCw className="h-4 w-4 transition group-active:rotate-180" />
                Retry connection
              </button>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Tip: Keep this tab open. We will automatically return you to your last page when a stable connection is detected.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}