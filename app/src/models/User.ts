import mongoose from 'mongoose'

interface MongoUser {
  displayName: string
  username: string
  email: string
  photoURL: string
  role: 'manager' | 'admin'
}

export interface MongoUserDocument extends MongoUser, mongoose.Document {}
export type MongoUserModel = mongoose.Model<MongoUserDocument>

export const UserSchema = new mongoose.Schema({
  displayName: String,
  username: String,
  email: String,
  photoURL: String,
  role: {
    type: String,
    enum : ['manager','admin'],
    default: 'manager'
  },
})

export const User = mongoose.model<MongoUserDocument>('User', UserSchema)
