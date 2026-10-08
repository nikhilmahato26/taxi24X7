import React, { useState } from 'react';
import { Phone, Calendar, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { delhiRoutes, chandigarhRoutes } from '../data/routes';

interface HeroProps {
  onOpenBooking: (initialData?: {
    type?: string;
    pickup?: string;
    drop?: string;
    vehicle?: string;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [pickupCity, setPickupCity] = useState<'Delhi' | 'Chandigarh' | 'Other'>('Delhi');
  const [destination, setDestination] = useState<string>('Chandigarh');
  const [selectedVehicle, setSelectedVehicle] = useState<string>('dzire');
  const [tripType, setTripType] = useState<'outstation' | 'one-way' | 'round-trip'>('outstation');

  // Dynamic destination options based on pickup city
  const availableDestinations =
    pickupCity === 'Delhi'
      ? delhiRoutes.map((r) => r.to)
      : pickupCity === 'Chandigarh'
      ? chandigarhRoutes.map((r) => r.to)
      : [
          'Delhi',
          'Chandigarh',
          'Shimla',
          'Manali',
          'Dehradun',
          'Rishikesh',
          'Haridwar',
          'Jaipur',
          'Agra',
          'Amritsar',
          'Kashmir',
        ];

  const handleQuickEnquire = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking({
      type: tripType,
      pickup: pickupCity,
      drop: destination,
      vehicle: selectedVehicle,
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF4FF] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-x-12 w-80 h-80 rounded-full bg-yellow-100/50 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Eyebrow, Supporting Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Logo Badge & 24x7 Eyebrow */}
            <div className="flex items-center gap-3.5 mb-4 flex-wrap">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800/40 shadow-md bg-[#1A2232] w-12 h-12 flex-shrink-0">
                <img
                  src="/logo.jpg"
                  alt="AXI 24X7 Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="section-label flex items-center gap-2 shadow-sm mb-0">
                <Sparkles size={14} className="text-[#003B95]" />
                <span>AXI 24X7 • NORTH INDIA TAXI SERVICES</span>
              </div>
            </div>

            {/* Prominent 24x7 Callout Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-200 text-xs font-bold text-amber-900 mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>24X7 TAXI SERVICE AVAILABLE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1F44] tracking-tight leading-[1.12] mb-5">
              YOUR JOURNEY, <br />
              <span className="text-[#003B95] underline decoration-[#FFD200] decoration-wavy decoration-2">
                OUR DRIVE
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
              Reliable taxi services, outstation travel and North India tour packages connecting{' '}
              <strong className="text-slate-800 font-semibold">
                Delhi, Chandigarh, Himachal, Uttarakhand, Kashmir, Rajasthan
              </strong>{' '}
              and more.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking()}
                className="btn-primary text-base px-8 py-3.5 shadow-lg shadow-yellow-400/30 flex items-center gap-3 font-extrabold"
              >
                <Calendar size={18} />
                <span>Book a Taxi</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="tel:+919815657986"
                className="btn-secondary text-base px-7 py-3.5 flex items-center gap-2 font-bold"
              >
                <Phone size={18} />
                <span>Call Now: +91 9815657986</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 w-full max-w-xl text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#003B95] flex-shrink-0" />
                <span>24x7 Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#003B95] flex-shrink-0" />
                <span>Transparent Per-KM</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin size={16} className="text-[#003B95] flex-shrink-0" />
                <span>North India Coverage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Quick Fare Inquiry Widget */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Scenic Road-trip Card Banner */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group">
              <img
                src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80"
                alt="North India Scenic Highway Roadtrip"
                className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFD200] text-[#0A1F44] text-xs font-black uppercase tracking-wider mb-1 inline-block">
                    Outstation & Tours
                  </span>
                  <p className="text-sm font-bold text-white leading-snug">
                    Comfortable Rides Across North India Mountains & Expressways
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Route Enquiry Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,59,149,0.12)] border border-slate-100">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#EEF4FF] flex items-center justify-center text-[#003B95]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h2 className="text-base font-extrabold text-[#0A1F44] leading-tight">Quick Taxi Enquiry</h2>
                    <p className="text-xs text-slate-500">Get an instant quote for your route</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Instant Response
                </span>
              </div>

              <form onSubmit={handleQuickEnquire} className="space-y-3.5">
                {/* Trip Type Tabs */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl text-xs font-bold text-slate-600">
                  <button
                    type="button"
                    onClick={() => setTripType('outstation')}
                    className={`py-1.5 rounded-lg transition-all ${
                      tripType === 'outstation' ? 'bg-white text-[#003B95] shadow-sm font-extrabold' : ''
                    }`}
                  >
                    Outstation
                  </button>
                  <button
                    type="button"
                    onClick={() => setTripType('one-way')}
                    className={`py-1.5 rounded-lg transition-all ${
                      tripType === 'one-way' ? 'bg-white text-[#003B95] shadow-sm font-extrabold' : ''
                    }`}
                  >
                    One-Way
                  </button>
                  <button
                    type="button"
                    onClick={() => setTripType('round-trip')}
                    className={`py-1.5 rounded-lg transition-all ${
                      tripType === 'round-trip' ? 'bg-white text-[#003B95] shadow-sm font-extrabold' : ''
                    }`}
                  >
                    Round-Trip
                  </button>
                </div>

                {/* Pickup City */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pickup Location
                  </label>
                  <select
                    value={pickupCity}
                    onChange={(e) => {
                      const city = e.target.value as 'Delhi' | 'Chandigarh' | 'Other';
                      setPickupCity(city);
                      if (city === 'Delhi') setDestination('Chandigarh');
                      else if (city === 'Chandigarh') setDestination('Delhi');
                      else setDestination('Himachal');
                    }}
                    className="form-input text-sm py-2.5 font-medium"
                  >
                    <option value="Delhi">Delhi (NCR & Airport)</option>
                    <option value="Chandigarh">Chandigarh (Peermuchalla & Tri-city)</option>
                    <option value="Other">Other North India Location</option>
                  </select>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="form-input text-sm py-2.5 font-medium"
                  >
                    {availableDestinations.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Vehicle Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Vehicle
                  </label>
                  <select
                    value={selectedVehicle}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="form-input text-sm py-2.5 font-medium"
                  >
                    {vehicles.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} (Rate: ₹{v.ratePerKm}/km)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-3 text-sm font-extrabold mt-2"
                >
                  <Calendar size={16} />
                  <span>Enquire For This Route</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center leading-normal pt-1">
                  * Final fare may depend on trip requirements. Contact us for a quote.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
