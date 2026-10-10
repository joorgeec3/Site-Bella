import React, { useEffect, useRef } from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../../data/siteData';

gsap.registerPlugin(ScrollTrigger);

interface OurServicesProps { onNavigate: (path: string) => void; onOpenBooking: () => void; }

export const OurServices: React.FC<OurServicesProps> = ({ onNavigate, onOpenBooking }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgOverlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !bgOverlayRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(bgOverlayRef.current, { opacity: 0 }, { opacity: 1, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top 30%', end: 'bottom 80%', scrub: true } });
      gsap.to([titleRef.current, subtitleRef.current], { color: '#372629', ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top 15%', end: 'center 40%', scrub: true } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#372629] text-[#fff8f6] py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div ref={bgOverlayRef} className="absolute inset-0 bg-[#fff8f6] pointer-events-none z-0 opacity-0 will-change-opacity" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14 sm:mb-20">
          <span ref={subtitleRef} className="text-xs sm:text-sm font-sans-ui tracking-widest text-[#f0bcc7]/90 uppercase block mb-3">(Our Services)</span>
          <h2 ref={titleRef} className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl tracking-tight">Where would you like to begin?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <button key={service.id} type="button" onClick={() => { onNavigate(`/services/${service.slug}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }} aria-label={`Explore ${service.title}`} className="group relative text-left rounded-3xl overflow-hidden aspect-[3/4.2] flex flex-col justify-between p-6 shadow-2xl border border-[#704951]/40 cursor-pointer select-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:border-[#d6929e]/70 bg-[#2b1b20]">
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img src={service.heroImage} alt="" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#372629] via-[#372629]/35 to-transparent opacity-95 group-hover:opacity-85 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#372629]/40 via-transparent to-transparent" />
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="inline-block px-3.5 py-1.5 rounded-full text-[10px] font-sans-ui bg-[#fff8f6]/95 text-[#372629] font-semibold backdrop-blur-md shadow">By Livia Rego</span>
                <span className="w-8 h-8 rounded-full bg-[#fff8f6]/20 backdrop-blur-md border border-[#fff8f6]/35 flex items-center justify-center text-[#fff8f6] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"><ArrowUpRight size={14} /></span>
              </div>
              <div className="relative z-10 space-y-2">
                <h3 className="font-serif-editorial text-2xl sm:text-[26px] leading-tight text-[#fff8f6] group-hover:text-[#f0bcc7] transition-colors">{service.title}</h3>
                <p className="font-sans-ui text-xs text-[#fff8f6]/85 line-clamp-3 leading-relaxed">{service.subtitle}</p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#f0bcc7]/90"><span>{service.number}</span><span className="text-[10px] uppercase tracking-wider font-sans-ui opacity-0 group-hover:opacity-100 transition-opacity text-[#f0bcc7]">Explore service →</span></div>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-14 text-center">
          <button onClick={onOpenBooking} className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#372629] text-[#fff8f6] font-sans-ui text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xl hover:bg-[#4c3438] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-[#704951]/50"><span className="w-4 h-4 rounded-full border border-[#fff8f6]/30 flex items-center justify-center"><Calendar size={9} className="text-[#d6929e]" /></span><span>Book on Timely</span></button>
        </div>
      </div>
    </section>
  );
};
