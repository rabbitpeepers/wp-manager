import { CreateInstancePayload } from 'types/API'

export const isCreateInstancePayload = (input: CreateInstancePayload): input is CreateInstancePayload => {
  return typeof input === 'object' &&
    typeof input.name === 'string' &&
    typeof input.domainId === 'string' &&
    /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)$/g.test(input.name)
}
