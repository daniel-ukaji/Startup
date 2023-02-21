/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      PoppinsBold: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
