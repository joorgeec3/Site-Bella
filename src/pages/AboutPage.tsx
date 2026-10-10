import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock, Calendar, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS, STUDIO_INFO } from '../data/siteData';
import { FinalCTA } from '../components/home/FinalCTA';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      title: 'Personalized treatments',
      description:
        'No two clients are the same. Every treatment is tailored to your preferences, features and individual beauty goals.',
    },
    {
      title: 'Calm atmosphere',
      description:
        'From the lighting to the smallest details, every part of the studio is designed to help you slow down, relax and feel fully taken care of.',
    },
    {
      title: 'Attention To Detail',
      description:
        'We believe the smallest details matter. Every step of the experience is approached with precision, care and intention.',
    },
    {
      title: 'Elevated Client Experience',
      description:
        'From the moment you arrive, every detail is designed to make your experience feel seamless, welcoming and thoughtfully curated around your comfort.',
    },
  ];

  return (
    <div className="w-full bg-[#261511] text-[#f2f0e5] pt-24 sm:pt-28">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#dddcb0]/80 block mb-3">
            (Studio Philosophy)
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] text-[#f2f0e5] tracking-tight">
            We believe in putting our clients first
          </h1>
        </div>

        {/* Hero Studio Banner */}
        <div className="rounded-[32px] overflow-hidden aspect-[16/9] max-h-[620px] shadow-2xl border border-[#543923]/30 relative group">
          <img
            src="https://framerusercontent.com/images/FTyO1xSzp9jTJ8IBXe9Onpcpo60.webp"
            alt="Oria Studio Space"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#261511]/60 via-transparent to-transparent" />
        </div>
      </section>

      {/* Our Why Section */}
      <section className="bg-[#1e100d] py-20 sm:py-28 px-4 sm:px-6 md:px-10 border-t border-b border-[#543923]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#dddcb0]/80 block mb-2">
                (Our why)
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#f2f0e5]">
                A more intentional approach to well-being
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl leading-snug text-[#f2f0e5]/90">
                We want clients to focus on feeling their best while we take care of every detail.
              </p>
              <p className="font-sans-ui text-sm sm:text-base text-[#f2f0e5]/70 leading-relaxed max-w-2xl">
                Warm lighting, calming textures and quiet moments are all part of creating a studio
                experience that feels peaceful, intimate and restorative. We select skin-friendly,
                vegan and barrier-supportive formulations so that every service nurtures both beauty
                and wellness.
              </p>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 sm:mt-20">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#261511] border border-[#543923]/30 space-y-3"
              >
                <span className="text-xs font-mono text-[#dddcb0]/70">0{idx + 1}</span>
                <h3 className="font-serif-editorial text-2xl text-[#f2f0e5]">{pillar.title}</h3>
                <p className="font-sans-ui text-xs sm:text-sm text-[#f2f0e5]/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#dddcb0]/80 block mb-3">
              (Our Team)
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#f2f0e5] tracking-tight">
              The people behind every experience at Oria
            </h2>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <div
                key={i}
                className="group rounded-3xl overflow-hidden bg-[#1e100d] border border-[#543923]/30 shadow-lg"
              >
                <div className="relative aspect-[3/3.8] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e100d] via-transparent to-transparent" />
                </div>
                <div className="p-6 text-center space-y-1">
                  <h3 className="font-serif-editorial text-2xl text-[#f2f0e5]">{member.name}</h3>
                  <p className="font-sans-ui text-xs text-[#dddcb0]/80">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recruitment / Hiring Card */}
          <div className="mt-14 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1e100d] to-[#2e1814] border border-[#543923]/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono text-[#ffd9a8] uppercase tracking-wider">
                Careers at Oria
              </span>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#f2f0e5]">
                We're hiring!
              </h3>
              <p className="font-sans-ui text-sm text-[#f2f0e5]/70 max-w-xl">
                We won't ever say no to meeting interesting and passionate people. If you share our
                vision for quiet luxury and thoughtful craftsmanship, we'd love to hear from you.
              </p>
            </div>
            <a
              href="mailto:careers@oria-studio.com"
              className="px-8 py-3.5 rounded-full bg-[#f2f0e5] text-[#261511] font-sans-ui text-xs font-semibold tracking-wider uppercase hover:bg-[#ffd9a8] transition-colors flex-shrink-0"
            >
              Join our team
            </a>
          </div>
        </div>
      </section>

      {/* Studio Location & Contact */}
      <section className="bg-[#1a0e0c] py-20 sm:py-28 px-4 sm:px-6 md:px-10 border-t border-[#543923]/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#dddcb0]/80 block mb-2">
              (Our Contact)
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#f2f0e5]">Visit Oria</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Info details */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#261511] border border-[#543923]/50 flex items-center justify-center text-[#ffd9a8] flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-sans-ui text-xs uppercase tracking-wider text-[#dddcb0]/80 font-medium mb-1">
                      Location
                    </h4>
                    <p className="font-sans-ui text-sm text-[#f2f0e5] leading-relaxed">
                      {STUDIO_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#261511] border border-[#543923]/50 flex items-center justify-center text-[#ffd9a8] flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="font-sans-ui text-xs uppercase tracking-wider text-[#dddcb0]/80 font-medium mb-1">
                      Contact
                    </h4>
                    <p className="font-sans-ui text-sm text-[#f2f0e5]">{STUDIO_INFO.phone}</p>
                    <p className="font-sans-ui text-sm text-[#f2f0e5]">{STUDIO_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#261511] border border-[#543923]/50 flex items-center justify-center text-[#ffd9a8] flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="font-sans-ui text-xs uppercase tracking-wider text-[#dddcb0]/80 font-medium mb-1">
                      Opening Hours
                    </h4>
                    <p className="font-sans-ui text-sm text-[#f2f0e5]">
                      {STUDIO_INFO.hoursWeekday}
                    </p>
                    <p className="font-sans-ui text-sm text-[#f2f0e5]/60">
                      {STUDIO_INFO.hoursSunday}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#f2f0e5] text-[#261511] font-sans-ui text-xs font-semibold tracking-wider uppercase hover:bg-[#ffd9a8] transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Calendar size={14} /> Book an appointment
                </button>
              </div>
            </div>

            {/* Map Preview */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#543923]/40 min-h-[360px] relative shadow-xl">
              <iframe
                title="Oria Studio Amsterdam Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.148118043697!2d4.873212876935293!3d52.36768394747754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c25220c82f%3A0xb3bf8ee0d0f4d385!2sRozengracht%20207%2C%201016%20LZ%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1718000000000!5m2!1sen!2sus"
                className="w-full h-full min-h-[380px] border-0 grayscale contrast-125 opacity-85"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA onOpenBooking={onOpenBooking} />
    </div>
  );
};
