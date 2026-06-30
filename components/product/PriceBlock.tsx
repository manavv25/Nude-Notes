"use client";

import { Clock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Product, INSTAGRAM_URL, BUNDLE_PRICE } from "@/lib/products";

interface PriceBlockProps {
  product: Product;
}

export default function PriceBlock({ product }: PriceBlockProps) {
  const { theme } = product;

  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-12 sm:py-16 fade-up-1">
      <div
        className="rounded-2xl p-6 sm:p-10 border"
        style={{ background: `${theme.bgLight}CC`, borderColor: theme.border }}
      >
        {/* Longevity */}
        <div className="flex items-center gap-3 mb-7 flex-wrap">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: `${theme.accent}18`, border: `1px solid ${theme.accent}30` }}
          >
            <Clock size={13} style={{ color: theme.accent }} />
          </div>
          <div>
            <p className="text-[10px] tracking-widest uppercase font-sans" style={{ color: theme.accentMuted }}>
              Longevity
            </p>
            <p className="text-sm font-sans font-light" style={{ color: theme.text }}>
              {product.longevity}
            </p>
          </div>
          {/* Visual bar */}
          <div
            className="ml-2 h-px flex-1 min-w-[60px] max-w-[100px] rounded-full overflow-hidden"
            style={{ background: `${theme.accent}25` }}
            aria-hidden="true"
          >
            <div
              className="h-full rounded-full"
              style={{
                background: theme.accent,
                width: product.longevity.startsWith("8") ? "80%" : "65%",
              }}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-7" style={{ background: theme.border }} />

        {/* Price */}
        <div className="mb-2">
          <p className="text-[10px] tracking-[0.3em] uppercase font-sans mb-3" style={{ color: theme.accentMuted }}>
            {product.size} · Eau de Parfum
          </p>
          <div className="flex items-baseline gap-3 flex-wrap">
            <span
              className="font-serif font-bold"
              style={{ color: theme.text, fontSize: "clamp(2.2rem, 6vw, 3.5rem)" }}
            >
              ₹{product.price}
            </span>
            <span className="text-lg line-through font-sans" style={{ color: theme.textMuted }}>
              ₹{product.mrp}
            </span>
          </div>
        </div>

        <p className="text-sm font-sans italic mb-7" style={{ color: theme.textMuted }}>
          Buy all 3 for ₹{BUNDLE_PRICE} — DM us on Instagram
        </p>

        {/* CTA button — full width on mobile */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3
                     w-full sm:w-auto
                     px-8 py-4 text-sm tracking-widest uppercase font-sans font-medium
                     transition-all duration-300 hover:opacity-90 rounded-xl sm:rounded-lg"
          style={{ background: theme.accent, color: "#0A0A0A" }}
          aria-label={`Buy ${product.name} on Instagram`}
        >
          <InstagramIcon size={15} className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
          Buy on Instagram
        </a>
      </div>
    </section>
  );
}
