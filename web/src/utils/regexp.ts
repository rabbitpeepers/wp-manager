export const strongPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')

// eslint-disable-next-line no-useless-escape
export const email = new RegExp('^.+@.+\..+')
