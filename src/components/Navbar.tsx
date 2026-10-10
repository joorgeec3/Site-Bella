import React, { useState } from 'react';
import { ChevronDown, Menu, X, Calendar, ArrowUpRight } from 'lucide-react';
import { SERVICE_PAGES, STUDIO_INFO } from '../data/siteData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

const SERVICE_CATEGORIES = ['Cosmetic Tattooing', 'Brows', 'Lashes', 'Facials', 'Waxing'] as const;

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenBooking }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div className="max-w-6xl mx-auto rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between bg-[#372629]/90 backdrop-blur-xl border border-[#704951]/45 shadow-2xl shadow-black/20 pointer-events-auto">
        <button onClick={() => handleLinkClick('/')} className="flex items-center gap-2.5 text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6929e]" aria-label="Bella Beauty Brazil home">
          <img src={STUDIO_INFO.logo} alt="" width="28" height="32" className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full bg-[#fff8f6] p-1 object-contain" />
          <span className="font-serif-editorial text-lg sm:text-xl tracking-tight text-[#fff8f6] leading-none">Bella Beauty <span className="text-[#f0bcc7]">Brazil</span></span>
        </button>

        <nav className="hidden lg:flex items-center gap-6 text-[11px] tracking-[0.13em] uppercase font-sans-ui" aria-label="Main navigation">
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button onClick={() => setServicesOpen(true)} aria-expanded={servicesOpen} className={`flex items-center gap-1.5 py-2 transition-colors hover:text-[#d6929e] ${currentPath.startsWith('/services') ? 'text-[#d6929e]' : 'text-[#fff8f6]/85'}`}>
              Services <ChevronDown size={13} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50">
                <div className="bg-[#2b1b20] border border-[#704951]/50 rounded-2xl p-2 shadow-2xl max-h-[70vh] overflow-y-auto">
                  {SERVICE_CATEGORIES.map((category) => {
                    const services = SERVICE_PAGES.filter((service) => service.category === category);
                    if (!services.length) return null;
                    return <div key={category} className="pb-1">
                      <h3 className="px-3.5 pt-2.5 pb-1 text-[9px] font-sans-ui font-semibold uppercase tracking-[0.18em] text-[#f0bcc7]/75">{category}</h3>
                      {services.map((service) => <button key={service.slug} onClick={() => handleLinkClick(`/services/${service.slug}`)} className="w-full text-left px-3.5 py-2 rounded-xl hover:bg-[#372629] transition-colors flex items-center justify-between group">
                        <span className="text-sm font-serif-editorial text-[#fff8f6] group-hover:text-[#d6929e]">{service.title}</span>
                        <ArrowUpRight size={13} className="text-[#f0bcc7]/70" />
                      </button>)}
                    </div>;
                  })}
                  <button onClick={() => handleLinkClick('/courses')} className="w-full text-left px-3.5 py-2.5 rounded-xl border-t border-[#704951]/35 mt-1 text-sm font-serif-editorial text-[#fff8f6] hover:text-[#d6929e]">Courses</button>
                </div>
              </div>
            )}
          </div>
          <button onClick={() => handleLinkClick('/about')} className="text-[#fff8f6]/85 hover:text-[#d6929e] transition-colors">About Me</button>
          <button onClick={() => handleLinkClick('/gallery-reviews')} className="text-[#fff8f6]/85 hover:text-[#d6929e] transition-colors">Gallery & Reviews</button>
          <button onClick={() => handleLinkClick('/contact')} className="text-[#fff8f6]/85 hover:text-[#d6929e] transition-colors">Contact</button>
        </nav>

        <div className="hidden sm:flex items-center">
          <button onClick={onOpenBooking} className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fff8f6] text-[#372629] font-sans-ui text-[11px] font-semibold tracking-wide transition-all hover:bg-[#f0bcc7] active:scale-95">
            <Calendar size={13} /><span>Book Now</span>
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button onClick={onOpenBooking} className="sm:hidden inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#fff8f6] text-[#372629] font-sans-ui text-[11px] font-semibold">Book</button>
          <button onClick={() => setMobileMenuOpen((open) => !open)} className="w-9 h-9 rounded-full border border-[#704951]/60 flex items-center justify-center text-[#fff8f6] hover:bg-[#704951]/30 transition-colors" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto fixed inset-x-3 sm:inset-x-6 top-[68px] bg-[#2b1b20] border border-[#704951]/50 rounded-3xl p-5 shadow-2xl max-h-[calc(100vh-84px)] overflow-y-auto">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            <button onClick={() => handleLinkClick('/about')} className="text-left py-3 font-serif-editorial text-xl text-[#fff8f6] hover:text-[#d6929e]">About Me</button>
            <button onClick={() => handleLinkClick('/gallery-reviews')} className="text-left py-3 font-serif-editorial text-xl text-[#fff8f6] hover:text-[#d6929e]">Gallery & Reviews</button>
            <div className="py-3 border-y border-[#704951]/35">
              <span className="text-[10px] tracking-widest uppercase text-[#f0bcc7] font-sans-ui">Services</span>
              {SERVICE_CATEGORIES.map((category) => {
                const services = SERVICE_PAGES.filter((service) => service.category === category);
                if (!services.length) return null;
                return <div key={category} className="mt-3">
                  <h3 className="text-[9px] uppercase tracking-[0.16em] text-[#f0bcc7]/75 font-sans-ui">{category}</h3>
                  <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    {services.map((service) => <button key={service.slug} onClick={() => handleLinkClick(`/services/${service.slug}`)} className="w-full text-left py-2 text-sm font-sans-ui text-[#fff8f6]/90 hover:text-[#d6929e]">{service.title}</button>)}
                  </div>
                </div>;
              })}
            </div>
            <button onClick={() => handleLinkClick('/courses')} className="text-left py-3 font-serif-editorial text-xl text-[#fff8f6] hover:text-[#d6929e]">Courses</button>
            <button onClick={() => handleLinkClick('/contact')} className="text-left py-3 font-serif-editorial text-xl text-[#fff8f6] hover:text-[#d6929e]">Contact & Book</button>
            <button onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }} className="mt-3 w-full py-3 rounded-full bg-[#d6929e] text-[#372629] font-sans-ui text-xs font-semibold tracking-wider uppercase">Book on Timely</button>
            <p className="pt-3 text-center text-[11px] text-[#fff8f6]/65 font-sans-ui">Greenslopes · Brisbane, QLD</p>
          </nav>
        </div>
      )}
    </header>
  );
};
