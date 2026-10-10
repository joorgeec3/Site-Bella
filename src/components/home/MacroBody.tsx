import React from 'react';

export const MacroBody: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#372629]">
      <div className="relative w-full h-[480px] sm:h-[560px] md:h-[640px] lg:h-[700px] flex items-center justify-center text-center px-4">
        {/* Background Full Width Macro Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://framerusercontent.com/images/q26sTAGEcAqZjQPZ32vNLXAPOOA.webp"
            alt="Macro skin texture photograph retained in the Bella Beauty Brazil design"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle warm overlay */}
          <div className="absolute inset-0 bg-[#372629]/25 mix-blend-multiply" />
        </div>

        {/* Central Statement */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 drop-shadow-md">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#fff8f6] tracking-tight leading-[1.1] mb-2 sm:mb-4">
            Invest in the way you feel.
          </h2>
          <p className="font-serif-editorial italic text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fff8f6]/90 tracking-tight font-normal">
            Care that starts with you.
          </p>
        </div>
      </div>
    </section>
  );
};
