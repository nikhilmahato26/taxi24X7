import { brand, contact, footerLinks } from '../data/siteContent'

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 inline-flex items-center gap-3 rounded-2xl bg-[#1c252c] p-2 border border-slate-700/80 shadow-md">
              <img
                src={brand.logo}
                alt="TAXI 24X7 Logo"
                className="h-12 w-auto object-contain rounded-lg"
              />
              <div>
                <span className="block text-lg font-black text-white leading-tight">
                  TAXI <span className="text-yellow-400">24X7</span>
                </span>
                <span className="block text-[9px] font-extrabold uppercase tracking-wider text-slate-300">
                  {brand.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 max-w-xs">
              North India's trusted 24×7 cab and tour travel provider. Reliable one-way drops, round trips, Himalayan holiday tours &amp; pilgrimage yatras.
            </p>

            <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 mb-5 max-w-xs">
              <span className="text-[10px] text-slate-400 block font-semibold uppercase">GST Registration:</span>
              <span className="text-xs font-mono font-bold text-yellow-primary">{contact.gst}</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2.5">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-400 transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="w-9 h-9 bg-yellow-primary text-blue-dark rounded-xl flex items-center justify-center hover:bg-yellow-400 transition-colors shadow-sm font-bold"
                aria-label="Call TAXI 24X7"
              >
                <PhoneIcon />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors shadow-sm"
                aria-label="Email TAXI 24X7"
              >
                <MailIcon />
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] rounded-xl flex items-center justify-center hover:scale-105 transition-transform shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1877F2] rounded-xl flex items-center justify-center hover:bg-[#0f67dc] transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-black text-white mb-5 text-xs uppercase tracking-wider text-yellow-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-300 text-xs sm:text-sm hover:text-yellow-primary transition-colors flex items-center gap-2 focus:outline-none"
                  >
                    <span className="w-1 h-1 bg-yellow-primary/60 rounded-full" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Routes & Tours */}
          <div>
            <h4 className="font-black text-white mb-5 text-xs uppercase tracking-wider text-yellow-400">
              Popular Tours &amp; Routes
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-300 text-xs sm:text-sm hover:text-yellow-primary transition-colors flex items-center gap-2 focus:outline-none"
                  >
                    <span className="w-1 h-1 bg-yellow-primary/60 rounded-full" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Contact */}
          <div>
            <h4 className="font-black text-white mb-5 text-xs uppercase tracking-wider text-yellow-400">
              Hubs &amp; Contact
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="text-yellow-primary font-bold">📞</span>
                <div>
                  <a href={`tel:${contact.phone}`} className="text-white font-bold hover:text-yellow-primary transition-colors">
                    {contact.displayPhone}
                  </a>
                  <div className="text-[11px] text-slate-400">24×7 Active Helpline</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-yellow-primary font-bold">✉️</span>
                <a href={`mailto:${contact.email}`} className="text-slate-300 hover:text-yellow-primary transition-colors break-all">
                  {contact.email}
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-yellow-primary text-xs">📍</span>
                  <div>
                    <strong className="text-white block text-xs">Chandigarh Hub:</strong>
                    <span>City Plaza, Peermuchalla, Chandigarh</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-primary text-xs">📍</span>
                  <div>
                    <strong className="text-white block text-xs">Gurgaon Hub:</strong>
                    <span>Rajendra Park, Sector 105, Gurgaon, Haryana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 {brand.name}. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="text-yellow-400 font-bold">GSTIN: {contact.gst}</span>
            <span>•</span>
            <span>Serving All of North India 24×7</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2V8.6H15.2c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect width="16" height="16" x="4" y="4" rx="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}
