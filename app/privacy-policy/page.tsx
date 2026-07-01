import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nude Notes",
  description: "Nude Notes Privacy Policy — how we collect, use, and protect your information.",
};

const sections = [
  {
    heading: "Information We Collect",
    paragraphs: [
      "Our website is currently designed to showcase our fragrances and brand story. We do not directly collect personal information through this website.",
      "Personal information is collected only when you voluntarily contact us through Instagram to place an order. Depending on your order, we may request your full name, phone number, delivery address, and email address (if required for communication). We collect only the information necessary to process and deliver your order.",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: [
      "The information you provide is used solely for confirming your order, processing your purchase, arranging shipping and delivery, sending order and delivery updates, and responding to customer enquiries. We do not use your personal information for spam or unnecessary marketing communications.",
    ],
  },
  {
    heading: "Information Sharing",
    paragraphs: [
      "Your personal information is never sold, rented, or shared with third parties for advertising purposes. Information may only be shared with trusted delivery or logistics partners when necessary to complete your order.",
    ],
  },
  {
    heading: "Payments",
    paragraphs: [
      "At our current stage, payments are completed after order confirmation through Instagram. Nude Notes does not store your banking details, debit card information, credit card information, or UPI PINs through this website.",
    ],
  },
  {
    heading: "Website Usage",
    paragraphs: [
      "Our website is hosted securely to provide visitors with a smooth browsing experience. Like most websites, limited technical information such as browser type or device information may be generated automatically by your browser or hosting provider to maintain website performance and security.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We take reasonable steps to safeguard the information shared with us and use it only for legitimate business purposes related to your order.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "As Nude Notes continues to grow, our services and website may evolve. This Privacy Policy may be updated from time to time to reflect those changes. The latest version will always be available on this page.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have any questions regarding this Privacy Policy or how your information is handled, please contact us at nudenotesperfume@gmail.com or through Instagram @nudenotesperfume.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] px-5 py-32">
      <div className="max-w-2xl mx-auto">

        {/* Label */}
        <p className="text-[#8A7060] text-xs tracking-[0.35em] uppercase font-sans mb-6">
          Legal
        </p>

        {/* Heading */}
        <h1 className="font-serif text-[#1A1410] text-4xl sm:text-5xl font-normal leading-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#8A7060] text-xs font-sans tracking-wide mb-8">
          Last Updated: 1st July 2026
        </p>

        {/* Gold rule */}
        <div className="w-10 h-px mb-10" style={{ background: "#C9A46E" }} aria-hidden="true" />

        {/* Intro */}
        <p className="text-[#3A2E20] text-sm sm:text-base leading-relaxed font-sans font-light mb-10">
          At Nude Notes, we value your privacy and are committed to protecting the information you choose to share with us. As a growing independent fragrance brand, we believe in transparency and respect for our customers.
        </p>

        {/* Sections */}
        <div className="flex flex-col">
          {sections.map(({ heading, paragraphs }) => (
            <div
              key={heading}
              className="py-7 border-b border-[#1A1410]/10"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
}
