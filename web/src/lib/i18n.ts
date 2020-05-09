import { LS_LANGUAGE } from 'src/const/LocalStorage'
import XHR from 'i18next-xhr-backend'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { settings } from 'src/settings/settings'

i18n
  .use(initReactI18next)
  .use(XHR)
  .init({
    fallbackLng: settings.i18n.fallbackLng,
    debug: settings.i18n.debug,
    lng: settings.i18n.fallbackLng,
    backend: {
      loadPath: `/i18n/{{lng}}.json?cache=${process.env.REACT_APP_BUILD_TIME}`,
    },
    detection: {
      // order and from where user language should be detected
      order: [
        'localStorage',
        'querystring',
        'cookie',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],

      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: LS_LANGUAGE,
      lookupLocalStorage: LS_LANGUAGE,
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: ['localStorage', 'cookie'],
      // languages to not persist (cookie, localStorage)
      excludeCacheFor: ['cimode'],
    },
  })

export { i18n }
