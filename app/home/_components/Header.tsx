"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { ThemeSwitcherBtn } from "@/components/ThemeSwitcherBtn";
import { SvgArrow, SvgPiggyBank } from "@/components/Icons";
import { useUser } from "@clerk/nextjs";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="lg:container mx-auto px-5 lg:px-10 flex h-16 items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-bold">
          <Link href="/" className="flex items-center gap-2">
            <SvgPiggyBank />
            <p className="bg-gradient-to-r from-amber-600/90 dark:from-amber-400 to-orange-600/90 dark:to-orange-500 bg-clip-text text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tighter text-transparent">
              BudgetTracker
            </p>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <ThemeSwitcherBtn />
          {isLoaded && user ? (
            <Link
              href="/"
              className="flex justify-center gap-1 items-center mx-auto shadow-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-500 text-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-1 pl-4 overflow-hidden rounded-full group"
            >
              <span className="transition-colors duration-700">Dashboard</span>
              <SvgArrow />
            </Link>
          ) : (
            <Link
              href="/sign-in"
              className="flex justify-center gap-1 items-center mx-auto shadow-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-500 text-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-1 pl-4 overflow-hidden rounded-full group"
            >
              <span className="transition-colors duration-700">Log in</span>
              <SvgArrow />
            </Link>
          )}
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <ThemeSwitcherBtn />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
        >
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="#features"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-2">
              {isLoaded && user ? (
                <Link
                  href="/"
                  className="flex justify-center w-full gap-1 items-center mx-auto shadow-xl bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-500 text-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-1 pl-4 overflow-hidden rounded-full group"
                >
                  <span className="transition-colors duration-700">
                    Dashboard
                  </span>
                  <SvgArrow />
                </Link>
              ) : (
                <Link
                  href="/sign-in"
                  className="flex justify-center w-full gap-1 items-center mx-auto shadow-xl bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-500 text-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-1 pl-4 overflow-hidden rounded-full group"
                >
                  <span className="transition-colors duration-700">Log in</span>
                  <SvgArrow />
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
