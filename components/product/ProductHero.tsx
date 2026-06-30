"use client";

import Image from "next/image";
import { Product } from "@/lib/products";

interface ProductHeroProps {
  product: Product;
}

export default function ProductHero({ product }: ProductHeroProps) {
  const { theme } = product;

  return (
    <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-6 pb-10 sm:pb-16">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* Image */}
        <div
          className="relative w-full max-w-[320px] sm:max-w-sm lg:max-w-md flex-shrink-0 mx-auto lg:mx-0 fade-up-1"
        >
          {/* Glow behind image */}
          <div
            className="absolute inset-0 rounded-3xl blur-3xl opacity-50 pointer-events-none"
            style={{ background: theme.glow, transform: "scale(0.85)" }}
            aria-hidden="true"
          />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
            <Image
              src={product.imagePath}
              alt={`${product.name} Eau de Parfum by Nude Notes`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 400px"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.20) 100%)",
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0 text-center lg:text-left fade-up-2">
          <p
            className="text-xs tracking-[0.3em] uppercase font-sans mb-4"
            style={{ color: theme.accentMuted }}
          >
            Nude Notes · Eau de Parfum
          </p>
          <h1
            className="font-serif font-bold leading-[1.0] mb-6 break-words"
            style={{
              color: theme.text,
              fontSize: "clamp(2.8rem, 8vw, 5rem)",
            }}
          >
            {product.name}
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed font-sans font-light max-w-md mx-auto lg:mx-0"
            style={{ color: theme.textMuted }}
          >
            {product.description}
          </p>
          <div
            className="mt-8 w-10 h-px mx-auto lg:mx-0"
            style={{ background: theme.accent, opacity: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
