import { createContext, useContext, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const toast = useCallback(({ message, type = 'success', duration = 3500 }) => {
    const id = Date.now()
    setToasts(p => [...p, { id, message, type }])
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), duration)
  }, [])

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div
        role="log"
        aria-live="polite"
        aria-atomic="false"
        className="fixed top-24 right-4 z-[100] flex flex-col gap-2 pointer-events-none"
      >
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl shadow-card-hover max-w-xs ${
                t.type === 'success'
                  ? 'bg-white border-l-4 border-green-500'
                  : t.type === 'error'
                  ? 'bg-white border-l-4 border-red-500'
                  : 'bg-white border-l-4 border-blue-primary'
              }`}
            >
              <span className="text-lg">
                {t.type === 'success' ? '✅' : t.type === 'error' ? '❌' : 'ℹ️'}
              </span>
              <span className="text-sm font-semibold text-gray-700">{t.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
