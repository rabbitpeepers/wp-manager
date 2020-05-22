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

  try {
    const data = await listDomains({})
    res.status(200)
    res.send(JSON.stringify(data))
  } catch (ex) {
    res.status(500)
    res.send(JSON.stringify(ex))
  }
})

app.get('/rest/domains/active', async (req, res) => {
  const user = req.user as (MongoUserDocument & Express.User)

  if (!user) {
    res.status(401)
    res.send()
    return
  }

  try {
    const data = await listDomains({ active: true })
    res.status(200)
    res.send(JSON.stringify(data))
  } catch (ex) {
    res.status(500)
    res.send(JSON.stringify(ex))
  }
})
