/**
 * ============================================================================
 * TRI-PHASE ELECTRICAL LIMITED - OFFICIAL SINGLE-PAGE WEBSITE
 * ============================================================================
 * 
 * Brand Reference: Tri-Phase Electrical Limited Business Card
 * Primary Owner: Deep Singh
 * Phone: 027-715-1313 (tel:+64277151313)
 * Email: triphaseelectricalltd@gmail.com
 * Base Address: 79A Sturges Road, Henderson, Auckland 0612, New Zealand
 * 
 * ----------------------------------------------------------------------------
 * HOW TO EDIT CONTENT, COLOURS, AND IMAGES:
 * ----------------------------------------------------------------------------
 * 1. Business Info & Text:
 *    Open `src/constants/siteConfig.ts`. All contact details, services list,
 *    pricing notes, benefits, and Google reviews are defined in structured
 *    objects at the top.
 * 
 * 2. Brand Colours:
 *    Primary Navy (#201A5B), Supporting Lavender (#F3F2FA), and Accent Gold
 *    (#FFC83D) are configured in `src/index.css` via the Tailwind @theme block
 *    and in `src/constants/siteConfig.ts`.
 * 
 * 3. Replacing the SVG Hero with a Photo:
 *    The hero visual currently renders `HeroIllustration.tsx` (an inline SVG
 *    circuit and 3-phase waveform diagram that never breaks). If you wish to
 *    use a photo of Deep Singh or an Auckland worksite:
 *    a) Place your optimized WebP image in `public/images/hero.webp`
 *    b) In `src/components/HeroSection.tsx`, replace `<HeroIllustration />` with:
 *       <img
 *         src="./images/hero.webp"
 *         alt="Deep Singh at work on an Auckland switchboard"
 *         width={560}
 *         height={480}
 *         className="w-full h-auto rounded-2xl object-cover shadow-2xl border border-white/20"
 *       />
 * ============================================================================
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { WhyUsSection } from './components/WhyUsSection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const handleQuoteClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#4F6BFF] selection:text-white font-['Inter',sans-serif]">
      {/* 
        STICKY NAVBAR (Not counted as a section) 
        Contains logo, anchor links to all 5 sections, call CTA & mobile menu
      */}
      <Navbar />

      {/* MAIN CONTENT AREA - EXACTLY 5 SECTIONS */}
      <main className="flex-grow">
        {/* SECTION 1: HERO */}
        <HeroSection onQuoteClick={handleQuoteClick} />

        {/* SECTION 2: SERVICES (8 cards with SVG icons & enquire actions) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* SECTION 3: WHY CHOOSE US (Deep Singh intro, stats, 4 benefits, certification) */}
        <WhyUsSection />

        {/* SECTION 4: REVIEWS (5.0 star Google summary, 6 authentic NZ review cards) */}
        <ReviewsSection />

        {/* SECTION 5: CONTACT (Two-column: validated form, direct channels & keyless map) */}
        <ContactSection
          selectedService={selectedService}
          onClearSelectedService={() => setSelectedService('')}
        />
      </main>

      {/* 
        FOOTER (Not counted as a section)
        Navy background, white logo, quick links, emergency info & copyright
      */}
      <Footer />

      {/* FLOATING ACTION BUTTONS: Circular Call CTA on mobile & Back to Top */}
      <FloatingActions />
    </div>
  );
}
