import React from 'react';
import { Instagram, Youtube, Facebook, Sparkles, Leaf } from 'lucide-react';
import { SERVICES, STUDIO_INFO } from '../data/siteData';
import { OriaPetalIcon } from './PetalShape';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#dddcb0] text-[#261511] pt-16 sm:pt-20 md:pt-24 overflow-hidden border-t border-[#c8c798]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Top 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-[#261511]/15">
          {/* Col 1: Brand Info & Badges */}
          <div className="lg:col-span-2 space-y-6">
            <button
              onClick={() => handleLinkClick('/')}
              className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            >
              <div className="w-6 h-6 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <OriaPetalIcon size={22} color="#261511" />
              </div>
              <span className="font-serif-editorial text-3xl tracking-tight text-[#261511] lowercase font-normal">
                oria
              </span>
            </button>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#261511]/80 font-sans-ui">
                <Leaf size={14} className="text-[#543923]" />
                <span>Vegan skincare</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#261511]/80 font-sans-ui">
                <Sparkles size={14} className="text-[#543923]" />
                <span>Precision treatments</span>
              </div>
            </div>

            <p className="text-xs text-[#261511]/60 font-sans-ui max-w-sm pt-2 leading-relaxed">
              {STUDIO_INFO.address}
              <br />
              {STUDIO_INFO.hoursWeekday}
            </p>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-4">
            <h4 className="font-sans-ui text-xs uppercase tracking-widest text-[#261511]/60 font-semibold">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm font-sans-ui text-[#261511]/80">
              <li>
                <button
                  onClick={() => handleLinkClick('/about')}
                  className="hover:text-[#261511] hover:underline underline-offset-4 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/contact')}
                  className="hover:text-[#261511] hover:underline underline-offset-4 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="font-sans-ui text-xs uppercase tracking-widest text-[#261511]/60 font-semibold">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm font-sans-ui text-[#261511]/80">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleLinkClick(`/services/${s.slug}`)}
                    className="hover:text-[#261511] hover:underline underline-offset-4 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="space-y-4">
            <h4 className="font-sans-ui text-xs uppercase tracking-widest text-[#261511]/60 font-semibold">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm font-sans-ui text-[#261511]/80">
              <li>
                <button
                  onClick={() => handleLinkClick('/privacy-policy')}
                  className="hover:text-[#261511] hover:underline underline-offset-4 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/terms-of-service')}
                  className="hover:text-[#261511] hover:underline underline-offset-4 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Bar: Copyright & Socials */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-ui text-[#261511]/70">
          <div>
            Copyright © 2026 Oria. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-[#261511]/20 flex items-center justify-center hover:bg-[#261511] hover:text-[#dddcb0] transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={14} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-[#261511]/20 flex items-center justify-center hover:bg-[#261511] hover:text-[#dddcb0] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-[#261511]/20 flex items-center justify-center hover:bg-[#261511] hover:text-[#dddcb0] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Giant Lettering: "oria" */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none mt-4 sm:mt-6">
        <div className="text-center">
          <h1
            className="font-serif-editorial text-[24vw] sm:text-[23vw] md:text-[22vw] leading-[0.72] text-[#261511] tracking-tight font-normal lowercase -mb-[4vw]"
            style={{ letterSpacing: '-0.04em' }}
          >
            oria
          </h1>
        </div>
      </div>
    </footer>
  );
};
