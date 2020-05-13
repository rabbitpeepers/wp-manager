import passport from 'passport'
import { app } from 'services/app'

app.get(
  '/auth/github/callback', 
  passport.authenticate('github', {
    failureRedirect: '/login/failed',
    successRedirect: '/post-login',
  })
)
