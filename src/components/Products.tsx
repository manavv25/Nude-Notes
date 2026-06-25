import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { WordsPullUpMultiStyle } from './WordsPullUp';

const EASE = [0.22, 1, 0.36, 1] as const;

interface Notes {
  top: string;
  middle: string;
  base: string;
}

interface Product {
  id: string;
  name: string;
  descriptor: string;
  image: string;
  notes: Notes;
}

const products: Product[] = [
  {
    id: 'bare-birch',
    name: 'Bare Birch',
    descriptor: 'Chypre — Fresh & Woody',
    image: '/images/bare-birch.jpg',
    notes: {
      top: 'Bergamot, Black Currant, Apple, Lemon, Pink Pepper',
      middle: 'Patchouli, Moroccan Jasmine',
      base: 'Birch, Musk, Oak Moss, Cedarwood, Ambroxan',
    },
  },
  {
    id: 'unfiltered',
    name: 'Unfiltered',
    descriptor: 'Rich — Spicy & Sweet',
    image: '/images/unfiltered.jpg',
    notes: {
      top: 'Lemon, Ginger',
      middle: 'Cardamom, Cade',
      base: 'Tonka Bean, Vetiver, Woody Velvet, Ambroxan',
    },
  },
  {
    id: 'monolith',
    name: 'Monolith',
    descriptor: 'Sweet & Spicy',
    image: '/images/monolith.jpg',
    notes: {
      top: 'Pink Pepper, Juniper, Violet',
      middle: 'Toffee, Cinnamon, Lavender, Sage',
      base: 'Vanilla, Amber, Tonka Bean, Musk, Ambroxan',
    },
  },
];

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });
  const [showNotes, setShowNotes] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="bg-[#212121] rounded-2xl overflow-hidden flex flex-col"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: EASE,
      }}
    >
      {/* Product Image */}
      <div className="w-full aspect-square relative overflow-hidden flex-shrink-0 bg-[#1a1a1a]">
        <img
          src={product.image}
          alt={`${product.name} Eau de Parfum by Nude Notes`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        {/* Subtle bottom gradient for text legibility */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        {/* EDP badge */}
        <div className="absolute top-3 right-3">
          <span className="text-[8px] tracking-[0.2em] uppercase font-medium bg-black/60 backdrop-blur-sm text-primary/70 px-2 py-1 rounded-full">
            Eau de Parfum
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-primary font-medium text-lg sm:text-xl mb-0.5">{product.name}</h3>
          <p className="text-gray-400 text-xs sm:text-sm">{product.descriptor}</p>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2">
          <span className="line-through text-gray-500 text-sm">₹799</span>
          <span className="text-primary text-xl font-bold">₹399</span>
          <span className="text-gray-500 text-xs">50 ml</span>
        </div>

        {/* Show Details toggle */}
        <button
          id={`toggle-notes-${product.id}`}
          onClick={() => setShowNotes(s => !s)}
          className="self-start border border-primary/40 rounded-full px-4 py-1.5 text-primary text-xs sm:text-sm font-light transition-all duration-200 hover:border-primary/70 hover:bg-primary/5"
        >
          {showNotes ? 'Hide Details' : 'Show Details'}
        </button>

        {/* Collapsible Notes Panel */}
        <AnimatePresence>
          {showNotes && (
            <motion.div
              key="notes"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/5 pt-3 space-y-2.5">
                {[
                  { label: 'Top Notes', value: product.notes.top },
                  { label: 'Middle Notes', value: product.notes.middle },
                  { label: 'Base Notes', value: product.notes.base },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col gap-0.5">
                    <span className="text-primary/70 text-xs font-medium tracking-wide uppercase">
                      {row.label}
                    </span>
                    <span className="text-gray-300 text-sm leading-relaxed">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Buy on Instagram */}
        <a
          id={`buy-instagram-${product.id}`}
          href="https://www.instagram.com/nudenotesperfume"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary rounded-full py-3 font-medium text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
          style={{ color: '#000000' }}
        >
          <InstagramIcon size={16} />
          Buy on Instagram
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="min-h-screen bg-black relative overflow-hidden py-16 md:py-24 px-4 md:px-6">
      {/* Noise background */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Three Fragrances. One Language.',
                  className: 'text-primary',
                },
                {
                  text: 'Wear what you feel.',
                  className: 'text-gray-500',
                },
              ]}
              wrapperClassName="flex-col"
            />
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
