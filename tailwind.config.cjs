module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6ee7b7', // emerald-300
          DEFAULT: '#10b981', // emerald-500
          dark: '#047857', // emerald-700
        },
        secondary: {
          light: '#fdba74', // orange-300
          DEFAULT: '#f97316', // orange-500
          dark: '#c2410c', // orange-700
        },
        background: '#f8fafc', // slate-50 (Clean light mode base)
        surface: '#ffffff', // white
        text: {
          primary: '#1e293b', // slate-800
          secondary: '#64748b', // slate-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Assuming Inter is available or via Google Fonts
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.3s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate(-50%, 20px)' },
          '100%': { opacity: '1', transform: 'translate(-50%, 0)' },
        }
      }
    },
  },
  plugins: [],
};
