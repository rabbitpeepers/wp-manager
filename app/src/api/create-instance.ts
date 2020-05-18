import { app } from 'services/app'
import { createInstance } from 'controllers/create-instance'
import { CreateInstancePayload } from 'types/API'
import { isCreateInstancePayload } from 'guard/isCreateInstancePayload'
import { MongoUserDocument } from 'models/User'

app.post('/rest/instances/create', async (req, res) => {
    if (!req.user) {
      res.status(401)
      res.send()
      return
    }

    const payload: CreateInstancePayload = {
      domainId: req.params.domainId,
      name: req.params.name,
    }

    if (!isCreateInstancePayload(payload)) {
      res.status(403)
      res.send('Invalid payload provided')
      return
    }

    try {
      await createInstance(payload, req.user as (MongoUserDocument & Express.User))
      res.status(201)
      res.send()
    } catch (ex) {
      res.status(500)
      res.send(ex.message)
    }
  }
)
