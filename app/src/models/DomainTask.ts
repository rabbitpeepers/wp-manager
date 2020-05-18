import mongoose from 'mongoose'
import { DomainTask as DomainTaskType } from 'types/DomainTask'

export interface DomainTaskDocument extends DomainTaskType, mongoose.Document {}
export type DomainTaskModel = mongoose.Model<DomainTaskDocument>

export const DomainTaskSchema = new mongoose.Schema({
  instanceId: mongoose.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum : ['scheduled', 'processing', 'deployed', 'failed'],
    default: 'manager'
  },
  logs: [{ date: { type: Date, default: Date.now }, text: String }],
})

export const DomainTask = mongoose.model<DomainTaskDocument>('DomainTask', DomainTaskSchema)
