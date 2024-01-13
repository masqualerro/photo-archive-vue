/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', 'sans-serif']
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')]
}
