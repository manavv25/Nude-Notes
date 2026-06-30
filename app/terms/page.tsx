import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Nude Notes Terms & Conditions.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center px-5 py-32">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[#8A7060] text-xs tracking-[0.35em] uppercase font-sans mb-6">
          Legal
        </p>
        <h1 className="font-serif text-[#1A1410] text-5xl sm:text-6xl font-normal mb-8 leading-tight">
          Terms &amp; Conditions
        </h1>
        <div
          className="w-10 h-px mx-auto mb-10"
          style={{ background: "#C9A46E" }}
          aria-hidden="true"
        />
        <p className="text-[#4A3D30] text-base leading-relaxed font-sans font-light">
          This page is currently being updated.
        </p>
      </div>
    </div>
  );
}
