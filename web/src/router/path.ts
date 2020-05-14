export type makeFn = (...args: string[]) => string
export type AppRoute = string
export type ExpressRoute = string

export const MAKE_ROUTE = 0
export const REACH_ROUTES = 1
export const EXPRESS_ROUTE = 2

export type PathItem = [makeFn, AppRoute[], ExpressRoute]

export interface Path {
  login: PathItem
  postLogin: PathItem
  dashboard: PathItem
  about: PathItem
  instances: PathItem
  domains: PathItem
  profile: PathItem
  logout: PathItem
  applicationFailed: PathItem
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
  about: staticPath('/about'),
  instances: staticPath('/instances'),
  domains: staticPath('/domains'),
  profile: staticPath('/profile'),
  logout: staticPath('/logout'),
  applicationFailed: staticPath('/application-failed'),
}

export const makeRoute = (p: PathItem, ...args: string[]): string => p[MAKE_ROUTE](...args)
