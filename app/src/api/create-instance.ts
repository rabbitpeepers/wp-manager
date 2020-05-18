import { app } from 'services/app'
import { createInstance } from 'controllers/create-instance'
import { CreateInstancePayload } from 'types/API'
import { isCreateInstancePayload } from 'guard/isCreateInstancePayload'
import { MongoUserDocument } from 'models/User'

app.post('/rest/instances/create', async (req, res) => {
  const user = req.user as (MongoUserDocument & Express.User)

  if (!user) {
    res.status(401)
    res.send()
    return
  }

  const payload: CreateInstancePayload = {
    domainId: req.body.domainId,
    name: req.body.name,
  }

  if (!isCreateInstancePayload(payload)) {
    res.status(403)
    res.send('Invalid payload is provided')
    return
  }

  try {
    await createInstance(payload, user)
    res.status(201)
    res.send()
  } catch (ex) {
    res.status(500)
    res.send(ex.message)
  }
})
