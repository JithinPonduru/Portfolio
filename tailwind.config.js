/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Specifies paths to React component files
    './public/index.html',         // Ensures Tailwind applies styles to your HTML
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik Wet Paint", 'system-ui'],
        Orbitron: ["Orbitron", "sans-serif"],
        Oxanium: ["Oxanium", "sans-serif"],
        Roboto_Condensed: ["Roboto Condensed", "sans-serif"]
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
}
