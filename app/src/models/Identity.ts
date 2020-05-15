import mongoose from 'mongoose'

export interface Indentity {
  providerId: string
  uid: mongoose.Types.ObjectId
  provider: string
  providerData: object
}

export interface MongoIndentityDocument extends Indentity, mongoose.Document {}
export type MongoIndentityModel = mongoose.Model<MongoIndentityDocument>

export const IdentitySchema = new mongoose.Schema({
  providerId: String,
  uid: mongoose.Types.ObjectId,
  provider: String,
  providerData: Object,
}, {
  strict: false
})

export const Identity = mongoose.model<MongoIndentityDocument>('Identity', IdentitySchema)
