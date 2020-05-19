import { API_LIST_DOMAINS } from 'src/const/API'
import { AuthorizationError } from 'src/utils/AuthorizationError'
import { ListDomainsResponse } from 'src/types/Domain'
import { settings } from 'src/settings/settings'

export const domainListRequest = async (): Promise<ListDomainsResponse | null> => {
  const response = await fetch(`${settings.api.url}${API_LIST_DOMAINS}`, {
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

  return await response.json() as ListDomainsResponse
}
