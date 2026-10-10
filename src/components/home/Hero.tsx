import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface HeroProps { onOpenBooking: () => void; }

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => (
  <section className="relative w-full pt-[72px] sm:pt-[84px] bg-[#372629] px-3 sm:px-6 md:px-8">
    <div className="relative w-full max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden min-h-[580px] sm:min-h-[680px] md:min-h-[760px] lg:min-h-[820px] flex flex-col justify-between items-center text-center p-6 sm:p-10 md:p-14 shadow-2xl">
      <div className="absolute inset-0 z-0">
        <img src="https://framerusercontent.com/images/MgH1LqWGcuYwc9KEvYMkznZmlw.webp" alt="Beauty portrait in the Bella Beauty Brazil homepage design" className="w-full h-full object-cover object-[center_32%] sm:object-[center_28%] scale-105 transition-transform duration-1000 ease-out" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#372629]/15 via-transparent to-[#372629]/40" />
      </div>
      <div className="relative z-10 w-full pt-8 sm:pt-12" />
      <div className="relative z-10 flex flex-col items-center justify-center my-auto px-4 max-w-4xl">
        <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-sans-ui text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[0.04em] text-[#372629] leading-tight drop-shadow-sm">Enhancing Beauty,</motion.h2>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="font-serif-editorial italic text-5xl sm:text-7xl md:text-8xl lg:text-[100px] text-[#372629] -mt-1 sm:-mt-3 tracking-tight leading-[0.98] drop-shadow-sm font-normal">Empowering Confidence.</motion.h1>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} className="mt-6 sm:mt-8 md:mt-10">
          <button onClick={onOpenBooking} className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#372629] text-[#fff8f6] font-sans-ui text-xs sm:text-sm font-medium tracking-wide shadow-xl hover:bg-[#4c3438] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
            <span className="w-5 h-5 rounded-full border border-[#fff8f6]/30 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300"><Sparkles size={11} className="text-[#d6929e]" /></span>
            <span>Book Your Session</span>
          </button>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative z-10 pb-2 sm:pb-3">
        <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#372629]/80 backdrop-blur-md text-[11px] sm:text-xs text-[#fff8f6]/95 font-sans-ui border border-[#704951]/60 tracking-wide">Greenslopes · Brisbane, QLD</div>
      </motion.div>
    </div>
  </section>
);
