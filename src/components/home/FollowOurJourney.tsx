import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { STUDIO_INFO } from '../../data/siteData';
import { FOLLOW_JOURNEY_PHOTOS } from '../../data/homeSections';

export const FollowOurJourney: React.FC = () => (
  <section className="overflow-hidden bg-[#372629] text-[#fff8f6]" aria-labelledby="follow-journey-heading">
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 font-sans-ui text-[10px] uppercase tracking-[0.22em] text-[#f0bcc7] sm:text-xs">Bella Beauty Brazil · Instagram</p>
          <h2 id="follow-journey-heading" className="font-serif-editorial text-5xl tracking-tight sm:text-6xl md:text-7xl">Follow Our Journey</h2>
          <p className="mt-4 max-w-xl font-sans-ui text-sm leading-7 text-[#fff8f6]/70 sm:text-base">
            Discover more of Livia’s beauty work and follow the studio on its official profile.
          </p>
        </div>
        <a
          href={STUDIO_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-12 w-fit items-center gap-3 rounded-full border border-[#f0bcc7]/45 bg-[#f0bcc7] px-6 py-3 font-sans-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-[#372629] transition-colors hover:bg-[#fff8f6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0bcc7]"
        >
          <Instagram size={15} aria-hidden="true" />
          Follow on Instagram
          <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </div>

      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12">
        {FOLLOW_JOURNEY_PHOTOS.map((photo, index) => {
          const layout = ['lg:col-span-5', 'lg:col-span-3 lg:mt-12', 'lg:col-span-4 lg:mt-5'][index];
          return (
            <figure key={photo.src} className={`${layout} overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#2b1b20]`}>
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 40vw"
                className="block h-auto w-full"
              />
            </figure>
          );
        })}
      </div>
      <p className="mt-5 font-sans-ui text-[10px] leading-5 text-[#fff8f6]/50">
        Photos shown here are from Bella Beauty Brazil’s official website; this section is not a live Instagram feed.
      </p>
    </div>
  </section>
);
