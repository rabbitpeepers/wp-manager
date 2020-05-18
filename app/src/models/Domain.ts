import mongoose from 'mongoose'
import { Domain as DomainType } from 'types/Domain'

export interface DomainDocument extends DomainType, mongoose.Document {}
export type DomainModel = mongoose.Model<DomainDocument>

export const DomainSchema = new mongoose.Schema({
  active: Boolean,
  name: String,
  createdAt: { type: Date, default: Date.now },
  owner: {
    email: String,
    id: mongoose.Types.ObjectId,
  },
})

export const Domain = mongoose.model<DomainDocument>('Domain', DomainSchema)
