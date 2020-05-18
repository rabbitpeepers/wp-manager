import { CreateDomainPayload } from 'types/API'

export const isCreateDomainPayload = (input: CreateDomainPayload): input is CreateDomainPayload => {
  return typeof input === 'object' &&
    typeof input.name === 'string' &&
    input.name.length > 0
}
