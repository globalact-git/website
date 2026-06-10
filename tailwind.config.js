/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'ga-orange':  '#EA5B13',
        'ga-anth':    '#727F7C',
        'ga-ink':     '#111312',
        'ga-rule':    '#E6E8E5',
        'ga-off':     '#F7F6F3',
        'ga-off2':    '#F0EEE9',
        'ga-txt':     '#1C1F1D',
        'ga-txt-mid': '#727F7C',
        'ga-txt-lo':  '#A0A8A5',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'sans-serif'],
      },
      boxShadow: {
        'ga-nav':   '0 1px 3px rgba(0,0,0,0.01)',
        'ga-btn':   '0 6px 16px rgba(234,91,19,0.25)',
        'ga-prim':  '0 12px 32px rgba(234,91,19,0.3)',
        'ga-white': '0 16px 40px rgba(0,0,0,0.2)',
        'ga-mock':  '0 24px 60px rgba(0,0,0,0.45)',
      },
    },
  },
  plugins: [],
};
