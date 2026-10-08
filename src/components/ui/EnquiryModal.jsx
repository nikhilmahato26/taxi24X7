import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MessageSquare, Calendar, Car, MapPin, User, Send, CheckCircle2 } from 'lucide-react'
import { contact, vehicles, allRoutes, tourPackages } from '../../data/siteContent'

export default function EnquiryModal({
  isOpen,
  onClose,
  initialVehicle = '',
  initialRoute = '',
  initialPackage = '',
}) {
  const [selectedVehicle, setSelectedVehicle] = useState(initialVehicle || vehicles[0].name)
  const [pickupCity, setPickupCity] = useState('Delhi')
  const [destination, setDestination] = useState(initialRoute || initialPackage || '')
  const [tripType, setTripType] = useState('Outstation')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (initialVehicle) setSelectedVehicle(initialVehicle)
    if (initialRoute) setDestination(initialRoute)
    if (initialPackage) setDestination(initialPackage)
  }, [initialVehicle, initialRoute, initialPackage, isOpen])

  if (!isOpen) return null

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    if (!name || !phone) return

    const matchedVehicle = vehicles.find((v) => v.name === selectedVehicle)
    const rateText = matchedVehicle ? ` (${matchedVehicle.rateDisplay})` : ''

    const lines = [
      '👋 Hello AXI 24X7, I would like to book a taxi / enquire about a trip:',
      '',
      `🚗 Vehicle: ${selectedVehicle}${rateText}`,
      `📍 From: ${pickupCity}`,
      destination ? `🎯 Destination / Route: ${destination}` : '',
      `🔄 Trip Type: ${tripType}`,
      `📅 Travel Date: ${date || 'To be decided'}`,
      `👤 Name: ${name}`,
      `📞 Phone: ${phone}`,
      notes ? `📝 Details / Notes: ${notes}` : '',
      '',
      'Please let me know vehicle availability and a fare quote. Thank you!',
    ].filter(Boolean)

    const whatsappUrl = `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 text-white"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 p-6 sm:p-7">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-950/20 hover:bg-slate-950/30 flex items-center justify-center text-slate-950 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-slate-950 text-amber-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              AXI 24X7 • 24x7 North India Taxi
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
              Book a Taxi / Enquire Route
            </h3>
            <p className="text-slate-950/80 text-xs sm:text-sm font-semibold mt-0.5">
              Delhi • Chandigarh • Himachal • Uttarakhand • Char Dham • Kashmir • Rajasthan
            </p>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-7">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-white">Enquiry Prepared!</h4>
                <p className="text-slate-300 text-sm mt-2 max-w-sm mx-auto">
                  Your trip details are forwarded to WhatsApp. You can also dial AXI 24X7 directly at{' '}
                  <strong className="text-amber-400">{contact.phone}</strong> for instant assistance.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={contact.phoneTel}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-slate-950 font-black text-sm hover:bg-amber-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-slate-950" />
                    Call {contact.phone}
                  </a>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-slate-200 font-bold text-sm hover:bg-slate-700 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                {/* Vehicle Selection with Rates */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Select Vehicle &amp; Rate
                    </label>
                    <span className="text-[11px] text-amber-400 font-semibold">Starting from ₹12/km</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {vehicles.map((v) => {
                      const isSelected = selectedVehicle === v.name
                      return (
                        <button
                          type="button"
                          key={v.id}
                          onClick={() => setSelectedVehicle(v.name)}
                          className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                            isSelected
                              ? 'border-amber-500 bg-amber-500/20 text-white font-bold ring-1 ring-amber-500'
                              : 'border-slate-800 bg-slate-800/60 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="truncate text-xs font-bold">{v.name.replace('Maruti Suzuki ', '').replace('Toyota ', '')}</span>
                            <span className="text-[11px] font-black text-amber-400">{v.rateDisplay}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 block mt-0.5">{v.category}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Pickup City & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Starting City <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Delhi">Delhi NCR (Delhi / Gurgaon / Noida)</option>
                      <option value="Chandigarh">Chandigarh / Peermuchalla / Mohali</option>
                      <option value="Gurgaon">Gurgaon (Sector 105 Hub)</option>
                      <option value="Other">Other North India Location</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Destination / Route / Tour
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="e.g. Shimla / Manali / Jaipur / Char Dham"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Trip Type & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Trip Requirement
                    </label>
                    <select
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Outstation Round Trip">Outstation Round Trip</option>
                      <option value="One-Way Taxi">One-Way Taxi</option>
                      <option value="Tour Package (Multi-Day)">Tour Package (Multi-Day)</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Local City Taxi">Local City Taxi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Planned Travel Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9815657986"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Trip Details / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Pickup address, flight number, number of passengers, or tour requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <p className="text-[11px] text-slate-400">
                  * Final fare may depend on trip requirements. Contact us for a quote.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Enquire on WhatsApp
                  </button>
                  <a
                    href={contact.phoneTel}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call {contact.phone}
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
