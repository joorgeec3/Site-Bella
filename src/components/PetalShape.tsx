import React from 'react';

/**
 * The signature Oria 4-petal floral shape.
 * Can be rendered as an icon, or as a background card shape.
 */

// The exact Oria 4-petal icon extracted from Framer
export const OriaPetalIcon: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = '', size = 20, color = 'currentColor' }) => {
  return (
    <svg
      role="presentation"
      viewBox="0 0 12 12"
      width={size}
      height={size}
      className={className}
      fill={color}
    >
      <path d="M 3.255 0 C 4.698 0 5.881 1.111 6 2.525 C 6.119 1.111 7.302 0 8.745 0 L 12 0 L 12 3.258 C 12 4.679 10.927 5.849 9.547 6 C 10.927 6.151 12 7.321 12 8.742 L 12 12 L 8.745 12 C 7.302 12 6.119 10.889 6 9.475 C 5.881 10.889 4.698 12 3.255 12 L 0 12 L 0 8.742 C 0 7.321 1.073 6.151 2.453 6 C 1.073 5.849 0 4.679 0 3.258 L 0 0 Z" />
    </svg>
  );
};

// SVG Filter Definition for the Gooey Organic Blend
export const GooeyFilterDef: React.FC = () => {
  return (
    <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
      <defs>
        <filter id="oria-gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -8"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

interface PetalCardProps {
  title: string;
  description?: string;
  price?: string | null;
  bg?: string;
  textColor?: string;
  className?: string;
  onClick?: () => void;
}

export const PetalCard: React.FC<PetalCardProps> = ({
  title,
  description,
  price,
  bg = '#261511',
  textColor = '#dddcb0',
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px] flex items-center justify-center p-6 text-center select-none group transition-transform duration-500 hover:scale-[1.02] cursor-pointer ${className}`}
    >
      {/* 4-petal background rendered via SVG path for crisp rendering across all displays */}
      <svg
        viewBox="0 0 360 360"
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md transition-transform duration-500 group-hover:rotate-1"
        style={{ fill: bg }}
      >
        {/* Precise 4-lobed petal geometry */}
        <path d="M 180 24 C 228 24 266 58 266 104 C 266 128 284 146 308 146 C 336 146 356 164 356 180 C 356 196 336 214 308 214 C 284 214 266 232 266 256 C 266 302 228 336 180 336 C 132 336 94 302 94 256 C 94 232 76 214 52 214 C 24 214 4 196 4 180 C 4 164 24 146 52 146 C 76 146 94 128 94 104 C 94 58 132 24 180 24 Z" />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[200px]">
        <h4
          className="font-serif-editorial text-2xl sm:text-[28px] md:text-[30px] leading-[1.15] mb-2 tracking-tight whitespace-pre-line"
          style={{ color: textColor }}
        >
          {title}
        </h4>
        {description && (
          <p
            className="font-sans-ui text-xs sm:text-sm leading-relaxed opacity-85 whitespace-pre-line mb-3"
            style={{ color: textColor }}
          >
            {description}
          </p>
        )}
        {price && (
          <span
            className="inline-flex items-center justify-center px-4 py-1 rounded-full text-xs sm:text-sm font-medium tracking-wide border transition-all duration-300 group-hover:bg-[#dddcb0] group-hover:text-[#261511]"
            style={{
              borderColor: 'rgba(221, 220, 176, 0.4)',
              color: textColor,
            }}
          >
            {price}
          </span>
        )}
      </div>
    </div>
  );
};
