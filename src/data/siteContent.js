// ============================================================
// TAXI 24X7 – siteContent.js
// Single source of truth for 24x7 Taxi & Travel Services across North India
// ============================================================

import fleetInnovaCrystaImg from '../assets/images/fleet-innova-crysta.png'
import fleetDzireImg from '../assets/images/fleet-swift-dzire.jpg'

// ─── 1. Brand & Business Information ────────────────────────
export const brand = {
  name: 'TAXI 24 X 7',
  serviceType: '24x7 Taxi & Travel Services',
  tagline: 'Your Journey, Our Drive',
  eyebrow: 'TAXI 24X7 • NORTH INDIA TAXI SERVICES',
  heroHeading: 'YOUR JOURNEY, OUR DRIVE',
  heroSubheading:
    'Reliable taxi services, outstation travel and North India tour packages connecting Delhi, Chandigarh, Himachal, Uttarakhand, Kashmir, Rajasthan and more.',
  primaryCta: 'Book a Taxi',
  secondaryCta: 'Call Now',
  statusBadge: '24x7 Active Taxi Service Across North India',
}

// ─── 2. Contact & Business Details ──────────────────────────
export const contact = {
  businessName: 'TAXI 24X7',
  phone: '+91 9815657986',
  phoneTel: 'tel:+919815657986',
  phoneDisplay: '+91 98156 57986',
  email: 'taxi24x707@gmail.com',
  emailMailto: 'mailto:taxi24x707@gmail.com',
  gstNumber: '03BZHPK5217Q1Z2',
  primaryServiceArea: 'North India',
  whatsappRaw: '919815657986',
  whatsappUrl: 'https://wa.me/919815657986',
  defaultWhatsAppMessage:
    'Hello TAXI 24X7, I want to enquire about taxi booking / outstation travel in North India.',
}

// ─── 3. Business Locations ──────────────────────────────────
export const locations = [
  {
    id: 'chandigarh-hub',
    title: 'Chandigarh Hub',
    address: 'City Plaza, Peermuchalla, Chandigarh',
    label: 'Chandigarh / Tri-City Operations',
    highlights: ['Peermuchalla Base', 'Tri-city & Mohali Connectivity', 'Gateway to Himachal & Punjab'],
  },
  {
    id: 'gurgaon-hub',
    title: 'Gurgaon / NCR Hub',
    address: 'Rajendra Park, Sector 105, Gurgaon, Haryana',
    label: 'Delhi NCR & Haryana Operations',
    highlights: ['Sector 105 Gurgaon Base', 'Delhi NCR Airport Connectivity', 'Direct Highway & Expressway Access'],
  },
]

// ─── 4. Vehicle Fleet (Strict Whitelist & Supplied Rates) ───
export const vehicles = [
  {
    id: 'dzire',
    name: 'Maruti Suzuki Dzire',
    category: 'Sedan',
    ratePerKm: 12,
    rateDisplay: '₹12/km',
    image: fleetDzireImg,
    description: 'Comfortable & economical sedan for city, airport & outstation travel.',
    type: 'Sedan',
  },
  {
    id: 'ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'MUV',
    ratePerKm: 15,
    rateDisplay: '₹15/km',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=80',
    description: 'Spacious MUV choice for family trips, hill stations & luggage comfort.',
    type: 'MUV',
  },
  {
    id: 'kia-carens',
    name: 'Kia Carens',
    category: 'MUV',
    ratePerKm: 18,
    rateDisplay: '₹18/km',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    description: 'Modern premium MUV with refined ride comfort and smooth cruising.',
    type: 'MUV',
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Premium',
    ratePerKm: 20,
    rateDisplay: '₹20/km',
    image: fleetInnovaCrystaImg,
    description: 'Gold standard premium outstation cruiser for mountain & highway journeys.',
    type: 'Premium SUV',
  },
  {
    id: 'innova-hycross',
    name: 'Toyota Innova Hycross',
    category: 'Premium',
    ratePerKm: 25,
    rateDisplay: '₹25/km',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80',
    description: 'Next-generation luxury travel experience with supreme ride quietness.',
    type: 'Premium Luxury',
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    category: 'Group Travel',
    ratePerKm: 35,
    rateDisplay: '₹35/km',
    image: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=900&q=80',
    description: 'Ideal for group tours, corporate journeys, family Yatras & Char Dham pilgrimage.',
    type: 'Group Travel',
  },
]

export const rateNotes = {
  primaryNotice:
    'Rates shown are the client-provided per-kilometre rates. Contact TAXI 24X7 for the applicable fare for your journey and trip requirements.',
  disclaimer: 'Final fare may depend on trip requirements. Contact us for a quote.',
}

// ─── 5. Hero Quick Highlights ───────────────────────────────
export const heroHighlights = [
  {
    id: '24x7-service',
    title: '24x7 Service',
    description: 'Taxi assistance available around the clock.',
    badge: 'Round the Clock',
    icon: 'clock',
  },
  {
    id: 'north-india',
    title: 'North India',
    description: 'Travel across major North Indian regions.',
    badge: 'Interstate Coverage',
    icon: 'map-pin',
  },
  {
    id: 'multiple-vehicles',
    title: 'Multiple Vehicles',
    description: 'Cars and Tempo Traveller options available.',
    badge: 'Fleet Options',
    icon: 'car',
  },
  {
    id: 'tour-packages',
    title: 'Tour Packages',
    description: 'Explore Himachal, Uttarakhand, Kashmir, Rajasthan and more.',
    badge: 'Holiday & Yatra',
    icon: 'compass',
  },
]

// ─── 6. About Section ───────────────────────────────────────
export const aboutContent = {
  heading: 'YOUR NORTH INDIA TRAVEL PARTNER',
  paragraph:
    'TAXI 24X7 provides taxi and travel services across North India, connecting customers to major cities, hill stations, pilgrimage destinations and tourist destinations. With a range of cars and Tempo Traveller options, customers can enquire for local, intercity and outstation travel requirements.',
  locationsIntro:
    'With operating locations in Chandigarh (Peermuchalla) and Gurgaon (Sector 105), TAXI 24X7 connects travelers across North India seamlessly.',
}

// ─── 7. Taxi Services ───────────────────────────────────────
export const taxiServices = [
  {
    id: 'delhi-taxi',
    title: 'Delhi Taxi Service',
    description: 'Taxi services from Delhi to major North Indian destinations.',
    tag: 'Delhi NCR Hub',
    icon: 'map-pin',
  },
  {
    id: 'chandigarh-taxi',
    title: 'Chandigarh Taxi Service',
    description: 'Taxi services from Chandigarh to nearby cities, hill stations and destinations.',
    tag: 'Tri-City Hub',
    icon: 'navigation',
  },
  {
    id: 'outstation-taxi',
    title: 'Outstation Taxi',
    description: 'Travel between cities across North India.',
    tag: 'Intercity Connect',
    icon: 'compass',
  },
  {
    id: 'one-way-taxi',
    title: 'One-Way Taxi',
    description: 'Enquire for one-way travel requirements.',
    tag: 'Single Drop',
    icon: 'arrow-right-circle',
  },
  {
    id: 'round-trip-taxi',
    title: 'Round Trip Taxi',
    description: 'Enquire for round-trip travel.',
    tag: 'Return Trips',
    icon: 'repeat',
  },
  {
    id: 'tour-transportation',
    title: 'Tour Transportation',
    description: 'Transportation for holiday and pilgrimage tours.',
    tag: 'Holiday & Yatra',
    icon: 'car',
  },
]

// ─── 8. Service Area ────────────────────────────────────────
export const serviceArea = {
  heading: 'NORTH INDIA TAXI SERVICE',
  supportingText:
    'Taxi and travel services connecting Delhi, Chandigarh, Punjab, Haryana, Himachal Pradesh, Uttarakhand, Uttar Pradesh, Jammu & Kashmir and Rajasthan.',
  states: [
    { name: 'Delhi', note: 'National Capital Region & Airport connectivity' },
    { name: 'Chandigarh', note: 'Tri-city, Peermuchalla & Panchkula hub' },
    { name: 'Punjab', note: 'Amritsar, Jalandhar, Ludhiana & statewide' },
    { name: 'Mohali', note: 'IT corridor and adjoining Punjab routes' },
    { name: 'Himachal Pradesh', note: 'Shimla, Manali, Dharamshala, Kasol, Kufri' },
    { name: 'Uttar Pradesh', note: 'Agra, Mathura, Vrindavan, Ayodhya, Lucknow' },
    { name: 'Haryana', note: 'Gurgaon, Faridabad, Panipat, Ambala' },
    { name: 'Jammu & Kashmir', note: 'Jammu, Katra (Maa Vaishno Devi), Kashmir' },
    { name: 'Rajasthan', note: 'Jaipur, Khatu Shyam, Ajmer, Udaipur' },
    { name: 'Uttarakhand', note: 'Dehradun, Haridwar, Rishikesh, Char Dham' },
  ],
}

// ─── 9. Delhi to Popular Destinations (21 Exact Routes) ─────
export const delhiRoutes = [
  {
    id: 'delhi-chandigarh',
    from: 'Delhi',
    to: 'Chandigarh',
    displayName: 'Delhi to Chandigarh Taxi',
    description: 'Direct taxi service between Delhi NCR and Chandigarh Tri-city.',
    tag: 'High-Demand Route',
  },
  {
    id: 'delhi-shimla',
    from: 'Delhi',
    to: 'Shimla',
    displayName: 'Delhi to Shimla Taxi',
    description: 'Scenic hill station taxi from Delhi to the queen of hills, Shimla.',
    tag: 'Hill Station',
  },
  {
    id: 'delhi-manali',
    from: 'Delhi',
    to: 'Manali',
    displayName: 'Delhi to Manali Taxi',
    description: 'Long-distance mountain highway taxi from Delhi to Manali and Solang Valley.',
    tag: 'Himachal Special',
  },
  {
    id: 'delhi-dehradun',
    from: 'Delhi',
    to: 'Dehradun',
    displayName: 'Delhi to Dehradun Taxi',
    description: 'Express travel connecting Delhi NCR to the Uttarakhand capital, Dehradun.',
    tag: 'Uttarakhand Connect',
  },
  {
    id: 'delhi-rishikesh',
    from: 'Delhi',
    to: 'Rishikesh',
    displayName: 'Delhi to Rishikesh Taxi',
    description: 'Spiritual and adventure getaway taxi from Delhi to Rishikesh.',
    tag: 'Ganga Valley',
  },
  {
    id: 'delhi-haridwar',
    from: 'Delhi',
    to: 'Haridwar',
    displayName: 'Delhi to Haridwar Taxi',
    description: 'Holy pilgrimage taxi from Delhi to Har Ki Pauri, Haridwar.',
    tag: 'Pilgrimage Route',
  },
  {
    id: 'delhi-jaipur',
    from: 'Delhi',
    to: 'Jaipur',
    displayName: 'Delhi to Jaipur Taxi',
    description: 'Smooth highway drive connecting Delhi to the Pink City of Jaipur.',
    tag: 'Rajasthan Expressway',
  },
  {
    id: 'delhi-agra-mathura-vrindavan',
    from: 'Delhi',
    to: 'Agra / Mathura / Vrindavan',
    displayName: 'Delhi to Agra, Mathura & Vrindavan Taxi',
    description: 'Yamuna Expressway taxi covering Taj Mahal, Mathura and Vrindavan temples.',
    tag: 'Heritage & Pilgrimage',
  },
  {
    id: 'delhi-haldwani',
    from: 'Delhi',
    to: 'Haldwani',
    displayName: 'Delhi to Haldwani Taxi',
    description: 'Reliable taxi service connecting Delhi to Haldwani & Kumaon gateway.',
    tag: 'Kumaon Gateway',
  },
  {
    id: 'delhi-mussoorie',
    from: 'Delhi',
    to: 'Mussoorie',
    displayName: 'Delhi to Mussoorie Taxi',
    description: 'Scenic uphill mountain ride from Delhi to the picturesque town of Mussoorie.',
    tag: 'Hill Station',
  },
  {
    id: 'delhi-nainital',
    from: 'Delhi',
    to: 'Nainital',
    displayName: 'Delhi to Nainital Taxi',
    description: 'Comfortable family holiday taxi service from Delhi to the lake city Nainital.',
    tag: 'Lakes & Hills',
  },
  {
    id: 'delhi-khatu-shyam',
    from: 'Delhi',
    to: 'Khatu Shyam',
    displayName: 'Delhi to Khatu Shyam Taxi',
    description: 'Devotional pilgrimage taxi service from Delhi to Khatu Shyam Ji Temple.',
    tag: 'Pilgrimage Special',
  },
  {
    id: 'delhi-jammu',
    from: 'Delhi',
    to: 'Jammu',
    displayName: 'Delhi to Jammu Taxi',
    description: 'Interstate outstation taxi connecting Delhi NCR with Jammu and Katra.',
    tag: 'J&K Outstation',
  },
  {
    id: 'delhi-badrinath',
    from: 'Delhi',
    to: 'Badrinath',
    displayName: 'Delhi to Badrinath Taxi',
    description: 'Char Dham holy yatra transportation from Delhi to sacred Badrinath Dham.',
    tag: 'Char Dham Yatra',
  },
  {
    id: 'delhi-kedarnath',
    from: 'Delhi',
    to: 'Kedarnath',
    displayName: 'Delhi to Kedarnath Taxi',
    description: 'Spiritual yatra taxi from Delhi to Sonprayag/Gaurikund for Kedarnath Dham.',
    tag: 'Char Dham Yatra',
  },
  {
    id: 'delhi-kashmir',
    from: 'Delhi',
    to: 'Kashmir',
    displayName: 'Delhi to Kashmir Taxi',
    description: 'North India tour taxi service connecting Delhi to Srinagar & Kashmir valley.',
    tag: 'Kashmir Outstation',
  },
  {
    id: 'delhi-amritsar',
    from: 'Delhi',
    to: 'Amritsar',
    displayName: 'Delhi to Amritsar Taxi',
    description: 'Direct highway taxi journey from Delhi to the Golden Temple city of Amritsar.',
    tag: 'Punjab Express',
  },
  {
    id: 'delhi-lucknow',
    from: 'Delhi',
    to: 'Lucknow',
    displayName: 'Delhi to Lucknow Taxi',
    description: 'Fast expressway travel from Delhi to Lucknow via Yamuna & Agra expressways.',
    tag: 'Expressway Route',
  },
  {
    id: 'delhi-bihar',
    from: 'Delhi',
    to: 'Bihar',
    displayName: 'Delhi to Bihar Taxi',
    description: 'Long-distance intercity taxi service from Delhi to major districts in Bihar.',
    tag: 'Interstate Outstation',
  },
  {
    id: 'delhi-punjab',
    from: 'Delhi',
    to: 'Punjab',
    displayName: 'Delhi to Punjab Taxi',
    description: 'Comprehensive taxi transportation from Delhi to cities across Punjab.',
    tag: 'Punjab Outstation',
  },
  {
    id: 'delhi-ayodhya',
    from: 'Delhi',
    to: 'Ayodhya',
    displayName: 'Delhi to Ayodhya Taxi',
    description: 'Direct pilgrimage taxi service connecting Delhi NCR with Ayodhya Dham.',
    tag: 'Pilgrimage Special',
  },
]

// ─── 10. Chandigarh to Popular Destinations (16 Exact Routes) ──
export const chandigarhRoutes = [
  {
    id: 'chandigarh-delhi',
    from: 'Chandigarh',
    to: 'Delhi',
    displayName: 'Chandigarh to Delhi Taxi',
    description: 'High-frequency cab service connecting Chandigarh & Peermuchalla to Delhi NCR & Airport.',
    tag: 'Airport & Highway',
  },
  {
    id: 'chandigarh-dehradun',
    from: 'Chandigarh',
    to: 'Dehradun',
    displayName: 'Chandigarh to Dehradun Taxi',
    description: 'Comfortable cross-state taxi between Chandigarh Tri-city and Dehradun, Uttarakhand.',
    tag: 'Intercity Connect',
  },
  {
    id: 'chandigarh-shimla',
    from: 'Chandigarh',
    to: 'Shimla',
    displayName: 'Chandigarh to Shimla Taxi',
    description: 'Swift Himalayan highway taxi climb from Chandigarh to Shimla & Kufri.',
    tag: 'Hill Station',
  },
  {
    id: 'chandigarh-manali',
    from: 'Chandigarh',
    to: 'Manali',
    displayName: 'Chandigarh to Manali Taxi',
    description: 'Scenic travel from Chandigarh along the Beas river up to Kullu and Manali.',
    tag: 'Himachal Special',
  },
  {
    id: 'chandigarh-jammu',
    from: 'Chandigarh',
    to: 'Jammu',
    displayName: 'Chandigarh to Jammu Taxi',
    description: 'Direct taxi service from Chandigarh to Jammu and Katra for Mata Vaishno Devi pilgrims.',
    tag: 'Yatra Outstation',
  },
  {
    id: 'chandigarh-haridwar',
    from: 'Chandigarh',
    to: 'Haridwar',
    displayName: 'Chandigarh to Haridwar Taxi',
    description: 'Smooth pilgrimage drive connecting Chandigarh directly to Haridwar & Rishikesh.',
    tag: 'Spiritual Yatra',
  },
  {
    id: 'chandigarh-jaipur',
    from: 'Chandigarh',
    to: 'Jaipur',
    displayName: 'Chandigarh to Jaipur Taxi',
    description: 'Interstate highway taxi service connecting Chandigarh to Jaipur, Rajasthan.',
    tag: 'Rajasthan Connect',
  },
  {
    id: 'chandigarh-kasol',
    from: 'Chandigarh',
    to: 'Kasol',
    displayName: 'Chandigarh to Kasol Taxi',
    description: 'Mountain valley cab service connecting Chandigarh to Kasol and Parvati Valley.',
    tag: 'Parvati Valley',
  },
  {
    id: 'chandigarh-dharamshala',
    from: 'Chandigarh',
    to: 'Dharamshala',
    displayName: 'Chandigarh to Dharamshala Taxi',
    description: 'Scenic taxi ride from Chandigarh to Kangra Valley, Dharamshala & McLeod Ganj.',
    tag: 'Kangra Valley',
  },
  {
    id: 'chandigarh-agra',
    from: 'Chandigarh',
    to: 'Agra',
    displayName: 'Chandigarh to Agra Taxi',
    description: 'Long-distance heritage taxi travel from Chandigarh to the city of Taj Mahal, Agra.',
    tag: 'Heritage Route',
  },
  {
    id: 'chandigarh-amritsar',
    from: 'Chandigarh',
    to: 'Amritsar',
    displayName: 'Chandigarh to Amritsar Taxi',
    description: 'Smooth drive through Punjab connecting Chandigarh to the Golden Temple, Amritsar.',
    tag: 'Punjab Express',
  },
  {
    id: 'chandigarh-himachal',
    from: 'Chandigarh',
    to: 'Himachal',
    displayName: 'Chandigarh to Himachal Taxi',
    description: 'Flexible touring taxi service covering multiple districts across Himachal Pradesh.',
    tag: 'All Himachal Tour',
  },
  {
    id: 'chandigarh-5-devi-yatra',
    from: 'Chandigarh',
    to: '5 Devi Yatra',
    displayName: 'Chandigarh to 5 Devi Yatra Taxi',
    description: 'Dedicated holy pilgrimage taxi package covering the sacred 5 Devi temples in Himachal/Punjab.',
    tag: 'Pilgrimage Special',
  },
  {
    id: 'chandigarh-mussoorie',
    from: 'Chandigarh',
    to: 'Mussoorie',
    displayName: 'Chandigarh to Mussoorie Taxi',
    description: 'Direct hill station cab service from Chandigarh Tri-city to Mussoorie.',
    tag: 'Hill Station',
  },
  {
    id: 'chandigarh-noida',
    from: 'Chandigarh',
    to: 'Noida',
    displayName: 'Chandigarh to Noida Taxi',
    description: 'Direct intercity taxi linking Chandigarh, Peermuchalla & Mohali to Noida.',
    tag: 'NCR Express',
  },
  {
    id: 'chandigarh-kufri',
    from: 'Chandigarh',
    to: 'Kufri',
    displayName: 'Chandigarh to Kufri Taxi',
    description: 'Snow point and mountain adventure taxi journey from Chandigarh up to Kufri.',
    tag: 'Himachal Hills',
  },
]

export const allRoutes = [...delhiRoutes, ...chandigarhRoutes]

// ─── 11. North India Tour Packages (6 Exact Packages) ───────
export const tourPackages = [
  {
    id: 'himachal-tour',
    title: 'Himachal Tour Package',
    region: 'Himachal Pradesh',
    subtitle: 'Shimla • Manali • Mountains • Snow • Scenic Roads',
    description:
      'Explore scenic hill stations, snow-capped peaks, and beautiful Himalayan valleys with comfortable TAXI 24X7 cabs and tempo travellers.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
    ctaText: 'Enquire About Himachal',
    tag: 'Hill Tour Highlight',
  },
  {
    id: 'uttarakhand-tour',
    title: 'Uttarakhand Tour Package',
    region: 'Uttarakhand',
    subtitle: 'Dehradun • Mussoorie • Rishikesh • Nainital',
    description:
      'Experience tranquil hill retreats, sacred riverbanks, and scenic Himalayan roadways across Uttarakhand with reliable 24x7 cab service.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    ctaText: 'Plan Your Uttarakhand Journey',
    tag: 'Devbhoomi Tour',
  },
  {
    id: 'char-dham-tour',
    title: 'Char Dham Tour Package',
    region: 'Uttarakhand Himalayas',
    subtitle: 'Yamunotri • Gangotri • Kedarnath • Badrinath',
    description:
      'Spiritual pilgrimage transportation across sacred Himalayan temples with robust outstation vehicles, cars and Tempo Traveller options.',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1000&q=80',
    ctaText: 'Plan Your Uttarakhand Journey',
    tag: 'Sacred Yatra',
  },
  {
    id: 'kashmir-tour',
    title: 'Kashmir Tour Package',
    region: 'Jammu & Kashmir',
    subtitle: 'Srinagar • Gulmarg • Pahalgam • Sonamarg',
    description:
      'Plan a comfortable journey to Kashmir with TAXI 24X7. Enquire about available tour and transportation options connecting Delhi, Chandigarh and Kashmir.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80',
    ctaText: 'Enquire for Kashmir',
    tag: 'Discover Kashmir',
  },
  {
    id: 'rajasthan-tour',
    title: 'Rajasthan Tour Package',
    region: 'Rajasthan',
    subtitle: 'Jaipur • Jodhpur • Udaipur • Desert Roads',
    description:
      'Travel through the land of royal forts, palaces, and heritage architecture across Rajasthan with dependable intercity cabs and tempo travellers.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
    ctaText: 'Enquire for Rajasthan',
    tag: 'Royal Heritage',
  },
  {
    id: 'agra-mathura-vrindavan-tour',
    title: 'Agra Mathura Vrindavan Tour Package',
    region: 'Uttar Pradesh',
    subtitle: 'Taj Mahal • Mathura • Vrindavan Temples',
    description:
      'Dedicated pilgrimage and cultural tour package linking Delhi or Chandigarh to Agra, Mathura and Vrindavan temples via modern expressways.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80',
    ctaText: 'Enquire Now',
    tag: 'Heritage & Darshan',
  },
]

// ─── 12. Navigation Links ───────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Vehicles & Rates', href: '#vehicles' },
  { label: 'Route Search', href: '#route-search' },
  { label: 'Delhi Routes', href: '#delhi-routes' },
  { label: 'Chandigarh Routes', href: '#chandigarh-routes' },
  { label: 'Tour Packages', href: '#tour-packages' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
]
