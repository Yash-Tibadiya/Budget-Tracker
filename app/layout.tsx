import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster } from "@/components/ui/sonner";
import PWAUpdater from "@/components/providers/PWAUpdater";
import OfflineRouter from "@/components/providers/OfflineRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "A simple budget tracker app",
  applicationName: "Budget Tracker",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className="dark"
        style={{ colorScheme: "dark" }}
        suppressHydrationWarning={true}
      >
        <body className={inter.className} suppressHydrationWarning={true}>
          <Toaster richColors position="bottom-right" />
          <PWAUpdater />
          <OfflineRouter />
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
