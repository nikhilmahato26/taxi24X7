import { contact } from '../../data/siteContent'

export default function FareDisclaimer() {
  return (
    <aside className="bg-blue-dark px-4 py-4 text-white sm:px-6 border-y border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-6 text-xs sm:text-sm">
        <div className="flex items-center gap-2 font-black">
          <span className="text-yellow-primary">⭐ 24×7 Cab Service:</span>
          <span>Starting at <strong className="text-yellow-primary">₹12/km</strong></span>
        </div>
        <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
        <p className="font-semibold text-white/80">
          Tolls, parking &amp; state border permits as applicable. Standard outstation terms apply.
        </p>
        <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
        <div className="flex items-center gap-1.5 font-bold text-yellow-300">
          <span>🧾 GST No:</span>
          <span className="font-mono">{contact.gst}</span>
        </div>
      </div>
    </aside>
  )
}
