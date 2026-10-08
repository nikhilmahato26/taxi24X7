import type { ServiceItem } from '../types';

export const taxiServices: ServiceItem[] = [
  {
    id: 'delhi-taxi',
    title: 'Delhi Taxi Service',
    description: 'Taxi services from Delhi to major North Indian destinations. Doorstep pickup across Delhi NCR to outstation cities.',
    iconName: 'MapPin',
    features: ['Delhi NCR to any North Indian city', 'Airport pickup & railway transfers', 'Sedan, MUV & Tempo options'],
  },
  {
    id: 'chandigarh-taxi',
    title: 'Chandigarh Taxi Service',
    description: 'Taxi services from Chandigarh to nearby cities, hill stations and destinations. Connects Tri-city, Peermuchalla & Mohali.',
    iconName: 'Navigation',
    features: ['Tri-city & Peermuchalla base', 'Gateway to Himachal & Punjab', 'Quick booking assistance'],
  },
  {
    id: 'outstation-taxi',
    title: 'Outstation Taxi',
    description: 'Travel between cities across North India with comfortable cabs and reliable intercity drivers.',
    iconName: 'Compass',
    features: ['Interstate travel across North India', 'Clean and sanitised vehicles', 'Per-km transparent pricing'],
  },
  {
    id: 'one-way-taxi',
    title: 'One-Way Taxi',
    description: 'Enquire for one-way travel requirements between major North Indian destinations without round-trip compulsion.',
    iconName: 'ArrowRightCircle',
    features: ['Drop-only trip options', 'Intercity one-way travel', 'Contact us for a quote'],
  },
  {
    id: 'round-trip-taxi',
    title: 'Round Trip Taxi',
    description: 'Enquire for round-trip travel for multi-day outstation journeys, business visits, and leisure road trips.',
    iconName: 'Repeat',
    features: ['Flexible halts & route return', 'Same cab throughout journey', 'Comfort for family & groups'],
  },
  {
    id: 'tour-transportation',
    title: 'Tour Transportation',
    description: 'Transportation for holiday and pilgrimage tours including Himachal, Uttarakhand, Char Dham, Kashmir, and Rajasthan.',
    iconName: 'Car',
    features: ['Hill station & mountain routes', 'Pilgrimage Yatras & family tours', 'Tempo Traveller for groups'],
  },
];

export const serviceStates = [
  { name: 'Delhi', note: 'National Capital Region & Airport connectivity' },
  { name: 'Chandigarh', note: 'Tri-city, Peermuchalla & Panchkula hub' },
  { name: 'Punjab', note: 'Amritsar, Jalandhar, Ludhiana & statewide' },
  { name: 'Mohali', note: 'IT hub and adjoining Punjab corridors' },
  { name: 'Himachal Pradesh', note: 'Shimla, Manali, Dharamshala, Kasol, Kufri' },
  { name: 'Uttar Pradesh', note: 'Agra, Mathura, Vrindavan, Ayodhya, Lucknow' },
  { name: 'Haryana', note: 'Gurgaon, Faridabad, Panipat, Ambala' },
  { name: 'Jammu & Kashmir', note: 'Jammu, Katra (Vaishno Devi), Srinagar, Kashmir' },
  { name: 'Rajasthan', note: 'Jaipur, Khatu Shyam, Ajmer, Udaipur' },
  { name: 'Uttarakhand', note: 'Dehradun, Haridwar, Rishikesh, Mussoorie, Char Dham' },
];
