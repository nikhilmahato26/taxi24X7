import { useState } from 'react'
import { motion } from 'framer-motion'
import { contact, brand } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'

  const [ref, inView] = useInView(0.15)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Enter valid 10-digit mobile number'
    if (!form.service) e.service = 'Please select a service / route'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')

    const msg = `Hi ${brand.name}! 🚖\n\nName: ${form.name}\nPhone: ${form.phone}\nService/Route: ${form.service}\nTrip Details: ${form.message || 'N/A'}\n\nPlease share availability and quote.`
    setTimeout(() => {
      window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
      setStatus('success')
      setForm({ name: '', phone: '', service: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    }, 600)
  }

  const serviceOptions = [
    'Delhi to Chandigarh / Reverse Taxi',
    'Outstation Round Trip / One-Way',
    'Himachal Tour Package (Shimla, Manali)',
    'Uttarakhand Tour Package (Mussoorie, Nainital, Rishikesh)',
    'Char Dham Tour Package (Kedarnath, Badrinath)',
    'Kashmir & Jammu Tour',
    'Rajasthan & Khatu Shyam Tour',
    'Agra Mathura Vrindavan Tour',
    '5 Devi Yatra Pilgrimage',
    'Airport Transfer (Delhi IGI / Chandigarh)',
    'Tempo Traveller Rental (12-17 Seater)',
  ]

  return (
    <section id="contact" className="py-20 bg-gray-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <svg className="w-4 h-4 text-yellow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            24×7 Assistance &amp; Booking
          </span>
          <h2 className="section-title mb-4">
            Contact <span className="text-blue-primary">TAXI 24X7</span>
          </h2>
          <p className="section-sub mx-auto">
            Reach out via phone, WhatsApp, or the booking form below for immediate booking and customized quotes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left – Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Quick contact cards */}
            {[
              {
                icon: '📞',
                title: 'Primary Phone Helpline',
                value: contact.displayPhone,
                sub: '24×7 Round the Clock Support',
                href: `tel:${contact.phone}`,
                btnText: 'Call Now',
                btnClass: 'btn-primary text-blue-dark',
              },
              {
                icon: '💬',
                title: 'WhatsApp Booking Desk',
                value: contact.displayPhone,
                sub: 'Instant rates, vehicle photos & booking',
                href: `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi TAXI 24X7, I want to book a taxi.')}`,
                btnText: 'WhatsApp Chat',
                btnClass: 'btn-secondary',
              },
              {
                icon: '✉️',
                title: 'Official Email',
                value: contact.email,
                sub: 'Corporate travel & GST enquiries',
                href: `mailto:${contact.email}`,
                btnText: 'Email Us',
                btnClass: 'btn-outline',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-blue-dark text-sm mb-0.5">{item.title}</div>
                  <div className="text-blue-primary font-black text-sm truncate">{item.value}</div>
                  <div className="text-xs text-gray-400 mb-3">{item.sub}</div>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`${item.btnClass} text-xs px-4 py-2`}>
                    {item.btnText}
                  </a>
                </div>
              </div>
            ))}

            {/* Business Hubs Card */}
            <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                <span className="text-lg">📍</span>
                <span className="font-black text-blue-dark text-sm uppercase tracking-wide">Business Locations</span>
              </div>

              {contact.locations.map((loc) => (
                <div key={loc.id} className="text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-blue-dark">{loc.title}</span>
                    <span className="bg-yellow-primary/20 text-blue-dark font-extrabold px-2 py-0.5 rounded text-[10px]">
                      {loc.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium">{loc.address}</p>
                </div>
              ))}

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-400 font-bold uppercase">GSTIN:</span>
                <span className="font-mono font-black text-blue-primary">{contact.gst}</span>
              </div>
            </div>

            {/* Social handles */}
            <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 flex items-center justify-between">
              <div>
                <span className="block text-xs font-black text-blue-dark">Connect on Social</span>
                <span className="block text-[11px] text-gray-400">@taxi24x7india</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white flex items-center justify-center hover:scale-105 transition-transform"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect width="16" height="16" x="4" y="4" rx="5" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3.5" strokeWidth="2" />
                    <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#1877F2] text-white flex items-center justify-center hover:scale-105 transition-transform"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2V8.6H15.2c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right – Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
              <h3 className="text-xl font-black text-blue-dark mb-1">Online Booking / Fare Enquiry</h3>
              <p className="text-xs text-gray-500 mb-6">Receive upfront quotes and vehicle confirmation within 5 minutes.</p>

              {status === 'success' && (
                <div
                  role="alert"
                  aria-live="polite"
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 text-sm text-green-800 font-bold"
                >
                  ✓ Your enquiry has been forwarded to our WhatsApp booking desk!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary/40 focus:border-blue-primary"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary/40 focus:border-blue-primary"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Select Service or Tour *</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-primary/40 focus:border-blue-primary"
                  >
                    <option value="">-- Choose Route or Service --</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1 font-bold">{errors.service}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Pickup Date, Locations &amp; Car Preference</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="E.g. Travel Date: 15 Oct, Pickup: Chandigarh, Drop: Shimla, Preferred Car: Innova Crysta"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-primary/40 focus:border-blue-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-yellow-primary hover:bg-yellow-400 text-blue-dark font-black text-sm uppercase tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Booking on WhatsApp'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
