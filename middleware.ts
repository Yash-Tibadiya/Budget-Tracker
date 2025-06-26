import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/home"],
  afterAuth(auth, req) {
    const url = new URL(req.url);

    // If the user is not logged in and tries to access the root path, redirect to /home
    if (!auth.userId && url.pathname === "/") {
      url.pathname = "/home";
      return NextResponse.redirect(url);
    }
  },
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
