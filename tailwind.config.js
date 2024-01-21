/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', 'sans-serif']
      },
      colors: {
        tan: '#F2ECEB'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')]
}
