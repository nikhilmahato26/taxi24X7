import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { contact } from '../../data/siteContent'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3500)
    const hide = setTimeout(() => setShowTooltip(false), 9000)
    return () => { clearTimeout(timer); clearTimeout(hide) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white rounded-2xl shadow-card-hover px-4 py-2 border border-gray-100 hidden sm:block"
              >
                <p className="text-blue-dark font-black text-sm whitespace-nowrap">Instant Taxi Booking! 🚖</p>
                <p className="text-gray-400 text-xs">24×7 WhatsApp Assistance</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col items-center gap-2">
            {/* Phone button */}
            <SocialButton
              href={`tel:${contact.phone}`}
              label="Call Helpline"
              className="bg-blue-primary hover:bg-blue-700"
            >
              <PhoneIcon />
            </SocialButton>

            {/* Instagram */}
            <SocialButton
              href={contact.instagram}
              label="Instagram"
              className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45]"
            >
              <InstagramIcon />
            </SocialButton>

            {/* Facebook */}
            <SocialButton
              href={contact.facebook}
              label="Facebook"
              className="bg-[#1877F2] hover:bg-[#0f67dc]"
            >
              <FacebookIcon />
            </SocialButton>

            {/* Main WhatsApp button */}
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi TAXI 24X7, I want to book a cab.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.6)] whatsapp-pulse hover:bg-green-400 hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-green-400/40"
              aria-label="Book via WhatsApp"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <WhatsAppIcon />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SocialButton({ href, label, className, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-white/50 ${className}`}
      aria-label={label}
    >
      {children}
    </a>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2V8.6H15.2c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect width="16" height="16" x="4" y="4" rx="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}
