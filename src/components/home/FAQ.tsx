import React, { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../../data/siteData';
import type { FAQItem } from '../../types';

interface FAQProps { items?: FAQItem[]; idPrefix?: string; }

export const FAQ: React.FC<FAQProps> = ({ items = FAQS, idPrefix = 'home-faq' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const toggle = (index: number) => setOpenIndex((current) => current === index ? null : index);
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full bg-[#d6929e] text-[#372629] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 border-t border-[#b87d88]/30 overflow-hidden">
      {hoveredIndex !== null && items[hoveredIndex]?.previewImage && <div className="hidden lg:block pointer-events-none absolute z-20 w-44 h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#fff8f6]" style={{ left: `${mousePos.x + 24}px`, top: `${mousePos.y - 110}px` }}><img src={items[hoveredIndex].previewImage} alt="" className="w-full h-full object-cover scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#372629]/40 via-transparent to-transparent" /></div>}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4"><span className="text-xs sm:text-sm font-sans-ui tracking-widest uppercase text-[#372629]/75 block">(FAQ)</span><h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08]">Frequently<br />asked<br />questions</h2></div>
          <div className="lg:col-span-7 divide-y divide-[#372629]/20 border-t border-b border-[#372629]/20">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `${idPrefix}-answer-${index}`;
              return <div key={item.question} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} className="py-6 sm:py-7 relative group">
                <button type="button" onClick={() => toggle(index)} aria-expanded={isOpen} aria-controls={answerId} className="w-full flex items-center justify-between text-left group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#372629]">
                  <span className="font-serif-editorial text-xl sm:text-2xl md:text-3xl group-hover:translate-x-1 transition-transform duration-300 pr-6">{item.question}</span>
                  <span className="w-8 h-8 rounded-full border border-[#372629]/35 flex items-center justify-center flex-shrink-0"><span className="sr-only">{isOpen ? 'Hide answer' : 'Show answer'}</span>{isOpen ? <Minus size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}</span>
                </button>
                <div id={answerId} hidden={!isOpen} className="mt-4 pr-10 animate-in slide-in-from-top-2 duration-300"><p className="font-sans-ui text-sm sm:text-base text-[#372629]/85 leading-relaxed max-w-xl">{item.answer}</p></div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
