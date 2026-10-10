import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface OurArtProps { onNavigate: (path: string) => void; }

export const OurArt: React.FC<OurArtProps> = ({ onNavigate }) => {
  const pills = ['Nano Brows', 'Lip Blush', 'Lash Lift', 'Skin'];
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(leftImageRef.current, { y: 60 }, { y: -40, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'bottom 20%', scrub: 1 } });
      gsap.fromTo(rightImageRef.current, { y: 80, scale: 0.95 }, { y: -30, scale: 1, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'bottom 10%', scrub: 1.2 } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#372629] text-[#fff8f6] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 sm:mb-6"><span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#f0bcc7]/85">(Our Art)</span></div>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] tracking-tight max-w-5xl mb-16 sm:mb-24 text-[#fff8f6]">
          Beauty services shaped around brows, lips, lashes and{' '}
          <span className="relative inline-block underline decoration-[#f0bcc7]/70 underline-offset-8 decoration-1 italic">skin</span>.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div ref={leftImageRef} className="lg:col-span-5 relative group will-change-transform">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-[#704951]/35">
              <img src="https://framerusercontent.com/images/G7i6UOsdVjVL7YT7fV3ZUqfJ4A.jpeg" alt="Beauty products arranged on a treatment tray" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-12 lg:space-y-16 lg:pl-6">
            <div className="space-y-6 max-w-lg">
              <p className="font-sans-ui text-sm sm:text-base text-[#fff8f6]/85 leading-relaxed">Livia Rego brings her personal story and beauty experience to appointments at Bella Beauty Brazil in Greenslopes. Each service begins with understanding the look and treatment you have in mind.</p>
              <button onClick={() => { onNavigate('/about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fff8f6] text-[#372629] font-sans-ui text-xs font-semibold tracking-wider uppercase hover:bg-[#d6929e] transition-all duration-300 cursor-pointer">
                <span className="w-4 h-4 rounded-full border border-[#372629]/30 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300"><Sparkles size={9} /></span>About Livia
              </button>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-4">
              {pills.map((pill) => <span key={pill} className="px-5 py-2 rounded-full border border-[#704951]/60 text-xs sm:text-sm font-sans-ui text-[#fff8f6]/90 bg-[#2b1b20]/65 backdrop-blur-sm">{pill}</span>)}
            </div>
            <div ref={rightImageRef} className="pt-4 flex justify-end will-change-transform">
              <div className="w-48 sm:w-60 md:w-68 rounded-2xl overflow-hidden aspect-[4/5] shadow-xl border border-[#704951]/35 group">
                <img src="https://framerusercontent.com/images/JMzqaeUM3iexjgci97MQ7a4kLTc.webp" alt="Beauty studio interior detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
