/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf3f4',
          100: '#fde7e8',
          200: '#f9c3c6',
          300: '#f59fa3',
          400: '#f0555c',
          500: '#e7131a',
          600: '#d21218',
          700: '#b50f15',
          800: '#940c13',
          900: '#7a0a11',
        },
      },
    },
    screen: {
      'sm': {'min': '1px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
    },
  },
  plugins: [],
});