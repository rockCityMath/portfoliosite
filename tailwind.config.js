module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  scripts: {
    "build:css": "tailwind build src/style.css -o dist/style.css"
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
