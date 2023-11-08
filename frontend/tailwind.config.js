/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      tanha: ["tanha"],
      vazir: ["vazir"],
      iran: ["A Iranian Sans"],
    },
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '5rem',
      },
    },
  },
  plugins: [],
};
