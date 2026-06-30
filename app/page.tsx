import type { Metadata } from "next";
import HeroVideo from "@/components/home/HeroVideo";
import BrandIntro from "@/components/home/BrandIntro";
import FeaturedFragrances from "@/components/home/FeaturedFragrances";

export const metadata: Metadata = {
  title: "Nude Notes — Wear The Wilderness",
  description:
    "Nude Notes is a niche luxury fragrance house. Explore our collection: Bare Birch, Monolith, and Unfiltered — each an Eau de Parfum crafted for raw, unfiltered self-expression.",
  openGraph: {
    title: "Nude Notes — Wear The Wilderness",
    description:
      "Three Eau de Parfums. Raw. Unfiltered. Unapologetic. Discover Bare Birch, Monolith, and Unfiltered.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero: strictly contained 100vh section — no bleed into sections below */}
      <HeroVideo />

      {/* Brand intro: plain cream background, completely separate from hero */}
      <BrandIntro />

      {/* Featured fragrances grid */}
      <FeaturedFragrances />
    </>
  );
}
