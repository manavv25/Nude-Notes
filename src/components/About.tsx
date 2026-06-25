import { Mail } from 'lucide-react';
import { WordsPullUpMultiStyle } from './WordsPullUp';
import { AnimatedParagraph } from './AnimatedLetter';

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

export default function About() {
  return (
    <section id="about" className="bg-black py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Inner Card */}
        <div
          id="contact"
          className="bg-[#101010] rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 text-center"
        >
          {/* Top Label */}
          <p className="text-primary text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-8 md:mb-12">
            The Brand
          </p>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[92%] sm:max-w-3xl mx-auto leading-[1.05] sm:leading-[0.95] mb-8 md:mb-12">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Nude Notes is a perfume for the unspoken.',
                  className: 'font-normal text-primary',
                },
                {
                  text: 'Crafted for the ones who let scent do the talking.',
                  className: 'font-serif italic text-primary/80',
                },
              ]}
              wrapperClassName="flex-col gap-2"
            />
          </h2>

          {/* Animated Paragraph */}
          <div className="max-w-2xl mx-auto mb-12 md:mb-16">
            <AnimatedParagraph
              text="We believe fragrance is the most intimate form of self-expression. Every bottle is crafted with intention — no noise, no excess. Just the notes that matter."
              className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed"
            />
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-primary/20 mx-auto mb-10 md:mb-14" />

          {/* Contact Details */}
          <div id="contact-links" className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12 scroll-mt-24">
            <a
              id="contact-instagram"
              href="https://www.instagram.com/nudenotesperfume?igsh=ZGRqNHFyZmxyMWQx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-primary/30 rounded-full px-5 py-2.5 text-primary/80 hover:text-primary hover:border-primary/70 transition-all duration-200 text-sm"
            >
              <InstagramIcon size={15} />
              @nudenotesperfume
            </a>

            <a
              id="contact-email"
              href="mailto:nudenotesperfume@gmail.com"
              className="inline-flex items-center gap-2.5 border border-primary/30 rounded-full px-5 py-2.5 text-primary/80 hover:text-primary hover:border-primary/70 transition-all duration-200 text-sm"
            >
              <Mail size={15} />
              nudenotesperfume@gmail.com
            </a>
          </div>

          {/* Footer note */}
          <p className="text-gray-600 text-[10px] sm:text-xs mt-12 md:mt-16 tracking-widest uppercase">
            © 2025 Nude Notes. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
