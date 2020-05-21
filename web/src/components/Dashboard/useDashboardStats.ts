import { dashboardStatsRequest } from 'src/lib/api/dashboardStatsRequest'
import { useAsync } from 'react-async-hook'

export const useDashboardStats = () => {
  return useAsync(() => dashboardStatsRequest(), [])
}
