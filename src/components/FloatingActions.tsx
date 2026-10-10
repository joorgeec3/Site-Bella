import React, { useEffect, useState } from 'react';
import { CalendarDays, MessageCircle, ChevronUp } from 'lucide-react';
import { STUDIO_INFO } from '../data/siteData';

const whatsappMessage = 'Hello Bella Beauty Brazil, I would like to ask about an appointment. Could you please help me with availability and services?';
const whatsappHref = `https://wa.me/${STUDIO_INFO.telephoneLink.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

export const FloatingActions: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [overlapsContent, setOverlapsContent] = useState(false);

  useEffect(() => {
    let frame = 0;
    const syncState = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setHasScrolled(window.scrollY > 420);
        const inViewport = (element: Element | null) => {
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom > 0;
        };
        const scene = document.querySelector('section[aria-label="Five signature services and our approach"]');
        setOverlapsContent(inViewport(scene) || inViewport(document.querySelector('footer')));
      });
    };
    syncState();
    window.addEventListener('scroll', syncState, { passive: true });
    window.addEventListener('resize', syncState);
    return () => {
      window.removeEventListener('scroll', syncState);
      window.removeEventListener('resize', syncState);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  if (overlapsContent) return null;

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <nav aria-label="Quick actions" className="fixed bottom-4 right-3 z-40 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with Bella Beauty Brazil on WhatsApp" title="WhatsApp" className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-[#f0bcc7]/45 bg-[#372629] text-[#f0bcc7] shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:bg-[#4c3438] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f0bcc7]"><MessageCircle size={19} aria-hidden="true" /></a>
      {hasScrolled && <button type="button" onClick={scrollToTop} aria-label="Back to top" title="Back to top" className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-[#372629]/15 bg-[#fff8f6] text-[#372629] shadow-lg shadow-black/15 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#704951]"><ChevronUp size={19} aria-hidden="true" /></button>}
      <a href={STUDIO_INFO.bookingUrl} target="_blank" rel="noopener noreferrer" className="pointer-events-auto inline-flex min-h-11 items-center gap-2 rounded-full border border-[#fff8f6]/30 bg-[#f0bcc7] px-4 py-2.5 font-sans-ui text-[10px] font-semibold uppercase tracking-[0.1em] text-[#372629] shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:bg-[#fff8f6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f0bcc7]"><CalendarDays size={15} aria-hidden="true" />Book Now</a>
    </nav>
  );
};
