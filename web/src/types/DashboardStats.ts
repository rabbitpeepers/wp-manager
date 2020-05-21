import { SystemStatus } from 'src/types/SystemStatus' 
import { InstanceStatus } from 'src/types/InstanceStatus' 

export type DashboardStats = {
  systemStatus: SystemStatus
  stats: {
    [key in InstanceStatus]: number
  }
}
