export interface Vehicle {
  id: string;
  name: string;
  category: 'Sedan' | 'MUV' | 'Premium' | 'Group Travel';
  ratePerKm: number;
  image: string;
  highlightText?: string;
  capacity?: string;
}

export interface RouteItem {
  id: string;
  from: 'Delhi' | 'Chandigarh';
  to: string;
  displayName: string;
  description: string;
  tag?: string;
  popular?: boolean;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  region: string;
  image: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface BookingRequest {
  tripType: 'one-way' | 'round-trip' | 'outstation' | 'tour-package';
  pickupCity: string;
  dropDestination: string;
  date: string;
  vehicleId: string;
  customerName: string;
  customerPhone: string;
  notes?: string;
}
