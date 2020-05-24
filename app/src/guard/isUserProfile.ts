import { UserProfile, UserProfileArrayOfValues } from 'types/UserProfile'

const checkIsArrayOfValue = (el: UserProfileArrayOfValues): el is UserProfileArrayOfValues => {
  return typeof el === 'object' && el.length > 0 && el.every(i => typeof i === 'object' && typeof i.value === 'string')
}

export const isUserProfile = (profile: UserProfile): profile is UserProfile => {
  if (typeof profile !== 'object') {
    console.log('Profile is not an object')
    return false
  }

  const strings = ['id', 'displayName', 'username', 'profileUrl', 'provider', '_raw']

  if (strings.findIndex((key: keyof UserProfile) => typeof profile[key] !== 'string') !== -1) {
    console.log('No profile key')
    return false
  }

  if (['emails', 'photos'].findIndex((key: keyof UserProfile) => !checkIsArrayOfValue(profile[key] as UserProfileArrayOfValues)) !== -1) {
    console.log('No email or photo')
    return false
  }

  if (typeof profile._json !== 'object') {
    console.log('No _json')
    return false
  }

  return true
}
