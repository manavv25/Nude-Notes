import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nude Notes was born from a simple belief: the purest fragrances need nothing to hide. The story behind our niche perfume house.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] px-5 py-32">
      <div className="max-w-2xl mx-auto">
        {/* Label */}
        <p className="text-[#8A7060] text-xs tracking-[0.35em] uppercase font-sans mb-6">
          Our Story
        </p>

        {/* Heading */}
        <h1 className="font-serif text-[#1A1410] text-5xl sm:text-6xl font-normal leading-tight mb-8">
          About Us
        </h1>

        {/* Gold rule */}
        <div
          className="w-10 h-px mb-10"
          style={{ background: "#C9A46E" }}
          aria-hidden="true"
        />

        {/* Brand story — provided text */}
        <div className="flex flex-col gap-6">
          <p className="text-[#3A2E20] text-base sm:text-lg leading-[1.85] font-sans font-light">
            Nude Notes was born from a simple belief: the purest fragrances need
            nothing to hide. The name{" "}
            <em className="font-serif not-italic text-[#1A1410]">Nude</em>{" "}
            represents rawness, honesty, and scent in its truest form — free
            from unnecessary complexity.
          </p>

          <p className="text-[#3A2E20] text-base sm:text-lg leading-[1.85] font-sans font-light">
            Every fragrance is carefully crafted by us, from the very beginning,
            with passion, patience, and attention to every detail. We are still
            at the start of our journey, but we believe every bottle reflects
            the care and dedication behind our craft.
          </p>

          <p className="text-[#3A2E20] text-base sm:text-lg leading-[1.85] font-sans font-light">
            This is only the beginning, and we can&rsquo;t wait to create many
            more stories with you.
          </p>
        </div>

        {/* Closing accent */}
        <div
          className="mt-14 w-10 h-px"
          style={{ background: "#C9A46E", opacity: 0.5 }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
