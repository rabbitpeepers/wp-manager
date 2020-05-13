import passport from 'passport'
import { app } from 'services/app'
import { settings } from 'settings/settings'

app.get(
  '/auth/github/callback', 
  passport.authenticate('github', {
    failureRedirect: `${settings.webUrl}/login/failed`,
    successRedirect: `${settings.webUrl}/post-login`,
  })
)
