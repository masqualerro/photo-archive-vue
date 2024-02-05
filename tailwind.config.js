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
        tan: '#F2ECEB',
        pink: '#E8DCE0',
        'pink-saturated': '#eed6de'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')]
}
