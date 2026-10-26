import React from 'react';
import { BUSINESS_INFO, BENEFITS, STATS } from '../constants/siteConfig.ts';
import {
  Clock,
  BadgePercent,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  Award,
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const getBenefitIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#4F6BFF]' };
    switch (iconName) {
      case 'Clock':
        return <Clock {...props} />;
      case 'BadgePercent':
        return <BadgePercent {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'FileCheck':
        return <FileCheck {...props} />;
      default:
        return <CheckCircle2 {...props} />;
    }
  };

  return (
    <section
      id="why-us"
      aria-label="Why Choose Tri-Phase Electrical"
      className="py-16 sm:py-24 bg-[#F3F2FA] text-slate-900 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Story Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-[#4F6BFF]" aria-hidden="true"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#4F6BFF] font-['Montserrat']">
                 Auckland Registered Electrician
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#201A5B] font-['Exo_2'] leading-tight">
              Why Choose Tri-Phase Electrical
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-base text-slate-700 leading-relaxed">
            <p>
              At Tri-Phase Electrical Limited, we believe reliable electrical service comes down to precision, safety, and honest communication. Led by owner and licensed electrical practitioner{' '}
              <span className="font-['Playfair_Display'] font-bold text-lg text-[#201A5B]">
                Deep Singh
              </span>
              , our West Auckland team takes personal pride in delivering top-tier electrical craftsmanship for Auckland homeowners, landlords, builders, and commercial enterprises.
            </p>
            <p className="text-slate-600 text-sm">
              Whether responding to a 2 AM emergency tripping circuit in Henderson, installing an intelligent EV wallbox in Ponsonby, or commissioning a heavy-duty three-phase distribution board in an industrial warehouse, we treat every single wire and switchboard with uncompromising safety standards.
            </p>
          </div>
        </div>

        {/* Stats Row (5.0, 159, 24/7, Auckland Wide) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center relative overflow-hidden group hover:border-[#4F6BFF]/40 transition-all"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#201A5B] font-['Exo_2'] tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-bold text-slate-800 uppercase tracking-wide font-['Montserrat']">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Benefit Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-[#F3F2FA] flex items-center justify-center shrink-0">
                {getBenefitIcon(benefit.icon)}
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#201A5B] font-['Exo_2']">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Licensed & Certified Placeholder Callout (Prominently marked as editable) */}
        <div className="mt-8 bg-gradient-to-r from-[#201A5B] to-[#2B237A] rounded-xl p-6 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <Award className="w-6 h-6 text-[#FFC83D]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#FFC83D]">
                  Safety &amp; Compliance Guarantee
                </span>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-mono">
                  Editable Registration Placeholder
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold font-['Exo_2'] mt-0.5">
                {BUSINESS_INFO.licensePlaceholder}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                All work is verified, tested, and issued with an official NZ Certificate of Compliance (CoC) and Electrical Safety Certificate (ESC).
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[#FFC83D] text-[#14103C] hover:bg-[#ffe082] text-xs sm:text-sm font-bold transition-colors whitespace-nowrap shadow-sm"
          >
            Speak with Deep Singh
          </a>
        </div>
      </div>
    </section>
  );
};
