/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // Define your primary color
        secondary: '#f6993f', // Define your secondary color
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
