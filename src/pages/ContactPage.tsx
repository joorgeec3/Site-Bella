import React, { useState } from 'react';
import { Calendar, MapPin, Phone, Mail, ExternalLink, Send } from 'lucide-react';
import { STUDIO_INFO, SERVICE_PAGES } from '../data/siteData';

interface ContactPageProps { onOpenBooking: () => void; }

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [status, setStatus] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `Bella Beauty Brazil enquiry — ${String(data.get('name') ?? '').trim()}`;
    const body = [
      `Name: ${String(data.get('name') ?? '').trim()}`,
      `Email: ${String(data.get('email') ?? '').trim()}`,
      `Service: ${selectedService || 'Not selected'}`,
      '',
      String(data.get('message') ?? '').trim(),
    ].join('\n');
    window.location.href = `mailto:${STUDIO_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app was asked to open with your enquiry. This site does not send or store form entries.');
    form.reset();
    setSelectedService('');
  };

  const fieldClass = 'w-full px-4 py-3 rounded-xl bg-[#372629] border border-[#704951]/55 text-[#fff8f6] text-sm placeholder:text-[#fff8f6]/40 focus:outline-none focus:border-[#d6929e] transition-colors';

  return (
    <div className="w-full bg-[#372629] text-[#fff8f6] pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16">
        <header className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"><span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#f0bcc7]/85 block mb-3">(Contact & Book)</span><h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl tracking-tight leading-tight">Let’s connect</h1><p className="font-sans-ui text-sm sm:text-base text-[#fff8f6]/75 mt-4 max-w-xl mx-auto leading-relaxed">For appointments, check live availability on Timely. For a service or course question, contact Livia directly.</p></header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <section className="lg:col-span-7 bg-[#2b1b20] border border-[#704951]/40 rounded-3xl p-6 sm:p-10 shadow-2xl" aria-labelledby="contact-form-title">
            <h2 id="contact-form-title" className="font-serif-editorial text-3xl sm:text-4xl mb-3">Send an enquiry</h2>
            <p className="font-sans-ui text-sm text-[#fff8f6]/70 mb-8">Your email application will open with the details you enter. The site does not submit or store them.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div><label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-[#f0bcc7]/85 mb-1.5">Name *</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120} className={fieldClass} placeholder="Your name" /></div>
              <div><label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-[#f0bcc7]/85 mb-1.5">Email *</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} placeholder="you@example.com" /></div>
              <div><label htmlFor="contact-service" className="block text-xs uppercase tracking-wider text-[#f0bcc7]/85 mb-1.5">Service or course (optional)</label><select id="contact-service" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className={`${fieldClass} appearance-none`}><option value="" className="bg-[#372629]">Select a topic</option>{SERVICE_PAGES.map((service) => <option key={service.slug} value={service.title} className="bg-[#372629]">{service.title}</option>)}</select></div>
              <div><label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-[#f0bcc7]/85 mb-1.5">How can Livia help? *</label><textarea id="contact-message" name="message" required minLength={5} maxLength={2000} rows={5} className={`${fieldClass} resize-y`} placeholder="Write your question here…" /></div>
              <button type="submit" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#fff8f6] text-[#372629] font-sans-ui text-xs font-semibold tracking-wider uppercase hover:bg-[#d6929e] transition-colors"><Send size={14} />Open email draft</button>
              <p aria-live="polite" role="status" className="text-sm text-[#f0bcc7]">{status}</p>
            </form>
            <div className="mt-7 pt-5 border-t border-[#704951]/35 text-xs text-[#fff8f6]/60">Prefer not to use email? <a className="underline underline-offset-4 hover:text-[#fff8f6]" href={`mailto:${STUDIO_INFO.email}`}>{STUDIO_INFO.email}</a></div>
          </section>
          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#f0bcc7] text-[#372629] p-7 sm:p-8 shadow-xl"><h2 className="font-serif-editorial text-3xl mb-5">Book an appointment</h2><p className="font-sans-ui text-sm leading-relaxed text-[#372629]/80 mb-6">All appointment selections and availability are handled on the official Timely page; this site does not simulate or confirm bookings.</p><button onClick={onOpenBooking} className="w-full py-3.5 rounded-full bg-[#372629] text-[#fff8f6] font-sans-ui text-xs font-semibold uppercase tracking-widest hover:bg-[#4c3438] transition-colors inline-flex items-center justify-center gap-2"><Calendar size={14} />Open Timely booking</button></div>
            <div className="rounded-3xl bg-[#2b1b20] border border-[#704951]/40 p-7 sm:p-8 space-y-6">
              <h2 className="font-serif-editorial text-3xl">Visit the studio</h2>
              <a href={STUDIO_INFO.mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 group"><span className="w-9 h-9 rounded-full bg-[#372629] border border-[#704951]/50 flex items-center justify-center text-[#d6929e] shrink-0"><MapPin size={16} /></span><span className="font-sans-ui text-sm leading-relaxed group-hover:underline">{STUDIO_INFO.address}</span></a>
              <a href={`tel:${STUDIO_INFO.telephoneLink}`} className="flex items-center gap-3 font-sans-ui text-sm hover:underline"><span className="w-9 h-9 rounded-full bg-[#372629] border border-[#704951]/50 flex items-center justify-center text-[#d6929e]"><Phone size={16} /></span>{STUDIO_INFO.phone}</a>
              <a href={`mailto:${STUDIO_INFO.email}`} className="flex items-center gap-3 font-sans-ui text-sm hover:underline break-all"><span className="w-9 h-9 rounded-full bg-[#372629] border border-[#704951]/50 flex items-center justify-center text-[#d6929e] shrink-0"><Mail size={16} /></span>{STUDIO_INFO.email}</a>
              <a href={STUDIO_INFO.bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-sans-ui text-[#f0bcc7] hover:underline underline-offset-4">Timely service menu <ExternalLink size={13} /></a>
            </div>
          </aside>
        </div>
        <section className="mt-16 sm:mt-20" aria-labelledby="studio-map-title"><div className="flex flex-wrap items-end justify-between gap-4 mb-5"><div><span className="text-xs tracking-wider uppercase font-sans-ui text-[#f0bcc7]/80">Greenslopes · Brisbane</span><h2 id="studio-map-title" className="font-serif-editorial text-3xl sm:text-4xl mt-2">Find Bella Beauty Brazil</h2></div><a href={STUDIO_INFO.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#704951] rounded-full text-xs font-sans-ui hover:bg-[#2b1b20]">Open Google Maps <ExternalLink size={13} /></a></div><div className="rounded-3xl overflow-hidden border border-[#704951]/40 min-h-[320px] shadow-xl"><iframe title="Map to Bella Beauty Brazil, Greenslopes" src={STUDIO_INFO.mapEmbedUrl} className="w-full h-[360px] border-0 grayscale contrast-125" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><p className="font-sans-ui text-xs sm:text-sm text-[#fff8f6]/65 mt-4 leading-relaxed">Service area: {STUDIO_INFO.serviceAreas.join(' · ')}.</p></section>
      </div>
    </div>
  );
};
