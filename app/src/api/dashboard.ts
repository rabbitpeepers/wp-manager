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

  res.status(200)
  res.send(JSON.stringify(await dashboardInfo()))
})
