"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

export default function FeaturedFragrances() {
  return (
    <section className="bg-[#F5F0E8] pb-20 sm:pb-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12 sm:mb-14 fade-up-1">
          <p className="text-[#8A7060] text-[10px] tracking-[0.3em] uppercase mb-3 font-sans">
            The Collection
          </p>
          <h2 className="font-serif text-[#1A1410] text-3xl sm:text-4xl font-bold">
            Three Fragrances
          </h2>
        </div>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((product, i) => (
            <div
              key={product.slug}
              className={`fade-up-${i + 2}`}
            >
              <Link
                href={`/shop/${product.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden
                           shadow-sm hover:shadow-xl transition-all duration-400"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#EDE8E0]">
                  <Image
                    src={product.imagePath}
                    alt={`${product.name} Eau de Parfum by Nude Notes`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.18) 100%)",
                    }}
                  />
                </div>

                {/* Card body */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-[#1A1410] text-2xl font-bold mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[#8A7060] text-sm font-sans mb-4 leading-snug">
                    {product.tagline}
                  </p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-[#1A1410] text-xl font-sans font-semibold">
                      ₹{product.price}
                    </span>
                    <span className="text-[#A09080] text-sm line-through font-sans">
                      ₹{product.mrp}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#6B5840] text-sm font-sans
                                  group-hover:gap-2.5 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-14 fade-up-5">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-3
                       bg-[#1A1410] text-white hover:bg-[#2C1F14]
                       px-7 py-3.5 text-xs tracking-[0.2em] uppercase font-sans
                       transition-colors duration-300"
          >
            View All Fragrances
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
