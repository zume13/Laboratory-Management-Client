/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7f6",
          100: "#d3ebe8",
          300: "#8ecac1",
          500: "#2f8f83",
          600: "#25746b",
          700: "#1d5951",
        },
      },
    },
  },
  plugins: [],
};
