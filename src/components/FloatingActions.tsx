import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants/siteConfig.ts';
import { Phone, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-white text-[#201A5B] shadow-lg hover:shadow-xl border border-slate-200 hover:bg-slate-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F6BFF] active:scale-95 animate-in fade-in slide-in-from-bottom-2"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 text-[#201A5B]" />
        </button>
      )}

      {/* Floating Circular Call Button (Mobile & Tablet) */}
      <a
        href={BUSINESS_INFO.phoneTel}
        className="pointer-events-auto flex items-center justify-center w-14 h-14 rounded-full bg-[#FFC83D] text-[#14103C] shadow-2xl hover:shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-amber-300 relative group"
        aria-label={`Call Tri-Phase Electrical now at ${BUSINESS_INFO.phoneDisplay}`}
      >
        {/* Soft pulse ripple effect */}
        <span
          className="absolute inset-0 rounded-full bg-[#FFC83D] opacity-40 animate-ping pointer-events-none"
          aria-hidden="true"
        />
        <Phone className="w-6 h-6 text-[#14103C] relative z-10" />

        {/* Desktop Tooltip */}
        <span className="hidden md:group-hover:block absolute right-16 bg-[#14103C] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
          Call 027-715-1313 (24/7)
        </span>
      </a>
    </div>
  );
};
