import { API_CREATE_INSTANCE } from 'src/const/API'
import { AuthorizationError } from 'src/utils/AuthorizationError'
import { CreateInstancePayload } from 'src/types/Instance'
import { settings } from 'src/settings/settings'

export const createInstanceRequest = async (payload: CreateInstancePayload): Promise<boolean> => {
  const response = await fetch(`${settings.api.url}${API_CREATE_INSTANCE}`, {
    mode: 'cors',
    credentials: 'include',
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(payload),
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

  if (response.status !== 201) {
    throw new Error(`HTTP[${response.status}] ${await response.text()}`)
  }

  return true
}
