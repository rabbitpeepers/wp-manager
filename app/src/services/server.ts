import { app } from 'services/app'
import { settings } from 'settings/settings'
import { Server } from 'http'

export const server = (): Server => {
  return app.listen(settings.port, () => {
    console.log(`Listening on port ${settings.port}`)
  })
}
