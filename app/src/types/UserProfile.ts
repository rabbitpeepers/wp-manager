export type UserProfileArrayOfValues = { value: string }[]

export interface UserProfile {
  id: string
  username: string
  displayName: string
  profileUrl: string
  emails: UserProfileArrayOfValues
  photos: UserProfileArrayOfValues
  provider: string
  _raw: string
  _json: {
    [key: string]: string | object | number | null
  }
}
