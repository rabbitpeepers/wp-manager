type makeFn = (args?: object | string) => string

interface Path {
  [key: string]: [makeFn, string]
}

export const path: Path = {
  login: [() => '/', '/'],
}
