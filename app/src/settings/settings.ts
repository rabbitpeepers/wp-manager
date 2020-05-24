import { env } from 'settings/env'
import fs from 'fs'

const publicPath = env.APP_STATIC_DIR
const mongourl = env.APP_MONGODB_HOST

if (!publicPath) {
  throw new Error('ENV `APP_STATIC_DIR` is not defined')
}

if (!mongourl) {
  throw new Error('ENV `APP_MONGODB_HOST` is not defined')
}

fs.accessSync(publicPath, fs.constants.R_OK)

export const settings = {
  port: env.APP_PORT || 8080,
  publicPath,
  sessionSecret: env.APP_SESSION_SECRET_KEY,
  webHost: env.APP_WEB_HOST,
  githubOAuth: {
    clientId: env.APP_GITHUB_OAUTH_CLIENT_ID,
    clientSecret: env.APP_GITHUB_OAUTH_CLIENT_SECRET,
    oauthCallback: env.APP_GITHUB_OAUTH_CALLBACK,
    organizationIds: env.APP_GITHUB_ORGANIZATIONS,
    scope: ['read:user', 'read:org']
  },
  mongourl,
}
