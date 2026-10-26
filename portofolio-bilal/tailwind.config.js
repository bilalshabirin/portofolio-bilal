/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FBF7F0',
        ink: '#2B1B17',
        olive: '#5A6B5C',
        terracotta: '#C86D51',
        beige: '#E8D8C8',
        line: '#2B1B17',
        muted: '#6B5E57',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        hand: ['"Patrick Hand"', 'cursive'],
      },
    },
  },
  plugins: [],
}