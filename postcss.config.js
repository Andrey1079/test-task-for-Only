// подключить плагины в файл
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  // подключить плагины к PostCSS
  plugins: [autoprefixer, cssnano({ preset: 'default' })],
};
