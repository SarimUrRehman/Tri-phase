import React from 'react';
import { HeroIllustration } from './HeroIllustration.tsx';
import { BUSINESS_INFO } from '../constants/siteConfig.ts';
import { Phone, ArrowRight, Star, Clock, MapPin, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onQuoteClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onQuoteClick }) => {
  return (
    <section
      id="hero"
      aria-label="Hero Overview"
      className="relative bg-gradient-to-b from-[#201A5B] via-[#1B1550] to-[#14103C] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-white/10"
    >
      {/* Subtle background circuit ambient lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(79, 107, 255, 0.3) 0%, transparent 40%),
                            radial-gradient(circle at 10% 80%, rgba(255, 200, 61, 0.15) 0%, transparent 50%)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust & Status Bar (Zero-pill clean metadata) */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-300 mb-6 font-medium">
          <a
            href="#reviews"
            className="inline-flex items-center gap-1.5 text-[#FFC83D] hover:underline"
          >
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FFC83D] text-[#FFC83D]" />
              ))}
            </span>
            <span className="font-bold text-white">5.0 ★</span>
            <span className="text-slate-300">({BUSINESS_INFO.reviewCount} Google Reviews)</span>
          </a>

          <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>

          <span className="inline-flex items-center gap-1.5 text-slate-200">
            <MapPin className="w-4 h-4 text-[#4F6BFF]" />
            <span>{BUSINESS_INFO.serviceLine}</span>
          </span>

          <span className="text-slate-500 hidden md:inline" aria-hidden="true">·</span>

          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <Clock className="w-4 h-4" />
            <span className="font-semibold text-emerald-300">{BUSINESS_INFO.hours}</span>
          </span>
        </div>

        {/* Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy, Actions & Trust Metrics */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline kicker */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#FFC83D]" aria-hidden="true"></span>
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#FFC83D] font-['Montserrat']">
                {BUSINESS_INFO.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold uppercase tracking-tight leading-[1.1] font-['Exo_2'] text-white text-balance">
              Reliable Electricians.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-[#FFC83D]">
                Auckland Wide. 24/7.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Residential, commercial and industrial electrical services you can trust. Owned and operated by registered electrician{' '}
              <strong className="text-white font-['Playfair_Display'] italic font-bold">Deep Singh</strong>, delivering fast emergency repairs, certified switchboard upgrades, and new installations across Auckland.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary Call CTA */}
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg bg-[#FFC83D] text-[#14103C] hover:bg-[#ffe082] font-bold text-base transition-all duration-200 shadow-xl shadow-amber-500/10 focus:outline-none focus:ring-2 focus:ring-white active:scale-95 whitespace-nowrap"
                aria-label={`Call Tri-Phase Electrical now at ${BUSINESS_INFO.phoneDisplay}`}
              >
                <Phone className="w-5 h-5 text-[#14103C]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              {/* Secondary Quote CTA */}
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFC83D] active:scale-95"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#FFC83D]" />
              </button>
            </div>

            {/* Trust Points Under CTA */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Licensed NZ Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FFC83D] shrink-0" />
                <span>Same-Day Emergency</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-[#4F6BFF] shrink-0"></span>
                <span>Henderson &amp; Auckland Wide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Technical SVG Artwork */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
