import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { INSTAGRAM_URL, EMAIL } from "@/lib/products";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nude Notes via Instagram or email. Order fragrances via Instagram DM.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center px-5 py-32">
      <div className="max-w-md mx-auto text-center">
        <p className="text-[#8A7060] text-xs tracking-[0.35em] uppercase font-sans mb-6">
          Reach Us
        </p>
        <h1 className="font-serif text-[#1A1410] text-5xl sm:text-6xl font-normal mb-8 leading-tight">
          Contact
        </h1>

        <div
          className="w-10 h-px mx-auto mb-12"
          style={{ background: "#C9A46E" }}
          aria-hidden="true"
        />

        <div className="flex flex-col gap-6 items-center">
          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white rounded-xl px-7 py-5 w-full max-w-sm shadow-sm hover:shadow-md transition-all duration-300"
            aria-label="Nude Notes on Instagram"
          >
            <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center flex-shrink-0">
              <InstagramIcon size={18} className="text-[#1A1410]" />
            </div>
            <div className="text-left">
              <p className="text-xs tracking-widest uppercase font-sans text-[#8A7060] mb-0.5">
                Instagram
              </p>
              <p className="text-[#1A1410] font-sans text-sm font-medium">
                @nudenotesperfume
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-4 bg-white rounded-xl px-7 py-5 w-full max-w-sm shadow-sm hover:shadow-md transition-all duration-300"
            aria-label={`Email Nude Notes at ${EMAIL}`}
          >
            <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-[#1A1410]" />
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-xs tracking-widest uppercase font-sans text-[#8A7060] mb-0.5">
                Email
              </p>
              <p className="text-[#1A1410] font-sans text-sm font-medium break-all">
                {EMAIL}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
