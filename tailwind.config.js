/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#003B95',
          dark: '#0A1F44',
          light: '#EEF4FF',
          50: '#EEF4FF',
          100: '#D9E8FF',
          600: '#003B95',
          700: '#002d75',
          800: '#0A1F44',
          900: '#060e20',
        },
        yellow: {
          primary: '#FFD200',
          light: '#FFF9D6',
          400: '#FFD200',
          500: '#f0c500',
        },
        gray: {
          bg: '#F7F9FC',
          50: '#F7F9FC',
          100: '#EEF2F7',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,59,149,0.08)',
        'card-hover': '0 12px 40px rgba(0,59,149,0.16)',
        'yellow': '0 4px 20px rgba(255,210,0,0.4)',
        'blue': '0 4px 20px rgba(0,59,149,0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
