import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { HOME_WORK_PHOTOS } from '../../data/homeSections';

interface OurWorkProps {
  onNavigate: (path: string) => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const isClosed = activeIndex === null;

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
        setActiveIndex((current) => current === null ? 0 : (current + 1) % HOME_WORK_PHOTOS.length);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setActiveIndex((current) => current === null ? HOME_WORK_PHOTOS.length - 1 : (current - 1 + HOME_WORK_PHOTOS.length) % HOME_WORK_PHOTOS.length);
      } else if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled])');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isClosed]);

  const openPhoto = (index: number, trigger: HTMLButtonElement) => {
    restoreFocusRef.current = trigger;
    setActiveIndex(index);
  };

  const previousPhoto = () => setActiveIndex((current) => current === null ? 0 : (current - 1 + HOME_WORK_PHOTOS.length) % HOME_WORK_PHOTOS.length);
  const nextPhoto = () => setActiveIndex((current) => current === null ? 0 : (current + 1) % HOME_WORK_PHOTOS.length);
  const activePhoto = activeIndex === null ? null : HOME_WORK_PHOTOS[activeIndex];

  return (
    <section className="bg-[#f5e0e3] text-[#372629]" aria-labelledby="our-work-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-sans-ui text-[10px] uppercase tracking-[0.22em] text-[#704951] sm:text-xs">A selection from the official website</p>
            <h2 id="our-work-heading" className="font-serif-editorial text-5xl tracking-tight sm:text-6xl md:text-7xl">Our Work</h2>
            <p className="mt-4 max-w-xl font-sans-ui text-sm leading-7 text-[#372629]/75 sm:text-base">
              A closer look at brows, lashes, cosmetic tattooing, facial treatments and studio imagery, using photographs published by Bella Beauty Brazil.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/gallery-reviews')}
            className="group inline-flex min-h-11 w-fit items-center gap-2 border-b border-[#704951]/45 pb-2 font-sans-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-[#372629] transition-colors hover:text-[#704951] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#704951]"
          >
            More Gallery & Reviews <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 xl:columns-3">
          {HOME_WORK_PHOTOS.map((photo, index) => (
            <figure key={photo.src} className="mb-4 break-inside-avoid sm:mb-5">
              <button
                type="button"
                onClick={(event) => openPhoto(index, event.currentTarget)}
                className="block w-full overflow-hidden rounded-[1.35rem] border border-[#704951]/15 bg-[#fff8f6] text-left shadow-[0_12px_40px_rgba(55,38,41,0.08)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#704951]"
                aria-label={`Open photo: ${photo.title}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="block h-auto w-full"
                />
              </button>
              <figcaption className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5">
                <span className="font-serif-editorial text-xl sm:text-2xl">{photo.title}</span>
                <span className="shrink-0 font-sans-ui text-[9px] uppercase tracking-[0.16em] text-[#704951]">View image</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#24191c]/95 p-4 backdrop-blur-sm sm:p-8"
          role="presentation"
          onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo viewer: ${activePhoto.title}`}
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col items-center gap-3"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close image viewer"
              className="absolute -right-1 -top-12 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-[#372629] text-white transition-colors hover:bg-[#704951] sm:right-0 sm:top-0"
            >
              <X size={19} aria-hidden="true" />
            </button>
            <div className="flex min-h-0 w-full items-center justify-center gap-2 sm:gap-5">
              <button type="button" onClick={previousPhoto} aria-label="Previous image" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fff8f6]/10 text-white transition-colors hover:bg-[#fff8f6]/20 sm:h-12 sm:w-12">
                <ChevronLeft size={23} aria-hidden="true" />
              </button>
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                width={activePhoto.width}
                height={activePhoto.height}
                className="max-h-[78vh] min-w-0 max-w-[calc(100%-6rem)] object-contain"
              />
              <button type="button" onClick={nextPhoto} aria-label="Next image" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fff8f6]/10 text-white transition-colors hover:bg-[#fff8f6]/20 sm:h-12 sm:w-12">
                <ChevronRight size={23} aria-hidden="true" />
              </button>
            </div>
            <p className="font-sans-ui text-center text-xs text-[#fff8f6]/85" aria-live="polite">
              {activePhoto.title} · {activeIndex! + 1} of {HOME_WORK_PHOTOS.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
