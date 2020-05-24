import { Domain } from 'src/types/Domain'

export type InstanceFormData = {
  name: string
  domain?: Domain
  meta: {
    username: string
    password: string
    firstName: string
    lastName: string
    blogName: string
  }
}
