/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: '#302F32',
          50: '#f5f5f5',
          100: '#e8e8e9',
          200: '#c5c5c7',
          300: '#a1a1a4',
          400: '#5a585d',
          500: '#302F32',
          600: '#2a292c',
          700: '#1f1e21',
          800: '#161518',
          900: '#0c0b0d',
        },
        gold: {
          DEFAULT: '#C9A961',
          50: '#fbf6e9',
          100: '#f5ecd0',
          200: '#ead89c',
          300: '#dfc468',
          400: '#d4b545',
          500: '#C9A961',
          600: '#a88a44',
          700: '#806834',
          800: '#594724',
          900: '#322816',
        },
      },
      fontFamily: {
        display: ['Asgard', '"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
