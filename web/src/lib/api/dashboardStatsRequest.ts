import { API_DASHBOARD_STATS } from 'src/const/API'
import { AuthorizationError } from 'src/utils/AuthorizationError'
import { DashboardStats } from 'src/types/DashboardStats'
import { settings } from 'src/settings/settings'

export const dashboardStatsRequest = async (): Promise<DashboardStats | null> => {
  const response = await fetch(`${settings.api.url}${API_DASHBOARD_STATS}`, {
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

  return await response.json() as DashboardStats
}
