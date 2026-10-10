import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, Calendar, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS, STUDIO_INFO, STUDIO_PILLARS } from '../data/siteData';
import { FinalCTA } from '../components/home/FinalCTA';

interface AboutPageProps { onOpenBooking: () => void; onNavigate: (path: string) => void; }

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onNavigate }) => (
  <div className="w-full bg-[#372629] text-[#fff8f6] pt-24 sm:pt-28">
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
      <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#f0bcc7]/80 block mb-3">(About Me)</span>
        <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] text-[#fff8f6] tracking-tight">The story of Livia Rego</h1>
        <p className="font-sans-ui text-sm sm:text-base text-[#fff8f6]/75 max-w-2xl mx-auto mt-5 leading-relaxed">The person behind Bella Beauty Brazil and its Greenslopes studio.</p>
      </div>
      <div className="rounded-[32px] overflow-hidden aspect-[16/9] max-h-[620px] shadow-2xl border border-[#704951]/30 relative group">
        <img src="https://framerusercontent.com/images/FTyO1xSzp9jTJ8IBXe9Onpcpo60.webp" alt="Beauty studio photograph retained from the imported site design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#372629]/55 via-transparent to-transparent" />
      </div>
    </section>

    <section className="bg-[#2b1b20] py-20 sm:py-28 px-4 sm:px-6 md:px-10 border-t border-b border-[#704951]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4"><span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#f0bcc7]/80 block mb-2">(My story)</span><h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#fff8f6]">From Brazil to beauty in Brisbane</h2></div>
          <div className="lg:col-span-8 space-y-6">
            <img src={STUDIO_INFO.portraitUrl} alt="Livia Rego, pictured on the Bella Beauty Brazil official website" className="w-32 h-40 sm:w-40 sm:h-48 object-cover rounded-2xl border border-[#704951]/40 shadow-lg" loading="lazy" />
            <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl leading-snug text-[#fff8f6]/95">“I am a businesswoman and mother. I am here to give you my best, with all my love and knowledge.”</p>
            <p className="font-sans-ui text-sm sm:text-base text-[#fff8f6]/75 leading-relaxed max-w-3xl">Livia Rego is from Brazil. On Bella Beauty Brazil’s official booking profile she shares that she moved to Australia in search of new challenges after working in executive air-cargo sales and foreign trade. She later began studying beauty, found a new professional direction and opened Bella Beauty Brazil. Her story and the services she offers are presented in her own words on the linked official pages.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={STUDIO_INFO.officialWebsite} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fff8f6] text-[#372629] font-sans-ui text-xs font-semibold uppercase tracking-wider hover:bg-[#d6929e] transition-colors">Official website <ArrowRight size={14} /></a>
              <a href={STUDIO_INFO.bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#704951] text-[#fff8f6] font-sans-ui text-xs font-semibold uppercase tracking-wider hover:bg-[#372629] transition-colors">Timely profile <ArrowRight size={14} /></a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 sm:mt-20">
          {STUDIO_PILLARS.map((pillar, idx) => <article key={pillar.title} className="p-8 rounded-3xl bg-[#372629] border border-[#704951]/30 space-y-3"><span className="text-xs font-mono text-[#f0bcc7]/75">0{idx + 1}</span><h3 className="font-serif-editorial text-2xl text-[#fff8f6]">{pillar.title}</h3><p className="font-sans-ui text-xs sm:text-sm text-[#fff8f6]/75 leading-relaxed">{pillar.description}</p></article>)}
        </div>
      </div>
    </section>

    <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20"><span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#f0bcc7]/80 block mb-3">(Services at the studio)</span><h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#fff8f6] tracking-tight">Bella Beauty Brazil services</h2><p className="font-sans-ui text-sm text-[#fff8f6]/70 mt-4 max-w-2xl mx-auto">These preserved template photos are editorial imagery. Service details are listed on Timely.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((item, i) => <article key={i} className="group rounded-3xl overflow-hidden bg-[#2b1b20] border border-[#704951]/30 shadow-lg"><div className="relative aspect-[3/3.8] overflow-hidden"><img src={item.image} alt={`Editorial beauty photograph accompanying ${item.name}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-[#2b1b20] via-transparent to-transparent" /></div><div className="p-6 text-center space-y-1"><h3 className="font-serif-editorial text-2xl text-[#fff8f6]">{item.name}</h3><p className="font-sans-ui text-xs text-[#f0bcc7]/85">{item.role}</p></div></article>)}
        </div>
        <div className="mt-14 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#2b1b20] to-[#302025] border border-[#704951]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left"><span className="text-xs font-mono text-[#d6929e] uppercase tracking-wider">Training & Courses</span><h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#fff8f6]">Ask Livia about current courses</h3><p className="font-sans-ui text-sm text-[#fff8f6]/75 max-w-xl">Course topics, format, prerequisites, dates and fees are not stated here; contact Livia for current information.</p></div>
          <button onClick={() => onNavigate('/courses')} className="px-8 py-3.5 rounded-full bg-[#fff8f6] text-[#372629] font-sans-ui text-xs font-semibold tracking-wider uppercase hover:bg-[#d6929e] transition-colors flex-shrink-0 inline-flex items-center gap-2">Course information <ArrowRight size={14} /></button>
        </div>
      </div>
    </section>

    <section className="bg-[#211519] py-20 sm:py-28 px-4 sm:px-6 md:px-10 border-t border-[#704951]/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12"><span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#f0bcc7]/80 block mb-2">(Our Contact)</span><h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#fff8f6]">Visit Bella Beauty Brazil</h2></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between"><div className="space-y-6">
            <a href={STUDIO_INFO.mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3.5 group"><span className="w-9 h-9 rounded-full bg-[#372629] border border-[#704951]/50 flex items-center justify-center text-[#d6929e] shrink-0"><MapPin size={16} /></span><span><span className="font-sans-ui block text-xs uppercase tracking-wider text-[#f0bcc7]/80 font-medium mb-1">Location</span><span className="font-sans-ui text-sm text-[#fff8f6] leading-relaxed group-hover:underline">{STUDIO_INFO.address}</span></span></a>
            <a href={`tel:${STUDIO_INFO.telephoneLink}`} className="flex items-start gap-3.5 group"><span className="w-9 h-9 rounded-full bg-[#372629] border border-[#704951]/50 flex items-center justify-center text-[#d6929e] shrink-0"><Phone size={16} /></span><span><span className="font-sans-ui block text-xs uppercase tracking-wider text-[#f0bcc7]/80 font-medium mb-1">Call</span><span className="font-sans-ui text-sm text-[#fff8f6] group-hover:underline">{STUDIO_INFO.phone}</span></span></a>
            <a href={`mailto:${STUDIO_INFO.email}`} className="flex items-start gap-3.5 group"><span className="w-9 h-9 rounded-full bg-[#372629] border border-[#704951]/50 flex items-center justify-center text-[#d6929e] shrink-0"><Mail size={16} /></span><span><span className="font-sans-ui block text-xs uppercase tracking-wider text-[#f0bcc7]/80 font-medium mb-1">Email</span><span className="font-sans-ui text-sm text-[#fff8f6] group-hover:underline">{STUDIO_INFO.email}</span></span></a>
          </div><button onClick={onOpenBooking} className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#fff8f6] text-[#372629] font-sans-ui text-xs font-semibold tracking-wider uppercase hover:bg-[#d6929e] transition-colors inline-flex items-center justify-center gap-2"><Calendar size={14} />Book on Timely</button></div>
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#704951]/40 min-h-[360px] relative shadow-xl"><iframe title="Map to Bella Beauty Brazil in Greenslopes, Queensland" src={STUDIO_INFO.mapEmbedUrl} className="w-full h-full min-h-[380px] border-0 grayscale contrast-125 opacity-90" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={STUDIO_INFO.mapUrl} target="_blank" rel="noreferrer" className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#fff8f6] text-[#372629] text-xs font-sans-ui shadow hover:bg-[#d6929e]">Open in Google Maps</a></div>
        </div>
      </div>
    </section>
    <FinalCTA onOpenBooking={onOpenBooking} />
  </div>
);
