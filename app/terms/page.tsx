import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Nude Notes",
  description: "Nude Notes Terms & Conditions — please read before using our website or placing an order.",
};

const sections = [
  {
    number: "1",
    heading: "About Nude Notes",
    paragraphs: [
      "Nude Notes is an independent fragrance brand dedicated to creating thoughtfully crafted perfumes inspired by simplicity, nature, and authenticity. Our website serves as a platform to showcase our products and brand.",
    ],
  },
  {
    number: "2",
    heading: "Product Information",
    paragraphs: [
      "We make every effort to ensure that product descriptions, images, and pricing are accurate. However, slight variations in colour, packaging, or appearance may occur due to photography, screen settings, or future product updates.",
    ],
  },
  {
    number: "3",
    heading: "Ordering Process",
    paragraphs: [
      "At present, orders are placed through our official Instagram account. After contacting us, we will confirm product availability, collect the necessary delivery details, confirm the total amount payable, and process your order after successful payment confirmation. Orders are considered confirmed only after payment has been successfully verified.",
    ],
  },
  {
    number: "4",
    heading: "Pricing",
    paragraphs: [
      "All prices displayed by Nude Notes are listed in Indian Rupees (INR). Prices may change without prior notice. However, confirmed orders will not be affected by future price changes.",
    ],
  },
  {
    number: "5",
    heading: "Shipping",
    paragraphs: [
      "We aim to process and dispatch orders as quickly as possible. Estimated delivery times may vary depending on your location, courier services, weather conditions, holidays, or other unforeseen circumstances.",
    ],
  },
  {
    number: "6",
    heading: "Returns & Refunds",
    paragraphs: [
      "Due to the nature of fragrance products, opened or used perfumes cannot be returned. If you receive the wrong product or a product that was damaged during delivery, please contact us promptly. We will review the issue and provide an appropriate resolution where applicable. Please refer to our Return & Refund Policy for complete details.",
    ],
  },
  {
    number: "7",
    heading: "Intellectual Property",
    paragraphs: [
      "All content on this website — including our brand name, logo, product names, images, graphics, text, and design — is the property of Nude Notes unless otherwise stated. No content may be copied, reproduced, distributed, or used without prior written permission.",
    ],
  },
  {
    number: "8",
    heading: "Website Availability",
    paragraphs: [
      "We strive to keep our website available and up to date at all times. However, temporary interruptions may occur due to maintenance, updates, or technical issues beyond our control.",
    ],
  },
  {
    number: "9",
    heading: "Limitation of Liability",
    paragraphs: [
      "Nude Notes shall not be held responsible for indirect or consequential losses arising from the use of this website or delays caused by third-party courier services or circumstances beyond our reasonable control.",
    ],
  },
  {
    number: "10",
    heading: "Changes to These Terms",
    paragraphs: [
      "As Nude Notes continues to grow, our products, services, and policies may evolve. We reserve the right to update these Terms & Conditions at any time. The latest version will always be available on this page.",
    ],
  },
  {
    number: "11",
    heading: "Contact Us",
    paragraphs: [
      "For any questions regarding these Terms & Conditions, please contact us at nudenotesperfume@gmail.com or through Instagram @nudenotesperfume.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] px-5 py-32">
      <div className="max-w-2xl mx-auto">

        {/* Label */}
        <p className="text-[#8A7060] text-xs tracking-[0.35em] uppercase font-sans mb-6">
          Legal
        </p>

        {/* Heading */}
        <h1 className="font-serif text-[#1A1410] text-4xl sm:text-5xl font-normal leading-tight mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-[#8A7060] text-xs font-sans tracking-wide mb-8">
          Last Updated: 1st July 2026
        </p>

        {/* Gold rule */}
        <div className="w-10 h-px mb-10" style={{ background: "#C9A46E" }} aria-hidden="true" />

        {/* Intro */}
        <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light mb-10">
          Welcome to Nude Notes. By accessing or using our website, you agree to the following Terms &amp; Conditions. Please read them carefully before using our website or placing an order.
        </p>

        {/* Sections */}
        <div className="flex flex-col">
          {sections.map(({ number, heading, paragraphs }) => (
            <div
              key={number}
              className="flex flex-col sm:flex-row sm:gap-10 py-7 border-b border-[#1A1410]/10"
            >
              {/* Number */}
              <span className="font-serif text-[#C9A46E] text-lg font-bold flex-shrink-0 w-8 mb-2 sm:mb-0 pt-0.5">
                {number}.
              </span>
              {/* Content */}
              <div className="flex-1">
                <h2 className="font-serif text-[#1A1410] text-lg sm:text-xl font-semibold mb-3">
                  {heading}
                </h2>
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
