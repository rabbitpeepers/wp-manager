import { app } from 'services/app'
import { listIntances } from 'controllers/list-instances'

app.get('/rest/instances', async (req, res) => {
  if (!req.user) {
    res.status(401)
    res.send()
    return
  }

  res.send(JSON.stringify(await listIntances()))
  res.status(200)
})
