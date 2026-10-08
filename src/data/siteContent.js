// ============================================================
// BALAJI TOURIST – siteContent.js
// Single source of truth for Bangalore Tourist Transportation & Car Rental Service
// ============================================================

import fleetInnovaImg from '../assets/images/fleet-innova-crysta.png'
import fleetEtiosImg from '../assets/images/fleet-toyota-etios.png'
import fleetSwiftDzireImg from '../assets/images/fleet-swift-dzire.jpg'

// ─── 1. Brand & Business Information ────────────────────────
export const brand = {
  name: 'Balaji Tourist',
  positioning: 'Bangalore Tourist Transportation & Car Rental Service',
  eyebrow: 'BALAJI TOURIST • BANGALORE',
  heroHeading: 'EXPLORE BANGALORE. TRAVEL BEYOND.',
  heroSubheading:
    'Comfortable tourist transportation from Bangalore for city sightseeing, family journeys and outstation travel.',
  primaryCta: 'Book Your Ride',
  secondaryCta: 'Call Now',
}

// ─── 2. Contact Information (Strictly Factual) ──────────────
export const contact = {
  businessName: 'Balaji Tourist',
  phone: '+91 9035018855',
  phoneTel: 'tel:+919035018855',
  phoneDisplay: '+91 90350 18855',
  email: 'balajitouristblr@gmail.com',
  emailMailto: 'mailto:balajitouristblr@gmail.com',
  location: 'Bangalore, Karnataka, India',
  whatsappRaw: '919035018855',
  whatsappUrl: 'https://wa.me/919035018855',
  defaultWhatsAppMessage:
    'Hello Balaji Tourist, I would like to enquire about tourist vehicle availability in Bangalore.',
}

// ─── 3. Vehicle Fleet Data Architecture (Strict Whitelist) ──
export const vehicles = [
  {
    id: 'innova',
    name: 'Toyota Innova',
    category: 'Family / Tourist',
    image: fleetInnovaImg,
    description: 'A comfortable option for family and tourist travel.',
    cta: 'Enquire Now',
    availabilityNote: 'Contact us for availability',
    highlights: ['Family Journeys', 'Outstation Travel', 'Spacious Tourist Travel'],
  },
  {
    id: 'etios',
    name: 'Toyota Etios',
    category: 'Sedan / Tourist',
    image: fleetEtiosImg,
    description: 'A practical option for city and tourist travel.',
    cta: 'Enquire Now',
    availabilityNote: 'Contact us for availability',
    highlights: ['City Sightseeing', 'Comfortable Touring', 'Bangalore Travel'],
  },
  {
    id: 'swift-dzire',
    name: 'Maruti Suzuki Swift Dzire',
    category: 'Sedan / Tourist',
    image: fleetSwiftDzireImg,
    description: 'A compact sedan option for comfortable travel.',
    cta: 'Enquire Now',
    availabilityNote: 'Contact us for availability',
    highlights: ['Local Travel', 'Compact Tourist Sedan', 'Comfortable Journeys'],
  },
]

// ─── 4. Hero Highlights (4 Compact Feature Cards) ───────────
export const heroHighlights = [
  {
    id: 'bangalore-based',
    title: 'Bangalore Based',
    description: 'Tourist transportation from Bangalore.',
    badge: 'Local Hub',
    icon: 'map-pin',
  },
  {
    id: 'comfortable-vehicles',
    title: 'Comfortable Vehicles',
    description: 'Choose from available tourist vehicle options.',
    badge: 'Fleet Options',
    icon: 'car',
  },
  {
    id: 'family-travel',
    title: 'Family Travel',
    description: 'Suitable vehicle options for family journeys.',
    badge: 'Comfortable',
    icon: 'users',
  },
  {
    id: 'outstation-travel',
    title: 'Outstation Travel',
    description: 'Enquire about travel beyond Bangalore.',
    badge: 'Beyond City',
    icon: 'compass',
  },
]

// ─── 5. About Section Content (Strictly Factual) ────────────
export const aboutContent = {
  heading: 'YOUR BANGALORE TOURIST TRAVEL PARTNER',
  paragraph1:
    'Balaji Tourist provides tourist transportation services in Bangalore with vehicle options including Toyota Innova, Toyota Etios and Maruti Suzuki Swift Dzire.',
  paragraph2:
    "Whether you're exploring Bangalore or planning a journey outside the city, contact Balaji Tourist to enquire about vehicle availability and travel requirements.",
  coreValues: [
    {
      title: 'Tourist Transportation',
      desc: 'Dedicated tourist travel support for visitors exploring Bangalore and Karnataka.',
    },
    {
      title: 'City & Outstation Coverage',
      desc: 'Travel within Bangalore or plan journeys to scenic destinations across South India.',
    },
    {
      title: 'Comfort-First Travel',
      desc: 'Vehicle options tailored for family comfort, group travel, and relaxed journeys.',
    },
  ],
}

// ─── 6. Tourist Services Section (Strictly Whitelisted) ──────
export const services = [
  {
    id: 'bangalore-sightseeing',
    title: 'Bangalore Sightseeing',
    description: 'Explore Bangalore comfortably with a dedicated tourist vehicle.',
    category: 'City Travel',
    icon: 'landmark',
  },
  {
    id: 'outstation-travel',
    title: 'Outstation Travel',
    description: 'Plan journeys from Bangalore to destinations outside the city.',
    category: 'Outstation',
    icon: 'route',
  },
  {
    id: 'family-travel',
    title: 'Family Travel',
    description: 'Comfortable transportation for family trips.',
    category: 'Family Care',
    icon: 'users',
  },
  {
    id: 'tourist-transportation',
    title: 'Tourist Transportation',
    description: 'Vehicle options for sightseeing and travel requirements.',
    category: 'Tourist Enquiries',
    icon: 'car',
  },
  {
    id: 'local-travel',
    title: 'Local Travel',
    description: 'Travel around Bangalore for your planned journey.',
    category: 'City Rides',
    icon: 'navigation',
  },
  {
    id: 'customized-travel',
    title: 'Customized Travel',
    description: 'Enquire about a vehicle according to your travel requirement.',
    category: 'Flexible Enquiries',
    icon: 'sliders',
  },
]

// ─── 7. Bangalore Sightseeing Section (Inspiration Only) ────
export const bangaloreSightseeing = {
  heading: 'EXPLORE BANGALORE WITH BALAJI TOURIST',
  supportingText:
    'Discover Bangalore comfortably with a tourist vehicle suited to your travel requirements.',
  ctaText: 'Enquire for Bangalore Sightseeing',
  notice:
    'Presented as Bangalore sightseeing inspiration. Contact us to enquire about vehicle availability for your planned itinerary.',
  landmarks: [
    {
      id: 'vidhana-soudha',
      name: 'Vidhana Soudha',
      subtitle: 'Neo-Dravidian Architectural Marvel',
      description:
        'The iconic seat of the state legislature of Karnataka, renowned for its grand granite columns and magnificent illuminated façade.',
      imageUrl:
        'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
      tag: 'Iconic Landmark',
    },
    {
      id: 'bangalore-palace',
      name: 'Bangalore Palace',
      subtitle: 'Royal Tudor-Style Architecture',
      description:
        'Built with Tudor-style fortified towers, Gothic windows, and lush surrounding gardens reminiscent of Windsor Castle.',
      imageUrl:
        'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      tag: 'Royal Heritage',
    },
    {
      id: 'lalbagh',
      name: 'Lalbagh Botanical Garden',
      subtitle: 'Historic Glass House & Flora',
      description:
        'Sprawling botanical sanctuary established in the 18th century, famous for its historic Glass House, ancient rock formations, and century-old trees.',
      imageUrl:
        'https://images.unsplash.com/photo-1600100397608-f010f444f4ac?auto=format&fit=crop&w=1200&q=80',
      tag: 'Botanical Haven',
    },
    {
      id: 'cubbon-park',
      name: 'Cubbon Park',
      subtitle: 'The Lush Green Heart of Bangalore',
      description:
        'Over 300 acres of shaded bamboo groves, serene pathways, and neoclassical colonial monuments in the center of the garden city.',
      imageUrl:
        'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=1200&q=80',
      tag: 'Garden City',
    },
    {
      id: 'bengaluru-city',
      name: 'Bengaluru City',
      subtitle: 'Vibrant Culture & Cosmopolitan Vibe',
      description:
        'A dynamic blend of traditional South Indian markets, premier technology corridors, artisan cafes, and pleasant year-round weather.',
      imageUrl:
        'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
      tag: 'City Life',
    },
  ],
}

// ─── 8. Discover Karnataka Section (Scenic Inspiration) ─────
export const karnatakaTravel = {
  heading: 'DISCOVER KARNATAKA',
  supportingText:
    'Planning to travel beyond Bangalore? Enquire about transportation for your Karnataka journey.',
  ctaText: 'Plan My Journey',
  notice:
    'Destination suggestions are provided for travel inspiration. Contact us to enquire about vehicles suited to your specific outstation journey.',
  destinations: [
    {
      id: 'mysuru',
      name: 'Mysuru (Mysore)',
      theme: 'Royal Heritage & Palaces',
      description:
        'Grand royal palaces, Chamundi Hill views, silk markets, and the historic heritage capital of Karnataka.',
      imageUrl:
        'https://images.unsplash.com/photo-1600100397608-f010f444f4ac?auto=format&fit=crop&w=1200&q=80',
      travelTag: 'Heritage Route',
    },
    {
      id: 'coorg',
      name: 'Coorg (Kodagu)',
      theme: 'Misty Coffee Plantations & Waterfalls',
      description:
        'Emerald coffee hills, mist-shrouded viewpoints, Abbey Falls, and refreshing mountain breezes in the Western Ghats.',
      imageUrl:
        'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=80',
      travelTag: 'Hill Station',
    },
    {
      id: 'chikmagalur',
      name: 'Chikmagalur',
      theme: 'Mullayanagiri Peaks & Coffee Estates',
      description:
        'The birthplace of Indian coffee, featuring rugged trekking trails, Mullayanagiri peaks, and peaceful hillside estates.',
      imageUrl:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      travelTag: 'Nature & Hills',
    },
    {
      id: 'hampi',
      name: 'Hampi',
      theme: 'UNESCO World Heritage Ruins',
      description:
        'Ancient stone temples, dramatic boulder landscapes, and the monumental capital ruins of the Vijayanagara Empire.',
      imageUrl:
        'https://images.unsplash.com/photo-1600100397608-f010f444f4ac?auto=format&fit=crop&w=1200&q=80',
      travelTag: 'Ancient Wonder',
    },
    {
      id: 'ooty-wayanad',
      name: 'Ooty & Wayanad Gateways',
      theme: 'Scenic Nilgiri & Kerala Border Journeys',
      description:
        'Scenic highway drives winding through Bandipur forest reserves into misty Nilgiri tea estates and Wayanad valleys.',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      travelTag: 'South India Route',
    },
  ],
}

// ─── 9. Quick Travel Inquiry Pre-sets ───────────────────────
export const tripTypes = [
  'Bangalore Sightseeing',
  'Outstation Travel',
  'Family Travel',
  'Tourist Transportation',
  'Local Travel',
  'Customized Travel',
]

// ─── 10. Navigation Links ───────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Sightseeing', href: '#sightseeing' },
  { label: 'Karnataka', href: '#karnataka' },
  { label: 'Vehicles', href: '#vehicles' },
  { label: 'Contact', href: '#contact' },
]

export const navSectionIds = ['home', 'about', 'services', 'sightseeing', 'karnataka', 'vehicles', 'contact']
