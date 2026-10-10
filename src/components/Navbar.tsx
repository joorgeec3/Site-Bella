import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Calendar } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import { OriaPetalIcon } from './PetalShape';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-3 sm:px-6 pt-3 sm:pt-4`}
    >
      <div
        className={`max-w-6xl mx-auto rounded-full px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? 'bg-[#261511]/90 backdrop-blur-xl border border-[#543923]/40 shadow-2xl shadow-black/30'
            : 'bg-[#261511]/70 backdrop-blur-md border border-[#543923]/25'
        }`}
      >
        {/* Left: Brand Logo */}
        <button
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-5 h-5 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
            <OriaPetalIcon size={17} color="#f2f0e5" />
          </div>
          <span className="font-serif-editorial text-2xl sm:text-[25px] tracking-tight text-[#f2f0e5] font-normal lowercase">
            oria
          </span>
        </button>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[13px] tracking-widest uppercase font-sans-ui">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 py-1 text-[#f2f0e5]/80 hover:text-[#f2f0e5] transition-colors focus:outline-none cursor-pointer"
            >
              <span className={currentPath.startsWith('/services') ? 'text-[#ffd9a8]' : ''}>
                Services
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-[#ffd9a8]' : 'opacity-70'
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="bg-[#1e100d] border border-[#543923]/40 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleLinkClick(`/services/${s.slug}`)}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#2e1814] transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="text-xs font-serif-editorial text-sm tracking-normal text-[#f2f0e5] group-hover:text-[#ffd9a8]">
                          {s.title}
                        </div>
                        <div className="text-[10px] text-[#f2f0e5]/50 tracking-normal normal-case">
                          {s.startingPrice}
                        </div>
                      </div>
                      <span className="text-[10px] text-[#dddcb0]/70 font-mono">
                        {s.number}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Studio Link */}
          <button
            onClick={() => handleLinkClick('/about')}
            className={`py-1 text-[#f2f0e5]/80 hover:text-[#f2f0e5] transition-colors cursor-pointer ${
              currentPath === '/about' ? 'text-[#ffd9a8] font-medium' : ''
            }`}
          >
            Studio
          </button>

          {/* Contact Link */}
          <button
            onClick={() => handleLinkClick('/contact')}
            className={`py-1 text-[#f2f0e5]/80 hover:text-[#f2f0e5] transition-colors cursor-pointer ${
              currentPath === '/contact' ? 'text-[#ffd9a8] font-medium' : ''
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right: Book Now Pill Button */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f2f0e5] text-[#261511] font-sans-ui text-xs font-medium tracking-wide transition-all duration-300 hover:bg-[#ffd9a8] hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <div className="w-4 h-4 rounded-full border border-[#261511]/30 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <Calendar size={9} className="text-[#261511]" />
            </div>
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#f2f0e5] text-[#261511] font-sans-ui text-xs font-medium tracking-wide"
          >
            Book Now
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full border border-[#543923]/60 flex items-center justify-center text-[#f2f0e5] hover:bg-[#543923]/30 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto fixed inset-x-4 top-[72px] bg-[#22120e] border border-[#543923]/40 rounded-3xl p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4">
            <div className="pb-2 border-b border-[#543923]/30">
              <span className="text-[10px] tracking-widest uppercase text-[#dddcb0]/70 font-sans-ui">
                Services
              </span>
              <div className="mt-2 space-y-2 pl-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleLinkClick(`/services/${s.slug}`)}
                    className="w-full text-left py-1 text-sm font-serif-editorial text-[#f2f0e5] hover:text-[#ffd9a8] flex items-center justify-between"
                  >
                    <span>{s.title}</span>
                    <span className="text-xs text-[#dddcb0]/70 font-sans-ui font-mono">
                      {s.startingPrice}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleLinkClick('/about')}
              className="text-left py-2 font-serif-editorial text-xl text-[#f2f0e5] hover:text-[#ffd9a8]"
            >
              Studio (About)
            </button>

            <button
              onClick={() => handleLinkClick('/contact')}
              className="text-left py-2 font-serif-editorial text-xl text-[#f2f0e5] hover:text-[#ffd9a8]"
            >
              Contact & Booking
            </button>

            <div className="pt-4 border-t border-[#543923]/40 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-[#ffd9a8] text-[#261511] font-sans-ui text-xs font-semibold tracking-wider uppercase text-center"
              >
                Book Your Session
              </button>
              <div className="text-center text-[11px] text-[#f2f0e5]/50 font-sans-ui">
                Open Mon — Sat 10:00 — 20:00
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
