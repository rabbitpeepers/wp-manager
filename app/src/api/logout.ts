 
import { app } from 'services/app'

app.get(
  '/rest/user/logout',
  (req, res) => {
    req.logout()
    res.status(200)
    res.send()
  }
)
