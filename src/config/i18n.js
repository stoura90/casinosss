import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ru from './translations/ru.json'
import en from './translations/en.json'
import kz from './translations/kz.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'htmlTag'],
    },
    interpolation: { escapeValue: false },
    fallbackLng: 'ru',
    load: 'languageOnly',
    resources: {
      ru: {
        common: ru,
      },
      en: {
        common: en,
      },
      kz: {
        common: kz,
      },
    },
  })

export default i18n
