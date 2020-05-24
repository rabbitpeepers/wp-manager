import { CreateInstancePayload } from 'types/API'

const metaKeys: (keyof CreateInstancePayload['meta'])[] = [
  'username',
  'password',
  'firstName',
  'lastName',
  'blogName',
]

export const isCreateInstancePayload = (input: CreateInstancePayload): input is CreateInstancePayload => {
  return typeof input === 'object' &&
    typeof input.name === 'string' &&
    typeof input.domainId === 'string' &&
    /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)$/g.test(input.name),
    typeof input.meta === 'object' && 
    metaKeys.every(i => (typeof input.meta[i] === 'string') && input.meta[i].length > 0)
}
