export interface Domain {
  id: string
  createdAt: string
  name: string
  active: boolean
  owner: {
    id: string
    email: string
  }
}
export type CreateDomainPayload = {
  name: string
}

export type ListDomainsResponse = Domain[]
