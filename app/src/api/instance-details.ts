import { app } from 'services/app'
import { instanceDetails } from 'controllers/instance-details'

app.get('/rest/instances/:id', async (req, res) => {
  if (!req.user) {
    res.status(401)
    res.send()
    return
  }

  try {
    const data = await instanceDetails(req.params.id)
    res.status(200)
    res.send(JSON.stringify(data))
  } catch (ex) {
    res.status(500)
    res.send(JSON.stringify(ex))
  }
})
