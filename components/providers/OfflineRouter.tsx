"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Client-side guard:
 * - When offline: redirect to /offline and remember the last path.
 * - When back online and currently at /offline: hard-redirect back to last path.
 */
export default function OfflineRouter() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getLast = () => {
      try {
        return sessionStorage.getItem("__last_path_before_offline__") || "/";
      } catch {
        return "/";
      }
    };

    const remember = () => {
      try {
        sessionStorage.setItem(
          "__last_path_before_offline__",
          window.location.pathname + window.location.search + window.location.hash
        );
      } catch {
        // ignore
      }
    };

    const goOffline = () => {
      if (pathname !== "/offline") {
        remember();
        router.replace("/offline");
      }
    };

    const goOnlineFromOffline = () => {
      // If we are on /offline and back online, perform a hard navigation
      if (pathname === "/offline" && navigator.onLine) {
        const last = getLast();
        const target = last === "/offline" ? "/" : last;
        window.location.replace(target);
      }
    };

    // Initial state checks
    if (!navigator.onLine) {
      goOffline();
    } else {
      // If we land on /offline while online, bounce back immediately
      goOnlineFromOffline();
    }

    // Events
    const handleOffline = () => goOffline();
    const handleOnline = () => goOnlineFromOffline();

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [router, pathname]);

  return null;
}