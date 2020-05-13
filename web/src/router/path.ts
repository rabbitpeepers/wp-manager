export type makeFn = (...args: string[]) => string
export type AppRoute = string
export type ExpressRoute = string

export const MAKE_ROUTE = 0
export const REACH_ROUTES = 1
export const EXPRESS_ROUTE = 2

type PathItem = [makeFn, AppRoute[], ExpressRoute]

export interface Path {
  [key: string]: PathItem
}

const staticPath = (p: string): PathItem => [
  (() => p) as makeFn,
  [p],
  p,
]

export const path: Path = {
  login: [
    ((status = '') => `/login/${status}`) as makeFn,
    ['/', 'login', '/login/:status'],
    '/login/:status?',
  ],
  postLogin: staticPath('/post-login'),
  dashboard: staticPath('/dashboard'),
}

export const makeRoute = (p: PathItem, ...args: string[]): string => p[MAKE_ROUTE](...args)
