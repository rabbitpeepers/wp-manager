const strongPass = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')

export const isStrongPassword = (input: string): boolean => strongPass.test(input)
