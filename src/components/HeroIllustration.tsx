import React from 'react';

export const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center p-2">
      {/* Background ambient radial glow */}
      <div
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(79, 107, 255, 0.45) 0%, rgba(255, 200, 61, 0.15) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Main Technical Electrical & 3-Phase Circuit Artwork */}
      <svg
        viewBox="0 0 600 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl relative z-10"
        aria-label="Tri-Phase Electrical technical diagram illustration showing 3-phase waveforms and circuit engineering"
        role="img"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="phase1Grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F6BFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="1" />
            <stop offset="100%" stopColor="#4F6BFF" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="phase2Grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFC83D" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFE082" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFC83D" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="phase3Grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#A5F3FC" stopOpacity="1" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="coreShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A226F" />
            <stop offset="100%" stopColor="#14103C" />
          </linearGradient>

          <linearGradient id="goldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC83D" />
            <stop offset="50%" stopColor="#4F6BFF" />
            <stop offset="100%" stopColor="#FFC83D" />
          </linearGradient>

          {/* Grid pattern */}
          <pattern id="circuitGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <circle cx="0" cy="0" r="1.5" fill="rgba(255,255,255,0.15)" />
          </pattern>
        </defs>

        {/* Outer Background Blueprint Grid Area */}
        <rect x="20" y="20" width="560" height="480" rx="20" fill="#161245" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />
        <rect x="20" y="20" width="560" height="480" rx="20" fill="url(#circuitGrid)" />

        {/* Decorative corner brackets */}
        <path d="M 40 60 L 40 40 L 60 40" stroke="#FFC83D" strokeWidth="2" strokeLinecap="round" />
        <path d="M 540 60 L 540 40 L 520 40" stroke="#FFC83D" strokeWidth="2" strokeLinecap="round" />
        <path d="M 40 460 L 40 480 L 60 480" stroke="#4F6BFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M 540 460 L 540 480 L 520 480" stroke="#4F6BFF" strokeWidth="2" strokeLinecap="round" />

        {/* 3-Phase Sinusoidal Waveforms (True 120° phase offset: L1, L2, L3) */}
        <g opacity="0.85">
          {/* Phase 1 Waveform (Blue) */}
          <path
            d="M 40 260 Q 100 160 160 260 T 280 260 T 400 260 T 520 260"
            fill="none"
            stroke="url(#phase1Grad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Phase 2 Waveform (Gold - 120 deg shifted) */}
          <path
            d="M 40 220 Q 100 320 160 220 T 280 220 T 400 220 T 520 220"
            fill="none"
            stroke="url(#phase2Grad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Phase 3 Waveform (Cyan - 240 deg shifted) */}
          <path
            d="M 40 300 Q 100 200 160 300 T 280 300 T 400 300 T 520 300"
            fill="none"
            stroke="url(#phase3Grad)"
            strokeWidth="2.5"
            strokeDasharray="6 3"
            strokeLinecap="round"
          />
        </g>

        {/* PCB Circuit Traces & Energy Nodes */}
        <g stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" strokeLinecap="round">
          {/* Top-left circuit traces */}
          <path d="M 60 100 H 140 L 170 130 H 220" />
          <circle cx="60" cy="100" r="3" fill="#4F6BFF" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="220" cy="130" r="3.5" fill="#FFC83D" />

          {/* Top-right circuit traces */}
          <path d="M 540 100 H 460 L 430 130 H 380" />
          <circle cx="540" cy="100" r="3" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="380" cy="130" r="3.5" fill="#FFC83D" />

          {/* Bottom-left circuit traces */}
          <path d="M 60 420 H 130 L 160 390 H 210" />
          <circle cx="60" cy="420" r="3" fill="#FFC83D" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="210" cy="390" r="3.5" fill="#4F6BFF" />

          {/* Bottom-right circuit traces */}
          <path d="M 540 420 H 470 L 440 390 H 390" />
          <circle cx="540" cy="420" r="3" fill="#4F6BFF" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="390" cy="390" r="3.5" fill="#FFC83D" />

          {/* Vertical Busbars */}
          <line x1="120" y1="140" x2="120" y2="380" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
          <line x1="480" y1="140" x2="480" y2="380" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
        </g>

        {/* Central Hexagonal Power Core & Monogram Emblem */}
        <g transform="translate(180, 140)">
          {/* Outer glow ring */}
          <circle cx="120" cy="120" r="110" fill="none" stroke="rgba(79, 107, 255, 0.2)" strokeWidth="1" />
          <circle cx="120" cy="120" r="102" fill="none" stroke="rgba(255, 200, 61, 0.25)" strokeWidth="1" strokeDasharray="8 6" />

          {/* Shield Badge Body */}
          <polygon
            points="120,15 210,65 210,175 120,225 30,175 30,65"
            fill="url(#coreShieldGrad)"
            stroke="url(#goldBorderGrad)"
            strokeWidth="3.5"
          />

          {/* Inner Accent Line */}
          <polygon
            points="120,28 198,72 198,168 120,212 42,168 42,72"
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1.5"
          />

          {/* Stylized TP Electrical Emblem inside Shield */}
          {/* Monogram T Bar */}
          <rect x="74" y="65" width="46" height="13" rx="2" fill="#FFFFFF" />
          {/* T Stem / P Spine */}
          <rect x="91" y="65" width="13" height="85" rx="2" fill="#FFFFFF" />
          {/* P Loop */}
          <path
            d="M 104 65 H 136 C 148 65 156 73 156 85 C 156 97 148 105 136 105 H 104 V 93 H 134 C 140 93 143 89.5 143 85 C 143 80.5 140 77 134 77 H 104 V 65 Z"
            fill="#FFFFFF"
          />

          {/* High-Voltage Lightning Arc Accent */}
          <path
            d="M 115 95 L 98 122 H 112 L 95 150 L 132 116 H 116 L 126 95 Z"
            fill="#FFC83D"
            stroke="#14103C"
            strokeWidth="1.5"
          />

          {/* Electrical 3-Pin / 2-Pin Power Plug Accent at Bottom Right */}
          <g transform="translate(125, 128)">
            <rect x="0" y="0" width="28" height="18" rx="4" fill="#FFFFFF" />
            <rect x="28" y="3" width="7" height="3" rx="1" fill="#FFC83D" />
            <rect x="28" y="12" width="7" height="3" rx="1" fill="#FFC83D" />
            <circle cx="14" cy="9" r="2.5" fill="#201A5B" />
          </g>
        </g>

        {/* Technical Callout Badges floating on illustration */}
        {/* Top-Right Badge: 400V 3-Phase */}
        <g transform="translate(370, 48)">
          <rect x="0" y="0" width="180" height="38" rx="8" fill="#1D174E" stroke="#4F6BFF" strokeWidth="1.5" />
          <circle cx="18" cy="19" r="5" fill="#4F6BFF" />
          <text x="32" y="18" fill="#DDD9F5" fontSize="10" fontFamily="'Montserrat', sans-serif" fontWeight="600" letterSpacing="0.05em">
            POWER DISTRIBUTION
          </text>
          <text x="32" y="30" fill="#FFFFFF" fontSize="11" fontFamily="'Exo 2', sans-serif" fontWeight="700">
            400V 3-PHASE &amp; 230V
          </text>
        </g>

        {/* Bottom-Left Badge: 24/7 Auckland Wide */}
        <g transform="translate(50, 432)">
          <rect x="0" y="0" width="195" height="38" rx="8" fill="#1D174E" stroke="#FFC83D" strokeWidth="1.5" />
          <circle cx="18" cy="19" r="5" fill="#FFC83D" />
          <text x="32" y="18" fill="#FFC83D" fontSize="10" fontFamily="'Montserrat', sans-serif" fontWeight="700" letterSpacing="0.08em">
            RAPID DISPATCH
          </text>
          <text x="32" y="30" fill="#FFFFFF" fontSize="11" fontFamily="'Exo 2', sans-serif" fontWeight="700">
            24/7 SERVICE AUCKLAND WIDE
          </text>
        </g>

        {/* Safety Standard Badge */}
        <g transform="translate(365, 432)">
          <rect x="0" y="0" width="185" height="38" rx="8" fill="#1D174E" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="14" y="18" fill="#94A3B8" fontSize="9" fontFamily="'Montserrat', sans-serif" fontWeight="600">
            COMPLIANCE CODE
          </text>
          <text x="14" y="30" fill="#38BDF8" fontSize="11" fontFamily="'Exo 2', sans-serif" fontWeight="700">
            AS/NZS 3000:2018 STANDARD
          </text>
        </g>
      </svg>
    </div>
  );
};
