import { Instance, InstanceDocument } from 'models/Instance'
import { Domain } from 'models/Domain'
import { CreateInstancePayload } from 'types/API'
import { MongoUserDocument } from 'models/User'

export const createInstance = async (payload: CreateInstancePayload, user: (MongoUserDocument & Express.User)): Promise<InstanceDocument> => {
  const domain = await Domain.findById(payload.domainId)

  if (!domain.name) {
    throw new Error('Invalid domain name')
  }

  const instance = new Instance({
    subdomain: payload.name,
    domain: domain.name,
    domainId: domain.id,
    status: 'scheduled',
    owner: {
      id: user.id,
      email: user.email
    }
  })

  return instance.save()
}
