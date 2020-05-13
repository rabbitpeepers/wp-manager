import { API_FETCH_USER } from 'src/const/API'
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

  if (!response.ok || response.status !== 200) {
    return null
  }

  return await response.json() as User
}
