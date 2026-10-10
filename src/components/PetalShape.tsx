import React from 'react';

/** The imported four-petal mark, preserved as a decorative shape for Bella Beauty Brazil. */
export const BellaPetalIcon: React.FC<{ className?: string; size?: number; color?: string }> = ({ className = '', size = 20, color = 'currentColor' }) => (
  <svg role="presentation" viewBox="0 0 12 12" width={size} height={size} className={className} fill={color} aria-hidden="true">
    <path d="M 3.255 0 C 4.698 0 5.881 1.111 6 2.525 C 6.119 1.111 7.302 0 8.745 0 L 12 0 L 12 3.258 C 12 4.679 10.927 5.849 9.547 6 C 10.927 6.151 12 7.321 12 8.742 L 12 12 L 8.745 12 C 7.302 12 6.119 10.889 6 9.475 C 5.881 10.889 4.698 12 3.255 12 L 0 12 L 0 8.742 C 0 7.321 1.073 6.151 2.453 6 C 1.073 5.849 0 4.679 0 3.258 L 0 0 Z" />
  </svg>
);

export const GooeyFilterDef: React.FC = () => (
  <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true"><defs><filter id="bella-gooey"><feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -8" result="goo" /><feComposite in="SourceGraphic" in2="goo" operator="atop" /></filter></defs></svg>
);

interface PetalCardProps { title: string; description?: string; price?: string | null; bg?: string; textColor?: string; className?: string; onClick?: () => void; }

export const PetalCard: React.FC<PetalCardProps> = ({ title, description, price, bg = '#372629', textColor = '#fff8f6', className = '', onClick }) => (
  <button type="button" onClick={onClick} aria-label={`${title.replace(/\n/g, ' ')}. ${description ?? ''}`} className={`relative appearance-none border-0 bg-transparent w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] flex items-center justify-center p-6 text-center select-none group transition-transform duration-500 hover:scale-[1.02] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6929e] ${className}`}>
    <svg viewBox="0 0 360 360" className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md transition-transform duration-500 group-hover:rotate-1" style={{ fill: bg }} aria-hidden="true"><path d="M 180 24 C 228 24 266 58 266 104 C 266 128 284 146 308 146 C 336 146 356 164 356 180 C 356 196 336 214 308 214 C 284 214 266 232 266 256 C 266 302 228 336 180 336 C 132 336 94 302 94 256 C 94 232 76 214 52 214 C 24 214 4 196 4 180 C 4 164 24 146 52 146 C 76 146 94 128 94 104 C 94 58 132 24 180 24 Z" /></svg>
    <span className="relative z-10 flex flex-col items-center justify-center max-w-[210px] pointer-events-none">
      <span className="font-serif-editorial text-xl sm:text-[24px] md:text-[26px] leading-[1.12] mb-2 tracking-tight whitespace-pre-line" style={{ color: textColor }}>{title}</span>
      {description && <span className="font-sans-ui text-xs sm:text-sm leading-relaxed opacity-90 whitespace-pre-line mb-2" style={{ color: textColor }}>{description}</span>}
      {price && <span className="inline-flex items-center justify-center px-4 py-1 rounded-full text-xs sm:text-sm font-medium tracking-wide border" style={{ borderColor: 'rgba(240, 188, 199, 0.5)', color: textColor }}>{price}</span>}
    </span>
  </button>
);
