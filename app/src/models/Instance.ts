import mongoose from 'mongoose'
import { Instance } from 'types/Instance'

export interface InstanceDocument extends Instance, mongoose.Document {}
export type InstanceModel = mongoose.Model<InstanceDocument>

export const InstanceSchema = new mongoose.Schema({
  subdomain: String,
  domain: String,
  domainId: mongoose.Types.ObjectId,
  status: {
    type: String,
    enum : ['scheduled', 'processing', 'deployed', 'failed'],
    default: 'manager'
  },
  createdAt: String,
  owner: {
    email: String,
    id: mongoose.Types.ObjectId,
  }
})

export const User = mongoose.model<InstanceDocument>('Instance', InstanceSchema)
