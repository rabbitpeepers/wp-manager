import { Schema, model } from 'mongoose'

export const UserSchema = new Schema({
  id: String,
  displayName: String,
  username: String,
  email: String,
  photos: String,
})

export const User = model('User', UserSchema)
