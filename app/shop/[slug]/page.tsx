import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import ProductHero from "@/components/product/ProductHero";
import FragranceNotes from "@/components/product/FragranceNotes";
import PriceBlock from "@/components/product/PriceBlock";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render all 3 product pages at build time
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — Eau de Parfum`,
    description: `${product.description} ${product.size} Eau de Parfum. ₹${product.price} (MRP ₹${product.mrp}). Order via Instagram DM.`,
    openGraph: {
      title: `${product.name} — Nude Notes`,
      description: product.description,
      images: [
        {
          url: product.imagePath,
          width: 1200,
          height: 630,
          alt: `${product.name} Eau de Parfum by Nude Notes`,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const { theme } = product;

  return (
    <div
      data-product-page
      style={{ backgroundColor: theme.bg, minHeight: "100vh" }}
    >
      {/* Back navigation */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-28 sm:pt-32">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans transition-colors duration-200 hover:opacity-80"
          style={{ color: theme.textMuted }}
          aria-label="Back to shop"
        >
          <ArrowLeft size={13} />
          All Fragrances
        </Link>
      </div>

      {/* Hero: large image + product name + tagline */}
      <ProductHero product={product} />

      {/* Horizontal rule */}
      <div
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16"
        aria-hidden="true"
      >
        <div className="w-full h-px" style={{ background: theme.border }} />
      </div>

      {/* Fragrance notes */}
      <FragranceNotes product={product} />

      {/* Horizontal rule */}
      <div
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16"
        aria-hidden="true"
      >
        <div className="w-full h-px" style={{ background: theme.border }} />
      </div>

      {/* Price + CTA */}
      <PriceBlock product={product} />

      {/* Bottom breathing room */}
      <div className="h-8 sm:h-12" />
    </div>
  );
}
