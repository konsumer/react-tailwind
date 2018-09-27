var tailwindcss = require('tailwindcss')
var nested = require('postcss-nested')

module.exports = {
  plugins: [
    tailwindcss('./src/tailwind.js'),
    nested
  ]
}
