const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      redPrimary: "#850000",
      redSecondary: "#DC0000",
      creamPrimary: "#FFDB89",
      creamSecondary: "#FFF6C3",
    },
  },
  plugins: [],
});
