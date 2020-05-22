import { API_LIST_DOMAINS, API_LIST_DOMAINS_ACTIVE } from 'src/const/API'
import { AuthorizationError } from 'src/utils/AuthorizationError'
import { ListDomainsResponse } from 'src/types/Domain'
import { settings } from 'src/settings/settings'

export const domainListRequest = async (activeOnly: boolean): Promise<ListDomainsResponse | null> => {
  const url = `${settings.api.url}${activeOnly ? API_LIST_DOMAINS_ACTIVE : API_LIST_DOMAINS}`
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

  if (response.status !== 200) {
    const res = await response.json() as { message: string }
    throw new Error(res?.message || `[HTTP] Error ${response.status}`)
  }

  return await response.json() as ListDomainsResponse
}
