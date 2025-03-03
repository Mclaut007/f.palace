/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    colors: {
      orange: "#ff9401",
      white: "#fff",
      heading2: "#2e2e2e",
      paragraph: "#3f3232",
      transparent: "transparent",
    },
    fontFamily: {
      "circular-std-book": "CircularStd-Book, sans-serif",
      "circular-std-medium": "CircularStd-Medium, sans-serif",
      "circular-std-medium-italic": "CircularStd-MediumItalic, sans-serif",
      "gilroy-bold": "Gilroy-Bold, sans-serif",
      "gilroy-bold-italic": "Gilroy-BoldItalic, sans-serif",
      "gilroy-extra-bold": "Gilroy-Extrabold, sans-serif",
      "gilroy-semi-bold": "Gilroy-Semibold, sans-serif",
      "playfair-display-bold": "PlayfairDisplay-Bold, sans-serif",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    screens: {
      xxs: "25rem", // 400px
      xs: "30rem", // 480px
      sm: "36rem", // 576px
      md: "48rem", // 768px
      lg: "62rem", // 992px
      xl: "75rem", // 1200px
      xxl: "87.5rem", // 1400px
      xxxl: "119rem", // 1910px
    },
    // screens: {
    //   xl: { max: "71.25rem" }, // 1140px
    //   lg: { max: "62rem" }, // 992px
    //   md: { max: "48rem" }, // 768px
    //   sm: { max: "36rem" }, // 576px
    //   xs: { max: "30rem" }, // 480px
    // },
    container: {
      padding: "1rem", // 16px
      center: true,
    },
    extend: {
      // screens: {
      //   xxs: "25rem", // 400px
      //   xs: "30rem", // 480px
      // },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hover", "@media(hover:hover) and (pointer:fine){&:hover}");
    }),
  ],
};
