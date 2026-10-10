import React, { useEffect, useRef } from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../../data/siteData';

gsap.registerPlugin(ScrollTrigger);

interface OurServicesProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const OurServices: React.FC<OurServicesProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgOverlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !bgOverlayRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Background transition from Chocolate to Cream as user scrolls through the cards
      gsap.fromTo(
        bgOverlayRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );

      // Smooth color shift for the headings as the background lightens
      gsap.to([titleRef.current, subtitleRef.current], {
        color: '#261511',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 15%',
          end: 'center 40%',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#261511] text-[#f2f0e5] py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-10 overflow-hidden transition-colors"
    >
      {/* Light Cream background overlay animated via ScrollTrigger */}
      <div
        ref={bgOverlayRef}
        className="absolute inset-0 bg-[#f2f0e5] pointer-events-none z-0 opacity-0 will-change-opacity"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span
            ref={subtitleRef}
            className="text-xs sm:text-sm font-sans-ui tracking-widest text-[#dddcb0]/90 uppercase block mb-3 transition-colors"
          >
            (Our Services)
          </span>
          <h2
            ref={titleRef}
            className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl text-[#f2f0e5] tracking-tight transition-colors"
          >
            Where are you in your journey?
          </h2>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              onClick={() => {
                onNavigate(`/services/${s.slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4.2] flex flex-col justify-between p-6 shadow-2xl border border-[#543923]/30 cursor-pointer select-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:border-[#ffd9a8]/60 bg-[#1e100d]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={s.heroImage}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                {/* Refined gradient overlay for editorial elegance */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#261511] via-[#261511]/35 to-transparent opacity-95 group-hover:opacity-85 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#261511]/40 via-transparent to-transparent" />
              </div>

              {/* Top Tag & Hover Explore Indicator */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-sans-ui bg-[#f2f0e5]/90 text-[#261511] font-semibold backdrop-blur-md shadow transition-transform duration-300 group-hover:bg-[#ffd9a8]">
                  {s.startingPrice}
                </span>

                <div className="w-8 h-8 rounded-full bg-[#f2f0e5]/20 backdrop-blur-md border border-[#f2f0e5]/30 flex items-center justify-center text-[#f2f0e5] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 space-y-2">
                <h3 className="font-serif-editorial text-2xl sm:text-[26px] leading-tight text-[#f2f0e5] group-hover:text-[#ffd9a8] transition-colors">
                  {s.title}
                </h3>
                <p className="font-sans-ui text-xs text-[#f2f0e5]/80 line-clamp-2 leading-relaxed">
                  {s.subtitle}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#dddcb0]/90">
                  <span>{s.number}</span>
                  <span className="text-[10px] uppercase tracking-wider font-sans-ui opacity-0 group-hover:opacity-100 transition-opacity text-[#ffd9a8]">
                    Explore Service →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered Book Now Button */}
        <div className="mt-14 sm:mt-18 text-center">
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#261511] text-[#f2f0e5] font-sans-ui text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xl hover:bg-[#3d2019] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-[#543923]/40"
          >
            <div className="w-4 h-4 rounded-full border border-[#f2f0e5]/30 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <Calendar size={9} className="text-[#ffd9a8]" />
            </div>
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};
