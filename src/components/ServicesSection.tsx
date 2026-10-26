import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../constants/siteConfig.ts';
import {
  Cable,
  Cpu,
  Lightbulb,
  Zap,
  BatteryCharging,
  Flame,
  Building2,
  Factory,
  ArrowRight,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Industrial'>('All');

  // Icon mapping
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#201A5B]' };
    switch (iconName) {
      case 'Cable':
        return <Cable {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Lightbulb':
        return <Lightbulb {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'BatteryCharging':
        return <BatteryCharging {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Factory':
        return <Factory {...props} />;
      default:
        return <Zap {...props} />;
    }
  };

  const filteredServices = SERVICES.filter((service) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Residential') return service.category === 'Residential' || service.category === 'All Sectors';
    if (activeFilter === 'Commercial') return service.category === 'Commercial' || service.category === 'All Sectors';
    if (activeFilter === 'Industrial') return service.category === 'Industrial' || service.category === 'All Sectors';
    return true;
  });

  const handleEnquire = (service: ServiceItem) => {
    onSelectService(service.title);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      aria-label="Electrical Services"
      className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-[#4F6BFF]" aria-hidden="true"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#4F6BFF] font-['Montserrat']">
              Complete Electrical Solutions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#201A5B] font-['Exo_2']">
            Our Electrical Services
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From modern residential rewiring to high-capacity 3-phase industrial power setups, our team provides reliable, certified electrical workmanship across all Auckland suburbs.
          </p>

          {/* Interactive Filter Tabs (Functional segmented controls) */}
          <div className="mt-6 flex flex-wrap gap-2">
            {(['All', 'Residential', 'Commercial', 'Industrial'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#201A5B] text-white shadow-md'
                    : 'bg-[#F3F2FA] text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter === 'All' ? 'All 8 Services' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between bg-white rounded-xl p-6 border border-slate-200/80 hover:border-[#4F6BFF]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header: Icon & Category Text (clean unboxed metadata) */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F3F2FA] group-hover:bg-[#4F6BFF]/10 flex items-center justify-center transition-colors">
                    {renderIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 font-['Montserrat']">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-[#201A5B] font-['Exo_2'] group-hover:text-[#4F6BFF] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* One-line Description */}
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Additional Details snippet */}
                <p className="mt-2 text-xs text-slate-400 leading-normal">
                  {service.details}
                </p>
              </div>

              {/* Card Footer: Enquire Action that preselects service in contact form */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleEnquire(service)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#201A5B] hover:text-[#4F6BFF] group-hover:translate-x-0.5 transition-all focus:outline-none"
                  aria-label={`Enquire about ${service.title}`}
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFC83D] group-hover:text-[#4F6BFF]" />
                </button>
                <span className="text-[10px] text-slate-400 font-medium">Free Quote</span>
              </div>
            </div>
          ))}
        </div>

        {/* 24/7 Notice Strip */}
        <div className="mt-12 rounded-xl bg-[#F3F2FA] p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#201A5B] text-white flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-[#FFC83D]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#201A5B]">Need an emergency electrician right now?</h4>
              <p className="text-xs text-slate-600">Our emergency breakdown team operates 24 hours a day, 7 days a week Auckland-wide.</p>
            </div>
          </div>
          <a
            href="tel:+64277151313"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[#201A5B] text-white hover:bg-[#14103C] text-xs sm:text-sm font-bold transition-colors shadow-sm"
          >
            Call 027-715-1313 Now
          </a>
        </div>
      </div>
    </section>
  );
};
