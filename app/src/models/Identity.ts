import mongoose from 'mongoose'

export interface Indentity {
  providerId: string
  uid: string
  provider: string
  providerData: object
}

export interface MongoIndentityDocument extends Indentity, mongoose.Document {}
export type MongoIndentityModel = mongoose.Model<MongoIndentityDocument>

export const IdentitySchema = new mongoose.Schema({
  providerId: String,
  uid: String,
  provider: String,
  providerData: Object,
}, {
  strict: false
})

export const Identity = mongoose.model<MongoIndentityDocument>('Identity', IdentitySchema)
