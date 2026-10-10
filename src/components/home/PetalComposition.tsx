import React from 'react';
import { PetalCard } from '../PetalShape';

interface PetalCompositionProps {
  onNavigate: (path: string) => void;
}

export const PetalComposition: React.FC<PetalCompositionProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full bg-[#fff8f6] text-[#372629] py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Desktop / Tablet Organic Asymmetric Staggered Composition */}
        <div className="relative min-h-[720px] md:min-h-[820px] hidden md:flex items-center justify-center">
          {/* Card 1: Signature Nail Services (Left) */}
          <div className="absolute left-[2%] lg:left-[5%] top-[22%]">
            <PetalCard
              title="Signature Nail&#10;Services"
              description="Long-lasting,&#10;refined nail care"
              bg="#372629"
              textColor="#f0bcc7"
              onClick={() => {
                onNavigate('/services/signature-nails');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          {/* Card 2: Brow & Lash Studio (Top Center) */}
          <div className="absolute left-[33%] lg:left-[36%] top-[4%]">
            <PetalCard
              title="Brow & Lash&#10;Studio"
              description="Defined brows,&#10;effortlessly enhanced"
              price="€35"
              bg="#372629"
              textColor="#f0bcc7"
              onClick={() => {
                onNavigate('/services/brow-lash');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          {/* Card 3: Body Rituals (Bottom Center) */}
          <div className="absolute left-[24%] lg:left-[27%] bottom-[4%]">
            <PetalCard
              title="Body Rituals"
              description="Relaxation designed&#10;around you"
              price="€60"
              bg="#372629"
              textColor="#f0bcc7"
              onClick={() => {
                onNavigate('/services/body-and-wellness');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          {/* Card 4: Wellness Escape (Right) */}
          <div className="absolute right-[4%] lg:right-[8%] top-[34%]">
            <PetalCard
              title="Wellness&#10;Escape"
              description="Time reserved&#10;entirely for you"
              price="€55"
              bg="#372629"
              textColor="#f0bcc7"
              onClick={() => {
                onNavigate('/services/body-and-wellness');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        </div>

        {/* Mobile Layout: Responsive Stack / 2-column Grid */}
        <div className="md:hidden flex flex-col items-center gap-10">
          <PetalCard
            title="Brow & Lash&#10;Studio"
            description="Defined brows,&#10;effortlessly enhanced"
            price="€35"
            bg="#372629"
            textColor="#f0bcc7"
            onClick={() => onNavigate('/services/brow-lash')}
          />
          <PetalCard
            title="Signature Nail&#10;Services"
            description="Long-lasting,&#10;refined nail care"
            bg="#372629"
            textColor="#f0bcc7"
            onClick={() => onNavigate('/services/signature-nails')}
          />
          <PetalCard
            title="Body Rituals"
            description="Relaxation designed&#10;around you"
            price="€60"
            bg="#372629"
            textColor="#f0bcc7"
            onClick={() => onNavigate('/services/body-and-wellness')}
          />
          <PetalCard
            title="Wellness&#10;Escape"
            description="Time reserved&#10;entirely for you"
            price="€55"
            bg="#372629"
            textColor="#f0bcc7"
            onClick={() => onNavigate('/services/body-and-wellness')}
          />
        </div>
      </div>
    </section>
  );
};
