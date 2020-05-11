export type makeFn = (...args: string[]) => string
export type AppRoute = string
export type ExpressRoute = string

export interface Path {
  [key: string]: [makeFn, AppRoute, ExpressRoute]
}

export const path: Path = {
  login: [
    ((status = '') => `/login/${status}`) as makeFn,
    '/login/:status',
    '/login/:status?',
  ],
}
