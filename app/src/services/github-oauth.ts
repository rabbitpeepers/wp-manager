import passport from 'passport'
import OAuth2Strategy from 'passport-oauth2'
import { Strategy as GithubStrategy } from 'passport-github2'
import { settings } from 'settings/settings'

const verify: OAuth2Strategy.VerifyFunction = (accessToken: string, refreshToken: string, profile: any, done: OAuth2Strategy.VerifyCallback) => {
  console.log(accessToken, refreshToken, profile)
  done(null, profile.id)
}

passport.use(
  new GithubStrategy({
    clientID: settings.githubOAuth.clientId,
    clientSecret: settings.githubOAuth.clientSecret,
    callbackURL: settings.githubOAuth.oauthCallback,
  },
  verify
))
