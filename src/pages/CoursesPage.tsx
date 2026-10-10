import React from 'react';
import { Calendar, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { COURSE_OPTIONS, SERVICE_PAGES, STUDIO_INFO } from '../data/siteData';
import { FAQ } from '../components/home/FAQ';
import type { FAQItem } from '../types';

interface CoursesPageProps { onNavigate: (path: string) => void; onOpenBooking: () => void; }
const formatAud = (amount: number) => `A$${amount.toLocaleString('en-AU')}`;

const courseFaqs: FAQItem[] = [
  { question: 'What courses are currently listed?', answer: 'The four course titles, durations and prices on this page are transcribed from the official Timely catalogue. Confirm availability with Livia before booking.' },
  { question: 'Are the prices and dates fixed?', answer: 'Prices shown were checked against Timely on 10 October 2026. Course dates, availability and any later price changes should be confirmed on Timely.' },
  { question: 'Can I compare the brow techniques first?', answer: 'Yes. The service pages compare the published descriptions of Nano Strokes, Microblading and Shadow / Hybrid Brows; course content and suitability should be confirmed with Livia.' },
  { question: 'Where is the studio?', answer: `Bella Beauty Brazil is located at ${STUDIO_INFO.address}.` },
];

export const CoursesPage: React.FC<CoursesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const course = SERVICE_PAGES.find((item) => item.slug === 'training-courses')!;
  return (
    <div className="w-full bg-[#372629] pt-24 text-[#fff8f6] sm:pt-28">
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <span className="font-sans-ui text-xs uppercase tracking-wider text-[#f0bcc7]/85">(Courses)</span>
          <h1 className="mt-3 font-serif-editorial text-5xl leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">Training & Courses</h1>
          <p className="mt-6 max-w-xl font-sans-ui text-base leading-relaxed text-[#fff8f6]/80 sm:text-lg">Four one-to-one course listings are currently shown on Bella Beauty Brazil’s official Timely catalogue. Confirm course availability, content and any changes with Livia before booking.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${STUDIO_INFO.email}?subject=${encodeURIComponent('Training and courses enquiry')}`} className="inline-flex items-center gap-2 rounded-full bg-[#fff8f6] px-6 py-3.5 font-sans-ui text-xs font-semibold uppercase tracking-wider text-[#372629] hover:bg-[#d6929e]"><Mail size={14} />Ask Livia</a>
            <button onClick={onOpenBooking} className="inline-flex items-center gap-2 rounded-full border border-[#704951] px-6 py-3.5 font-sans-ui text-xs font-semibold uppercase tracking-wider text-[#fff8f6] hover:bg-[#2b1b20]"><Calendar size={14} />Open Timely</button>
          </div>
        </div>
        <div className="aspect-[4/5] max-h-[660px] overflow-hidden rounded-[32px] border border-[#704951]/35 shadow-2xl lg:col-span-6"><img src={course.heroImage} alt="Training and course image published on Bella Beauty Brazil’s official website" className="h-full w-full object-cover" fetchPriority="high" /></div>
      </section>

      <section className="border-y border-[#704951]/30 bg-[#2b1b20] px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-3xl"><span className="font-sans-ui text-xs uppercase tracking-wider text-[#f0bcc7]/80">(Official Timely menu · AUD)</span><h2 className="mt-3 font-serif-editorial text-3xl sm:text-5xl">Current course listings</h2><p className="mt-4 font-sans-ui text-sm leading-relaxed text-[#fff8f6]/70">Fees and durations below match the Timely listings checked on 10 October 2026. Please open Timely to confirm availability and any subsequent changes.</p></div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {COURSE_OPTIONS.map((item, index) => <article key={item.title} className="flex min-h-[17rem] flex-col rounded-3xl border border-[#704951]/40 bg-[#372629] p-6 sm:p-7">
              <span className="font-mono text-xs text-[#f0bcc7]">0{index + 1} · 1:1</span>
              <h3 className="mt-5 font-serif-editorial text-2xl leading-tight sm:text-3xl">{item.title}</h3>
              <p className="mt-3 font-sans-ui text-xs text-[#fff8f6]/65">{item.duration}</p>
              <p className="mt-auto pt-6 font-sans-ui text-2xl font-semibold text-[#f0bcc7]">{formatAud(item.amount)}</p>
              <a href={STUDIO_INFO.bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 border-t border-[#704951]/40 pt-4 font-sans-ui text-[10px] font-semibold uppercase tracking-wider text-[#fff8f6] hover:text-[#f0bcc7]">View on Timely <ExternalLink size={13} /></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#2b1b20] px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">{[
          { title: 'Course content', text: 'Ask which techniques and learning activities are included in the course currently offered.' },
          { title: 'Format and preparation', text: 'Confirm format, prerequisites, kit details and preparation directly with Livia.' },
          { title: 'Dates and availability', text: 'The live Timely page is the place to confirm current availability and appointment details.' },
        ].map((item, index) => <article key={item.title} className="rounded-3xl border border-[#704951]/40 bg-[#372629] p-7"><span className="font-mono text-xs text-[#f0bcc7]">0{index + 1}</span><h2 className="mb-3 mt-4 font-serif-editorial text-2xl sm:text-3xl">{item.title}</h2><p className="font-sans-ui text-sm leading-relaxed text-[#fff8f6]/75">{item.text}</p></article>)}</div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 md:px-10"><div className="mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-1 items-end gap-8 lg:grid-cols-12"><div className="lg:col-span-8"><span className="font-sans-ui text-xs uppercase tracking-wider text-[#f0bcc7]/80">(Compare brow techniques)</span><h2 className="mt-3 font-serif-editorial text-3xl sm:text-5xl">Know the methods you want to ask about</h2><p className="mt-4 max-w-3xl font-sans-ui text-sm text-[#fff8f6]/75">The descriptions below are taken from Bella Beauty Brazil’s public service information. They are not a course syllabus or a recommendation about individual suitability.</p></div><a href={STUDIO_INFO.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-sans-ui text-[#f0bcc7] underline underline-offset-4">Current services on Timely <ExternalLink size={12} className="ml-1 inline" /></a></div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">{course.techniques.map((technique, index) => <article key={technique.name} className="rounded-3xl border border-[#704951]/40 bg-[#2b1b20] p-7"><span className="font-mono text-xs text-[#f0bcc7]">0{index + 1}</span><h3 className="mb-3 mt-4 font-serif-editorial text-2xl">{technique.name}</h3><p className="font-sans-ui text-sm leading-relaxed text-[#fff8f6]/75">{technique.description}</p></article>)}</div>
      </div></section>

      <section className="bg-[#f5e0e3] px-4 py-16 text-[#372629] sm:px-6"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row"><div><h2 className="font-serif-editorial text-3xl sm:text-4xl">Discuss a course enquiry</h2><p className="mt-2 font-sans-ui text-sm text-[#372629]/75">Contact Livia directly for current information.</p></div><a href={`mailto:${STUDIO_INFO.email}?subject=${encodeURIComponent('Training and courses enquiry')}`} className="inline-flex items-center gap-2 rounded-full bg-[#372629] px-6 py-3 text-xs font-sans-ui uppercase tracking-wider text-[#fff8f6]">Email Livia <ArrowRight size={14} /></a><button onClick={() => onNavigate('/contact')} className="text-xs font-sans-ui underline underline-offset-4">Contact & Book page</button></div></section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 md:px-10"><div className="mx-auto max-w-7xl"><h2 className="mb-10 font-serif-editorial text-3xl sm:text-5xl">Course FAQs</h2><FAQ items={courseFaqs} idPrefix="courses-faq" /></div></section>
      <div className="bg-[#211519] py-12 text-center"><button onClick={onOpenBooking} className="rounded-full bg-[#fff8f6] px-8 py-3.5 font-sans-ui text-xs font-semibold uppercase tracking-wider text-[#372629]">Open Timely</button></div>
    </div>
  );
};
