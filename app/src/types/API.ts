import { Instance } from 'types/Instance'
import { Domain } from 'types/Domain'
import { DomainTask } from 'types/DomainTask'

export type CreateInstancePayload = {
  name: string
  domainId: string
}

interface InstanceItem extends Instance {
  id: string
}

export type ListIntancesResponse = InstanceItem[]

export type CreateDomainPayload = {
  name: string
}

interface DomainItem extends Domain {
  id: string
}

export type ListDomainsResponse = DomainItem[]

export interface DomainTaskItem extends DomainTask {
  id: string
}

export type InstanceDetailsResponse = {
  instance: InstanceItem,
  tasks: DomainTaskItem[]
}
