import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  delay?: number;
}

export function WordsPullUp({ text, className = '', delay = 0 }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

interface WordSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: WordSegment[];
  wrapperClassName?: string;
  delay?: number;
}

export function WordsPullUpMultiStyle({ segments, wrapperClassName = '', delay = 0 }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

  // Build per-segment word lists so each segment's words can wrap together in a row,
  // while the wrapperClassName (e.g. flex-col) controls stacking between segments.
  let globalWordCount = 0;
  const segmentWordLists = segments.map(seg =>
    seg.text.split(' ').filter(Boolean).map(word => {
      const currentWordCount = globalWordCount++;
      return { word, currentWordCount };
    })
  );

  return (
    <span ref={ref} className={`inline-flex ${wrapperClassName}`}>
      {segments.map((seg, segIdx) => (
        <span
          key={segIdx}
          className={`inline-flex flex-wrap justify-center ${seg.className || ''}`}
        >
          {segmentWordLists[segIdx].map(({ word, currentWordCount }, i) => (
            <span key={i} className="overflow-hidden inline-block mr-[0.25em]">
              <motion.span
                className="inline-block"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{
                  duration: 0.9,
                  delay: delay + currentWordCount * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
