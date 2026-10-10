import React from 'react';
import { Star, Sparkles } from 'lucide-react';
import { PetalCard } from '../PetalShape';

interface BentoApproachProps {
  onNavigate: (path: string) => void;
}

export const BentoApproach: React.FC<BentoApproachProps> = ({ onNavigate }) => {
  const pillTags = [
    'Deep Hydration',
    'Soft Definition',
    'Cuticle Care',
    'Smooth Skin',
    'Elevated Self-Care',
    'Longevity',
    'Barrier Support',
    'Self-Care Rituals',
    'Healthy Barrier',
  ];

  return (
    <section className="relative w-full bg-[#f2f0e5] text-[#261511] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#261511]/70 block mb-3">
            (Our Approach)
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#261511] tracking-tight">
            A beauty experience designed around you
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-6 items-stretch">
          {/* Left Column (Span 5): Tall Card with Macro Face & Dotted Oval */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl min-h-[520px] sm:min-h-[600px] flex flex-col justify-between p-8 group">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://framerusercontent.com/images/YvhNMBAxbLRNOGQAD1mELQMXSw.webp"
                alt="Consciously selected products"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#261511]/30 via-transparent to-[#261511]/40" />
            </div>

            {/* Top Heading */}
            <div className="relative z-10">
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#f2f0e5] leading-snug">
                Consciously selected
                <br />
                products
              </h3>
            </div>

            {/* Center Dotted Pill Graphic with 3 Badges */}
            <div className="relative z-10 my-auto py-8 flex justify-center">
              <div className="relative w-52 sm:w-56 h-72 sm:h-80 rounded-[9999px] border-2 border-dashed border-[#f2f0e5]/80 flex flex-col items-center justify-around py-8 px-4 backdrop-blur-[2px]">
                <span className="px-3.5 py-1.5 rounded-full bg-[#f2f0e5]/20 backdrop-blur-md text-[#f2f0e5] text-xs font-sans-ui font-medium border border-[#f2f0e5]/30">
                  Clean Beauty
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#f2f0e5]/20 backdrop-blur-md text-[#f2f0e5] text-xs font-sans-ui font-medium border border-[#f2f0e5]/30">
                  Vegan Formulas
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#f2f0e5]/20 backdrop-blur-md text-[#f2f0e5] text-xs font-sans-ui font-medium border border-[#f2f0e5]/30 text-center leading-tight">
                  Skin-Friendly Ingredients
                </span>
              </div>
            </div>

            {/* Bottom spacer */}
            <div className="relative z-10" />
          </div>

          {/* Right Column (Span 7): Subgrid of Bento Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Top Right Card: Deep Chocolate Statement */}
            <div className="rounded-3xl bg-[#261511] text-[#f2f0e5] p-8 sm:p-10 shadow-xl flex items-center min-h-[190px]">
              <p className="font-serif-editorial text-2xl sm:text-3xl md:text-[32px] leading-snug text-[#f2f0e5]">
                No two clients are the same. Every treatment is tailored to your needs, preferences
                and goals to create results that feel personal and lasting.
              </p>
            </div>

            {/* Middle Row: Pistachio 4-Petal Stat Card + Rings & Nails Square Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {/* Stat Card with 4-Petal Pistachio Shape */}
              <div className="rounded-3xl bg-[#dddcb0] text-[#261511] p-8 flex flex-col items-center justify-center text-center shadow-lg min-h-[250px] relative overflow-hidden group">
                {/* 4-petal watermark in background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
                  <svg viewBox="0 0 360 360" className="w-56 h-56 fill-[#cad099]">
                    <path d="M 180 24 C 228 24 266 58 266 104 C 266 128 284 146 308 146 C 336 146 356 164 356 180 C 356 196 336 214 308 214 C 284 214 266 232 266 256 C 266 302 228 336 180 336 C 132 336 94 302 94 256 C 94 232 76 214 52 214 C 24 214 4 196 4 180 C 4 164 24 146 52 146 C 76 146 94 128 94 104 C 94 58 132 24 180 24 Z" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <span className="font-serif-editorial text-5xl sm:text-6xl text-[#261511] block mb-2 font-normal">
                    +1200
                  </span>
                  <span className="font-sans-ui text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-[#261511]/80 max-w-[180px] block leading-tight">
                    Treatments delivered with care and expertise
                  </span>
                </div>
              </div>

              {/* Rings & Nails Square Card */}
              <div
                onClick={() => onNavigate('/about')}
                className="relative rounded-3xl overflow-hidden shadow-lg min-h-[250px] group cursor-pointer"
              >
                <img
                  src="https://framerusercontent.com/images/wtP7IFIMNEEyPnqMfKWKsJtY.png"
                  alt="Nail detail and jewellery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#261511]/60 via-transparent to-transparent flex items-end p-6">
                  <span className="text-xs text-[#f2f0e5] font-sans-ui tracking-wide inline-flex items-center gap-1.5 bg-[#261511]/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#f2f0e5]/20">
                    <Sparkles size={11} className="text-[#ffd9a8]" />
                    (Discover The Studio)
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Your Body Deserves Better (Span 2/3) + Review Card (Span 1/3) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
              {/* Bottom Left Card: Glowing Legs & Tags */}
              <div className="sm:col-span-7 relative rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-lg group min-h-[220px]">
                <img
                  src="https://framerusercontent.com/images/mC6BWm5AL9fS68HabfKcGFdm7c.png"
                  alt="Smooth glowing skin"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#261511]/90 via-[#261511]/50 to-[#261511]/30 z-0" />

                <div className="relative z-10 mb-4">
                  <h4 className="font-serif-editorial text-2xl sm:text-3xl text-[#f2f0e5]">
                    Your body deserves better
                  </h4>
                </div>

                <div className="relative z-10 flex flex-wrap gap-1.5">
                  {pillTags.slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-sans-ui bg-[#f2f0e5]/15 text-[#f2f0e5] backdrop-blur-md border border-[#f2f0e5]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Right Card: Warm Peach Reviews & Avatars */}
              <div className="sm:col-span-5 rounded-3xl bg-[#ffd9a8] text-[#261511] p-6 sm:p-7 flex flex-col justify-between shadow-lg min-h-[220px]">
                <div>
                  <div className="flex items-center gap-1 text-[#261511] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#261511] text-[#261511]" />
                    ))}
                    <span className="text-xs font-bold font-sans-ui ml-1">4.9/5</span>
                  </div>
                  <h4 className="font-sans-ui text-xs uppercase tracking-widest font-semibold text-[#261511]/80">
                    Trusted by hundreds
                  </h4>
                </div>

                {/* Overlapping 3 Avatars */}
                <div className="flex items-center -space-x-3 pt-4">
                  <img
                    src="https://framerusercontent.com/images/fahYbK9u3qzGINpmAJFB8y5qjVo.webp"
                    alt="Client 1"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#ffd9a8] shadow"
                  />
                  <img
                    src="https://framerusercontent.com/images/O7miMt7OmyitTXxGIhkPAMyKkBI.webp"
                    alt="Client 2"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#ffd9a8] shadow"
                  />
                  <img
                    src="https://framerusercontent.com/images/ZIp5h1ey2imU1zybYOPrOtCY.webp"
                    alt="Client 3"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#ffd9a8] shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
