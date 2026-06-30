"use client";

import Link from "next/link";
import Image from "next/image";

export default function BrandIntro() {
  return (
    <section className="bg-[#F5F0E8] px-5 sm:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center fade-up-1">

          {/* Logo mark */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-8">
            <Image
              src="/images/logo.png"
              alt="Nude Notes"
              fill
              sizes="60px"
              className="object-contain opacity-80"
            />
          </div>

          <p className="text-[#8A7060] text-[10px] tracking-[0.3em] uppercase mb-8 font-sans">
            The House
          </p>

          <h2 className="font-serif text-[#1A1410] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] mb-8">
            Crafted at the edge<br className="hidden sm:block" /> of restraint
          </h2>

          <p className="text-[#4A3D30] text-base sm:text-lg leading-[1.85] font-sans font-light max-w-2xl">
            We believe the most powerful scents say the least. Each Nude Notes
            fragrance strips away the unnecessary to reveal something raw,
            honest, and unmistakably wild.
          </p>

          <div className="w-8 h-px mt-12" style={{ background: "#C9A46E" }} aria-hidden="true" />

          <div className="mt-10 fade-up-2">
            <Link
              href="/about"
              className="text-[#6B5840] text-sm tracking-[0.2em] uppercase font-sans
                         border-b border-[#6B5840]/40 hover:border-[#6B5840]
                         pb-0.5 transition-colors duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
