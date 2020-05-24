import { app } from 'services/app'
import { createInstance } from 'controllers/create-instance'
import { CreateInstancePayload } from 'types/API'
import { isCreateInstancePayload } from 'guard/isCreateInstancePayload'
import { MongoUserDocument } from 'models/User'
import { scheduleTask } from 'controllers/schedule-task'
import { isStrongPassword } from 'utils/isStrongPassword'

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
    meta: req.body.meta
  }

  if (!isCreateInstancePayload(payload)) {
    res.status(403)
    res.send('Invalid payload is provided')
    return
  }

  if (!isStrongPassword(payload.meta.password)) {
    res.status(403)
    res.send('Password is not strong enough')
    return
  }

  try {
    const instance = await createInstance(payload, user)

    if (instance) {
      await scheduleTask(instance.id)
      res.status(201)
      res.send()
    } else {
      throw new Error('Could not save instance')
    }
  } catch (ex) {
    res.status(500)
    res.send(JSON.stringify(ex))
  }
})
