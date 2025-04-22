module.exports = {
  content: [
    './index.html',  // include your HTML files here
    './_includes/**/*.{html,njk}', // if you're using Nunjucks or other template engines
    './src/**/*.{html,njk,md,js}', // includes JS and other template files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}