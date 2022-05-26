module.exports = {
  content: [
    "./views/pages/**/*.{ejs,html,js}",
    "./views/partials/**/*.{ejs,html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#A85CF9",
        "secondary-color": {
          "100": "#F9F9F9",
          "200": "#EAEAEA"
        }
      },
      fontFamily: {
        roboto: ["Roboto"]
      }
    },
  },
  plugins: [],
}