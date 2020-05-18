import { Instance } from 'models/Instance'
import { ListIntancesResponse } from 'types/API'

export const listIntances = async (): Promise<ListIntancesResponse> => {
  const instances = await Instance.find().limit(999)
  console.log(instances)
  return instances.map(item => ({
    subdomain: item.subdomain,
    domain: item.domain,
    domainId: item.domainId,
    status: item.status,
    createdAt: item.createdAt,
    owner: item.owner,
  }))
}
