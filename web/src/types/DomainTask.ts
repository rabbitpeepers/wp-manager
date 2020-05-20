import { InstanceStatus } from 'src/types/InstanceStatus'
import { LogRecord } from 'src/types/LogRecord'

export interface DomainTask {
  id: string
  instanceId: string
  createdAt: string
  status: InstanceStatus
  logs: LogRecord[]
}

export interface DomainTaskItem extends DomainTask {
  id: string
}
