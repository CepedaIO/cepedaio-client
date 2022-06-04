module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2C2C2C',
        secondary: '#4D4D4D',
        tertiary: '#222222',
        selected: '#E0E0E0'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
