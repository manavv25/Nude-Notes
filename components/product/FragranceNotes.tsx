"use client";

import { Leaf, Layers, Flame } from "lucide-react";
import { Product } from "@/lib/products";

interface FragranceNotesProps {
  product: Product;
}

const categories = [
  { key: "top" as const,    label: "Top Notes",    sub: "First impression",        Icon: Leaf },
  { key: "middle" as const, label: "Middle Notes",  sub: "Heart of the fragrance",  Icon: Layers },
  { key: "base" as const,   label: "Base Notes",   sub: "Lasting signature",       Icon: Flame },
];

export default function FragranceNotes({ product }: FragranceNotesProps) {
  const { theme } = product;

  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-12 sm:py-16">
      {/* Heading */}
      <div className="mb-10 sm:mb-12 fade-up-1">
        <p className="text-xs tracking-[0.3em] uppercase font-sans mb-2" style={{ color: theme.accentMuted }}>
          Composition
        </p>
        <h2 className="font-serif font-bold text-2xl sm:text-3xl" style={{ color: theme.text }}>
          Fragrance Notes
        </h2>
      </div>

      {/* Three columns — stacked on mobile, side by side on sm+ */}
      <div className="flex flex-col sm:flex-row">
        {categories.map(({ key, label, sub, Icon }, i) => (
          <div
            key={key}
            className={[
              "flex-1 py-7 fade-up-" + (i + 2),
              i < 2 ? "border-b sm:border-b-0 sm:border-r" : "",
              i > 0 ? "sm:pl-8 lg:pl-10" : "",
              i < 2 ? "sm:pr-8 lg:pr-10" : "",
            ].join(" ")}
            style={{ borderColor: theme.border }}
          >
            {/* Icon + label */}
            <div className="flex items-start gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${theme.accent}18`, border: `1px solid ${theme.accent}30` }}
              >
                <Icon size={14} style={{ color: theme.accent }} />
              </div>
              <div>
                <p className="font-serif font-bold text-base sm:text-lg" style={{ color: theme.text }}>
                  {label}
                </p>
                <p className="text-xs font-sans" style={{ color: theme.textMuted }}>{sub}</p>
              </div>
            </div>

            {/* Notes */}
            <ul className="flex flex-col gap-2.5">
              {product.notes[key].map((note, ni) => (
                <li key={ni} className="flex items-center gap-2.5">
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: theme.accent, opacity: 0.7 }}
                  />
                  <span
                    className="text-sm font-sans font-light"
                    style={{ color: theme.text, opacity: 0.88 }}
                  >
                    {note.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
