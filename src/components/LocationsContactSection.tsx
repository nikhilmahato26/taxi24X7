import React, { useState } from 'react';
import { MapPin, Phone, Mail, FileText, Send, CheckCircle2 } from 'lucide-react';
import { vehicles } from '../data/vehicles';

export const LocationsContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    vehicle: 'dzire',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const vehicleObj = vehicles.find((v) => v.id === formData.vehicle);
    const vehicleName = vehicleObj ? vehicleObj.name : formData.vehicle;

    const whatsappMessage = `*New Taxi Enquiry - AXI 24X7*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Pickup:* ${formData.pickup}%0A*Drop:* ${formData.drop}%0A*Date:* ${formData.date}%0A*Preferred Vehicle:* ${vehicleName}%0A*Notes:* ${formData.message || 'N/A'}`;

    window.open(`https://wa.me/919815657986?text=${whatsappMessage}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label">
            <MapPin size={14} />
            <span>OPERATIONAL BASES & CONTACT</span>
          </div>
          <h2 className="section-title">CONNECT WITH AXI 24X7</h2>
          <p className="section-sub mx-auto">
            Operating across North India with primary service and business locations in the Chandigarh region and Gurgaon, Haryana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Locations & Business Credentials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location 1 Card */}
            <div className="bg-[#F7F9FC] rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#003B95] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#003B95]">
                    Chandigarh Region Base
                  </span>
                  <h3 className="text-lg font-extrabold text-[#0A1F44] mt-1 mb-1">
                    City Plaza, Peermuchalla, Chandigarh
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Primary operational point serving Chandigarh Tri-city, Mohali, Panchkula, and connecting routes to Himachal Pradesh, Punjab, and Jammu.
                  </p>
                </div>
              </div>
            </div>

            {/* Location 2 Card */}
            <div className="bg-[#F7F9FC] rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#003B95] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#003B95]">
                    Haryana & NCR Base
                  </span>
                  <h3 className="text-lg font-extrabold text-[#0A1F44] mt-1 mb-1">
                    Rajendra Park, Sector 105, Gurgaon, Haryana
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Operational point serving Gurgaon, Delhi NCR, and connecting expressway corridors to Rajasthan, Uttar Pradesh, and Uttarakhand.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact & GST Info Card */}
            <div className="bg-[#0A1F44] text-white rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                <div className="relative overflow-hidden rounded-xl border border-white/20 bg-[#1A2232] w-12 h-12 flex-shrink-0">
                  <img
                    src="/logo.jpg"
                    alt="AXI 24X7 Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#FFD200] uppercase tracking-wider leading-tight">
                    AXI 24X7
                  </h4>
                  <p className="text-[10px] text-blue-200">24x7 Helpline & Credentials</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FFD200]">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Primary Phone (24x7)</span>
                    <a href="tel:+919815657986" className="text-sm font-bold text-white hover:text-yellow-300">
                      +91 9815657986
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FFD200]">
                    <Mail size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Email Enquiries</span>
                    <a href="mailto:taxi24x707@gmail.com" className="text-sm font-bold text-white hover:text-yellow-300">
                      taxi24x707@gmail.com
                    </a>
                  </div>
                </div>

                {/* GST Number */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FFD200]">
                    <FileText size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">GST Registration</span>
                    <span className="text-xs font-mono font-bold text-[#FFD200]">
                      03BZHPK5217Q1Z2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Instant Booking Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,59,149,0.06)]">
            <h3 className="text-xl font-extrabold text-[#0A1F44] mb-1">
              Send Route or Package Enquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill details below to get an instant quote directly on WhatsApp or via callback.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-base font-extrabold text-emerald-900 mb-1">Enquiry Prepared!</h4>
                <p className="text-xs text-emerald-700 mb-4">
                  WhatsApp has opened with your trip details. You can also directly call us at +91 9815657986.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-xs py-2 px-5 font-bold"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input text-xs py-2.5"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input text-xs py-2.5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pickup City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Delhi / Chandigarh / Gurgaon"
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      className="form-input text-xs py-2.5"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Destination *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Manali / Shimla / Haridwar"
                      value={formData.drop}
                      onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                      className="form-input text-xs py-2.5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="form-input text-xs py-2.5"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Vehicle
                    </label>
                    <select
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="form-input text-xs py-2.5 font-medium"
                    >
                      {vehicles.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name} (Rate: ₹{v.ratePerKm}/km)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Special Requirements or Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Round-trip, hill station tour, early morning airport pickup..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input text-xs py-2.5 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-3 text-sm font-extrabold shadow-md"
                >
                  <Send size={15} />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  * Final fare may depend on trip requirements. Contact us for a quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
