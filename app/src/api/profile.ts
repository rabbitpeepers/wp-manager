import { app } from 'services/app'

app.get(
  '/rest/user',
  (req, res) => {
    if (!req.user) {
      res.status(401)
      res.send()
      return
    }

    res.send(JSON.stringify(req.user))
  }
)
