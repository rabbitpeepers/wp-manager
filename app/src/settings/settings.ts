import { env } from 'settings/env'
import fs from 'fs'

const publicPath = env.APP_STATIC_DIR

if (!publicPath) {
  throw new Error('ENV `APP_STATIC_DIR` is not defined')
}

fs.accessSync(publicPath, fs.constants.R_OK)

export const settings = {
  port: env.APP_PORT || 8080,
  publicPath,
  githubOAuth: {
    clientId: env.APP_GITHUB_OAUTH_CLIENT_ID,
    clientSecret: env.APP_GITHUB_OAUTH_CLIENT_SECRET,
    oauthCallback: env.APP_GITHUB_OAUTH_CALLBACK,
    scope: ['user:email']
  }
}
