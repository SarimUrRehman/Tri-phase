import React from 'react';
import { Logo } from './Logo.tsx';
import { BUSINESS_INFO, NAV_LINKS } from '../constants/siteConfig.ts';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#14103C] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#hero"
              onClick={(e) => handleScrollToSection(e, '#hero')}
              className="inline-block"
              aria-label="Tri-Phase Electrical Limited - Back to top"
            >
              <Logo variant="light" size="md" />
            </a>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md pt-2">
              Tri-Phase Electrical Limited provides reliable residential, commercial, and industrial electrical solutions throughout Auckland. Owned and operated by registered electrician{' '}
              <strong className="text-white font-['Playfair_Display'] italic">Deep Singh</strong>.
            </p>

            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-white/90">
                <ShieldCheck className="w-4 h-4 text-[#FFC83D]" />
                <span>NZ Certified &amp; Licensed</span>
              </span>
              <span>·</span>
              <span className="text-[#FFC83D] font-bold">5.0 ★ Google Rated (159 Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Montserrat']">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="hover:text-[#FFC83D] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact & Hours (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Montserrat']">
              Contact &amp; Emergency
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FFC83D] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-white hover:text-[#FFC83D] font-bold transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <span className="block text-xs text-slate-400">Deep Singh · 24/7 Emergency Line</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#4F6BFF] shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.emailMailto}
                  className="hover:text-white transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-xs leading-relaxed">
                  {BUSINESS_INFO.address.full}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FFC83D] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-emerald-400 font-semibold">{BUSINESS_INFO.hours}</span>
                  <span className="text-slate-400 block">{BUSINESS_INFO.hoursEmergency}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2025 {BUSINESS_INFO.legalName}. All rights reserved.</p>

          <div className="flex items-center gap-4 text-[11px]">
            <span>{BUSINESS_INFO.licensePlaceholder}</span>
            <span aria-hidden="true">·</span>
            <a
              href="#hero"
              onClick={(e) => handleScrollToSection(e, '#hero')}
              className="text-slate-300 hover:text-white inline-flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
