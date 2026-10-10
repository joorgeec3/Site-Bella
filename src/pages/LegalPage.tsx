import React from 'react';
import { ExternalLink } from 'lucide-react';
import { STUDIO_INFO } from '../data/siteData';

interface LegalPageProps { type: 'terms' | 'privacy'; onNavigate: (path: string) => void; }

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const isTerms = type === 'terms';
  const title = isTerms ? 'Terms of Service' : 'Privacy Policy';
  const sections = isTerms ? [
    { title: 'Website information', content: 'This website provides information about Bella Beauty Brazil and links to third-party services. The information on a service page does not create, submit or confirm an appointment.' },
    { title: 'Appointments and current service details', content: 'Bookings, available appointment times and current service information are handled through Bella Beauty Brazil’s Timely page. Review the details shown there before making an appointment.' },
    { title: 'Contact', content: `For questions about a service or an appointment, contact Livia Rego at ${STUDIO_INFO.email} or ${STUDIO_INFO.phone}. The studio address is ${STUDIO_INFO.address}.` },
  ] : [
    { title: 'Contact form on this website', content: 'The Contact & Book form opens a draft in your own email application. This site does not submit or store that form entry. When you send the email, it is handled through your email provider and delivered to the studio address shown on the form.' },
    { title: 'Third-party services', content: 'Timely provides the external booking page, and Google Maps provides the embedded map. If you follow or load those services, their own privacy notices and settings apply.' },
    { title: 'Questions', content: `For a privacy enquiry about a direct email to the studio, contact ${STUDIO_INFO.email}. The website does not claim to set or administer the separate retention practices of external booking, map or email providers.` },
  ];

  return <div className="w-full bg-[#372629] text-[#fff8f6] pt-28 sm:pt-32 pb-24 px-4 sm:px-6 md:px-10"><div className="max-w-4xl mx-auto"><nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans-ui text-[#f0bcc7]/75 mb-5"><button onClick={() => onNavigate('/')} className="hover:text-[#fff8f6]">Home</button><span>/</span><span>Legal</span><span>/</span><span className="text-[#d6929e]">{title}</span></nav><span className="text-xs font-sans-ui tracking-wider uppercase text-[#f0bcc7]/75">Bella Beauty Brazil</span><h1 className="font-serif-editorial text-4xl sm:text-6xl mt-3 mb-10 tracking-tight">{title}</h1><div className="space-y-10">{sections.map((section) => <section key={section.title} className="space-y-3"><h2 className="font-serif-editorial text-2xl sm:text-3xl">{section.title}</h2><p className="font-sans-ui text-sm sm:text-base text-[#fff8f6]/78 leading-relaxed">{section.content}</p></section>)}</div><div className="mt-12 pt-6 border-t border-[#704951]/40"><a href={isTerms ? STUDIO_INFO.bookingUrl : 'https://policies.google.com/privacy'} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-sans-ui text-[#f0bcc7] hover:underline underline-offset-4">{isTerms ? 'Open the Timely booking page' : 'Google privacy information'} <ExternalLink size={13} /></a></div></div></div>;
};
