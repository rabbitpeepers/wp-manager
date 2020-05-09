export const settings = {
  api: {
    url: process.env.REACT_APP_API_URL,
  },
  i18n: {
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
  },
}
