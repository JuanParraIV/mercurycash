/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#673AE5",
        secondary: "#B39CF2",
        bg_primary: "#F6F7FB",
      },
    },
    variants: {
      extend: {
        backgroundColor: ["responsive", "hover", "focus", "active"],
      },
    },
  },
  plugins: [],
}
