import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PetalCard } from '../PetalShape';
import { PETAL_SERVICES } from '../../data/siteData';

gsap.registerPlugin(ScrollTrigger);

interface PetalCardsScrollSceneProps { onNavigate: (path: string) => void; }

const anchors = [
  { left: '15%', top: '28%' },
  { left: '33%', top: '63%' },
  { left: '52%', top: '31%' },
  { left: '70%', top: '66%' },
  { left: '86%', top: '34%' },
];
const bandClosed = 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
const bandOpen = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';

export const PetalCardsScrollScene: React.FC<PetalCardsScrollSceneProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLElement>(null);
  const leftPhotoRef = useRef<HTMLDivElement>(null);
  const rightPhotoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const revealBandRef = useRef<HTMLDivElement>(null);
  const approachRevealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !leftPhotoRef.current || !rightPhotoRef.current || !revealBandRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // Native sticky keeps the viewport stage in place; the scroll distance is the timeline.
      gsap.set(container, { height: '500vh' });
      const cards = gsap.utils.toArray<HTMLElement>('.floating-petal-item', container);
      gsap.set(cards, { y: '120vh', force3D: true, willChange: 'transform' });
      gsap.set([leftPhotoRef.current, rightPhotoRef.current], { clipPath: 'inset(0 0% 0 0%)', willChange: 'clip-path' });
      gsap.set(revealBandRef.current, { clipPath: bandClosed, willChange: 'clip-path' });
      gsap.set(approachRevealRef.current, { clipPath: bandClosed, willChange: 'clip-path' });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.45,
          invalidateOnRefresh: true,
          fastScrollEnd: false,
        },
      });

      // Each four-petal card travels all the way up through the clipped viewport.
      // The start offsets are distinct and staggered; reverse scrolling rewinds the same timeline.
      cards.forEach((card, index) => {
        timeline.fromTo(card,
          { y: '120vh' },
          { y: '-145vh', duration: 0.20, ease: 'none' },
          0.02 + index * 0.12,
        );
      });

      // Move the editorial line out of frame rather than fading it away.
      timeline.to(titleRef.current, { y: '-108vh', duration: 0.09, ease: 'none' }, 0.70);

      // A pale vertical opening grows horizontally from the centre while the photo halves
      // are clipped away from their shared centre seam; the underlying approach is revealed.
      timeline.to(revealBandRef.current, { clipPath: bandOpen, duration: 0.12, ease: 'none' }, 0.79);
      timeline.to(approachRevealRef.current, { clipPath: bandOpen, duration: 0.12, ease: 'none' }, 0.79);
      timeline.to(leftPhotoRef.current, { clipPath: 'inset(0 100% 0 0%)', duration: 0.15, ease: 'none' }, 0.81);
      timeline.to(rightPhotoRef.current, { clipPath: 'inset(0 0% 0 100%)', duration: 0.15, ease: 'none' }, 0.81);
      timeline.to(revealBandRef.current, { clipPath: bandClosed, duration: 0.10, ease: 'none' }, 0.96);
      timeline.to(approachRevealRef.current, { clipPath: bandClosed, duration: 0.10, ease: 'none' }, 0.96);
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} aria-label="Five signature services and our approach" className="relative w-full min-h-screen bg-[#fff8f6] z-10">
      <div className="sticky top-0 relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#fff8f6]">
        <div className="absolute inset-0 z-0 bg-[#fff8f6] flex flex-col items-center justify-center text-center p-8 select-none">
          <span className="text-xs sm:text-sm font-sans-ui tracking-widest text-[#372629]/70 uppercase mb-3">(Our Approach)</span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#372629] tracking-tight max-w-4xl leading-tight">A beauty experience designed around you</h2>
        </div>

        <div ref={leftPhotoRef} className="absolute top-0 left-0 bottom-0 w-1/2 overflow-hidden z-10 pointer-events-none">
          <div className="relative w-[100vw] h-full">
            <img src="https://framerusercontent.com/images/q26sTAGEcAqZjQPZ32vNLXAPOOA.webp" alt="Macro skin texture forming the first half of the scroll scene" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-[#372629]/20 mix-blend-multiply" />
          </div>
        </div>
        <div ref={rightPhotoRef} className="absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden z-10 pointer-events-none">
          <div className="relative w-[100vw] h-full -translate-x-1/2">
            <img src="https://framerusercontent.com/images/q26sTAGEcAqZjQPZ32vNLXAPOOA.webp" alt="Macro skin texture forming the second half of the scroll scene" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-[#372629]/20 mix-blend-multiply" />
          </div>
        </div>

        <div ref={revealBandRef} className="absolute inset-0 z-20 pointer-events-none bg-[#fff8f6] shadow-[0_0_44px_rgba(255,248,246,0.9)]" aria-hidden="true" />

        <div ref={approachRevealRef} className="absolute inset-0 z-[22] pointer-events-none flex flex-col items-center justify-center bg-transparent text-center px-6 drop-shadow-sm" aria-hidden="true">
          <span className="text-xs sm:text-sm font-sans-ui tracking-widest text-[#372629]/70 uppercase mb-3">(Our Approach)</span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#372629] tracking-tight max-w-4xl leading-tight">A beauty experience designed around you</h2>
        </div>

        <div ref={titleRef} className="absolute z-[21] max-w-4xl mx-auto px-6 text-center select-none pointer-events-none drop-shadow-md">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#fff8f6] tracking-tight leading-[1.1] mb-2 sm:mb-4">Invest in the way you feel.</h2>
          <p className="font-serif-editorial italic text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fff8f6]/95 tracking-tight font-normal">Care that starts with you.</p>
        </div>

        <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
          {PETAL_SERVICES.map((item, index) => {
            const position = anchors[index] ?? { left: '50%', top: '50%' };
            return (
              <div key={item.id} className="floating-petal-item absolute pointer-events-auto -translate-x-1/2 -translate-y-1/2" style={position}>
                <PetalCard title={item.title} description={item.description} bg="#372629" textColor="#fff8f6" onClick={() => { onNavigate(item.link); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="shadow-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
