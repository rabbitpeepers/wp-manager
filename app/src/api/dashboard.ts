import { app } from 'services/app'
import { dashboardInfo } from 'controllers/dashboard-info'
import { MongoUserDocument } from 'models/User'

app.get('/rest/dashboard', async (req, res) => {
  const user = req.user as (MongoUserDocument & Express.User)

  if (!user) {
    res.status(401)
    res.send()
    return
  }

  try {
    const data = await dashboardInfo()
    res.status(200)
    res.send(JSON.stringify(data))
  } catch (ex) {
    res.status(500)
    res.send(JSON.stringify(ex))
  }
})
