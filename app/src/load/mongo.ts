import mongoose from 'mongoose'
import { settings } from 'settings/settings'

mongoose.connect(settings.mongourl, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.on('connect', console.log.bind(console, 'MongoDB connected!'))
