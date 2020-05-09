import passport from 'passport'
import bodyParser from 'body-parser'
import session from 'express-session'
import { app } from 'services/app'

app.use(session({
  secret: 'abc1',
  resave: true,
  saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(id: string, done) {
  console.log('SAVE USER SESSION ID', id)
  done(null, id)
})

passport.deserializeUser(function(id, done) {
  console.log('LOAD USER BY SESSION', id)
  done(null, {
    id
  })
})
