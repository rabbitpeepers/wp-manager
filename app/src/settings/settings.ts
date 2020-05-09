import { env } from 'settings/env'

export const settings = {
  port: env.APP_PORT || 8080,
}
