"use client";

import { Dock, DockIcon } from "@/components/dock";
import React from "react";

export type IconProps = React.HTMLAttributes<SVGElement>;

import Link from "next/link";
import {
  SvgDiscord,
  SvgGitHub,
  SvgInstagram,
  SvgLinkedin,
  SvgResPiggyBank,
  SvgX,
} from "@/components/Icons";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("./Animation/Aurora"), { ssr: false });

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm">

      {/* Aurora background effect */}
      {isDark && (
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#3b8Ff6", "#000000", "#e53935"]}
          // colorStops={["#4338ca", "#3b82f6", "#2dd4bf"]}
          blend={0.2}
          amplitude={1.6}
          speed={0.6}
        />
      </div>
      )}
      
      <div className="mx-auto max-w-7xl flex flex-col gap-4 px-4 py-10 md:px-6 lg:py-16 lg:pb-10 ">
        <div className="grid gap-6 xl:gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 font-bold">
              <Link
                href="/"
                className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity"
              >
                <SvgResPiggyBank />
                <p className="bg-gradient-to-r from-amber-600/90 dark:from-amber-400 to-orange-600/90 dark:to-orange-500 bg-clip-text text-3xl sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl font-bold leading-tight tracking-tighter text-transparent">
                  BudgetTracker
                </p>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Streamline your workflow with our all-in-one SaaS platform. Boost
              productivity and scale your business.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Dock iconMagnification={60} iconDistance={100}>
          <DockIcon>
            <Link href="/">
              <SvgGitHub />
            </Link>
          </DockIcon>
          <DockIcon>
            <Link href="/">
              <SvgX />
            </Link>
          </DockIcon>
          <DockIcon>
            <Link href="/">
              <SvgLinkedin />
            </Link>
          </DockIcon>
          <DockIcon>
            <Link href="/">
              <SvgInstagram />
            </Link>
          </DockIcon>
          <DockIcon>
            <Link href="/">
              <SvgDiscord />
            </Link>
          </DockIcon>
        </Dock>

        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-5">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Budget Tracker. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
