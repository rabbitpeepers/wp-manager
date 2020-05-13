import { API_LOGOUT } from 'src/const/API'
import { settings } from 'src/settings/settings'

export const logoutRequest = async (): Promise<boolean> => {
  const response = await fetch(`${settings.api.url}${API_LOGOUT}`, {
    mode: 'cors',
    credentials: 'include',
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok || response.status !== 200) {
    return false
  }

  return true
}
