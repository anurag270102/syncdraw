/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        syncblue: "#2EA7FF",
        syncgreen: "#22C55E",
      },
    },
  },
  plugins: [],
};
