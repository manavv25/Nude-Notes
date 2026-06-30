"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);

  const handleCanPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 1.25;
    video.play().catch(() => {});
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { videoRef.current?.pause(); return; }

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const section = wrapperRef.current?.parentElement;
    if (!section) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      targetX.current = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 16;
      targetY.current = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 10;
    };

    const tick = () => {
      currentX.current += (targetX.current - currentX.current) * 0.06;
      currentY.current += (targetY.current - currentY.current) * 0.06;
      if (wrapperRef.current) {
        wrapperRef.current.style.transform =
          `scale(1.08) translate3d(${currentX.current}px, ${currentY.current}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    section.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className="relative h-screen overflow-hidden bg-black"
      style={{ height: "100svh" }}
    >

      {/* Video — src directly on element, no <source> child (avoids autoplay bug) */}
      <div
        ref={wrapperRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "scale(1.08)", transformOrigin: "center" }}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={handleCanPlay}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Gradients — left col heavy for text, bottom-up for right text, top vignette for nav */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background: [
            "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.40) 38%, rgba(0,0,0,0.0) 60%)",
            "linear-gradient(to top,   rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.0) 44%)",
            "linear-gradient(to bottom,rgba(0,0,0,0.30) 0%, transparent 20%)",
          ].join(", "),
        }}
      />

      {/* Content anchored to bottom — split left / right */}
      <div className="relative z-20 h-full flex flex-col justify-end">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between
                        gap-5 sm:gap-8
                        px-5 sm:px-10 lg:px-16
                        pb-10 sm:pb-14 lg:pb-16">

          {/* LEFT — large brand name in heavy Playfair */}
          <div
            className="flex-shrink-0"
            style={{
              animation: "heroFadeUp 1s ease forwards",
              opacity: 0,
            }}
          >
            <h1
              className="font-serif text-white font-bold tracking-tight leading-[0.88]"
              style={{ fontSize: "clamp(4rem, 13vw, 10.5rem)" }}
            >
              Nude<br />Notes
            </h1>
          </div>

          {/* RIGHT — description + CTA */}
          <div
            className="flex flex-col items-start sm:items-end gap-4 max-w-xs sm:max-w-[280px] lg:max-w-xs"
            style={{
              animation: "heroFadeUp 0.9s 0.35s ease forwards",
              opacity: 0,
            }}
          >
            <p className="text-white/75 text-sm leading-relaxed font-sans font-light sm:text-right">
              A perfume brand crafted for those who wear scent as a second skin —
              minimal, intentional, and deeply personal.
            </p>

            <Link
              href="/shop"
              className="group inline-flex items-center gap-2.5
                         bg-white text-[#0D0D0D] hover:bg-white/90
                         px-5 py-2.5 rounded-full
                         text-[11px] tracking-[0.18em] uppercase font-sans font-semibold
                         transition-all duration-300"
            >
              Shop Now
              <span className="w-5 h-5 rounded-full bg-[#0D0D0D] flex items-center justify-center
                               group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <ArrowRight size={10} className="text-white" />
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2"
          aria-hidden="true"
          style={{ animation: "heroFadeIn 1s 1.5s ease forwards", opacity: 0 }}
        >
          <div
            className="w-px h-6 bg-gradient-to-b from-white/30 to-transparent mx-auto"
            style={{ animation: "scrollBob 1.8s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
