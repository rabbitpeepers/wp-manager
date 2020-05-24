import { UserProfile } from 'types/UserProfile'

export const isUserProfile = (profile: UserProfile): profile is UserProfile => {
  if (typeof profile !== 'object') {
    return false
  }

  const strings = ['id', 'displayName', 'username', 'profileUrl', 'provider', '_raw']

  if (strings.findIndex((key: keyof UserProfile) => typeof profile[key] !== 'string') !== -1) {
    return false
  }

  if (typeof profile._json !== 'object') {
    return false
  }

  return true
}
