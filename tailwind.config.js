/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          500: '#0284C7',
          600: '#0369A1',
          700: '#075985',
          800: '#0C4A6E',
          900: '#082F49',
          dark: '#0A192F',
          navy: '#0F172A',
        },
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        emerald: {
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(245, 158, 11, 0.3)',
        card: '0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 40px -10px rgba(15, 23, 42, 0.12), 0 8px 10px -4px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
}
