import React from 'react';
import { OriaPetalIcon } from '../components/PetalShape';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[80vh] bg-[#261511] text-[#f2f0e5] flex flex-col items-center justify-center p-6 text-center pt-28">
      <div className="w-12 h-12 rounded-full bg-[#1e100d] border border-[#543923]/50 flex items-center justify-center mb-6">
        <OriaPetalIcon size={24} color="#ffd9a8" />
      </div>

      <span className="text-xs font-mono text-[#dddcb0]/70 tracking-widest uppercase mb-2">
        Error 404
      </span>

      <h1 className="font-serif-editorial text-5xl sm:text-7xl text-[#f2f0e5] mb-4">
        Page Not Found
      </h1>

      <p className="font-sans-ui text-sm sm:text-base text-[#f2f0e5]/75 max-w-md mb-8 leading-relaxed">
        The page you are looking for doesn't exist or has been moved to another location.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => onNavigate('/')}
          className="px-8 py-3.5 rounded-full bg-[#f2f0e5] text-[#261511] font-sans-ui text-xs font-semibold tracking-wider uppercase hover:bg-[#ffd9a8] transition-colors"
        >
          Return to Home
        </button>
        <button
          onClick={() => onNavigate('/about')}
          className="px-8 py-3.5 rounded-full border border-[#543923] text-[#f2f0e5] font-sans-ui text-xs font-medium tracking-wider uppercase hover:bg-[#1e100d] transition-colors"
        >
          Explore Studio
        </button>
      </div>
    </div>
  );
};
