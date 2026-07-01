import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { INSTAGRAM_URL, EMAIL } from "@/lib/products";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "How to Order", href: "/how-to-order" },
  { label: "Shipping & Returns", href: "/shipping-returns" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Nude Notes logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-white text-lg tracking-[0.2em] uppercase font-semibold">
                Nude Notes
              </span>
            </Link>
            {/* Tagline lives in footer */}
            <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-sans">
              Wear The Wilderness
            </p>
          </div>

          {/* Links column */}
          <div className="flex flex-col gap-3">
            <p className="text-white/30 text-[10px] tracking-widest uppercase font-sans mb-1">
              Navigate
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-white/90 text-sm tracking-wide transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <p className="text-white/30 text-[10px] tracking-widest uppercase font-sans mb-1">
              Connect
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-200 group w-fit"
              aria-label="Nude Notes on Instagram"
            >
              <InstagramIcon size={15} className="group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm tracking-wide">@nudenotesperfume</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-200 group w-fit"
              aria-label="Email Nude Notes"
            >
              <Mail size={15} className="group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm tracking-wide break-all">{EMAIL}</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/8">
          <p className="text-white/20 text-xs tracking-widest text-center">
            © 2026 Nude Notes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
