import { app } from 'services/app'

app.get('/rest/user',  (req, res) => {
  if (!req.user) {
    res.status(401)
    res.send()
    return
  }

  try {
    res.status(200)
    res.send(JSON.stringify(req.user))
  } catch (ex) {
    res.status(500)
    res.send(JSON.stringify(ex))
  }
})
