import React from 'react';
import { Instagram, Facebook, MapPin, Mail, Phone, Sparkles } from 'lucide-react';
import { SERVICE_PAGES, STUDIO_INFO } from '../data/siteData';

interface FooterProps { onNavigate: (path: string) => void; }

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#f0bcc7] text-[#372629] pt-16 sm:pt-20 md:pt-24 overflow-hidden border-t border-[#dcafb7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#372629]/20">
          <div className="lg:col-span-2 space-y-5">
            <button onClick={() => handleLinkClick('/')} className="flex items-center gap-3 text-left" aria-label="Bella Beauty Brazil home">
              <img src={STUDIO_INFO.logo} alt="" width="32" height="36" className="w-8 h-8 object-contain" />
              <span className="font-serif-editorial text-2xl sm:text-3xl tracking-tight leading-none">Bella Beauty <span className="block text-base sm:text-lg">Brazil</span></span>
            </button>
            <div className="space-y-2.5 pt-1 text-xs font-sans-ui text-[#372629]/85">
              <a className="flex items-start gap-2.5 hover:underline underline-offset-4" href={STUDIO_INFO.mapUrl} target="_blank" rel="noreferrer"><MapPin size={14} className="mt-0.5" />{STUDIO_INFO.address}</a>
              <a className="flex items-center gap-2.5 hover:underline underline-offset-4" href={`tel:${STUDIO_INFO.telephoneLink}`}><Phone size={14} />{STUDIO_INFO.phone}</a>
              <a className="flex items-center gap-2.5 hover:underline underline-offset-4" href={`mailto:${STUDIO_INFO.email}`}><Mail size={14} />{STUDIO_INFO.email}</a>
            </div>
            <p className="text-xs text-[#372629]/70 font-sans-ui max-w-sm leading-relaxed">Beauty services with Livia Rego in Greenslopes, serving Brisbane Southside and nearby suburbs.</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-sans-ui text-xs uppercase tracking-widest text-[#372629]/65 font-semibold">Explore</h2>
            <ul className="space-y-2.5 text-sm font-sans-ui text-[#372629]/85">
              <li><button onClick={() => handleLinkClick('/about')} className="hover:underline underline-offset-4">About Me</button></li>
              <li><button onClick={() => handleLinkClick('/gallery-reviews')} className="hover:underline underline-offset-4">Gallery & Reviews</button></li>
              <li><button onClick={() => handleLinkClick('/contact')} className="hover:underline underline-offset-4">Contact & Book</button></li>
              <li><button onClick={() => handleLinkClick('/courses')} className="hover:underline underline-offset-4">Courses</button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-sans-ui text-xs uppercase tracking-widest text-[#372629]/65 font-semibold">Services</h2>
            <ul className="space-y-2 text-sm font-sans-ui text-[#372629]/85">
              {SERVICE_PAGES.map((service) => <li key={service.slug}><button onClick={() => handleLinkClick(`/services/${service.slug}`)} className="text-left hover:underline underline-offset-4">{service.title}</button></li>)}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-sans-ui text-xs uppercase tracking-widest text-[#372629]/65 font-semibold">Connect</h2>
            <ul className="space-y-2.5 text-sm font-sans-ui text-[#372629]/85">
              <li><a href={STUDIO_INFO.bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline underline-offset-4"><Sparkles size={14} />Book on Timely</a></li>
              <li><a href={STUDIO_INFO.aftercareUrl} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">Official aftercare guide</a></li>
              <li><button onClick={() => handleLinkClick('/privacy-policy')} className="hover:underline underline-offset-4">Privacy Policy</button></li>
              <li><button onClick={() => handleLinkClick('/terms-of-service')} className="hover:underline underline-offset-4">Terms of Service</button></li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-ui text-[#372629]/75">
          <div>Copyright © {new Date().getFullYear()} Bella Beauty Brazil. All rights reserved.</div>
          <div className="flex items-center space-x-3">
            <a href={STUDIO_INFO.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-[#372629]/25 flex items-center justify-center hover:bg-[#372629] hover:text-[#f0bcc7] transition-colors" aria-label="Bella Beauty Brazil on Facebook"><Facebook size={15} /></a>
            <a href={STUDIO_INFO.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-[#372629]/25 flex items-center justify-center hover:bg-[#372629] hover:text-[#f0bcc7] transition-colors" aria-label="Bella Beauty Brazil on Instagram"><Instagram size={15} /></a>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden select-none pointer-events-none mt-4 sm:mt-6" aria-hidden="true">
        <div className="text-center"><div className="font-serif-editorial text-[17vw] sm:text-[16vw] md:text-[15vw] leading-[0.82] text-[#372629] tracking-tight font-normal uppercase -mb-[2vw]" style={{ letterSpacing: '-0.04em' }}>BELLA BEAUTY</div></div>
      </div>
    </footer>
  );
};
