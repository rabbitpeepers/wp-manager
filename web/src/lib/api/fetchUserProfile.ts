import { API_FETCH_USER } from 'src/const/API'
import { AuthorizationError } from 'src/utils/AuthorizationError'
import { User } from 'src/types/User'
import { settings } from 'src/settings/settings'

export const fetchUserProfile = async (): Promise<User | null> => {
  const response = await fetch(`${settings.api.url}${API_FETCH_USER}`, {
    mode: 'cors',
    credentials: 'include',
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.status) {
    throw new Error('Could not make a request')
  }

  if (response.status === 401) {
    throw new AuthorizationError('User is not authorized to perfrom this action.')
  }

  return await response.json() as User
}
