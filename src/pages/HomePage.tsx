import React from 'react';
import { Hero } from '../components/home/Hero';
import { OurArt } from '../components/home/OurArt';
import { OurServices } from '../components/home/OurServices';
import { PetalCardsScrollScene } from '../components/home/PetalCardsScrollScene';
import { BentoApproach } from '../components/home/BentoApproach';
import { ClientStories } from '../components/home/ClientStories';
import { FAQ } from '../components/home/FAQ';
import { FinalCTA } from '../components/home/FinalCTA';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="w-full">
      {/* 1 — Header & Hero (4s–6s) */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2 — Our Art (6s–9s) with asymmetric parallax */}
      <OurArt onNavigate={onNavigate} />

      {/* 3 — Service Cards & Background Transition (9s–12s) */}
      <OurServices onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

      {/* 4 & 5 — Macro Body Photography, 5 Floating Floral Petal Cards & Center Split Reveal (12s–17.5s) */}
      <PetalCardsScrollScene onNavigate={onNavigate} />

      {/* 6 — Our Approach & Bento Grid (17s–21s) */}
      <BentoApproach onNavigate={onNavigate} />

      {/* 7 — Client Stories (21s–23.5s) */}
      <ClientStories />

      {/* 8 — FAQ with Hover Preview Thumbnails (23.5s–25.5s) */}
      <FAQ />

      {/* 9 — Final CTA (25.5s–28s) */}
      <FinalCTA onOpenBooking={onOpenBooking} />
    </div>
  );
};
