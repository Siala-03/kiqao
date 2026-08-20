/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        kiqao: {
          black: '#050505',
          'rich-black': '#0d0d0d',
          charcoal: '#1a1a1a',
          gold: '#b34215',
          champagne: '#d97a4a',
          burgundy: '#6a1010',
          merlot: '#4a0d0d',
          cream: '#e8e8e8',
          'warm-white': '#ffffff',
        },
      },
      fontFamily: {
        display: ['Chillax', 'sans-serif'],
        body: ['Chillax', 'sans-serif'],
        hero: ['American Typewriter', 'Courier New', 'Courier', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
