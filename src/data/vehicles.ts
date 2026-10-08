import type { Vehicle } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: 'dzire',
    name: 'Maruti Suzuki Dzire',
    category: 'Sedan',
    ratePerKm: 12,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    highlightText: 'Comfortable & economical sedan for city, airport & outstation travel',
  },
  {
    id: 'ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'MUV',
    ratePerKm: 15,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    highlightText: 'Spacious MUV choice for family trips, hill stations & luggage comfort',
  },
  {
    id: 'kia-carens',
    name: 'Kia Carens',
    category: 'MUV',
    ratePerKm: 18,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    highlightText: 'Modern premium MUV with refined ride comfort and smooth cruising',
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Premium',
    ratePerKm: 20,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',
    highlightText: 'Gold standard premium outstation cruiser for mountain & highway journeys',
  },
  {
    id: 'innova-hycross',
    name: 'Toyota Innova Hycross',
    category: 'Premium',
    ratePerKm: 25,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    highlightText: 'Next-generation luxury travel experience with supreme ride quietness',
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    category: 'Group Travel',
    ratePerKm: 35,
    image: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=800&q=80',
    highlightText: 'Ideal for group tours, corporate journeys, family Yatras & Char Dham pilgrimage',
  },
];
