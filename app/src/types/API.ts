import { Instance } from 'types/Instance'
import { Domain } from 'types/Domain'

export type CreateInstancePayload = {
  name: string
  domainId: string
}

export type ListIntancesResponse = Instance[]

export type CreateDomainPayload = {
  name: string
}

export type ListDomainsResponse = Domain[]
