module.exports = {
  // purge: {
  //   content: ["./src/**/*.{js,jsx,ts,tsx}", "./next.config.js"],
  // },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./next.config.js"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
