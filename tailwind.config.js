/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        darkSlateGray: "hsl(234, 29%, 20%)",
        grey: "hsl(231, 7%, 60%)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
