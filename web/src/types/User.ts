export type USER_ROLE = 'manager' | 'admin'

export type User = {
  role: USER_ROLE
  displayName: string
  photoURL: string
}
