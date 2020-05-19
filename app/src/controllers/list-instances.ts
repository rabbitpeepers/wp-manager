import { Instance } from 'models/Instance'
import { ListIntancesResponse } from 'types/API'

export const listIntances = async (): Promise<ListIntancesResponse> => {
  const instances = await Instance.find().sort({ createdAt: 'desc' }).limit(999)

  return instances.map(item => ({
    id: item.id,
    subdomain: item.subdomain,
    domain: item.domain,
    domainId: item.domainId,
    status: item.status,
    createdAt: item.createdAt,
    owner: item.owner,
  }))
}
