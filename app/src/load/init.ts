import passport from 'passport'
import bodyParser from 'body-parser'
import session from 'express-session'
import cors from 'cors'
import { app } from 'services/app'
import { settings } from 'settings/settings'
import { User } from 'models/User'

app.use(cors({
  origin: settings.webHost,
  credentials: true
}))

app.use(session({
  secret: settings.sessionSecret,
  resave: true,
  saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user: {id: string}, done) {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
  console.log(user)
  done(null, user)
})
