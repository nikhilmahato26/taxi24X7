// ============================================================
// TAXI 24X7 – siteContent.js (single source of truth)
// ============================================================

import logoImg from '../assets/images/logo-taxi24x7.png'
import fleetDzireImg from '../assets/images/fleet-swift-dzire.png'
import fleetErtigaImg from '../assets/images/hero-car-mpv.png'
import fleetCarensImg from '../assets/images/fleet-kia-carens.png'
import fleetInnovaCrystaImg from '../assets/images/fleet-innova-crysta.png'
import fleetInnovaHycrossImg from '../assets/images/fleet-innova-hycross.png'
import fleetTempoImg from '../assets/images/hero-car-traveller.png'

// ─── Brand ───────────────────────────────────────────────────
export const brand = {
  name: 'TAXI 24X7',
  legalName: 'TAXI 24X7',
  tagline: 'YOUR RIDE. ANY TIME. EVERYWHERE.',
  slogan: 'Your Ride. Any Time. Everywhere.',
  logo: logoImg,
  colors: {
    primary: '#003B95',
    yellow: '#FFD200',
    dark: '#0A1F44',
  },
}

// ─── Contact & Business Details ─────────────────────────────
export const contact = {
  phone: '9815657986',
  displayPhone: '+91 9815657986',
  whatsapp: '919815657986',
  email: 'taxi24x707@gmail.com',
  gst: '03BZHPK5217Q1Z2',
  region: 'North India',
  instagram: 'https://www.instagram.com/taxi24x7india?utm_source=qr&stkn=dTRuaG1raHhkNXkz',
  facebook: 'https://www.facebook.com/share/1H8JDdF5wS/',
  locations: [
    {
      id: 'chandigarh',
      title: 'Chandigarh Hub',
      address: 'City Plaza, Peermuchalla, Chandigarh',
      city: 'Chandigarh / Peermuchalla',
      state: 'Punjab / Chandigarh',
      badge: 'Head Office',
    },
    {
      id: 'gurgaon',
      title: 'Gurgaon Hub',
      address: 'Rajendra Park, Sector 105, Gurgaon, Haryana',
      city: 'Gurgaon',
      state: 'Haryana',
      badge: 'NCR Branch',
    },
  ],
  serviceAreas: [
    'Delhi',
    'Chandigarh',
    'Punjab',
    'Mohali',
    'Himachal Pradesh',
    'Uttar Pradesh',
    'Haryana',
    'Jammu & Kashmir',
    'Rajasthan',
    'Uttarakhand',
  ],
}

// ─── Hero ────────────────────────────────────────────────────
export const hero = {
  heading: '24×7 Taxi & Outstation Cab Service Across North India',
  subheading: 'Safe, reliable, and premium cabs for one-way drops, round trips, hill station holidays, devotional tours, and intercity travel with transparent per-km rates.',
  highlights: [
    { icon: '🕐', text: 'Available 24×7' },
    { icon: '🚗', text: 'Clean AC Fleet' },
    { icon: '🏔️', text: 'Hill Station Specialists' },
    { icon: '🛕', text: 'Char Dham & Pilgrimage' },
    { icon: '🧾', text: 'GST Invoice Available' },
    { icon: '⚡', text: 'Instant Booking' },
  ],
}

// ─── How It Works ────────────────────────────────────────────
export const howItWorks = [
  {
    step: '01',
    icon: 'location',
    title: 'Select Route & Car',
    desc: 'Choose your pickup city, drop destination, and preferred vehicle from our fleet.',
  },
  {
    step: '02',
    icon: 'phone',
    title: 'Instant Confirmation',
    desc: 'Call or WhatsApp TAXI 24X7 at +91 9815657986 for transparent, upfront pricing.',
  },
  {
    step: '03',
    icon: 'car',
    title: 'Enjoy Safe Travel',
    desc: 'Doorstep pickup with experienced, verified drivers for a comfortable ride.',
  },
]

// ─── Vehicle Fleet ───────────────────────────────────────────
export const fleet = [
  {
    id: 'dzire-aura',
    name: 'Maruti Suzuki Dzire / Aura',
    type: 'Sedan',
    image: fleetDzireImg,
    seats: 5,
    ac: true,
    pricePerKm: 12,
    rateText: '₹12/km',
    icon: '🚗',
    suitableFor: ['Intercity Outstation', 'Airport Transfers', 'Budget Family Trips'],
    specs: ['5 Seater', 'Spacious Boot Space', 'Chilled AC', 'Fuel Efficient'],
    featured: false,
    badge: 'Best Value',
  },
  {
    id: 'ertiga',
    name: 'Maruti Suzuki Ertiga',
    type: 'Family MPV',
    image: fleetErtigaImg,
    seats: 7,
    ac: true,
    pricePerKm: 15,
    rateText: '₹15/km',
    icon: '🚐',
    suitableFor: ['Family Vacations', 'Hill Station Rides', 'Small Group Trips'],
    specs: ['7 Seater', 'Foldable Seats', 'Dual AC', 'Comfortable Suspension'],
    featured: false,
    badge: 'Popular Family Car',
  },
  {
    id: 'kia-carens',
    name: 'Kia Carens',
    type: 'Premium MPV',
    image: fleetCarensImg,
    seats: 7,
    ac: true,
    pricePerKm: 18,
    rateText: '₹18/km',
    icon: '🚐',
    suitableFor: ['Executive Travel', 'Long-Distance Cruising', 'Mountain Highways'],
    specs: ['6/7 Seater', 'Plush Luxury Interior', 'Smooth Ride', 'Dual Row AC'],
    featured: false,
    badge: 'Executive Comfort',
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    type: 'Premium SUV',
    image: fleetInnovaCrystaImg,
    seats: 7,
    ac: true,
    pricePerKm: 20,
    rateText: '₹20/km',
    icon: '🚙',
    suitableFor: ['Char Dham Yatra', 'Himachal & Kashmir Tours', 'VIP & Corporate Rides'],
    specs: ['7 Seater', 'Captain Seats', 'Heavy Luggage Carrier', 'All-Terrain Stability'],
    featured: true,
    badge: 'Most Popular',
  },
  {
    id: 'innova-hycross',
    name: 'Toyota Innova Hycross',
    type: 'Luxury Hybrid MPV',
    image: fleetInnovaHycrossImg,
    seats: 7,
    ac: true,
    pricePerKm: 25,
    rateText: '₹25/km',
    icon: '✨',
    suitableFor: ['Ultra Luxury Travel', 'Business Delegates', 'Long-Distance VIP Tours'],
    specs: ['7 Seater', 'Ultra-Quiet Hybrid Cabin', 'Ottoman Recliners', 'Premium Climate Control'],
    featured: false,
    badge: 'Luxury Class',
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    type: 'Group Vehicle (12-17 Seater)',
    image: fleetTempoImg,
    seats: 12,
    ac: true,
    pricePerKm: 35,
    rateText: '₹35/km',
    icon: '🚌',
    suitableFor: ['Large Family Yatras', 'Corporate Outings', 'Char Dham & Kashmir Groups'],
    specs: ['12 to 17 Seater', 'Pushback Reclining Seats', 'High Roof', 'Dedicated Luggage Box'],
    featured: false,
    badge: 'Group Specialist',
  },
]

// ─── Tour Packages ───────────────────────────────────────────
export const tourPackages = [
  {
    id: 'himachal-tour',
    title: 'Himachal Tour Package',
    subtitle: 'Shimla • Manali • Dharamshala • Dalhousie • Kasol • Kufri',
    region: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
    description: 'Explore breathtaking snow-capped peaks, pine forests, Rohtang Pass, Solang Valley, and scenic mountain highways with expert hill drivers.',
    features: ['Shimla & Kufri Sightseeing', 'Manali & Solang Valley', 'Dharamshala & McLeodganj', 'Experienced Mountain Chauffeurs'],
    badge: 'Bestseller Hill Tour',
  },
  {
    id: 'uttarakhand-tour',
    title: 'Uttarakhand Tour Package',
    subtitle: 'Dehradun • Mussoorie • Rishikesh • Haridwar • Nainital',
    region: 'Uttarakhand',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    description: 'Experience holy Ganga Aarti at Haridwar & Rishikesh, scenic Queen of Hills Mussoorie, and picturesque lakes of Nainital.',
    features: ['Ganga Aarti at Haridwar & Rishikesh', 'Mussoorie Kempty Falls', 'Nainital Lake Tour', 'Custom 3 to 7 Days Itinerary'],
    badge: 'Devbhoomi Special',
  },
  {
    id: 'char-dham-tour',
    title: 'Char Dham Tour Package',
    subtitle: 'Yamunotri • Gangotri • Kedarnath • Badrinath',
    region: 'Uttarakhand Himalayas',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1000&q=80',
    description: 'Sacred Himalayan pilgrimage with rugged Innova Crysta and Tempo Travellers. Dedicated mountain route guidance and 24x7 support.',
    features: ['Sonprayag / Gaurikund Route', 'Badrinath Dham Transportation', 'Do Dham & Char Dham Options', 'All-Inclusive Custom Quotes'],
    badge: 'Sacred Pilgrimage',
  },
  {
    id: 'kashmir-tour',
    title: 'Kashmir Tour Package',
    subtitle: 'Srinagar • Gulmarg • Pahalgam • Sonamarg • Jammu',
    region: 'Jammu & Kashmir',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80',
    description: 'Paradise on Earth tour connecting Delhi / Chandigarh to Jammu, Srinagar Dal Lake, snow meadows of Gulmarg, and Betaab Valley.',
    features: ['Dal Lake & Shikara Connect', 'Gulmarg Gondola Transfer', 'Pahalgam Valley & Betaab Valley', 'Mata Vaishno Devi Katra add-on'],
    badge: 'Paradise Tour',
  },
  {
    id: 'rajasthan-tour',
    title: 'Rajasthan Tour Package',
    subtitle: 'Jaipur • Udaipur • Jodhpur • Jaisalmer • Khatu Shyam',
    region: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
    description: 'Tour majestic royal forts, palaces, and sacred temples across Rajasthan with comfortable highway cruisers via modern expressways.',
    features: ['Pink City Jaipur Forts', 'Khatu Shyam Ji & Salasar Balaji', 'Lake City Udaipur & Jodhpur', 'Smooth Delhi-Mumbai Expressway'],
    badge: 'Royal Heritage',
  },
  {
    id: 'agra-mathura-vrindavan-tour',
    title: 'Agra Mathura Vrindavan Tour Package',
    subtitle: 'Taj Mahal • Agra Fort • Krishna Janmabhoomi • Banke Bihari',
    region: 'Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80',
    description: 'One-day and multi-day spiritual and heritage tour connecting Delhi / Chandigarh to Mathura, Vrindavan temples and the iconic Taj Mahal.',
    features: ['Taj Mahal & Agra Fort', 'Shri Krishna Janmabhoomi Darshan', 'Banke Bihari & Prem Mandir', 'Yamuna Expressway Fast Transit'],
    badge: 'Spiritual & Heritage',
  },
]

// ─── Popular Routes (Delhi & Chandigarh) ─────────────────────
export const delhiRoutes = [
  { id: 'delhi-chandigarh', from: 'Delhi', to: 'Chandigarh', title: 'Delhi to Chandigarh Taxi', desc: 'Direct expressway taxi connecting Delhi NCR with Chandigarh, Mohali & Panchkula.', tag: 'Expressway', popular: true },
  { id: 'delhi-shimla', from: 'Delhi', to: 'Shimla', title: 'Delhi to Shimla Taxi', desc: 'Scenic mountain climb to the Queen of Hills with experienced hill chauffeurs.', tag: 'Hill Station', popular: true },
  { id: 'delhi-manali', from: 'Delhi', to: 'Manali', title: 'Delhi to Manali Taxi', desc: 'Comfortable long-distance ride through Kullu Valley to Manali & Solang.', tag: 'Himachal Tour', popular: true },
  { id: 'delhi-dehradun', from: 'Delhi', to: 'Dehradun', title: 'Delhi to Dehradun Taxi', desc: 'Fast highway & valley cab service to Uttarakhand capital Dehradun.', tag: 'Uttarakhand', popular: true },
  { id: 'delhi-rishikesh', from: 'Delhi', to: 'Rishikesh', title: 'Delhi to Rishikesh Taxi', desc: 'Direct taxi to the yoga capital and holy banks of River Ganga.', tag: 'Pilgrimage', popular: true },
  { id: 'delhi-haridwar', from: 'Delhi', to: 'Haridwar', title: 'Delhi to Haridwar Taxi', desc: 'Ganga Aarti darshan journey with round-the-clock availability.', tag: 'Spiritual Yatra', popular: true },
  { id: 'delhi-jaipur', from: 'Delhi', to: 'Jaipur', title: 'Delhi to Jaipur Taxi', desc: 'Smooth highway drive to the Pink City via Delhi-Jaipur Expressway.', tag: 'Rajasthan', popular: true },
  { id: 'delhi-agra-mathura', from: 'Delhi', to: 'Agra Mathura Vrindavan', title: 'Delhi to Agra Mathura Vrindavan Taxi', desc: 'Expressway pilgrimage & heritage tour to Taj Mahal and Vrindavan.', tag: 'Heritage Yatra', popular: true },
  { id: 'delhi-haldwani', from: 'Delhi', to: 'Haldwani', title: 'Delhi to Haldwani Taxi', desc: 'Reliable taxi service connecting Delhi to the gateway of Kumaon.', tag: 'Kumaon Hills' },
  { id: 'delhi-mussoorie', from: 'Delhi', to: 'Mussoorie', title: 'Delhi to Mussoorie Taxi', desc: 'Uphill mountain route directly to the picturesque Mall Road Mussoorie.', tag: 'Hill Station' },
  { id: 'delhi-nainital', from: 'Delhi', to: 'Nainital', title: 'Delhi to Nainital Taxi', desc: 'Family holiday cab service to the famous lake district of Nainital.', tag: 'Lakes & Hills' },
  { id: 'delhi-khatu-shyam', from: 'Delhi', to: 'Khatu Shyam', title: 'Delhi to Khatu Shyam Taxi', desc: 'Devotional pilgrimage taxi service to Khatu Shyam Ji Temple in Rajasthan.', tag: 'Pilgrimage Special' },
  { id: 'delhi-jammu', from: 'Delhi', to: 'Jammu', title: 'Delhi to Jammu Taxi', desc: 'Long-distance intercity taxi connecting Delhi with Jammu & Katra.', tag: 'J&K Outstation' },
  { id: 'delhi-badrinath', from: 'Delhi', to: 'Badrinath', title: 'Delhi to Badrinath Taxi', desc: 'Sacred Himalayan Dham transportation along the Alaknanda river.', tag: 'Char Dham' },
  { id: 'delhi-kedarnath', from: 'Delhi', to: 'Kedarnath', title: 'Delhi to Kedarnath Taxi', desc: 'Dedicated spiritual yatra taxi from Delhi to Sonprayag / Gaurikund base.', tag: 'Char Dham' },
  { id: 'delhi-kashmir', from: 'Delhi', to: 'Kashmir', title: 'Delhi to Kashmir Taxi', desc: 'Touring taxi connecting Delhi to Srinagar, Gulmarg, and Pahalgam.', tag: 'Paradise Valley' },
  { id: 'delhi-amritsar', from: 'Delhi', to: 'Amritsar', title: 'Delhi to Amritsar Taxi', desc: 'Grand Trunk road taxi journey to Sri Harmandir Sahib (Golden Temple).', tag: 'Punjab Express' },
  { id: 'delhi-lucknow', from: 'Delhi', to: 'Lucknow', title: 'Delhi to Lucknow Taxi', desc: 'Fast expressway travel to Lucknow via Yamuna and Agra-Lucknow Expressways.', tag: 'Expressway' },
  { id: 'delhi-bihar', from: 'Delhi', to: 'Bihar', title: 'Delhi to Bihar Taxi', desc: 'Long-distance interstate taxi service from Delhi to destinations in Bihar.', tag: 'Interstate' },
  { id: 'delhi-punjab', from: 'Delhi', to: 'Punjab', title: 'Delhi to Punjab Taxi', desc: 'Comprehensive taxi transportation across all districts of Punjab.', tag: 'Punjab Outstation' },
  { id: 'delhi-ayodhya', from: 'Delhi', to: 'Ayodhya', title: 'Delhi to Ayodhya Taxi', desc: 'Direct pilgrimage cab service connecting Delhi NCR with Ram Mandir Dham.', tag: 'Pilgrimage Special' },
]

export const chandigarhRoutes = [
  { id: 'chd-delhi', from: 'Chandigarh', to: 'Delhi', title: 'Chandigarh to Delhi Taxi', desc: 'High-frequency door-to-door cab service to Delhi NCR & IGI Airport.', tag: 'Airport & Highway', popular: true },
  { id: 'chd-dehradun', from: 'Chandigarh', to: 'Dehradun', title: 'Chandigarh to Dehradun Taxi', desc: 'Cross-state intercity ride linking Chandigarh Tri-city to Dehradun.', tag: 'Intercity', popular: true },
  { id: 'chd-shimla', from: 'Chandigarh', to: 'Shimla', title: 'Chandigarh to Shimla Taxi', desc: 'Swift Himalayan highway climb from Chandigarh to Shimla & Kufri.', tag: 'Hill Station', popular: true },
  { id: 'chd-manali', from: 'Chandigarh', to: 'Manali', title: 'Chandigarh to Manali Taxi', desc: 'Scenic travel along Beas river to Kullu, Manali and Solang Valley.', tag: 'Himachal Special', popular: true },
  { id: 'chd-jammu', from: 'Chandigarh', to: 'Jammu', title: 'Chandigarh to Jammu Taxi', desc: 'Direct taxi service from Chandigarh to Jammu and Katra (Vaishno Devi).', tag: 'Yatra Outstation' },
  { id: 'chd-haridwar', from: 'Chandigarh', to: 'Haridwar', title: 'Chandigarh to Haridwar Taxi', desc: 'Smooth pilgrimage drive connecting Chandigarh directly to Haridwar.', tag: 'Spiritual Yatra' },
  { id: 'chd-jaipur', from: 'Chandigarh', to: 'Jaipur', title: 'Chandigarh to Jaipur Taxi', desc: 'Interstate highway taxi connecting Chandigarh to the Pink City Jaipur.', tag: 'Rajasthan Connect' },
  { id: 'chd-kasol', from: 'Chandigarh', to: 'Kasol', title: 'Chandigarh to Kasol Taxi', desc: 'Mountain valley cab service to Kasol, Manikaran Sahib & Parvati Valley.', tag: 'Parvati Valley' },
  { id: 'chd-dharamshala', from: 'Chandigarh', to: 'Dharamshala', title: 'Chandigarh to Dharamshala Taxi', desc: 'Scenic taxi ride from Chandigarh to Kangra Valley & McLeodganj.', tag: 'Kangra Valley' },
  { id: 'chd-agra', from: 'Chandigarh', to: 'Agra', title: 'Chandigarh to Agra Taxi', desc: 'Long-distance heritage taxi travel from Chandigarh to Taj Mahal Agra.', tag: 'Heritage Route' },
  { id: 'chd-amritsar', from: 'Chandigarh', to: 'Amritsar', title: 'Chandigarh to Amritsar Taxi', desc: 'Smooth highway drive connecting Chandigarh to Amritsar Golden Temple.', tag: 'Punjab Express' },
  { id: 'chd-himachal', from: 'Chandigarh', to: 'Himachal', title: 'Chandigarh to Himachal Taxi', desc: 'All-Himachal tour taxi covering hill towns, scenic passes & valleys.', tag: 'All Himachal Tour' },
  { id: 'chd-5-devi', from: 'Chandigarh', to: '5 Devi Yatra', title: 'Chandigarh to 5 Devi Yatra Taxi', desc: 'Dedicated holy yatra: Mansa Devi, Chintpurni, Jwala Ji, Kangra Devi & Chamunda Devi.', tag: 'Pilgrimage Special', popular: true },
  { id: 'chd-mussoorie', from: 'Chandigarh', to: 'Mussoorie', title: 'Chandigarh to Mussoorie Taxi', desc: 'Direct hill station cab service to Mussoorie and Dhanaulti.', tag: 'Hill Station' },
  { id: 'chd-noida', from: 'Chandigarh', to: 'Noida', title: 'Chandigarh to Noida Taxi', desc: 'Direct intercity taxi linking Chandigarh & Peermuchalla to Noida NCR.', tag: 'NCR Express' },
  { id: 'chd-kufri', from: 'Chandigarh', to: 'Kufri', title: 'Chandigarh to Kufri Taxi', desc: 'Snow viewpoint and mountain adventure journey up to Kufri & Fagu.', tag: 'Himachal Hills' },
]

// ─── Services ────────────────────────────────────────────────
export const services = [
  {
    id: 'outstation',
    category: 'Intercity',
    title: 'Outstation Taxi Service',
    desc: 'Round-trip and one-way outstation cabs across North India with transparent per-km billing and experienced drivers.',
    badge: 'Popular',
    btnText: 'Book Outstation Cab',
    btnColor: 'primary',
    routes: ['Delhi → All North India', 'Chandigarh → All Destinations'],
  },
  {
    id: 'hill-tours',
    category: 'Holidays',
    title: 'Hill Station & Tour Cabs',
    desc: 'Specialized mountain driving cabs for Shimla, Manali, Dharamshala, Mussoorie, Nainital, and Kashmir valleys.',
    badge: 'Specialist',
    btnText: 'Book Hill Tour',
    btnColor: 'yellow',
    routes: ['Delhi / Chandigarh → Himachal', 'Delhi / Chandigarh → Uttarakhand'],
  },
  {
    id: 'pilgrimage',
    category: 'Spiritual',
    title: 'Pilgrimage & Yatra Cabs',
    desc: 'Dedicated devotional travel for Char Dham, 5 Devi Yatra, Khatu Shyam Ji, Haridwar, Rishikesh, and Ayodhya Ram Mandir.',
    badge: 'Special',
    btnText: 'Book Yatra Cab',
    btnColor: 'primary',
    routes: ['Char Dham Yatra', '5 Devi Darshan Yatra', 'Khatu Shyam & Ayodhya'],
  },
  {
    id: 'one-way',
    category: 'Flexible',
    title: 'One-Way Drop Service',
    desc: 'Pay only for one-way drop between Delhi, Chandigarh, Jaipur, Agra, Dehradun, and major North Indian cities.',
    badge: 'Affordable',
    btnText: 'Book One-Way Drop',
    btnColor: 'yellow',
    routes: ['Chandigarh ↔ Delhi', 'Delhi ↔ Jaipur / Agra / Dehradun'],
  },
  {
    id: 'airport',
    category: 'Transfers',
    title: 'Airport & Railway Transfers',
    desc: 'Punctual, guaranteed airport pickups and drops to Delhi IGI Airport (T1, T2, T3) and Chandigarh International Airport.',
    badge: '24×7',
    btnText: 'Book Airport Cab',
    btnColor: 'primary',
    routes: ['Chandigarh ↔ Delhi IGI Airport', 'Doorstep Airport Drop'],
  },
  {
    id: 'tempo-group',
    category: 'Group Travel',
    title: 'Tempo Traveller Rental',
    desc: '12 to 17 seater luxury pushback Tempo Travellers for large families, corporate tours, and extended yatra groups.',
    badge: '12-17 Seats',
    btnText: 'Book Tempo Traveller',
    btnColor: 'yellow',
    routes: ['All North India Group Tours', 'Char Dham & Himachal Trips'],
  },
]

// ─── Why Choose TAXI 24X7 ────────────────────────────────────
export const whyChoose = [
  { icon: '🕐', title: '24×7 Instant Availability', desc: 'Round-the-clock dispatch for urgent rides, midnight airport runs, and scheduled tours.' },
  { icon: '💰', title: 'Transparent Per-KM Rates', desc: 'Clear starting fares from ₹12/km with no hidden driver surcharges or surprise billing.' },
  { icon: '🏔️', title: 'Expert Mountain Drivers', desc: 'Skilled chauffeurs with years of experience on Himalayan highways and mountain passes.' },
  { icon: '🛡️', title: 'Clean & Sanitized Fleet', desc: 'Immaculately maintained AC sedans, SUVs, and luxury Tempo Travellers for your safety.' },
  { icon: '🧾', title: 'GST Registered Company', desc: 'Official GST billing (03BZHPK5217Q1Z2) available for corporate and business travel.' },
  { icon: '📍', title: 'Dual Hub Operations', desc: 'Strategically located in Chandigarh (Peermuchalla) and Gurgaon (Sector 105) covering all North India.' },
]

// ─── Testimonials ────────────────────────────────────────────
export const testimonials = [
  {
    name: 'Gurpreet Singh',
    location: 'Chandigarh',
    rating: 5,
    review: 'Booked Innova Crysta from Chandigarh to Manali for a 5-day family trip. Driver was polite and an expert on the hilly roads. Clean car and prompt service!',
    type: 'Himachal Tour',
  },
  {
    name: 'Rohit Sharma',
    location: 'Gurgaon, Sector 105',
    rating: 5,
    review: 'Used TAXI 24X7 for a one-way trip from Gurgaon to Chandigarh. Booking was confirmed in 2 minutes on WhatsApp. Driver arrived on time and the ride was super smooth.',
    type: 'Delhi to Chandigarh',
  },
  {
    name: 'Sunita Sharma',
    location: 'Delhi NCR',
    rating: 5,
    review: 'We booked Tempo Traveller for our 5 Devi Yatra starting from Chandigarh. All 14 family members were very comfortable. Professional driver who knew every temple route.',
    type: '5 Devi Yatra',
  },
  {
    name: 'Vikas Mehra',
    location: 'Mohali',
    rating: 5,
    review: 'Best cab service in Tri-City and North India! Rates are very reasonable at ₹12/km for Dzire and ₹20/km for Crysta. Genuine billing and GST invoice provided.',
    type: 'Outstation Travel',
  },
  {
    name: 'Anjali Verma',
    location: 'Noida',
    rating: 5,
    review: 'Hired TAXI 24X7 for Char Dham Yatra. Excellent Innova Crysta in top mechanical condition. The driver took utmost care on high altitude mountain roads.',
    type: 'Char Dham Yatra',
  },
  {
    name: 'Amit Patel',
    location: 'Jaipur',
    rating: 5,
    review: 'Booked Delhi to Jaipur and return with TAXI 24X7. Very comfortable sedan, clean interiors, and reasonable rates. Will definitely recommend to friends and colleagues!',
    type: 'Delhi to Jaipur',
  },
]

// ─── FAQs ────────────────────────────────────────────────────
export const faqs = [
  {
    q: 'How do I book a cab with TAXI 24X7?',
    a: 'You can book a cab instantly by calling +91 9815657986 or sending a WhatsApp message. Simply share your pickup location, drop destination, date, and preferred vehicle, and we will confirm your booking with an upfront quote.',
  },
  {
    q: 'What are the per-kilometre rates for different vehicles?',
    a: 'Our starting per-km rates are: Maruti Suzuki Dzire / Aura at ₹12/km, Maruti Suzuki Ertiga at ₹15/km, Kia Carens at ₹18/km, Toyota Innova Crysta at ₹20/km, Toyota Innova Hycross at ₹25/km, and Tempo Traveller at ₹35/km. Minimum daily running limits apply for outstation travel.',
  },
  {
    q: 'Are tolls, state taxes, and parking included in the per-km rate?',
    a: 'Per-km rates cover vehicle hire and fuel. State border entry taxes, highway toll taxes, parking fees, and driver night allowances (if applicable) are paid as actuals or included in an all-inclusive fixed package quote upon request.',
  },
  {
    q: 'Which areas and states does TAXI 24X7 serve?',
    a: 'TAXI 24X7 operates across all of North India, including Delhi NCR, Chandigarh, Punjab, Mohali, Himachal Pradesh, Uttar Pradesh, Haryana, Jammu & Kashmir, Rajasthan, and Uttarakhand.',
  },
  {
    q: 'Do you provide one-way drop taxi service?',
    a: 'Yes! We provide convenient one-way drop taxi services on major corridors like Chandigarh to Delhi, Delhi to Chandigarh, Delhi to Jaipur, Delhi to Dehradun, and more without round-trip compulsion.',
  },
  {
    q: 'Can I book custom tour packages for Himachal, Uttarakhand, or Char Dham?',
    a: 'Absolutely! We offer customized multi-day tour packages with vehicles of your choice (Sedan, Ertiga, Innova Crysta, Hycross, or Tempo Traveller) with experienced mountain chauffeurs.',
  },
  {
    q: 'Is TAXI 24X7 available 24 hours a day?',
    a: 'Yes, our taxi service and helpline are active 24 hours a day, 7 days a week, 365 days a year for emergency pickups, early-morning flights, and midnight travel.',
  },
  {
    q: 'Do you provide GST invoices for corporate and business travel?',
    a: 'Yes, TAXI 24X7 is a GST-registered business with GSTIN 03BZHPK5217Q1Z2. We provide valid GST tax invoices for business trips and corporate reimbursement.',
  },
]

// ─── Footer Links ────────────────────────────────────────────
export const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Fleet & Rates', href: '#fleet' },
    { label: 'Tour Packages', href: '#tours' },
    { label: 'Popular Routes', href: '#routes' },
    { label: 'Services', href: '#services' },
    { label: 'Locations', href: '#locations' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Delhi to Chandigarh Taxi', href: '#routes' },
    { label: 'Chandigarh to Delhi Taxi', href: '#routes' },
    { label: 'Himachal Tour Packages', href: '#tours' },
    { label: 'Uttarakhand Tour Packages', href: '#tours' },
    { label: 'Char Dham Yatra Taxi', href: '#tours' },
    { label: 'Innova Crysta / Hycross Rental', href: '#fleet' },
    { label: 'Tempo Traveller Group Travel', href: '#fleet' },
    { label: 'Airport & Intercity Transfers', href: '#services' },
  ],
}
