/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      base: "#202020",
      black: "#404750",
      white: " #FFFFFF",
      red: {
        100: "#F8CAD1",
        500: "#E7445C",
        900: "#E32945",
      },
      purple: {
        100: "#CFC1EC",
        500: "#6F46C7",
        900: "#4C2C91",
      },
      gray: {
        500: "#736D81",
        900: "#C1BFD0",
      },
    },
  },
  plugins: [],
};
