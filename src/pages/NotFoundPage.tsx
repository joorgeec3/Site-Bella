import React from 'react';
import { BellaPetalIcon } from '../components/PetalShape';

interface NotFoundPageProps { onNavigate: (path: string) => void; }

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => (
  <div className="min-h-[80vh] bg-[#372629] text-[#fff8f6] flex flex-col items-center justify-center p-6 text-center pt-28">
    <div className="w-12 h-12 rounded-full bg-[#2b1b20] border border-[#704951]/50 flex items-center justify-center mb-6"><BellaPetalIcon size={24} color="#d6929e" /></div>
    <span className="text-xs font-mono text-[#f0bcc7]/75 tracking-widest uppercase mb-2">Error 404</span>
    <h1 className="font-serif-editorial text-5xl sm:text-7xl mb-4">Page not found</h1>
    <p className="font-sans-ui text-sm sm:text-base text-[#fff8f6]/75 max-w-md mb-8 leading-relaxed">The page you are looking for doesn’t exist or has moved.</p>
    <div className="flex flex-wrap gap-4 justify-center"><button onClick={() => onNavigate('/')} className="px-8 py-3.5 rounded-full bg-[#fff8f6] text-[#372629] font-sans-ui text-xs font-semibold tracking-wider uppercase hover:bg-[#d6929e] transition-colors">Return home</button><button onClick={() => onNavigate('/contact')} className="px-8 py-3.5 rounded-full border border-[#704951] text-[#fff8f6] font-sans-ui text-xs font-medium tracking-wider uppercase hover:bg-[#2b1b20] transition-colors">Contact & Book</button></div>
  </div>
);
