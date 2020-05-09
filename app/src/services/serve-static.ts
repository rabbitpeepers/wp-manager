import { app } from 'services/app'
import serveStatic from 'serve-static'
import { settings } from 'settings/settings'

app.use(serveStatic(settings.publicPath))
