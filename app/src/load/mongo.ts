import mongoose from 'mongoose'
import { settings } from 'settings/settings'

mongoose.connect(settings.mongourl)

mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
