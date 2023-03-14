/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fatface: ['Abril Fatface'],
        lato: ['Lato'],
      },
    },
  },
  plugins: [],
};
