import passport from 'passport'
import { app } from 'services/app'
import { settings } from 'settings/settings'

app.get(
  '/auth/github',
  passport.authenticate('github', {
    scope: settings.githubOAuth.scope
  })
)
