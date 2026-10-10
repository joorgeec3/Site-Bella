import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface BentoApproachProps { onNavigate: (path: string) => void; }

const serviceTags = ['Nano Strokes', 'Microblading', 'Shadow / Hybrid Brows', 'Lip Blush', 'Brow Lamination', 'Lash Lift'];

export const BentoApproach: React.FC<BentoApproachProps> = ({ onNavigate }) => (
  <section className="relative w-full bg-[#fff8f6] text-[#372629] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14 sm:mb-20"><span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#372629]/70 block mb-3">(Our Approach)</span><h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#372629] tracking-tight">A beauty experience designed around you</h2></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <article className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl min-h-[520px] sm:min-h-[600px] flex flex-col justify-between p-8 group">
          <div className="absolute inset-0 z-0"><img src="https://framerusercontent.com/images/YvhNMBAxbLRNOGQAD1mELQMXSw.webp" alt="Beauty products from the original imported design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-b from-[#372629]/40 via-[#372629]/15 to-[#372629]/65" /></div>
          <div className="relative z-10"><h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#fff8f6] leading-snug">Service information<br />before you choose</h3></div>
          <div className="relative z-10 my-auto py-8 flex justify-center"><div className="relative w-52 sm:w-56 h-72 sm:h-80 rounded-[9999px] border-2 border-dashed border-[#fff8f6]/80 flex flex-col items-center justify-around py-8 px-4 backdrop-blur-[2px]">{['Cosmetic tattooing', 'Brows & lashes', 'Skin & waxing'].map((tag) => <span key={tag} className="px-3.5 py-1.5 rounded-full bg-[#fff8f6]/20 backdrop-blur-md text-[#fff8f6] text-xs font-sans-ui font-medium border border-[#fff8f6]/30 text-center">{tag}</span>)}</div></div>
          <div className="relative z-10"><button onClick={() => onNavigate('/contact')} className="inline-flex items-center gap-2 text-xs font-sans-ui uppercase tracking-wider text-[#fff8f6] hover:text-[#f0bcc7]">Contact Livia <ArrowRight size={13} /></button></div>
        </article>

        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <article className="rounded-3xl bg-[#372629] text-[#fff8f6] p-8 sm:p-10 shadow-xl flex items-center min-h-[190px]"><p className="font-serif-editorial text-2xl sm:text-3xl md:text-[32px] leading-snug">Browse the published service descriptions, compare the options and follow the care advice specific to your chosen appointment.</p></article>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            <button onClick={() => onNavigate('/services/nano-strokes')} className="rounded-3xl bg-[#f0bcc7] text-[#372629] p-8 flex flex-col items-center justify-center text-center shadow-lg min-h-[250px] relative overflow-hidden group"><div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none"><svg viewBox="0 0 360 360" className="w-56 h-56 fill-[#e8b8c2]" aria-hidden="true"><path d="M 180 24 C 228 24 266 58 266 104 C 266 128 284 146 308 146 C 336 146 356 164 356 180 C 356 196 336 214 308 214 C 284 214 266 232 266 256 C 266 302 228 336 180 336 C 132 336 94 302 94 256 C 94 232 76 214 52 214 C 24 214 4 196 4 180 C 4 164 24 146 52 146 C 76 146 94 128 94 104 C 94 58 132 24 180 24 Z" /></svg></div><span className="relative z-10 font-serif-editorial text-5xl sm:text-6xl block mb-2">10</span><span className="relative z-10 font-sans-ui text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-[#372629]/85 max-w-[180px] block leading-tight">named services across beauty and training</span></button>
            <button onClick={() => onNavigate('/about')} className="relative text-left rounded-3xl overflow-hidden shadow-lg min-h-[250px] group cursor-pointer"><img src="https://framerusercontent.com/images/wtP7IFIMNEEyPnqMfKWKsJtY.png" alt="Beauty detail from the preserved template photograph" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-[#372629]/70 via-transparent to-transparent flex items-end p-6"><span className="text-xs text-[#fff8f6] font-sans-ui tracking-wide inline-flex items-center gap-1.5 bg-[#372629]/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#fff8f6]/20"><Sparkles size={11} className="text-[#d6929e]" />Discover Livia’s story</span></div></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
            <article className="sm:col-span-7 relative rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-lg group min-h-[220px]"><img src="https://framerusercontent.com/images/mC6BWm5AL9fS68HabfKcGFdm7c.png" alt="Editorial skin photograph from the original imported design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-[#372629]/90 via-[#372629]/55 to-[#372629]/35 z-0" /><div className="relative z-10 mb-4"><h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#fff8f6]">Explore Bella Beauty Brazil services</h3></div><div className="relative z-10 flex flex-wrap gap-1.5">{serviceTags.map((tag) => <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-sans-ui bg-[#fff8f6]/15 text-[#fff8f6] backdrop-blur-md border border-[#fff8f6]/20">{tag}</span>)}</div></article>
            <button onClick={() => onNavigate('/gallery-reviews')} className="sm:col-span-5 text-left rounded-3xl bg-[#d6929e] text-[#372629] p-6 sm:p-7 flex flex-col justify-between shadow-lg min-h-[220px] hover:bg-[#f0bcc7] transition-colors"><div><span className="text-xs font-sans-ui uppercase tracking-widest font-semibold text-[#372629]/85">Published on the official website</span><h3 className="font-serif-editorial text-3xl mt-3">One client review</h3><p className="font-sans-ui text-xs text-[#372629]/80 mt-2 leading-relaxed">Read the attributed review and view official website photographs.</p></div><span className="inline-flex items-center gap-2 pt-4 text-xs font-sans-ui uppercase tracking-wider">Gallery & Reviews <ArrowRight size={14} /></span></button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
