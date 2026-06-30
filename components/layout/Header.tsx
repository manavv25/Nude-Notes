"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const headerBg =
    scrolled || !isHome
      ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/5"
      : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-[72px] flex items-center justify-between">

        {/* Logo + wordmark + tagline */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Nude Notes logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-white text-base sm:text-lg tracking-[0.2em] uppercase font-semibold">
              Nude Notes
            </span>
            <span className="text-white/40 text-[9px] tracking-[0.22em] uppercase font-sans mt-0.5">
              Wear The Wilderness
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs tracking-[0.18em] uppercase font-sans transition-colors duration-200 pb-0.5
                  ${isActive ? "text-white" : "text-white/55 hover:text-white/90"}`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-white/70"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden text-white p-2 -mr-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span key="close"
                initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.18 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="menu"
                initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.18 }}>
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 top-16 bg-black/70 z-40"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute top-16 left-0 right-0 z-50 bg-[#0D0D0D] border-b border-white/10"
            >
              <nav className="flex flex-col px-6 py-4 gap-0" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`py-4 text-sm tracking-[0.2em] uppercase font-sans border-b border-white/8 transition-colors duration-200
                        ${isActive ? "text-white" : "text-white/50 hover:text-white"}`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
