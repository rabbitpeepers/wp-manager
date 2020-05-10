import { path } from '@bit/rabbitpeepers.wp-manager.path'
import { app } from 'services/app'
import { settings } from 'settings/settings'

app.get(Object.values(path).map((item) => item[2]), (_, res) => {
  res.sendFile(settings.publicPath + '/index.html')  
})
