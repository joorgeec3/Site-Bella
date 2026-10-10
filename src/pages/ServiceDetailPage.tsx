import React from 'react';
import { Calendar, Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import { ServiceDetail } from '../types';
import { FAQ } from '../components/home/FAQ';
import { FinalCTA } from '../components/home/FinalCTA';

interface ServiceDetailPageProps {
  slug: string;
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onOpenBooking,
  onNavigate,
}) => {
  const service: ServiceDetail | undefined = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#261511] text-[#f2f0e5] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif-editorial text-4xl mb-4">Service not found</h1>
        <button
          onClick={() => onNavigate('/')}
          className="px-6 py-2.5 rounded-full bg-[#f2f0e5] text-[#261511] text-xs uppercase tracking-wider font-medium"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#261511] text-[#f2f0e5] pt-24 sm:pt-28">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#dddcb0]/80">{service.number}</span>
              <span className="px-3 py-1 rounded-full text-xs font-sans-ui bg-[#f2f0e5]/10 text-[#ffd9a8] border border-[#ffd9a8]/30">
                {service.startingPrice}
              </span>
            </div>

            <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl text-[#f2f0e5] tracking-tight leading-[1.08]">
              {service.title}
            </h1>

            <p className="font-sans-ui text-base sm:text-lg text-[#f2f0e5]/80 leading-relaxed max-w-xl">
              {service.subtitle}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#f2f0e5] text-[#261511] font-sans-ui text-xs font-semibold tracking-wider uppercase hover:bg-[#ffd9a8] transition-all duration-300 shadow-xl cursor-pointer"
              >
                <div className="w-4 h-4 rounded-full border border-[#261511]/30 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <Calendar size={9} className="text-[#261511]" />
                </div>
                <span>Book This Service</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[32px] overflow-hidden aspect-[4/5] shadow-2xl border border-[#543923]/30 relative group">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#261511]/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments List & Pricing Section */}
      <section className="bg-[#1e100d] py-20 sm:py-28 px-4 sm:px-6 md:px-10 border-t border-b border-[#543923]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#dddcb0]/80 block mb-2">
              (Treatment Menu)
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#f2f0e5] tracking-tight">
              Our {service.title} Treatments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {service.treatments.map((t, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#261511] border border-[#543923]/40 flex flex-col justify-between shadow-lg group hover:border-[#ffd9a8]/40 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif-editorial text-2xl text-[#f2f0e5] group-hover:text-[#ffd9a8] transition-colors">
                      {t.name}
                    </h3>
                    <span className="font-serif-editorial text-2xl text-[#ffd9a8] flex-shrink-0">
                      {t.price}
                    </span>
                  </div>
                  {t.duration && (
                    <span className="text-[11px] font-mono text-[#dddcb0]/70 uppercase tracking-wider block mb-3">
                      {t.duration}
                    </span>
                  )}
                  {t.description && (
                    <p className="font-sans-ui text-xs sm:text-sm text-[#f2f0e5]/70 leading-relaxed">
                      {t.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#543923]/30 flex justify-end">
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-sans-ui text-[#dddcb0] hover:text-[#ffd9a8] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Sparkles size={11} /> Reserve Treatment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Love It & Approach */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-5">
              <span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#dddcb0]/80 block mb-2">
                (Why Clients Love It)
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#f2f0e5]">
                {service.whyLoveTitle}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="font-sans-ui text-base sm:text-lg text-[#f2f0e5]/80 leading-relaxed">
                {service.whyLoveDescription}
              </p>
              <p className="font-sans-ui text-sm sm:text-base text-[#f2f0e5]/70 leading-relaxed">
                {service.approachDescription}
              </p>
            </div>
          </div>

          {/* 3 Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#1e100d] border border-[#543923]/30 space-y-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#261511] border border-[#ffd9a8]/30 flex items-center justify-center text-[#ffd9a8]">
                  <Check size={14} />
                </div>
                <h3 className="font-serif-editorial text-2xl text-[#f2f0e5]">{b.title}</h3>
                <p className="font-sans-ui text-xs sm:text-sm text-[#f2f0e5]/70 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Gallery */}
      {service.galleryImages.length > 0 && (
        <section className="bg-[#1a0e0c] py-20 px-4 sm:px-6 md:px-10 border-t border-[#543923]/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs sm:text-sm font-sans-ui tracking-wider text-[#dddcb0]/80 block mb-2">
                (Visual Journey)
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#f2f0e5]">
                Atmosphere & Results
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {service.galleryImages.map((imgUrl, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden aspect-[3/4] border border-[#543923]/30 shadow-lg group"
                >
                  <img
                    src={imgUrl}
                    alt={`${service.title} detail ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Accordion */}
      <FAQ />

      {/* Final CTA */}
      <FinalCTA onOpenBooking={onOpenBooking} />
    </div>
  );
};
