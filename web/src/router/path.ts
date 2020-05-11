export type makeFn = (...args: string[]) => string
export type AppRoute = string
export type ExpressRoute = string

export const MAKE_ROUTE = 0
export const REACH_ROUTES = 1
export const EXPRESS_ROUTE = 2

export interface Path {
  [key: string]: [makeFn, AppRoute[], ExpressRoute]
}

export const path: Path = {
  login: [
    ((status = '') => `/login/${status}`) as makeFn,
    ['/', 'login', '/login/:status'],
    '/login/:status?',
  ],
}
