/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ifsc-green": "#8CC640",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
