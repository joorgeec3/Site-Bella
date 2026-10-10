import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface OurArtProps {
  onNavigate: (path: string) => void;
}

export const OurArt: React.FC<OurArtProps> = ({ onNavigate }) => {
  const pills = ['Body', 'Brows', 'Nails', 'Skin'];
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left vertical tray photo subtle parallax glide
      gsap.fromTo(
        leftImageRef.current,
        { y: 60, opacity: 0.8 },
        {
          y: -40,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );

      // Right smaller studio arch photo subtle parallax glide in opposite direction
      gsap.fromTo(
        rightImageRef.current,
        { y: 80, scale: 0.95 },
        {
          y: -30,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 10%',
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#261511] text-[#f2f0e5] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="mb-4 sm:mb-6">
          <span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#dddcb0]/80">
            (Our Art)
          </span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] tracking-tight max-w-5xl mb-16 sm:mb-24 text-[#f2f0e5]">
          A beauty space designed to make you feel good through healthy{' '}
          <span className="relative inline-block underline decoration-[#dddcb0]/60 underline-offset-8 decoration-1 italic">
            skin
          </span>
          , defined brows, perfect nails and smooth body care.
        </h2>

        {/* Asymmetrical Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Large Wooden Tray Photo */}
          <div ref={leftImageRef} className="lg:col-span-5 relative group will-change-transform">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-[#543923]/30">
              <img
                src="https://framerusercontent.com/images/G7i6UOsdVjVL7YT7fV3ZUqfJ4A.jpeg"
                alt="Natural Spa Essentials and Wooden Tray"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Text, About Button, Category Pills, and Studio Photo */}
          <div ref={textContentRef} className="lg:col-span-7 flex flex-col justify-between h-full space-y-12 lg:space-y-16 lg:pl-6">
            {/* Top Concept & About Us Button */}
            <div className="space-y-6 max-w-lg">
              <p className="font-sans-ui text-sm sm:text-base text-[#f2f0e5]/80 leading-relaxed">
                Behind every treatment is a thoughtful approach designed around comfort, beauty and
                intention.
              </p>

              <button
                onClick={() => {
                  onNavigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f2f0e5] text-[#261511] font-sans-ui text-xs font-semibold tracking-wider uppercase hover:bg-[#ffd9a8] transition-all duration-300 cursor-pointer"
              >
                <div className="w-4 h-4 rounded-full border border-[#261511]/30 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <Sparkles size={9} className="text-[#261511]" />
                </div>
                <span>About us</span>
              </button>
            </div>

            {/* 4 Category Pill Tags */}
            <div className="flex flex-wrap gap-2.5 pt-4">
              {pills.map((p) => (
                <span
                  key={p}
                  className="px-5 py-2 rounded-full border border-[#543923]/50 text-xs sm:text-sm font-sans-ui text-[#f2f0e5]/90 bg-[#1e100d]/60 backdrop-blur-sm"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Bottom Right: Architectural Studio Photo */}
            <div ref={rightImageRef} className="pt-4 flex justify-end will-change-transform">
              <div className="w-48 sm:w-60 md:w-68 rounded-2xl overflow-hidden aspect-[4/5] shadow-xl border border-[#543923]/30 group">
                <img
                  src="https://framerusercontent.com/images/JMzqaeUM3iexjgci97MQ7a4kLTc.webp"
                  alt="Oria Studio Archways and Atmosphere"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
