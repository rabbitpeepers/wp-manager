// eslint-disable-next-line no-useless-escape
const email = new RegExp('^.+@.+\..+')

export const isValidEmail = (input: string): boolean => email.test(input)
