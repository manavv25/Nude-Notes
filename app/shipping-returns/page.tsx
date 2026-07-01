import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Returns | Nude Notes",
  description:
    "Nude Notes shipping and returns policy. Orders placed via Instagram DM.",
};

export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] px-5 py-32">
      <div className="max-w-2xl mx-auto">

        {/* Label */}
        <p className="text-[#8A7060] text-xs tracking-[0.35em] uppercase font-sans mb-6">
          Policy
        </p>

        {/* Heading */}
        <h1 className="font-serif text-[#1A1410] text-4xl sm:text-5xl font-normal leading-tight mb-4">
          Shipping &amp; Returns
        </h1>
        <p className="text-[#8A7060] text-xs font-sans tracking-wide mb-8">
          Last Updated: 1st July 2026
        </p>

        {/* Gold rule */}
        <div className="w-10 h-px mb-10" style={{ background: "#C9A46E" }} aria-hidden="true" />

        {/* Intro */}
        <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light mb-10">
          At Nude Notes, every fragrance is carefully prepared and packed to ensure it reaches you safely. We are committed to providing a smooth and transparent shopping experience for every customer.
        </p>

        {/* Shipping section */}
        <div className="py-7 border-b border-[#1A1410]/10">
          <h2 className="font-serif text-[#1A1410] text-xl sm:text-2xl font-semibold mb-5">
            Shipping
          </h2>

          <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light mb-4">
            Orders are currently processed after they are confirmed through our official Instagram account.
          </p>

          {/* How to Order link */}
          <div className="inline-flex items-center gap-2 bg-[#1A1410]/5 border border-[#1A1410]/10 rounded-lg px-4 py-3 mb-5">
            <span className="text-[#3A2E20] text-sm font-sans font-light">
              For detailed instructions on placing an order, visit our
            </span>
            <Link
              href="/how-to-order"
              className="group inline-flex items-center gap-1.5 text-[#6B5840] text-sm font-sans font-medium
                         border-b border-[#6B5840]/40 hover:border-[#6B5840] pb-0.5
                         transition-colors duration-200 whitespace-nowrap"
            >
              How to Order
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>

          <ul className="flex flex-col gap-3 mt-2">
            {[
              "Your order will be carefully prepared and packed.",
              "An estimated delivery timeline will be shared with you.",
              "Shipping and delivery updates will be provided through Instagram and, where applicable, email.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-[#C9A46E] flex-shrink-0 mt-2" aria-hidden="true" />
                <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light mt-5">
            Delivery times may vary depending on your location, courier partner, weather conditions, public holidays, or other unforeseen circumstances. While we strive to deliver every order on time, Nude Notes cannot guarantee delivery dates once a shipment has been handed over to the courier.
          </p>
        </div>

        {/* Returns section */}
        <div className="py-7 border-b border-[#1A1410]/10">
          <h2 className="font-serif text-[#1A1410] text-xl sm:text-2xl font-semibold mb-5">
            Returns &amp; Refunds
          </h2>

          <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light mb-5">
            Due to the hygienic nature of fragrance products, we do not accept returns, exchanges, or refunds for opened, used, or change-of-mind purchases.
          </p>

          <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light mb-4">
            A replacement or appropriate resolution may be provided only if:
          </p>

          <ul className="flex flex-col gap-3 mb-5">
            {[
              "You receive the wrong product.",
              "Your product arrives damaged during transit.",
              "You receive a product with a verified manufacturing defect.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-[#C9A46E] flex-shrink-0 mt-2" aria-hidden="true" />
                <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light mb-3">
            To request assistance, please contact us within 48 hours of receiving your order with:
          </p>

          <ul className="flex flex-col gap-3">
            {[
              "Your order details.",
              "Clear photographs of the product and its packaging.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-[#C9A46E] flex-shrink-0 mt-2" aria-hidden="true" />
                <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light mt-5">
            Each request will be reviewed individually, and if approved, we will provide an appropriate resolution.
          </p>
        </div>

        {/* Need help */}
        <div className="py-7">
          <h2 className="font-serif text-[#1A1410] text-xl sm:text-2xl font-semibold mb-4">
            Need Help?
          </h2>
          <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light mb-1">
            Email:{" "}
            <a
              href="mailto:nudenotesperfume@gmail.com"
              className="text-[#6B5840] border-b border-[#6B5840]/40 hover:border-[#6B5840] transition-colors duration-200"
            >
              nudenotesperfume@gmail.com
            </a>
          </p>
          <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light">
            Instagram:{" "}
            <a
              href="https://www.instagram.com/nudenotesperfume/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B5840] border-b border-[#6B5840]/40 hover:border-[#6B5840] transition-colors duration-200"
            >
              @nudenotesperfume
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
