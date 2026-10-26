import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO, SERVICES } from '../constants/siteConfig.ts';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Navigation,
} from 'lucide-react';

interface ContactSectionProps {
  selectedService?: string;
  onClearSelectedService?: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  urgency: 'Standard' | 'Urgent' | 'Emergency 24/7';
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  serviceType?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
  onClearSelectedService,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: selectedService || 'Rewiring & New Builds',
    urgency: 'Standard',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapError, setMapError] = useState(false);

  // Sync when selectedService prop changes from Enquire buttons
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceType: selectedService }));
    }
  }, [selectedService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number so we can reach you.';
    } else if (!/^[\d\s+\-()]{7,16}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (e.g., 027-715-1313).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service category.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please briefly describe your electrical job or issue.';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Please provide a little more detail (at least 8 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real frontend submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: SERVICES[0].title,
      urgency: 'Standard',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    if (onClearSelectedService) {
      onClearSelectedService();
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Tri-Phase Electrical"
      className="py-16 sm:py-24 bg-[#F3F2FA] text-slate-900 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-[#4F6BFF]" aria-hidden="true"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#4F6BFF] font-['Montserrat']">
              Get in Touch
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#201A5B] font-['Exo_2']">
            Contact Tri-Phase Electrical
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Request a free on-site quote, book a service appointment, or speak directly with Deep Singh for immediate 24/7 Auckland emergency callouts.
          </p>
        </div>

        {/* 2-Column Layout (Stacked on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Form + Direct Contact Channels */}
          <div className="lg:col-span-7 space-y-8">
            {/* Quick Contact Action Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#201A5B] text-white hover:bg-[#15113D] font-bold text-xs sm:text-sm shadow-sm transition-all text-center"
              >
                <Phone className="w-4 h-4 text-[#FFC83D]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={BUSINESS_INFO.emailMailto}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-[#201A5B] hover:bg-slate-50 border border-slate-200 font-bold text-xs sm:text-sm shadow-sm transition-all text-center"
              >
                <Mail className="w-4 h-4 text-[#4F6BFF]" />
                <span>Email Us</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] font-bold text-xs sm:text-sm shadow-sm transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <h3 className="text-xl font-bold text-[#201A5B] font-['Exo_2'] mb-1">
                Send Us an Electrical Enquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill in the details below and we will respond with an upfront quote or callback within 2 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-emerald-900 font-['Exo_2']">
                      Thank You, {formData.name}!
                    </h4>
                    <p className="text-sm text-emerald-800 mt-1">
                      Your message regarding <strong className="font-semibold">{formData.serviceType}</strong> has been received by Deep Singh at Tri-Phase Electrical. We will contact you at <span className="font-semibold">{formData.phone}</span> promptly.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="px-4 py-2 rounded-lg bg-[#201A5B] text-white text-xs font-bold shadow-sm"
                    >
                      Urgent? Call 027-715-1313
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-emerald-700 underline hover:text-emerald-900"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                          : 'border-slate-300 focus:border-[#4F6BFF] focus:ring-[#4F6BFF]/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email (2-col grid) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 027-715-1313"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-slate-300 focus:border-[#4F6BFF] focus:ring-[#4F6BFF]/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@example.co.nz"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-slate-300 focus:border-[#4F6BFF] focus:ring-[#4F6BFF]/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Type Dropdown & Urgency Level */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceType" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#4F6BFF] focus:ring-2 focus:ring-[#4F6BFF]/20"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title} ({s.category})
                          </option>
                        ))}
                        <option value="General Inspection / Other">General Inspection / Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="urgency" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Job Urgency
                      </label>
                      <select
                        id="urgency"
                        value={formData.urgency}
                        onChange={(e) =>
                          setFormData({ ...formData, urgency: e.target.value as FormData['urgency'] })
                        }
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#4F6BFF] focus:ring-2 focus:ring-[#4F6BFF]/20"
                      >
                        <option value="Standard">Standard (Within a few days)</option>
                        <option value="Urgent">Urgent (Today / Tomorrow)</option>
                        <option value="Emergency 24/7">Emergency 24/7 (Power out / Hazard)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Project Details or Fault Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe what needs electrical attention, your suburb, and ideal timeframe..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                          : 'border-slate-300 focus:border-[#4F6BFF] focus:ring-[#4F6BFF]/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#201A5B] hover:bg-[#14103C] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#FFC83D] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#FFC83D]" />
                          <span>Submit Free Quote Request</span>
                        </>
                      )}
                    </button>
                    <span className="block mt-2 text-[11px] text-slate-500">
                      Your details are kept strictly private. Zero spam guaranteed.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Address, Hours, Keyless Google Maps Embed & Directions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Business Contact Cards */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-[#201A5B] font-['Exo_2'] uppercase tracking-wider">
                Direct Contact &amp; Location
              </h3>

              <div className="space-y-3.5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F3F2FA] text-[#201A5B] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Tri-Phase Base:</strong>
                    <span className="text-slate-600">{BUSINESS_INFO.address.full}</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F3F2FA] text-[#201A5B] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">{BUSINESS_INFO.hours}</strong>
                    <span className="text-emerald-600 font-medium">{BUSINESS_INFO.hoursEmergency}</span>
                    <p className="text-xs text-slate-500 mt-0.5">{BUSINESS_INFO.hoursDetail}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F3F2FA] text-[#201A5B] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Phone (Deep Singh):</strong>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-[#4F6BFF] hover:underline font-bold"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F3F2FA] text-[#201A5B] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Email:</strong>
                    <a
                      href={BUSINESS_INFO.emailMailto}
                      className="text-slate-600 hover:text-[#4F6BFF] break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Keyless Google Maps Embed with Fallback & Directions Button */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm overflow-hidden space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#201A5B] font-['Exo_2']">
                    Auckland Coverage Map
                  </h4>
                  <p className="text-xs text-slate-500">Henderson &amp; Auckland Wide</p>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#201A5B] hover:bg-[#15113D] text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#FFC83D]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Map Iframe Container */}
              <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                {!mapError ? (
                  <iframe
                    title="Tri-Phase Electrical Location Map"
                    src={BUSINESS_INFO.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onError={() => setMapError(true)}
                    className="w-full h-full"
                  />
                ) : (
                  /* Styled Fallback Card in case iframe is blocked by browser policies */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
                    <MapPin className="w-10 h-10 text-[#4F6BFF] mb-2" />
                    <h5 className="text-sm font-bold text-[#201A5B]">79A Sturges Road, Henderson</h5>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs">
                      Auckland 0612, New Zealand. Serving Waitakere, Central, North Shore, South &amp; East Auckland.
                    </p>
                    <a
                      href={BUSINESS_INFO.googleMapsDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#201A5B] text-white text-xs font-bold"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#FFC83D]" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-slate-500 flex items-center justify-between">
                <span>Free on-site consultations across Auckland</span>
                <span className="text-emerald-600 font-semibold">24/7 Emergency Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
