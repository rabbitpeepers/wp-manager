import { Instance } from 'types/Instance'

export type CreateInstancePayload = {
  name: string
  domainId: string
}

export type ListIntancesResponse = Instance[]
