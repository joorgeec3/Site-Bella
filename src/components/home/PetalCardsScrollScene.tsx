import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PetalCard } from '../PetalShape';
import { PETAL_SERVICES } from '../../data/siteData';

gsap.registerPlugin(ScrollTrigger);

interface PetalCardsScrollSceneProps {
  onNavigate: (path: string) => void;
}

export const PetalCardsScrollScene: React.FC<PetalCardsScrollSceneProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsWrapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const centerSlitGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !stageRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cardElements = gsap.utils.toArray<HTMLElement>('.floating-petal-item');

      // Set initial positions for cards: start well below the viewport
      gsap.set(cardElements, {
        y: '120vh',
        opacity: 0,
        scale: 0.9,
      });

      // Master scrub timeline pinned for 450vh virtual scroll distance
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=420%',
          pin: stageRef.current,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // 1. Initial State: Title and backdrop visible, subtle floating effect on title
      masterTl.to(titleRef.current, {
        scale: 1.05,
        opacity: 0.95,
        duration: 0.8,
        ease: 'none',
      }, 0);

      // 2. Sequential Floating Cards entry at staggered horizontal trajectories:
      // Card 0: Brow & Lash Studio (left ~8%)
      // Card 1: Signature Nail Services (center-left ~48%)
      // Card 2: Smooth Skin (right ~76%)
      // Card 3: Wellness Escape (left-mid ~22%)
      // Card 4: Body Rituals (center-right ~62%)

      const cardTimings = [
        { enter: 0.10, center: 0.44, exit: 0.72 },
        { enter: 0.15, center: 0.46, exit: 0.75 },
        { enter: 0.20, center: 0.48, exit: 0.78 },
        { enter: 0.25, center: 0.52, exit: 0.81 },
        { enter: 0.30, center: 0.56, exit: 0.85 },
      ];

      cardElements.forEach((el, index) => {
        const t = cardTimings[index] || { enter: 0.2, center: 0.5, exit: 0.8 };

        // Enter from bottom to center
        masterTl.fromTo(
          el,
          { y: '125vh', opacity: 0, scale: 0.92 },
          {
            y: '0vh',
            opacity: 1,
            scale: 1,
            duration: t.center - t.enter,
            ease: 'power1.out',
          },
          t.enter
        );

        // Continue floating from center to exit top
        masterTl.to(
          el,
          {
            y: '-135vh',
            opacity: 0.85,
            scale: 0.96,
            duration: t.exit - t.center,
            ease: 'power1.in',
          },
          t.center
        );
      });

      // Fade title slightly as center split approaches
      masterTl.to(titleRef.current, {
        opacity: 0,
        y: '-30px',
        duration: 0.2,
        ease: 'power2.in',
      }, 0.78);

      // 3. Center Split Reveal Transition (16s - 17.5s in video)
      // A narrow central slit appears and widens, splitting the photo curtains left and right
      masterTl.fromTo(
        centerSlitGlowRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.04, ease: 'none' },
        0.80
      );

      // Left curtain slides away to the left
      masterTl.to(
        leftCurtainRef.current,
        {
          xPercent: -101,
          ease: 'power2.inOut',
          duration: 0.18,
        },
        0.82
      );

      // Right curtain slides away to the right
      masterTl.to(
        rightCurtainRef.current,
        {
          xPercent: 101,
          ease: 'power2.inOut',
          duration: 0.18,
        },
        0.82
      );

      // Fade out the slit glow as curtains open fully
      masterTl.to(
        centerSlitGlowRef.current,
        {
          opacity: 0,
          duration: 0.06,
          ease: 'none',
        },
        0.92
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#f2f0e5] z-10">
      {/* Pinned Stage filling viewport */}
      <div
        ref={stageRef}
        className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#f2f0e5]"
      >
        {/* UNDERNEATH LAYER: Revealed cream background during center split */}
        <div className="absolute inset-0 z-0 bg-[#f2f0e5] flex flex-col items-center justify-center text-center p-8 select-none">
          <span className="text-xs sm:text-sm font-sans-ui tracking-widest text-[#261511]/60 uppercase mb-3">
            (Our Approach)
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#261511] tracking-tight max-w-4xl leading-tight">
            A beauty experience designed around you
          </h2>
        </div>

        {/* LEFT CURTAIN OF BRONZE SKIN PHOTO */}
        <div
          ref={leftCurtainRef}
          className="absolute top-0 left-0 bottom-0 w-1/2 overflow-hidden z-10 pointer-events-none will-change-transform"
        >
          <div className="relative w-[100vw] h-full">
            <img
              src="https://framerusercontent.com/images/q26sTAGEcAqZjQPZ32vNLXAPOOA.webp"
              alt="Skin macro texture left"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#261511]/25 mix-blend-multiply" />
          </div>
        </div>

        {/* RIGHT CURTAIN OF BRONZE SKIN PHOTO */}
        <div
          ref={rightCurtainRef}
          className="absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden z-10 pointer-events-none will-change-transform"
        >
          <div className="relative w-[100vw] h-full -translate-x-1/2">
            <img
              src="https://framerusercontent.com/images/q26sTAGEcAqZjQPZ32vNLXAPOOA.webp"
              alt="Skin macro texture right"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#261511]/25 mix-blend-multiply" />
          </div>
        </div>

        {/* CENTER SLIT GLOW EFFECT (opens along the vertical dividing axis) */}
        <div
          ref={centerSlitGlowRef}
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 sm:w-2 bg-[#f2f0e5] shadow-[0_0_24px_rgba(242,240,229,0.8)] z-20 pointer-events-none"
        />

        {/* CENTRAL EDITORIAL STATEMENT (Invest in The Way You Feel) */}
        <div
          ref={titleRef}
          className="absolute z-20 max-w-4xl mx-auto px-6 text-center select-none pointer-events-none drop-shadow-md"
        >
          <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f2f0e5] tracking-tight leading-[1.1] mb-2 sm:mb-4">
            Invest in The Way You Feel.
          </h2>
          <p className="font-serif-editorial italic text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f2f0e5]/90 tracking-tight font-normal">
            Self-care is never just about beauty.
          </p>
        </div>

        {/* 5 FLOATING 4-PETAL CARDS OVER THE BRONZE PHOTO BACKDROP */}
        <div
          ref={cardsWrapRef}
          className="absolute inset-0 z-30 pointer-events-none overflow-hidden"
        >
          {PETAL_SERVICES.map((item, index) => {
            // Horizontal and vertical calibrated anchor positions from video 00:14
            const horizontalStyles = [
              { left: '50%', top: '20%' },  // 0: Brow & Lash Studio (top-center)
              { left: '16%', top: '38%' },  // 1: Signature Nail Services (left)
              { left: '84%', top: '40%' },  // 2: Smooth Skin (right)
              { left: '68%', top: '64%' },  // 3: Wellne Escap (center-right)
              { left: '26%', top: '78%' },  // 4: Body Rituals (bottom-left)
            ];
            const pos = horizontalStyles[index] || { left: '50%', top: '50%' };

            return (
              <div
                key={item.id}
                className="floating-petal-item absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: pos.left,
                  top: pos.top,
                }}
              >
                <PetalCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  bg="#261511"
                  textColor="#dddcb0"
                  onClick={() => {
                    onNavigate(item.link);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
