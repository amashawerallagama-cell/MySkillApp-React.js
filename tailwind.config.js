/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: { // Add Inter font
            sans: ['Inter', 'sans-serif'],
        },
    },
  },
  plugins: [],
}