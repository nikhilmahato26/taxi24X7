import React, { useState, useEffect } from 'react';
import { X, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { vehicles } from '../data/vehicles';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    type?: string;
    pickup?: string;
    drop?: string;
    vehicle?: string;
    title?: string;
    routeTitle?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickup, setPickup] = useState(initialData?.pickup || 'Delhi');
  const [drop, setDrop] = useState(initialData?.drop || 'Chandigarh');
  const [date, setDate] = useState('');
  const [vehicle, setVehicle] = useState(initialData?.vehicle || 'dzire');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      if (initialData.pickup) setPickup(initialData.pickup);
      if (initialData.drop) setDrop(initialData.drop);
      if (initialData.vehicle) setVehicle(initialData.vehicle);
      if (initialData.title || initialData.routeTitle) {
        setNotes(`Regarding: ${initialData.title || initialData.routeTitle}`);
      }
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedVeh = vehicles.find((v) => v.id === vehicle);
    const vehicleName = selectedVeh ? selectedVeh.name : vehicle;

    const summaryTitle = initialData?.title || initialData?.routeTitle || `${pickup} to ${drop}`;

    const text = `*New Booking Request - AXI 24X7*%0A%0A*Trip/Package:* ${summaryTitle}%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Pickup Location:* ${pickup}%0A*Destination:* ${drop}%0A*Travel Date:* ${date || 'Immediate / Flexible'}%0A*Vehicle Preference:* ${vehicleName}%0A*Notes:* ${notes || 'N/A'}`;

    window.open(`https://wa.me/919815657986?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8 flex items-start gap-3.5">
          <div className="relative overflow-hidden rounded-xl border border-slate-800/40 shadow-sm bg-[#1A2232] w-12 h-12 flex-shrink-0">
            <img
              src="/logo.jpg"
              alt="AXI 24X7 Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#003B95] text-[11px] font-bold uppercase tracking-wider mb-1">
              <span>AXI 24X7 Instant Booking</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0A1F44]">
              {initialData?.title || initialData?.routeTitle || 'Book / Enquire Taxi'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Fill the details below for instant confirmation via WhatsApp or phone.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 size={30} />
            </div>
            <h4 className="text-lg font-extrabold text-slate-900 mb-1">
              Enquiry Sent via WhatsApp!
            </h4>
            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Our 24x7 team has received your query. You can also directly call our helpline below.
            </p>
            <div className="flex gap-3 justify-center">
              <a
                href="tel:+919815657986"
                className="btn-secondary text-xs py-2.5 px-5 font-bold"
              >
                <Phone size={14} />
                <span>Call +91 9815657986</span>
              </a>
              <button
                onClick={onClose}
                className="btn-outline text-xs py-2.5 px-5 font-bold"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amit Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input text-xs py-2"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98156..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input text-xs py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Pickup City / Area *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Delhi / Chandigarh"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="form-input text-xs py-2"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Destination *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shimla / Manali"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  className="form-input text-xs py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Travel Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-input text-xs py-2"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Vehicle
                </label>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="form-input text-xs py-2 font-medium"
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
                Trip Details / Special Notes
              </label>
              <textarea
                rows={2}
                placeholder="Mention one-way, round trip, number of days, or flight pickup time..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="form-input text-xs py-2 resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="submit"
                className="btn-primary flex-1 justify-center py-3 text-xs font-extrabold shadow-md"
              >
                <MessageSquare size={15} />
                <span>Submit via WhatsApp</span>
              </button>

              <a
                href="tel:+919815657986"
                className="btn-secondary flex-1 justify-center py-3 text-xs font-bold"
              >
                <Phone size={15} />
                <span>Call +91 9815657986</span>
              </a>
            </div>

            <p className="text-[10px] text-slate-500 text-center leading-normal">
              * Final fare may depend on trip requirements. Contact AXI 24X7 for a quote.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
