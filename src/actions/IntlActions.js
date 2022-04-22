var alt = require('../alt-instance')

var locales = {}
module.exports = function (options) {
  if (!!options.electron) {
    ;['cn', 'de', 'es', 'fr', 'ko', 'tr'].forEach((locale) => {
      locales[locale] = require('../assets/locales/locale-' + locale + '.json')
    })
  }
}
class IntlActions {
  switchLocale(locale) {
    if (locale === 'en') {
      return { locale }
    }
    module.exports = function (options) {
      if (!!options.electron) {
        return {
          locale: locale,
          localeData: locales[locale],
        }
      } else {
        return (dispatch) => {
          fetch('/locale-' + locale + '.json')
            .then((reply) => {
              return reply.json().then((result) => {
                dispatch({
                  locale,
                  localeData: result,
                })
              })
            })
            .catch((err) => {
              console.log('fetch locale error:', err)
              return (dispatch) => {
                dispatch({ locale: 'en' })
              }
            })
        }
      }
    }
  }

  getLocale(locale) {
    return locale
  }
}

export default alt.createActions(IntlActions)
