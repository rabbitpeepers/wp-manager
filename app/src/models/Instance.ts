import mongoose from 'mongoose'
import { Instance as InstanceType } from 'types/Instance'

export interface InstanceDocument extends InstanceType, mongoose.Document {}
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
  createdAt: { type: Date, default: Date.now },
  owner: {
    email: String,
    id: mongoose.Types.ObjectId,
  }
})

export const Instance = mongoose.model<InstanceDocument>('Instance', InstanceSchema)
