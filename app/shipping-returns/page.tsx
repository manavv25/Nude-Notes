import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "Nude Notes shipping and returns policy. Free shipping across India. Orders placed via Instagram DM.",
};

const policies = [
  {
    label: "Shipping",
    text: "Free shipping across India on all orders.",
  },
  {
    label: "How to Order",
    text: "Orders are placed through Instagram DM — reach us at @nudenotesperfume.",
  },
  {
    label: "Payment",
    text: "Payment and order confirmation are handled through Instagram.",
  },
  {
    label: "Updates",
    text: "Customers will receive order updates through Instagram and email.",
  },
  {
    label: "Returns",
    text: "No returns or exchanges after order confirmation — unless the wrong or damaged product is received.",
  },
];

export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] px-5 py-32">
      <div className="max-w-2xl mx-auto">
        {/* Label */}
        <p className="text-[#8A7060] text-xs tracking-[0.35em] uppercase font-sans mb-6">
          Policy
        </p>

        {/* Heading */}
        <h1 className="font-serif text-[#1A1410] text-4xl sm:text-5xl font-normal leading-tight mb-8">
          Shipping &amp; Returns
        </h1>

        {/* Gold rule */}
        <div
          className="w-10 h-px mb-12"
          style={{ background: "#C9A46E" }}
          aria-hidden="true"
        />

        {/* Policy list — clean typographic style, no boxes */}
        <ul className="flex flex-col" role="list">
          {policies.map(({ label, text }, i) => (
            <li
              key={i}
              className="flex flex-col sm:flex-row sm:gap-10 py-7 border-b border-[#1A1410]/10"
            >
              {/* Label column */}
              <span className="text-[#8A7060] text-xs tracking-[0.2em] uppercase font-sans flex-shrink-0 w-28 mb-2 sm:mb-0 pt-0.5">
                {label}
              </span>
              {/* Text column */}
              <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light flex-1">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
