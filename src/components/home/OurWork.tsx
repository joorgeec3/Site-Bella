import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { HOME_WORK_PHOTOS } from '../../data/homeSections';

interface OurWorkProps { onNavigate: (path: string) => void; }
type GalleryFilter = 'All' | 'Brows' | 'Cosmetic Tattoo' | 'Lashes' | 'Skin' | 'Studio';
const galleryFilters: Exclude<GalleryFilter, 'All'>[] = ['Brows', 'Cosmetic Tattoo', 'Lashes', 'Skin', 'Studio'];

export const OurWork: React.FC<OurWorkProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All');
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const isClosed = activeIndex === null;
  const visiblePhotos = useMemo(() => activeFilter === 'All' ? HOME_WORK_PHOTOS : HOME_WORK_PHOTOS.filter((photo) => photo.category === activeFilter), [activeFilter]);
  const availableFilters = galleryFilters.filter((filter) => HOME_WORK_PHOTOS.some((photo) => photo.category === filter));

  useEffect(() => {
    if (isClosed) {
      restoreFocusRef.current?.focus();
      restoreFocusRef.current = null;
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setActiveIndex(null);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setActiveIndex((current) => current === null ? 0 : (current + 1) % visiblePhotos.length);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setActiveIndex((current) => current === null ? visiblePhotos.length - 1 : (current - 1 + visiblePhotos.length) % visiblePhotos.length);
      } else if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled])');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isClosed, visiblePhotos]);

  const openPhoto = (index: number, trigger: HTMLButtonElement) => {
    restoreFocusRef.current = trigger;
    setActiveIndex(index);
  };
  const previousPhoto = () => setActiveIndex((current) => current === null ? 0 : (current - 1 + visiblePhotos.length) % visiblePhotos.length);
  const nextPhoto = () => setActiveIndex((current) => current === null ? 0 : (current + 1) % visiblePhotos.length);
  const activePhoto = activeIndex === null ? null : visiblePhotos[activeIndex];

  const chooseFilter = (filter: GalleryFilter, trigger: HTMLButtonElement) => {
    restoreFocusRef.current = trigger;
    setActiveIndex(null);
    setActiveFilter(filter);
  };

  return (
    <section className="bg-[#f5e0e3] text-[#372629]" aria-labelledby="our-work-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-sans-ui text-[10px] uppercase tracking-[0.22em] text-[#704951] sm:text-xs">A selection from the official website</p>
            <h2 id="our-work-heading" className="font-serif-editorial text-5xl tracking-tight sm:text-6xl md:text-7xl">Our Work</h2>
            <p className="mt-4 max-w-xl font-sans-ui text-sm leading-7 text-[#372629]/75 sm:text-base">A closer look at brows, lashes, cosmetic tattooing, facial treatments and studio imagery, using photographs published by Bella Beauty Brazil.</p>
          </div>
          <button type="button" onClick={() => onNavigate('/gallery-reviews')} className="group inline-flex min-h-11 w-fit items-center gap-2 border-b border-[#704951]/45 pb-2 font-sans-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-[#372629] transition-colors hover:text-[#704951] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#704951]">
            More Gallery & Reviews <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </div>

        <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter work by category">
          {(['All', ...availableFilters] as GalleryFilter[]).map((filter) => <button key={filter} type="button" aria-pressed={activeFilter === filter} onClick={(event) => chooseFilter(filter, event.currentTarget)} className={`min-h-10 rounded-full border px-4 py-2 font-sans-ui text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#704951] ${activeFilter === filter ? 'border-[#372629] bg-[#372629] text-[#fff8f6]' : 'border-[#704951]/35 bg-transparent text-[#372629] hover:bg-[#fff8f6]/70'}`}>
            {filter}
          </button>)}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3" aria-live="polite">
          {visiblePhotos.map((photo, index) => <figure key={photo.src} className="overflow-hidden rounded-[1.35rem] border border-[#704951]/15 bg-[#fff8f6] shadow-[0_12px_40px_rgba(55,38,41,0.08)]">
            <button type="button" onClick={(event) => openPhoto(index, event.currentTarget)} className="group block w-full overflow-hidden bg-[#372629]/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#704951]" aria-label={`Open photo: ${photo.title}`}>
              <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="block aspect-[4/5] h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]" />
            </button>
            <figcaption className="flex min-h-[4.5rem] items-center justify-between gap-3 px-4 py-3.5 sm:px-5">
              <span className="font-serif-editorial text-xl sm:text-2xl">{photo.title}</span>
              <span className="shrink-0 font-sans-ui text-[9px] uppercase tracking-[0.16em] text-[#704951]">View image</span>
            </figcaption>
          </figure>)}
        </div>
      </div>

      {activePhoto && activeIndex !== null && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#24191c]/95 p-4 backdrop-blur-sm sm:p-8" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
        <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={`Photo viewer: ${activePhoto.title}`} className="relative flex max-h-[92vh] w-full max-w-6xl flex-col items-center gap-3">
          <button ref={closeButtonRef} type="button" onClick={() => setActiveIndex(null)} aria-label="Close image viewer" className="absolute -right-1 -top-12 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-[#372629] text-white transition-colors hover:bg-[#704951] sm:right-0 sm:top-0"><X size={19} aria-hidden="true" /></button>
          <div className="flex min-h-0 w-full items-center justify-center gap-2 sm:gap-5">
            <button type="button" onClick={previousPhoto} aria-label="Previous image" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fff8f6]/10 text-white transition-colors hover:bg-[#fff8f6]/20 sm:h-12 sm:w-12"><ChevronLeft size={23} aria-hidden="true" /></button>
            <img src={activePhoto.src} alt={activePhoto.alt} width={activePhoto.width} height={activePhoto.height} className="max-h-[78vh] min-w-0 max-w-[calc(100%-6rem)] object-contain" />
            <button type="button" onClick={nextPhoto} aria-label="Next image" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fff8f6]/10 text-white transition-colors hover:bg-[#fff8f6]/20 sm:h-12 sm:w-12"><ChevronRight size={23} aria-hidden="true" /></button>
          </div>
          <p className="text-center font-sans-ui text-xs text-[#fff8f6]/85" aria-live="polite">{activePhoto.title} · {activeIndex + 1} of {visiblePhotos.length}</p>
        </div>
      </div>}
    </section>
  );
};
