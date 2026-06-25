import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

const EASE = [0.16, 1, 0.3, 1] as const;

const navItems = [
  { label: 'Fragrances', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact-links' },
];

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true });

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="h-screen w-full p-4 md:p-6 bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260510_060007_60275ce7-030c-4668-a160-8f364ec537d3.mp4"
        />

        {/* Noise Overlay */}
        <div
          className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none"
          aria-hidden="true"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

        {/* ── NAVBAR ── */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-start justify-between px-2 sm:px-4 md:px-6">

          {/* Logo + Brand (LHS) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 bg-black rounded-b-2xl px-2 py-2 sm:px-3 md:px-5 md:py-3 flex-shrink-0">
            <img
              src="/images/logo.jpg"
              alt="Nude Notes Logo"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 rounded-sm object-cover flex-shrink-0"
            />
            <div className="flex flex-col leading-none whitespace-nowrap">
              <span
                className="text-[9px] sm:text-[11px] md:text-sm font-bold tracking-[0.05em] uppercase"
                style={{ color: '#E1E0CC' }}
              >
                Nude Notes
              </span>
              <span
                className="text-[6px] sm:text-[7px] md:text-[9px] font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-0.5"
                style={{ color: 'rgba(225, 224, 204, 0.45)' }}
              >
                Wear The Wilderness
              </span>
            </div>
          </div>

          {/* Nav links pill (center-right) */}
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-2.5 py-2 sm:px-3 md:px-8 md:py-3 flex-shrink-0">
            <ul className="flex items-center flex-nowrap gap-2.5 sm:gap-4 md:gap-10 lg:gap-12">
              {navItems.map((item) => (
                <li key={item.label} className="flex-shrink-0">
                  <a
                    href={item.href}
                    className="whitespace-nowrap text-[9px] sm:text-xs md:text-sm font-light tracking-wide transition-colors duration-200"
                    style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#E1E0CC')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* ── HERO CONTENT ── */}
        <div
          ref={contentRef}
          className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-12 gap-0 items-end p-4 md:p-8 pb-8 md:pb-12"
        >
          {/* Heading — left 8 columns */}
          <div className="col-span-12 md:col-span-8">
            {/* Tagline above heading */}
            <motion.p
              className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3 md:mb-4"
              style={{ color: 'rgba(225, 224, 204, 0.5)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            >
              Wear The Wilderness
            </motion.p>

            <h1
              className="font-medium leading-[0.85] tracking-[-0.07em] text-[16.5vw] sm:text-[14.5vw] md:text-[14vw] lg:text-[13vw] xl:text-[12vw]"
              style={{ color: '#E1E0CC' }}
            >
              <WordsPullUp text="Nude" delay={0} />
              <br />
              <WordsPullUp text="Notes" delay={0.1} />
            </h1>
          </div>

          {/* Right column — description + CTA */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4 md:gap-6 pb-2 md:pb-1">
            <motion.p
              className="text-primary/70 text-xs sm:text-sm md:text-base"
              style={{ lineHeight: 1.2 }}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
            >
              Nude Notes is a perfume brand crafted for those who wear scent as a second skin — minimal, intentional, and deeply personal.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            >
              <button
                id="hero-shop-now"
                onClick={scrollToProducts}
                className="group inline-flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-5 pr-1 py-1 transition-all duration-300"
              >
                <span
                  className="font-medium text-sm sm:text-base"
                  style={{ color: '#000000' }}
                >
                  Shop Now
                </span>
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                  <ArrowRight size={16} className="text-primary" strokeWidth={2} />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
