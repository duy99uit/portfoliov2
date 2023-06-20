module.exports = {
  // purge: {
  //   content: ["./src/**/*.{js,jsx,ts,tsx}", "./next.config.js"],
  // },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./next.config.js"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"WindSong"', "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
