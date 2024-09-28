/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max600': { 'max': '600px' }, // Custom media query for max width of 600px
      },
    },
  },
  plugins: [],
}
