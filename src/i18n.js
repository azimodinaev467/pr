import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import engTranslation from './eng/eng.json'
import rusTranslation from './rus/rus.json'

const resources = {
  en: {
    translation: engTranslation,
  },
  ru: {
    translation: rusTranslation,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
