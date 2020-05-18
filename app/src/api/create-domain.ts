import { app } from 'services/app'
import { createDomain } from 'controllers/create-domain'
import { CreateDomainPayload } from 'types/API'
import { isCreateDomainPayload } from 'guard/isCreateDomainPayload'
import { MongoUserDocument } from 'models/User'

app.post('/rest/domains/create', async (req, res) => {
  const user = req.user as (MongoUserDocument & Express.User)

  if (!user || user?.role !== 'admin') {
    res.status(401)
    res.send()
    return
  }

  const payload: CreateDomainPayload = {
    name: req.params.name,
  }

  if (!isCreateDomainPayload(payload)) {
    res.status(403)
    res.send('Invalid payload is provided')
    return
  }

  try {
    await createDomain(payload, user)
    res.status(201)
    res.send()
  } catch (ex) {
    res.status(500)
    res.send(ex.message)
  }
})
