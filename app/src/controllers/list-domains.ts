import { Domain } from 'models/Domain'
import { ListDomainsResponse } from 'types/API'

export const listDomains = async (filter: object): Promise<ListDomainsResponse> => {
  const domains = await Domain.find(filter).sort({ createdAt: 'desc' }).limit(999)

  return domains.map(item => ({
    id: item.id,
    name: item.name,
    active: item.active,
    createdAt: item.createdAt,
    owner: item.owner,
  }))
}
