/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#d0ebff",
          200: "#a5d8ff",
          500: "#339af0",
          600: "#1c7ed6",
        },
      },
    },
  },
  plugins: [],
};
