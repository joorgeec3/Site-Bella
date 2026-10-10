import React from 'react';
import { Calendar } from 'lucide-react';

interface FinalCTAProps { onOpenBooking: () => void; }

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => (
  <section className="relative w-full overflow-hidden bg-[#372629]">
    <div className="relative w-full min-h-[500px] sm:min-h-[580px] md:min-h-[640px] flex items-center justify-center text-center p-6 sm:p-12">
      <div className="absolute inset-0 z-0">
        <img src="https://framerusercontent.com/images/unYVmVFmHjCIL4qowvtUbrgFzSY.webp" alt="Beauty studio interior photograph retained from the original template" className="w-full h-full object-cover object-center" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#372629]/90 via-[#372629]/55 to-[#372629]/70" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-8">
        <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#fff8f6] tracking-tight leading-[1.12]">Ready to find your Bella Beauty Brazil service?</h2>
        <button onClick={onOpenBooking} className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#fff8f6] text-[#372629] font-sans-ui text-xs sm:text-sm font-medium tracking-wide shadow-2xl hover:bg-[#d6929e] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
          <span className="w-4 h-4 rounded-full border border-[#372629]/30 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300"><Calendar size={9} /></span>Book on Timely
        </button>
      </div>
    </div>
  </section>
);
