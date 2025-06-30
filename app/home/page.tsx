"use client";

import Faq from "./_components/Faq";
import CTA from "./_components/CTA";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Pricing from "./_components/Pricing";
import Features from "./_components/Features";
import TrustedBy from "./_components/TrustedBy";
import HowItWorks from "./_components/HowItWorks";
import Testimonials from "./_components/Testimonials";
import CategorySelector from "./_components/CategorySelector";

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Logos Section */}
        <TrustedBy />

        {/* Category Selector Section */}
        <CategorySelector />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <Faq />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
