import { DashboardStats } from 'types/API'
import { SystemStatus } from 'types/Instance'
import { Instance } from 'models/Instance'

export const dashboardInfo = async (): Promise<DashboardStats> => {
  const [scheduled, failed, deployed, processing] = await Promise.all([
    Instance.countDocuments({ status: 'scheduled' }),
    Instance.countDocuments({ status: 'failed' }),
    Instance.countDocuments({ status: 'deployed' }),
    Instance.countDocuments({ status: 'processing' }),
  ])

  let systemStatus: SystemStatus = 'pending'

  if (failed > 0) {
    systemStatus = 'failed'
  } else if (processing > 0) {
    systemStatus = 'processing'
  } else if (scheduled > 0) {
    systemStatus = 'scheduled'
  }

  return {
    systemStatus,
    stats: {
      scheduled,
      failed,
      deployed,
      processing
    }
  }
}
