/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark
        1: "#ffffff",
        2: "#FAFAFA",
        2.5: "#3f3f3f",
        3: "#2b3b55",

        // Light
        4: "#0B0B0B",
        5: "#535353",
        6: "#ADACA6",

        "semi-black": "#111111",
        "gray": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
