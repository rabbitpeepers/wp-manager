import passport from 'passport'
import OAuth2Strategy from 'passport-oauth2'
import { Strategy as GithubStrategy } from 'passport-github2'
import { settings } from 'settings/settings'
import { VerifyMembership } from 'controllers/verify-membership'
import { fetchGithubEmail } from 'controllers/fetch-gihub-emails'
import { isUserProfile } from 'guard/isUserProfile'
import { UserProfile } from 'types/UserProfile'
import * as ErrorCodes from 'const/ErrorCodes'
import { Request } from 'express'
import { OAuth2Login } from 'controllers/oauth2-login'

// Validate membership
const verify: OAuth2Strategy.VerifyFunctionWithRequest = async (
  req: Request,
  accessToken: string,
  refreshToken: string,
  githubProfile: UserProfile,
  done: OAuth2Strategy.VerifyCallback
) => {
  const isMember = await VerifyMembership(accessToken)

  if (!isMember) {
    done(null, undefined, { code: ErrorCodes.ERR_USER_NOT_MEMBER_OF_ORG })
    return
  }

  if (!isUserProfile(githubProfile)) {
    console.log(githubProfile)
    done(new Error('profile is not UserProfile object'))
    return
  }

  if (!githubProfile.emails) {
    try {
      githubProfile.emails = (await fetchGithubEmail(accessToken))
        .filter(i => i.primary)
        .map(i => ({ value: i.email }))
    } catch (ex) {
      console.error(ex)
      done(ex)
      return
    }
  }
  
  try {
    await OAuth2Login(req, accessToken, refreshToken, githubProfile, done)
  } catch (ex) {
    console.error(ex)
    done(ex)
  }
}

passport.use(
  new GithubStrategy({
    clientID: settings.githubOAuth.clientId,
    clientSecret: settings.githubOAuth.clientSecret,
    callbackURL: settings.githubOAuth.oauthCallback,
    passReqToCallback: true
  },
  verify
))
