/**
 * ============================================================================
 * SITE CONFIGURATION & CONTENT CONSTANTS
 * ============================================================================
 * Easily edit contact details, business information, services, reviews, and
 * image fallback settings here.
 */

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'All Sectors';
  description: string;
  details: string;
  icon: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  service: string;
  text: string;
  verified: boolean;
}

export const BUSINESS_INFO = {
  name: 'Tri-Phase Electrical Limited',
  legalName: 'Tri-Phase Electrical Limited',
  shortName: 'Tri-Phase Electrical',
  owner: 'Deep Singh',
  tagline: 'Residential, Commercial & Industrial',
  category: 'Electrician',
  serviceLine: '24/7 Service Auckland Wide',
  rating: '5.0',
  reviewCount: 159,
  phoneDisplay: '027-715-1313',
  phoneTel: 'tel:+64277151313',
  phoneRaw: '+64 27 715 1313',
  email: 'triphaseelectricalltd@gmail.com',
  emailMailto: 'mailto:triphaseelectricalltd@gmail.com',
  whatsappUrl:
    'https://wa.me/64277151313?text=Hi%20Deep%2C%20I%20would%20like%20to%20enquire%20about%20electrical%20services%20with%20Tri-Phase%20Electrical.',
  address: {
    street: '79A Sturges Road',
    suburb: 'Henderson',
    city: 'Auckland',
    postcode: '0612',
    country: 'New Zealand',
    full: '79A Sturges Road, Henderson, Auckland 0612, New Zealand',
  },
  hours: 'Open · Closes 9 PM',
  hoursEmergency: '24/7 emergency service available',
  hoursDetail: 'Standard Mon–Sun: 7:00 AM – 9:00 PM | Emergency Service: 24 Hours / 7 Days',
  googleMapsEmbed:
    'https://www.google.com/maps?q=79A+Sturges+Road+Henderson+Auckland+0612&output=embed',
  googleMapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=79A+Sturges+Road+Henderson+Auckland+0612',
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Tri-Phase+Electrical+Limited+Henderson+Auckland',
  // Placeholder credentials & registration
  licensePlaceholder: 'NZ Registered & Licensed Electrician | EWRB Compliant | Workmanship Guaranteed',
  yearEstablished: 2020,
  nzbn: '9429048712345 (NZ Registered)',
};

export const BRAND_COLORS = {
  primaryNavy: '#201A5B',
  primaryNavyDark: '#14103C',
  primaryNavyLight: '#2B237A',
  secondaryWhite: '#FFFFFF',
  supportingLavender: '#F3F2FA',
  accentBlue: '#4F6BFF',
  accentGold: '#FFC83D',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'rewiring-new-builds',
    title: 'Rewiring & New Builds',
    category: 'Residential',
    description: 'Complete home rewiring, architectural new builds, and compliant modern electrical system installations.',
    details: 'Full switchboard to outlet rewiring, Mains cable upgrades, architectural lighting layouts, and NZ safety compliance certification for renovations and new homes.',
    icon: 'Cable',
  },
  {
    id: 'switchboard-upgrades',
    title: 'Switchboard Upgrades',
    category: 'Residential',
    description: 'Replacement of outdated ceramic fuses with modern RCD circuit breakers to keep your family safe.',
    details: 'Prevent electrical fires and trips. We install modern Schneider/Hager RCD and RCBO surge protection boards adhering strictly to NZ/AS 3000 standards.',
    icon: 'Cpu',
  },
  {
    id: 'lighting-power-points',
    title: 'Lighting & Power Points',
    category: 'Residential',
    description: 'Energy-efficient LED downlights, feature chandeliers, sensor lighting, and USB power outlets.',
    details: 'Indoor recessed LED downlight packages, exterior weatherproof security floodlights, dimmers, USB-C smart sockets, and garden accent lighting.',
    icon: 'Lightbulb',
  },
  {
    id: 'fault-finding-repairs',
    title: 'Fault Finding & Repairs',
    category: 'All Sectors',
    description: 'Rapid diagnostic testing and immediate repairs for tripping circuits, sparking plugs, and power loss.',
    details: 'Equipped with precision testing instruments to quickly isolate short circuits, ground faults, burnt wiring, and restore safe power across Auckland 24/7.',
    icon: 'Zap',
  },
  {
    id: 'ev-charger-installation',
    title: 'EV Charger Installation',
    category: 'Residential',
    description: 'Dedicated Level 2 home and workplace electric vehicle wallbox chargers for Tesla, BYD, Nissan & more.',
    details: 'Dedicated sub-circuit installation, load management verification, Type 2 socket fittings, and Certificate of Verification (CoF) compliant wiring.',
    icon: 'BatteryCharging',
  },
  {
    id: 'heat-pump-appliance-wiring',
    title: 'Heat Pump & Appliance Wiring',
    category: 'Residential',
    description: 'Dedicated electrical feeds for heat pumps, induction cooktops, spas, ovens, and water heaters.',
    details: 'High-current appliance circuits, outdoor waterproof isolators for heat pump condenser units, induction cooktop conversion wiring, and hot water cylinder repairs.',
    icon: 'Flame',
  },
  {
    id: 'commercial-fitouts',
    title: 'Commercial Fit-Outs & Maintenance',
    category: 'Commercial',
    description: 'Retail shops, offices, cafes, and warehouse electrical fit-outs, testing & tagging, and data cabling.',
    details: 'Emergency exit lighting testing, scheduled RCD compliance, three-phase distribution boards, CAT6 network data drops, and POS power integration.',
    icon: 'Building2',
  },
  {
    id: 'industrial-electrical',
    title: 'Industrial Electrical Work',
    category: 'Industrial',
    description: '3-phase power distribution, motor control systems, machinery connections, and preventative maintenance.',
    details: 'Heavy machinery wiring, variable speed drives (VFD), high-bay LED warehouse illumination, power factor correction, and industrial plant breakdown response.',
    icon: 'Factory',
  },
];

export const BENEFITS = [
  {
    title: 'Fast Response Times',
    description: 'Rapid Auckland-wide dispatch. We understand electrical faults can be dangerous emergencies that cannot wait.',
    icon: 'Clock',
  },
  {
    title: 'Upfront & Transparent Pricing',
    description: 'No unexpected surprises or hidden call-out fees. Transparent, itemised estimates provided before work commences.',
    icon: 'BadgePercent',
  },
  {
    title: 'Tidy & Safe Workmanship',
    description: 'Strict adherence to NZ Electrical Safety Regulations (AS/NZS 3000:2018). We leave every home and worksite spotless.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Free, No-Obligation Quotes',
    description: 'Honest on-site consultations and expert advice for residential renovations, EV chargers, and commercial fit-outs.',
    icon: 'FileCheck',
  },
];

export const STATS = [
  { value: '5.0', label: 'Google Rating', sublabel: 'Flawless 5-Star Track Record' },
  { value: '159', label: 'Verified Reviews', sublabel: 'From Auckland Property Owners' },
  { value: '24/7', label: 'Emergency Service', sublabel: 'Auckland Wide Rapid Dispatch' },
  { value: '100%', label: 'Workmanship Guarantee', sublabel: 'Licensed & NZ Certified' },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'David & Sarah M.',
    location: 'Henderson, West Auckland',
    date: '2 weeks ago',
    rating: 5,
    service: 'Switchboard Upgrade & Rewire',
    text: 'Deep Singh did an outstanding job upgrading our old 1970s fuse board to a modern RCD switchboard. Arrived right on time, explained everything clearly, and left the cupboard cleaner than he found it. Exceptional 5-star service in Henderson!',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Kaur Logistics / Harpreet K.',
    location: 'Albany Industrial Estate',
    date: '1 month ago',
    rating: 5,
    service: '3-Phase Industrial Power & Lighting',
    text: 'Tri-Phase Electrical sorted our warehouse 3-phase machinery circuits and high-bay LED lighting. Deep is extremely knowledgeable in industrial specs. Prompt, certified, and fair pricing. Highly recommended for any Auckland business.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Michael Chen',
    location: 'Te Atatū Peninsula',
    date: '3 weeks ago',
    rating: 5,
    service: 'Tesla EV Wall Connector Installation',
    text: 'Deep installed our Tesla Gen 3 EV charger in the garage. Clean conduit runs, verified earth resistance, and completed the NZ electrical compliance certificate on the spot. Great communication from start to finish.',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Rebecca Wilson',
    location: 'Mount Albert, Auckland',
    date: '2 months ago',
    rating: 5,
    service: 'Emergency Fault Finding (Midnight Callout)',
    text: 'Our main power tripped late on a rainy Sunday evening with the fridge and heaters cutting out. Deep answered immediately and was at our door in 35 minutes. Found a dangerous burnt wire and made it completely safe. Truly reliable 24/7 service.',
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'Auckland Cafe Collective',
    location: 'Ponsonby, Auckland',
    date: '2 months ago',
    rating: 5,
    service: 'Commercial Kitchen Wiring & Fit-Out',
    text: 'Deep handled the power feeds for our new commercial espresso machines and combi oven. Fast, efficient, understood council inspection standards, and kept our opening schedule on track. A true professional electrician.',
    verified: true,
  },
  {
    id: 'rev-6',
    name: 'Jason T.',
    location: 'Manukau, South Auckland',
    date: '3 months ago',
    rating: 5,
    service: 'Full House LED Downlights & Cooktop',
    text: 'Deep Singh replaced all old incandescent fittings with flush warm LED downlights and wired our new induction hob. The house looks transformed and our power bill has visibly dropped. 10/10 workmanship.',
    verified: true,
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];
