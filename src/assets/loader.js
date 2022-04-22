module.exports = function (options) {
  require('file-loader?name=index.html!./' +
    (!!options.electron || !!options.hash ? 'index-electron' : 'index') +
    '.html')
  require('./favicon.ico')
  require('../common/dictionary_en.json')
  require('babel-polyfill')
  require('whatwg-fetch')
  require('indexeddbshim')
  require('./asset-symbols/symbols.js')
  require('./locales/locales.js')
  require('./stylesheets/app.scss')
}
