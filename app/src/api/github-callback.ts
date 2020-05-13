import passport from 'passport'
import { app } from 'services/app'
import { settings } from 'settings/settings'

app.get(
  '/auth/github/callback', 
  passport.authenticate('github', {
    failureRedirect: `${settings.webHost}/login/failed`,
    successRedirect: `${settings.webHost}/post-login`,
  })
)
