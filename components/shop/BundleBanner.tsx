"use client";

import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { INSTAGRAM_URL, BUNDLE_PRICE } from "@/lib/products";

export default function BundleBanner() {
  return (
    <div className="border border-[#C9A46E]/30 bg-[#FAF6F0] rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 sm:mb-14">
      <div>
        <p className="text-[#1A1410] font-serif text-lg font-normal">
          The Complete Collection
        </p>
        <p className="text-[#8A7060] text-sm font-sans mt-0.5">
          All 3 fragrances for{" "}
          <span className="text-[#1A1410] font-medium">₹{BUNDLE_PRICE}</span>{" "}
          — DM us on Instagram to order.
        </p>
      </div>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 border border-[#1A1410]/25 hover:border-[#1A1410] text-[#1A1410] px-5 py-2.5 text-xs tracking-widest uppercase font-sans transition-all duration-300 hover:bg-[#1A1410] hover:text-white flex-shrink-0"
        aria-label="Buy the complete Nude Notes collection on Instagram"
      >
        <InstagramIcon
          size={13}
          className="group-hover:scale-110 transition-transform duration-300"
        />
        Buy on Instagram
      </a>
    </div>
  );
}
