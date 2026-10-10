import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, STUDIO_INFO } from '../../data/siteData';

export const ClientStories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const scroll = (direction: 'left' | 'right') => scrollRef.current?.scrollBy({ left: direction === 'left' ? -380 : 380, behavior: 'smooth' });
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative w-full bg-[#f5e0e3] text-[#372629] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 overflow-hidden cursor-default">
      {isHovered && <div className="hidden md:flex pointer-events-none absolute z-50 w-16 h-16 rounded-full bg-[#372629]/90 text-[#fff8f6] items-center justify-center text-xs font-sans-ui tracking-wider shadow-2xl -translate-x-1/2 -translate-y-1/2" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}>drag</div>}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-sans-ui tracking-widest uppercase text-[#372629]/70 block mb-3">(Client Review & Gallery)</span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl tracking-tight">One published client story</h2>
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={() => scroll('left')} className="w-11 h-11 rounded-full border border-[#372629]/30 flex items-center justify-center hover:bg-[#372629] hover:text-[#f5e0e3] transition-colors" aria-label="Previous stories"><ChevronLeft size={20} /></button>
            <button onClick={() => scroll('right')} className="w-11 h-11 rounded-full border border-[#372629]/30 flex items-center justify-center hover:bg-[#372629] hover:text-[#f5e0e3] transition-colors" aria-label="Next stories"><ChevronRight size={20} /></button>
          </div>
        </div>
        <div ref={scrollRef} className="flex space-x-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {TESTIMONIALS.map((item) => (
            <article key={item.id} className="flex-none w-[300px] sm:w-[360px] md:w-[400px] snap-start">
              {item.cardType === 'image' ? (
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4.2] shadow-lg group border border-[#372629]/10">
                  <img src={item.image} alt="Editorial beauty photograph from the preserved template" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#372629]/55 via-transparent to-[#372629]/20 flex flex-col justify-between p-6"><span className="inline-block self-start px-3.5 py-1.5 rounded-full text-xs font-sans-ui bg-[#fff8f6]/95 text-[#372629] font-medium shadow">{item.tag}</span><span className="text-xs font-mono text-[#fff8f6]/90">{item.number}</span></div>
                </div>
              ) : (
                <div className={`rounded-3xl ${item.cardType === 'review' ? 'bg-[#fff8f6]' : 'bg-[#d6929e]'} text-[#372629] p-8 sm:p-10 min-h-[490px] h-full flex flex-col justify-between shadow-lg border border-[#372629]/10`}>
                  <div>
                    {item.cardType === 'review' && <div className="text-xs font-sans-ui uppercase tracking-widest text-[#704951] mb-5">Published client review</div>}
                    {item.cardType === 'review' ? <blockquote className="font-serif-editorial text-xl sm:text-2xl leading-snug">“{item.quote}”</blockquote> : <h3 className="font-serif-editorial text-3xl sm:text-4xl leading-snug">{item.quote}</h3>}
                    {item.text && <p className="font-sans-ui text-sm text-[#372629]/80 leading-relaxed mt-4">{item.text}</p>}
                  </div>
                  <div className="pt-5 border-t border-[#372629]/15 flex items-center justify-between gap-3">
                    <span className="text-xs font-sans-ui text-[#372629]/75 font-medium">{item.author}</span>
                    {item.sourceUrl && <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="text-xs font-sans-ui text-[#372629] inline-flex items-center gap-1.5 hover:underline underline-offset-4">{item.cardType === 'review' ? 'Source' : 'Open'}<ExternalLink size={12} /></a>}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
        <p className="text-xs text-[#372629]/65 font-sans-ui">The quoted review is published on Bella Beauty Brazil’s official website. Editorial images are retained from the imported template and are not presented as client results.</p>
        <div className="sr-only"><a href={STUDIO_INFO.instagram}>See Bella Beauty Brazil on Instagram</a></div>
      </div>
    </section>
  );
};
