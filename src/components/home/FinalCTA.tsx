import React from 'react';
import { Calendar } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#261511]">
      <div className="relative w-full min-h-[500px] sm:min-h-[580px] md:min-h-[640px] flex items-center justify-center text-center p-6 sm:p-12">
        {/* Full-width Studio Interior Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://framerusercontent.com/images/unYVmVFmHjCIL4qowvtUbrgFzSY.webp"
            alt="Oria Studio Interior"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle warm darkening gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#261511]/90 via-[#261511]/50 to-[#261511]/70" />
        </div>

        {/* Center Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#f2f0e5] tracking-tight leading-[1.12]">
            Ready to Feel Like the Best
            <br />
            Version of Yourself?
          </h2>

          <div>
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#f2f0e5] text-[#261511] font-sans-ui text-xs sm:text-sm font-medium tracking-wide shadow-2xl hover:bg-[#ffd9a8] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <div className="w-4 h-4 rounded-full border border-[#261511]/30 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <Calendar size={9} className="text-[#261511]" />
              </div>
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
