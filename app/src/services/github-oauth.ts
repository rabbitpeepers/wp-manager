import passport from 'passport'
import OAuth2Strategy from 'passport-oauth2'
import { Strategy as GithubStrategy } from 'passport-github2'
import { settings } from 'settings/settings'
import { VerifyMembership } from 'controllers/verify-membership'
import { isUserProfile } from 'guard/isUserProfile'
import { UserProfile } from 'types/UserProfile'
import * as ErrorCodes from 'const/ErrorCodes'

const verify: OAuth2Strategy.VerifyFunction = async (
  accessToken: string,
  refreshToken: string,
  profile: UserProfile,
  done: OAuth2Strategy.VerifyCallback
) => {
  const isMember = await VerifyMembership(accessToken)

  if (!isMember) {
    done(null, undefined, { code: ErrorCodes.ERR_USER_NOT_MEMBER_OF_ORG })
    return
  }

  if (!isUserProfile(profile)) {
    done(new Error('profile is not UserProfile object'))
    return
  }
  
  done(null, profile)
}

passport.use(
  new GithubStrategy({
    clientID: settings.githubOAuth.clientId,
    clientSecret: settings.githubOAuth.clientSecret,
    callbackURL: settings.githubOAuth.oauthCallback,
  },
  verify
))
