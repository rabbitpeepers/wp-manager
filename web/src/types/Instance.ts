import { DomainTaskItem } from 'src/types/DomainTask'
import { InstanceStatus } from 'src/types/InstanceStatus'

export interface Instance {
  id: string
  subdomain: string
  domain: string
  domainId: string
  status: InstanceStatus
  createdAt: string
  owner: {
    id: string
    email: string
  }
}

export type CreateInstancePayload = {
  name: string
  domainId: string
}

export type ListIntancesResponse = Instance[]

export type InstanceDetailsResponse = {
  instance: Instance,
  tasks: DomainTaskItem[]
}
