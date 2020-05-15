import { LogRecord } from 'types/LogRecord'
import { InstanceStatus } from 'types/Instance'

export interface DomainTask {
  instanceId: string
  createdAt: string
  status: InstanceStatus
  logs: LogRecord[]
}
