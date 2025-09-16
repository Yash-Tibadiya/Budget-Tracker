import createNextPWA from "next-pwa";
import runtimeCachingDefault from "next-pwa/cache.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // You can keep your existing config here
};

// Extend default runtimeCaching with a network-only probe for connectivity checks
const runtimeCaching = [
  ...runtimeCachingDefault,
  {
    urlPattern: /^\/api\/ping$/,
    handler: "NetworkOnly",
    method: "HEAD",
    options: {
      // Avoid any caching for the probe
      cacheName: "probe-network-only",
    },
  },
];

// Configure next-pwa (uses Workbox under the hood)
const withPWA = createNextPWA({
  dest: "public",
  // Enable PWA in dev when PWA_ENABLED=true (useful for testing)
  disable: process.env.NODE_ENV === "development" && process.env.PWA_ENABLED !== "true",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  // Precache critical shell pages and assets to guarantee offline route availability
  additionalManifestEntries: [
    { url: "/offline", revision: null },
    { url: "/manifest.webmanifest", revision: null },
    { url: "/icons/logo-192.png", revision: null },
    { url: "/icons/logo-256.png", revision: null },
    { url: "/icons/logo-384.png", revision: null },
    { url: "/icons/logo-512.png", revision: null },
    { url: "/icons/logo-192-maskable.png", revision: null },
    { url: "/icons/logo-256-maskable.png", revision: null },
    { url: "/icons/logo-384-maskable.png", revision: null },
    { url: "/icons/logo-512-maskable.png", revision: null }
  ],
  // Show a modern offline page when document request fails
  fallbacks: {
    document: "/offline",
  },
  // additional options:
  cacheOnFrontEndNav: true,
  reloadOnOnline: false,
});

export default withPWA(nextConfig);
