import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LIVIA_PORTRAIT } from '../../data/homeSections';

interface MeetLiviaProps {
  onNavigate: (path: string) => void;
}

export const MeetLivia: React.FC<MeetLiviaProps> = ({ onNavigate }) => (
  <section className="relative overflow-hidden bg-[#fff8f6] text-[#372629]" aria-labelledby="meet-livia-heading">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
      <div className="relative mx-auto w-full max-w-[470px] lg:mx-0">
        <div className="absolute -left-4 top-10 h-36 w-36 rounded-full bg-[#f0bcc7]/65 blur-3xl sm:-left-8" aria-hidden="true" />
        <figure className="relative overflow-hidden rounded-t-[48%] rounded-b-[1.75rem] border border-[#704951]/15 bg-[#f5e0e3] shadow-[0_25px_80px_rgba(55,38,41,0.13)]">
          <img
            src={LIVIA_PORTRAIT.src}
            alt={LIVIA_PORTRAIT.alt}
            width={LIVIA_PORTRAIT.width}
            height={LIVIA_PORTRAIT.height}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
          />
        </figure>
        <span className="absolute -bottom-4 right-4 rounded-full border border-[#704951]/20 bg-[#fff8f6] px-4 py-2 font-sans-ui text-[10px] uppercase tracking-[0.18em] text-[#704951] shadow-sm sm:right-8">
          Bella Beauty Brazil
        </span>
      </div>

      <div className="max-w-2xl lg:py-8">
        <p className="mb-4 font-sans-ui text-[10px] uppercase tracking-[0.22em] text-[#704951] sm:text-xs">About Livia · Greenslopes</p>
        <h2 id="meet-livia-heading" className="font-serif-editorial text-5xl leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
          Meet Livia
        </h2>
        <div className="mt-7 space-y-5 font-sans-ui text-sm leading-7 text-[#372629]/80 sm:text-base sm:leading-8">
          <p>
            After leaving Brazil in search of new challenges, Livia began a new chapter in Australia. Her career in Brazil was in executive air-cargo sales, supported by a background in foreign trade.
          </p>
          <p>
            She later built a path in the beauty industry and established Bella Beauty Brazil. Livia describes bringing her best to every field she chooses and helping people uncover their own beauty.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('/about')}
          className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-[#372629]/20 bg-[#372629] px-6 py-3 font-sans-ui text-[11px] font-semibold uppercase tracking-[0.12em] text-[#fff8f6] transition-colors hover:bg-[#704951] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#704951]"
        >
          More About Livia
          <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
);
