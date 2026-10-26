import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showText = true,
  className = '',
}) => {
  const isLight = variant === 'light';
  const mainColor = isLight ? '#FFFFFF' : '#201A5B';
  const subtextColor = isLight ? '#DDD9F5' : '#4A4674';
  const plugColor = '#FFC83D'; // Accent electric yellow

  // Scale settings
  const iconDimensions = {
    sm: { w: 36, h: 36 },
    md: { w: 44, h: 44 },
    lg: { w: 60, h: 60 },
  }[size];

  const titleSizes = {
    sm: 'text-sm tracking-[0.16em]',
    md: 'text-base sm:text-lg tracking-[0.18em]',
    lg: 'text-xl sm:text-2xl tracking-[0.22em]',
  }[size];

  const subSizes = {
    sm: 'text-[9px] tracking-[0.22em]',
    md: 'text-[10px] sm:text-[11px] tracking-[0.26em]',
    lg: 'text-xs sm:text-sm tracking-[0.3em]',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Recreated TP Monogram SVG with Power Plug */}
      <svg
        width={iconDimensions.w}
        height={iconDimensions.h}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="Tri-Phase Electrical Monogram Logo"
        role="img"
      >
        {/* Monogram T and P joined together */}
        {/* Left top T bar */}
        <rect x="8" y="16" width="36" height="12" rx="2" fill={mainColor} />
        {/* Vertical T stem & P left backbone */}
        <rect x="22" y="16" width="13" height="66" rx="2" fill={mainColor} />

        {/* P upper horizontal bar */}
        <path
          d="M32 16H66C78 16 86 24 86 36C86 48 78 56 66 56H32V44H64C70 44 73 40.5 73 36C73 31.5 70 28 64 28H32V16Z"
          fill={mainColor}
        />

        {/* Power Plug at Bottom Right */}
        {/* Plug Body */}
        <rect x="52" y="64" width="26" height="18" rx="4" fill={mainColor} />
        {/* Plug Cord Arc */}
        <path
          d="M35 74C40 74 44 73 52 73"
          stroke={mainColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Plug Prongs (Gold/Accent) */}
        <rect x="78" y="67" width="8" height="3" rx="1.5" fill={plugColor} />
        <rect x="78" y="75" width="8" height="3" rx="1.5" fill={plugColor} />
        {/* Grounding prong / center pin subtle notch */}
        <circle cx="65" cy="73" r="2.5" fill={isLight ? '#201A5B' : '#FFFFFF'} />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-['Exo_2'] font-extrabold uppercase ${titleSizes}`}
            style={{ color: mainColor }}
          >
            TRI-PHASE
          </span>
          <span
            className={`font-['Montserrat'] font-light uppercase mt-1 ${subSizes}`}
            style={{ color: subtextColor }}
          >
            ELECTRICAL LIMITED
          </span>
        </div>
      )}
    </div>
  );
};
