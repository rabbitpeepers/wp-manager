import { app } from 'services/app'
import { listDomains } from 'controllers/list-domains'
import { MongoUserDocument } from 'models/User'

app.get('/rest/domains', async (req, res) => {
  const user = req.user as (MongoUserDocument & Express.User)

  if (!user || user?.role !== 'admin') {
    res.status(401)
    res.send()
    return
  }

  res.status(200)
  res.send(JSON.stringify(await listDomains({})))
})

app.get('/rest/domains/active', async (req, res) => {
  const user = req.user as (MongoUserDocument & Express.User)

  if (!user) {
    res.status(401)
    res.send()
    return
  }

  res.status(200)
  res.send(JSON.stringify(await listDomains({ active: true })))
})
