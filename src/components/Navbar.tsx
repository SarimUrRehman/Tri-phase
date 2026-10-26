import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { BUSINESS_INFO, NAV_LINKS } from '../constants/siteConfig.ts';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <>
      {/* Top Utility Ribbon (Emergency & Hours Info) */}
      <div className="bg-[#14103C] text-slate-300 text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <strong className="text-white font-medium">{BUSINESS_INFO.hours}</strong>
              <span className="text-slate-400">· {BUSINESS_INFO.hoursEmergency}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#FFC83D]" />
              <span>{BUSINESS_INFO.serviceLine} (Base: Henderson)</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/80">
              Google Rating: <strong className="text-[#FFC83D]">★ {BUSINESS_INFO.rating}</strong> ({BUSINESS_INFO.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-[#201A5B] ${
          isScrolled
            ? 'shadow-xl shadow-black/25 py-3 border-b border-white/10'
            : 'py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Logo Wordmark Lockup */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#FFC83D] rounded-lg p-1"
              aria-label="Tri-Phase Electrical Limited - Back to top"
            >
              <Logo variant="light" size="md" />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav
              className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-slate-200"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#FFC83D] after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary CTA Button (Desktop) & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFC83D] text-[#14103C] hover:bg-[#ffd666] font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white active:scale-95 whitespace-nowrap"
                aria-label={`Call Tri-Phase Electrical at ${BUSINESS_INFO.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 text-[#14103C]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 text-white hover:text-[#FFC83D] focus:outline-none focus:ring-2 focus:ring-white rounded-lg transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1A144E] border-b border-white/15 px-4 pt-4 pb-6 mt-3 space-y-3 transition-all animate-in fade-in slide-in-from-top-2">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-100 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-slate-300 px-3 py-1">
                <Clock className="w-4 h-4 text-[#FFC83D]" />
                <span>{BUSINESS_INFO.hours} · 24/7 Emergency Service</span>
              </div>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#FFC83D] text-[#14103C] font-bold text-sm tracking-wide shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
