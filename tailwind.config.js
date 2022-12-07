/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary_100: "hsl(30, 38%, 92%)",
        primary_800: "hsl(158, 36%, 37%)",
        primary_900: "hsl(158, 36%, 20%)",
        neutral_100: "hsl(0, 0%, 100%)",
        neutral_700: "hsl(228, 12%, 48%)",
        neutral_900: "hsl(212, 21%, 14%)",
      },
      fontFamily: {
        fraunces: ["Fraunces", "sans-serif"],
        montserrat: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
