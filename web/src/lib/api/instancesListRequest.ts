import { API_LIST_INSTANCES } from 'src/const/API'
import { AuthorizationError } from 'src/utils/AuthorizationError'
import { ListIntancesResponse } from 'src/types/Instance'
import { settings } from 'src/settings/settings'

export const instancesListRequest = async (): Promise<ListIntancesResponse | null> => {
  const url = `${settings.api.url}${API_LIST_INSTANCES}`
  const response = await fetch(url, {
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

  return await response.json() as ListIntancesResponse
}
