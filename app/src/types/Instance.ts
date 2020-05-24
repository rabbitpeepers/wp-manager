export type InstanceStatus = 'scheduled' | 'processing' | 'deployed' | 'failed'
export type SystemStatus = InstanceStatus | 'unknown' | 'pending'
export type InstanceMeta = {
  username: string
  password: string
  firstName: string
  lastName: string
  blogName: string
  email: string
}

export interface Instance {
  subdomain: string
  domain: string
  domainId: string
  status: InstanceStatus
  createdAt: string
  meta: InstanceMeta
  owner: {
    id: string
    email: string
  }
}
