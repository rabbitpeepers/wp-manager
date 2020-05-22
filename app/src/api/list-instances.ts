import { app } from 'services/app'
import { listIntances } from 'controllers/list-instances'

app.get('/rest/instances', async (req, res) => {
  if (!req.user) {
    res.status(401)
    res.send()
    return
  }

  try {
    const data = await listIntances()
    res.status(200)
    res.send(JSON.stringify(data))
  } catch (ex) {
    res.status(500)
    res.send(JSON.stringify(ex))
  }
})
