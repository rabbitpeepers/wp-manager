import { Request } from 'express'
import { UserProfile } from 'types/UserProfile'
import OAuth2Strategy from 'passport-oauth2'
import { User } from 'models/User'
import { Identity } from 'models/Identity'

type OAuth2LoginFn = (
  req: Request,
  accessToken: string,
  refreshToken: string,
  profile: UserProfile,
  done: OAuth2Strategy.VerifyCallback
) => Promise<void>

const OAuth2CreateAccount: OAuth2LoginFn = async (req, accessToken, refreshToken, profile, done) => {
  const newUser = new User({
    displayName: profile.displayName,
    username: profile.username,
    email: (profile.emails[0].value || ''),
    photoURL: (profile.photos[0].value || ''),
    role: 'manager'
  })

  await newUser.save()

  const newIdentity = new Identity({
    providerId: profile.id,
    uid: newUser.id,
    provider: profile.provider,
    providerData: profile._json
  })

  await newIdentity.save()

  req.logIn(newUser, () => {
    done(null, newUser)
  })
}

export const OAuth2Login: OAuth2LoginFn = async (req, accessToken, refreshToken, profile, done) => {
  const identity = await Identity.findOne({
    providerId: profile.id
  })

  if (!identity) {
    return OAuth2CreateAccount(req, accessToken, refreshToken, profile, done)
  } else {
    const user = await User.findById(identity.uid)
    req.logIn(user, () => {
      done(null, user)
    })
  }
}
