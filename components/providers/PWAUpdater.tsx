"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";

// Workbox types are optional at runtime; we dynamically import to keep SSR safe
export default function PWAUpdater() {
  const wbRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    // next-pwa generates /sw.js at the root when enabled (production builds)
    // In development, next-pwa is disabled by our config, so this will no-op.
    (async () => {
      try {
        const { Workbox } = await import("workbox-window");
        const wb = new Workbox("/sw.js");
        wbRef.current = wb;

        // When a new SW is installed and waiting to activate
        wb.addEventListener("waiting", () => {
          const t = toast.info("An update is available", {
            description: "Reload to apply the latest version.",
            action: {
              label: "Update",
              onClick: async () => {
                try {
                  // Tell the waiting SW to skip waiting
                  wb.messageSkipWaiting();
                } catch (e) {
                  // ignore
                }
              },
            },
            duration: 10000,
          });
          // If user ignores toast and goes online later, still try to update
          window.addEventListener("online", () => {
            toast.dismiss(t);
            wb.messageSkipWaiting();
          }, { once: true });
        });

        // When the controller changes, the new SW took control. Reload to use new assets.
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          // Avoid infinite reloads: only trigger once
          if (!sessionStorage.getItem("__pwa_reloaded__")) {
            sessionStorage.setItem("__pwa_reloaded__", "1");
            window.location.reload();
          }
        });

        // Register
        wb.register();
      } catch (err) {
        // workbox-window might not be available or registration failed; ignore in dev
        // console.warn("PWA registration skipped:", err);
      }
    })();
  }, []);

  return null;
}