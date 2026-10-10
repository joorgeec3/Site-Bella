import React from 'react';
import { Hero } from '../components/home/Hero';
import { OurArt } from '../components/home/OurArt';
import { MeetLivia } from '../components/home/MeetLivia';
import { OurServices } from '../components/home/OurServices';
import { PetalCardsScrollScene } from '../components/home/PetalCardsScrollScene';
import { BentoApproach } from '../components/home/BentoApproach';
import { OurWork } from '../components/home/OurWork';
import { ClientStories } from '../components/home/ClientStories';
import { FAQ } from '../components/home/FAQ';
import { FollowOurJourney } from '../components/home/FollowOurJourney';
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
      {/* 1 — Header & Hero */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2 — Existing Our Art section */}
      <OurArt onNavigate={onNavigate} />

      {/* New — official owner story and portrait */}
      <MeetLivia onNavigate={onNavigate} />

      {/* 3 — Existing four service cards and background transition */}
      <OurServices onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

      {/* 4 & 5 — Existing macro photo, five floral cards and split reveal */}
      <PetalCardsScrollScene onNavigate={onNavigate} />

      {/* 6 — Existing Our Approach and Bento Grid */}
      <BentoApproach onNavigate={onNavigate} />

      {/* New — official-site photos with keyboard-operable lightbox */}
      <OurWork onNavigate={onNavigate} />

      {/* 7 — Existing client stories */}
      <ClientStories />

      {/* 8 — Existing FAQ */}
      <FAQ />

      {/* New — no live/fabricated Instagram feed; profile link and official-site photos */}
      <FollowOurJourney />

      {/* 9 — Existing final CTA */}
      <FinalCTA onOpenBooking={onOpenBooking} />
    </div>
  );
};
