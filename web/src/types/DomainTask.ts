import { InstanceStatus } from 'src/types/Instance'
import { LogRecord } from 'src/types/LogRecord'

export interface DomainTask {
  instanceId: string
  createdAt: string
  status: InstanceStatus
  logs: LogRecord[]
}

export interface DomainTaskItem extends DomainTask {
  id: string
}
