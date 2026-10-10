import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/siteData';

export const ClientStories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full bg-[#fadfca] text-[#261511] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 overflow-hidden cursor-default"
    >
      {/* Floating "drag" Cursor Badge as observed in video at 00:22 */}
      {isHovered && (
        <div
          className="hidden md:flex pointer-events-none absolute z-50 w-16 h-16 rounded-full bg-[#261511]/90 text-[#f2f0e5] items-center justify-center text-xs font-sans-ui font-medium tracking-wider shadow-2xl backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        >
          drag
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Section Header with Left Label/Title and Right Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-sans-ui tracking-widest uppercase text-[#261511]/70 block mb-3">
              (Client Stories)
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl text-[#261511] tracking-tight">
              Experiences shared by our clients
            </h2>
          </div>

          {/* Slider Arrows */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-[#261511]/25 flex items-center justify-center hover:bg-[#261511] hover:text-[#fadfca] transition-colors cursor-pointer"
              aria-label="Previous stories"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-[#261511]/25 flex items-center justify-center hover:bg-[#261511] hover:text-[#fadfca] transition-colors cursor-pointer"
              aria-label="Next stories"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[300px] sm:w-[360px] md:w-[400px] snap-start"
            >
              {item.isImageCard ? (
                /* Photo Card */
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4.2] shadow-lg group border border-[#261511]/10">
                  <img
                    src={item.image}
                    alt={item.tag || 'Treatment story'}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261511]/50 via-transparent to-[#261511]/20 flex flex-col justify-between p-6">
                    <div>
                      <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-sans-ui bg-[#f2f0e5]/90 text-[#261511] font-medium backdrop-blur-md shadow">
                        {item.tag}
                      </span>
                    </div>
                    {item.number && (
                      <span className="text-xs font-mono text-[#f2f0e5]/90">
                        {item.number}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                /* Text Review Card */
                <div className="rounded-3xl bg-[#f2f0e5] text-[#261511] p-8 sm:p-10 aspect-[3/4.2] flex flex-col justify-between shadow-lg border border-[#261511]/10">
                  <div>
                    {/* 5 Tick/Star marks */}
                    <div className="flex items-center gap-1 mb-6 text-[#543923]">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-3 bg-[#543923] rounded-sm transform rotate-12" />
                      ))}
                    </div>

                    <h3 className="font-serif-editorial text-2xl sm:text-3xl leading-snug text-[#261511] mb-4">
                      "{item.quote}"
                    </h3>

                    <p className="font-sans-ui text-xs sm:text-sm text-[#261511]/75 leading-relaxed">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#261511]/10 flex items-center justify-between">
                    <span className="text-xs font-sans-ui text-[#261511]/60 font-medium">
                      {item.author}
                    </span>
                    <span className="text-xs font-mono text-[#261511]/40">Verified Visit</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
