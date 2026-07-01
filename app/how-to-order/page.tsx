import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/products";

export const metadata: Metadata = {
  title: "How to Order | Nude Notes",
  description:
    "Step-by-step guide to ordering your Nude Notes fragrance through Instagram DM.",
};

const steps = [
  {
    number: "01",
    title: "Explore Our Collection",
    text: "Browse our fragrance collection and choose the perfume you'd like to purchase.",
  },
  {
    number: "02",
    title: "Contact Us on Instagram",
    text: "Click the Buy Now button on the product page or visit our Instagram profile and send us a direct message (DM) with the name of the fragrance you'd like to order.",
  },
  {
    number: "03",
    title: "Order Confirmation",
    text: "Our team will confirm product availability, quantity, delivery address, contact details, and your final order summary.",
  },
  {
    number: "04",
    title: "Payment",
    text: "Once your order details are confirmed, we'll share the payment instructions. Your order will be processed after successful payment confirmation.",
  },
  {
    number: "05",
    title: "Order Processing",
    text: "After payment is verified, your order will be carefully packed and prepared for dispatch.",
  },
  {
    number: "06",
    title: "Shipping Updates",
    text: "We'll share shipping and delivery updates through Instagram DM and, where applicable, via email.",
  },
  {
    number: "07",
    title: "Delivery",
    text: "Your Nude Notes fragrance will be delivered to your provided address. If you have any questions after receiving your order, feel free to contact us through Instagram.",
  },
];

export default function HowToOrderPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] px-5 py-32">
      <div className="max-w-2xl mx-auto">

        {/* Label */}
        <p className="text-[#8A7060] text-xs tracking-[0.35em] uppercase font-sans mb-6">
          Guide
        </p>

        {/* Heading */}
        <h1 className="font-serif text-[#1A1410] text-4xl sm:text-5xl font-normal leading-tight mb-8">
          How to Order
        </h1>

        {/* Gold rule */}
        <div className="w-10 h-px mb-12" style={{ background: "#C9A46E" }} aria-hidden="true" />

        {/* Steps */}
        <ol className="flex flex-col" role="list">
          {steps.map(({ number, title, text }) => (
            <li
              key={number}
              className="flex flex-col sm:flex-row sm:gap-10 py-7 border-b border-[#1A1410]/10"
            >
              {/* Step number */}
              <span className="font-serif text-[#C9A46E] text-2xl font-bold flex-shrink-0 w-10 mb-3 sm:mb-0">
                {number}
              </span>
              {/* Content */}
              <div className="flex-1">
                <p className="font-serif text-[#1A1410] text-lg font-semibold mb-2">
                  {title}
                </p>
                <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <div className="mt-12">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3
                       bg-[#1A1410] text-white hover:bg-[#2C1F14]
                       px-7 py-3.5 text-xs tracking-[0.2em] uppercase font-sans
                       transition-colors duration-300"
          >
            Order on Instagram
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Back to shop */}
        <div className="mt-6">
          <Link
            href="/shop"
            className="text-[#6B5840] text-sm tracking-[0.15em] uppercase font-sans
                       border-b border-[#6B5840]/40 hover:border-[#6B5840]
                       pb-0.5 transition-colors duration-200"
          >
            Browse Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
