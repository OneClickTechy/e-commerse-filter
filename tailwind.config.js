/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#FFD700", // You can choose the shade you prefer
          dark: "#B8860B", // Darker shade of gold (optional)
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
