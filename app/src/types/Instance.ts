import mongoose from 'mongoose'

export type InstanceStatus = 'scheduled' | 'processing' | 'deployed' | 'failed'

export interface Instance {
  subdomain: string
  domain: string
  domainId: mongoose.Types.ObjectId
  status: InstanceStatus
  createdAt: string
  owner: {
    id: mongoose.Types.ObjectId
    email: string
  }
}
