/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bali: "url('../dist/img/bali.jpg')",
        chicago: "url('../dist/img/chicago.jpg')",
        europe: "url('../dist/img/europe.jpg')",
        iceland: "url('../dist/img/iceland.jpg')",
        LA: "url('../dist/img/LA.jpg')",
        miami: "url('../dist/img/miami.jpg')",
        newYork: "url('../dist/img/new_york.jpg')",
        norway: "url('../dist/img/norway.jpg')",
        sanFrancisco: "url('../dist/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../dist/img/sanFranciscoDesktop.jpg')",
        seattle: "url('../dist/img/seattle.jpg')",
        switzerland: "url('../dist/img/switzerland.jpg')",
        sydney: "url('../dist/img/sydney.jpg')",
        yosemite: "url('../dist/img/yosemite.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        thirdColor: "#61AEC9",
      }),
      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        thirdColor: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
