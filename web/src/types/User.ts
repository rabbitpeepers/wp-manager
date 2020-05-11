export type USER_ROLE = 'anonymous' | 'manager' | 'admin'

export type User = {
  role: USER_ROLE
  displayName: string
  photoURL: string
}
