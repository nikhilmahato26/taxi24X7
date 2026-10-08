import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MessageSquare, Calendar, Car, MapPin, User, Send, CheckCircle2 } from 'lucide-react'
import { contact, vehicles, tripTypes } from '../../data/siteContent'

export default function EnquiryModal({ isOpen, onClose, initialVehicle = '', initialTripType = '' }) {
  const [selectedVehicle, setSelectedVehicle] = useState(initialVehicle || vehicles[0].name)
  const [selectedTrip, setSelectedTrip] = useState(initialTripType || tripTypes[0])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [pickup, setPickup] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    if (!name || !phone) return

    const lines = [
      '👋 Hello Balaji Tourist, I want to enquire about tourist travel availability:',
      '',
      `🚗 Vehicle: ${selectedVehicle}`,
      `🗺️ Travel Type: ${selectedTrip}`,
      `📅 Travel Date: ${date || 'Flexible / To be confirmed'}`,
      `📍 Pickup (Bangalore): ${pickup || 'Bangalore'}`,
      `👤 Name: ${name}`,
      `📞 Phone: ${phone}`,
      notes ? `📝 Details / Notes: ${notes}` : '',
      '',
      'Please let me know vehicle availability and details. Thank you!',
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-7">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Balaji Tourist • Bangalore
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Enquire About Vehicle Availability
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Contact us for comfortable tourist transportation across Bangalore and Karnataka.
            </p>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-7">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Enquiry Prepared!</h4>
                <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto">
                  Your travel details have been forwarded to WhatsApp. You can also reach Balaji Tourist directly by phone anytime.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={contact.phoneTel}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    Call {contact.phone}
                  </a>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                {/* Vehicle Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Select Vehicle
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {vehicles.map((v) => {
                      const isSelected = selectedVehicle === v.name
                      return (
                        <button
                          type="button"
                          key={v.id}
                          onClick={() => setSelectedVehicle(v.name)}
                          className={`flex items-center gap-2 p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                            isSelected
                              ? 'border-amber-500 bg-amber-50/50 text-slate-950 font-bold shadow-sm'
                              : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <Car className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-amber-600' : 'text-slate-400'}`} />
                          <span className="truncate">{v.name}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Travel Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Travel Requirement
                  </label>
                  <select
                    value={selectedTrip}
                    onChange={(e) => setSelectedTrip(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  >
                    {tripTypes.map((trip) => (
                      <option key={trip} value={trip}>
                        {trip}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9876543210"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Travel Date & Pickup */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Planned Travel Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Pickup in Bangalore
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="e.g. Indiranagar, Bangalore"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Travel Plan / Requirements
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. 1-day Bangalore sightseeing or 3-day trip to Mysore / Coorg"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Enquire on WhatsApp
                  </button>
                  <a
                    href={contact.phoneTel}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
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
