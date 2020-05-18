import { Domain } from 'models/Domain'
import { ListDomainsResponse } from 'types/API'

export const listDomains = async (): Promise<ListDomainsResponse> => {
  const domains = await Domain.find().limit(999)

  return domains.map(item => ({
    name: item.name,
    active: item.active,
    createdAt: item.createdAt,
    owner: item.owner,
  }))
}
