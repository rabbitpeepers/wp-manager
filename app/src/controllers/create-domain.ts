import { Domain } from 'models/Domain'
import { CreateDomainPayload } from 'types/API'
import { MongoUserDocument } from 'models/User'

export const createDomain = async (payload: CreateDomainPayload, user: (MongoUserDocument & Express.User)): Promise<boolean> => {
  const domain = new Domain({
    active: true,
    name: payload.name,
    owner: {
      id: user.id,
      email: user.email
    }
  })

  await domain.save()
  return true
}
