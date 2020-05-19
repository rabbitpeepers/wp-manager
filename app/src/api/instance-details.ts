import { app } from 'services/app'
import { instanceDetails } from 'controllers/instance-details'

app.get('/rest/instances/:id', async (req, res) => {
  if (!req.user) {
    res.status(401)
    res.send()
    return
  }

  res.status(200)
  res.send(JSON.stringify(await instanceDetails(req.params.id)))
})
