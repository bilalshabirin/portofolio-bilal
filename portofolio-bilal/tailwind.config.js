/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F0E6',
        beige: '#E5D2BB',
        terracotta: '#B98260',
        olive: '#6B705C',
        cokelat: '#342A24',
      },
      fontFamily: {
        'hand': ['"Patrick Hand"', 'cursive'],
      }
    },
  },
  plugins: [],
}