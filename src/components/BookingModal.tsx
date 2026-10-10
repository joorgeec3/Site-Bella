import React from 'react';
import { Calendar, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/siteData';

interface BookingModalProps { isOpen: boolean; onClose: () => void; }

/** Compatibility wrapper for legacy callers: booking is completed only by the official Timely service. */
export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-[#1d1317]/80 backdrop-blur-sm flex items-center justify-center p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="booking-modal-title" className="relative w-full max-w-md rounded-3xl bg-[#2b1b20] border border-[#704951]/50 p-7 sm:p-9 shadow-2xl text-[#fff8f6]">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 w-9 h-9 rounded-full border border-[#704951]/50 flex items-center justify-center hover:bg-[#372629]" aria-label="Close"><X size={16} /></button>
        <h2 id="booking-modal-title" className="font-serif-editorial text-3xl pr-10">Book with Bella Beauty Brazil</h2>
        <p className="font-sans-ui text-sm text-[#fff8f6]/75 leading-relaxed mt-4">Appointments, availability and confirmations are managed by Bella Beauty Brazil on Timely. This site does not collect or confirm booking requests.</p>
        <a href={STUDIO_INFO.bookingUrl} target="_blank" rel="noreferrer" className="mt-7 w-full py-3.5 rounded-full bg-[#fff8f6] text-[#372629] font-sans-ui text-xs font-semibold uppercase tracking-widest hover:bg-[#d6929e] transition-colors inline-flex items-center justify-center gap-2"><Calendar size={14} />Open Timely booking</a>
      </section>
    </div>
  );
};
