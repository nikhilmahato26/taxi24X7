import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { contact } from '../../data/siteContent'
import heroBg1 from '../../assets/images/hero-bg-1.png'
import heroBg2 from '../../assets/images/hero-bg-2.png'
import heroBg3 from '../../assets/images/hero-bg-3.png'
import fleetSwiftDzire from '../../assets/images/fleet-swift-dzire.png'
import heroCarMpv from '../../assets/images/hero-car-mpv.png'
import fleetKiaCarens from '../../assets/images/fleet-kia-carens.png'
import fleetInnovaCrysta from '../../assets/images/fleet-innova-crysta.png'
import fleetInnovaHycross from '../../assets/images/fleet-innova-hycross.png'
import heroCarTraveller from '../../assets/images/hero-car-traveller.png'

const heroFleet = [
  { name: 'Dzire / Aura', type: 'Sedan', rate: '₹12/km', image: fleetSwiftDzire },
  { name: 'Maruti Ertiga', type: 'MUV', rate: '₹15/km', image: heroCarMpv },
  { name: 'Kia Carens', type: 'MUV Prime', rate: '₹18/km', image: fleetKiaCarens },
  { name: 'Innova Crysta', type: 'SUV', rate: '₹20/km', image: fleetInnovaCrysta },
  { name: 'Innova Hycross', type: 'Hybrid', rate: '₹25/km', image: fleetInnovaHycross },
  { name: 'Tempo Traveller', type: '12-17 Seater', rate: '₹35/km', image: heroCarTraveller },
]

const heroBackgrounds = [
  { src: heroBg1, alt: 'TAXI 24X7 reliable cab service across North India' },
  { src: heroBg2, alt: 'Family travelling comfortably with TAXI 24X7' },
  { src: heroBg3, alt: 'TAXI 24X7 outstation highway and hill tour cabs' },
]

export default function Hero() {
  const [activeCar, setActiveCar] = useState(0)
  const [activeBackground, setActiveBackground] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % heroBackgrounds.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [])

  const selectedCar = heroFleet[activeCar]

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const data = new FormData(form)
    const message = [
      'Hi TAXI 24X7, I want to book a taxi.',
      '',
      `Vehicle: ${data.get('vehicle')} (${selectedCar.rate})`,
      `Trip Type: ${data.get('package')}`,
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('mobile')}`,
      `Travel Date: ${data.get('date')}`,
      `Pickup (From): ${data.get('pickup')}`,
      `Drop (To): ${data.get('drop')}`,
      '',
      'Please confirm vehicle availability and total fare estimate.',
    ].join('\n')

    const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="home" className="relative overflow-hidden bg-[#080808] pt-16 md:pt-[4.75rem]">
      {/* Background slide */}
      <AnimatePresence mode="sync">
        <motion.img
          key={heroBackgrounds[activeBackground].src}
          src={heroBackgrounds[activeBackground].src}
          alt={heroBackgrounds[activeBackground].alt}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.9, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 4.5, ease: 'linear' } }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/60 sm:bg-gradient-to-r sm:from-black/20 sm:via-black/30 sm:to-black/40" />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-4 py-7 sm:min-h-[760px] sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        {/* Booking Form Card */}
        <motion.form
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="w-full rounded-[1.75rem] bg-yellow-primary p-5 shadow-[0_24px_70px_rgba(0,0,0,0.5)] sm:max-w-[620px] sm:p-7 lg:p-8"
        >
          <div className="text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-dark/75">
              24×7 Instant Booking • North India
            </span>
            <h1 className="mt-1 text-2xl font-black uppercase tracking-tight text-blue-dark sm:text-3xl">
              Book Cab Online
            </h1>
            <motion.p
              animate={{ opacity: [1, 0.45, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-0.5 text-xl sm:text-2xl font-black uppercase tracking-tight text-blue-dark"
            >
              NORTH INDIA • 24X7
            </motion.p>
            <p className="text-[11px] font-bold text-blue-dark/80 mt-0.5">
              Chandigarh • Delhi • Gurgaon • Himachal • Uttarakhand
            </p>
          </div>

          <input type="hidden" name="vehicle" value={selectedCar.name} />

          {/* Vehicle Selector Grid */}
          <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-2.5">
            {heroFleet.map((vehicle, index) => {
              const isActive = index === activeCar

              return (
                <button
                  key={vehicle.name}
                  type="button"
                  onClick={() => setActiveCar(index)}
                  aria-pressed={isActive}
                  className={`group rounded-xl border-2 px-1.5 py-1.5 text-center transition-all focus:outline-none focus:ring-4 focus:ring-blue-primary/20 ${
                    isActive
                      ? 'border-blue-dark bg-white shadow-[0_8px_20px_rgba(10,31,68,0.2)] scale-[1.02]'
                      : 'border-transparent bg-white/55 hover:bg-white/80'
                  }`}
                >
                  <span className="block h-12 sm:h-14">
                    <img
                      src={vehicle.image}
                      alt=""
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-1 block text-[9px] font-black leading-tight text-blue-dark sm:text-[10px]">
                    {vehicle.name}
                  </span>
                  <span className="mt-0.5 block text-[8px] font-extrabold uppercase leading-tight text-blue-primary sm:text-[9px]">
                    {vehicle.rate}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Form Fields */}
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="sr-only">Trip type (required)</span>
              <select
                name="package"
                defaultValue="Outstation Trip"
                required
                className="h-12 w-full rounded-xl border-0 bg-white px-4 text-xs sm:text-sm font-extrabold text-blue-dark outline-none focus:ring-4 focus:ring-blue-primary/20"
              >
                <option>Outstation Trip (Round / One-Way)</option>
                <option>Delhi to Chandigarh / Reverse Taxi</option>
                <option>Himachal Tour (Shimla, Manali, Dharamshala)</option>
                <option>Uttarakhand Tour (Dehradun, Mussoorie, Rishikesh)</option>
                <option>Char Dham Yatra (Kedarnath, Badrinath)</option>
                <option>Kashmir &amp; Jammu Tour</option>
                <option>Rajasthan &amp; Khatu Shyam Ji Tour</option>
                <option>Agra Mathura Vrindavan Tour</option>
                <option>5 Devi Yatra Darshan</option>
                <option>Airport Pick / Drop</option>
              </select>
            </label>
            <Field name="name" placeholder="Your Name *" />
            <Field
              name="mobile"
              placeholder="Mobile Number *"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit mobile number"
            />
            <Field name="pickup" placeholder="Pickup City / Area *" />
            <Field name="drop" placeholder="Drop City / Destination *" />
            <Field name="date" type="date" className="sm:col-span-2" />
          </div>

          {/* CTAs */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-blue-dark px-3 text-center text-xs font-black uppercase text-blue-dark transition hover:bg-blue-dark hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-primary/20 sm:text-sm"
            >
              📞 Call Now
            </a>
            <button
              type="submit"
              className="min-h-12 rounded-full bg-blue-dark px-3 text-xs font-black uppercase text-white shadow-[0_10px_24px_rgba(10,31,68,0.25)] transition hover:-translate-y-0.5 hover:bg-blue-primary focus:outline-none focus:ring-4 focus:ring-blue-primary/25 sm:text-sm"
            >
              Get Cab Online
            </button>
          </div>
        </motion.form>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-2 sm:bottom-6 sm:right-6">
        {heroBackgrounds.map((background, index) => (
          <button
            key={background.src}
            type="button"
            onClick={() => setActiveBackground(index)}
            aria-label={`Show hero image ${index + 1}`}
            className={`h-2.5 rounded-full shadow transition-all focus:outline-none focus:ring-4 focus:ring-white/40 ${
              index === activeBackground ? 'w-8 bg-yellow-primary' : 'w-2.5 bg-white/75 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

function Field({ name, placeholder, type = 'text', className = '', ...inputProps }) {
  return (
    <label className={className}>
      <span className={type === 'date' ? 'mb-1 block text-xs font-black text-blue-dark' : 'sr-only'}>
        {type === 'date' ? 'Travel Date *' : placeholder}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        {...inputProps}
        className="h-12 w-full rounded-xl border-0 bg-white px-3 sm:px-4 text-xs sm:text-sm font-bold text-blue-dark outline-none placeholder:text-gray-500 focus:ring-4 focus:ring-blue-primary/20"
      />
    </label>
  )
}
