import type { Metadata } from "next";
import ProductCard from "@/components/shop/ProductCard";
import BundleBanner from "@/components/shop/BundleBanner";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Discover the full Nude Notes fragrance collection. Shop Bare Birch, Monolith, and Unfiltered — three Eau de Parfums crafted for the wilderness within. ₹399 each, or all 3 for ₹999.",
  openGraph: {
    title: "Shop — Nude Notes",
    description: "Three Eau de Parfums. ₹399 each, or all 3 for ₹999. Order via Instagram DM.",
  },
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] pt-28 sm:pt-32 pb-24 sm:pb-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="mb-10 sm:mb-14">
          <p className="text-[#8A7060] text-[10px] tracking-[0.3em] uppercase font-sans mb-3">
            All Fragrances
          </p>
          <h1 className="font-serif text-[#1A1410] text-4xl sm:text-5xl font-bold">
            The Collection
          </h1>
        </div>

        {/* Bundle banner */}
        <BundleBanner />

        {/* Product grid — ProductCard is self-contained */}
        <ProductCard />
      </div>
    </div>
  );
}
