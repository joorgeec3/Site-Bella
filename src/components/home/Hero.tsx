import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../../data/siteData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full pt-[72px] sm:pt-[84px] bg-[#261511] px-3 sm:px-6 md:px-8">
      {/* Container with rounded border matching original framer frame */}
      <div className="relative w-full max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden min-h-[580px] sm:min-h-[680px] md:min-h-[760px] lg:min-h-[820px] flex flex-col justify-between items-center text-center p-6 sm:p-10 md:p-14 shadow-2xl">
        {/* Background Macro Image with exact Framing */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://framerusercontent.com/images/MgH1LqWGcuYwc9KEvYMkznZmlw.webp"
            alt="Oria Beauty Studio Macro Face"
            className="w-full h-full object-cover object-[center_32%] sm:object-[center_28%] scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle gradient vignette to ensure top text and bottom notch remain pristine */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#261511]/15 via-transparent to-[#261511]/40" />
        </div>

        {/* Top Empty Spacer for balance */}
        <div className="relative z-10 w-full pt-8 sm:pt-12" />

        {/* Center Overlaid Editorial Title */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans-ui text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.06em] text-[#261511] uppercase leading-none drop-shadow-sm"
          >
            ALL IN ONE
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-editorial italic text-5xl sm:text-7xl md:text-8xl lg:text-[110px] text-[#261511] -mt-2 sm:-mt-4 md:-mt-6 tracking-tight leading-none drop-shadow-sm font-normal"
          >
            Beauty Studio
          </motion.h1>

          {/* Book Your Session Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 md:mt-10"
          >
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#261511] text-[#f2f0e5] font-sans-ui text-xs sm:text-sm font-medium tracking-wide shadow-xl hover:bg-[#3d2019] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full border border-[#f2f0e5]/30 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <Sparkles size={11} className="text-[#ffd9a8]" />
              </div>
              <span>Book Your Session</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Studio Operating Hours Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 pb-2 sm:pb-3"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#261511]/70 backdrop-blur-md text-[11px] sm:text-xs text-[#f2f0e5]/90 font-sans-ui border border-[#543923]/40 tracking-wide">
            <span>{STUDIO_INFO.openBadge}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
