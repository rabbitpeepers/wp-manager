import passport from 'passport'
import { app } from 'services/app'
import { settings } from 'settings/settings'

const successRedirect = `${settings.webHost}/post-login`
const failedRedirect = `${settings.webHost}/login/failed`

type postMessageInfo = {
  type: 'wp_manager_oauth_message'
  action: 'success' | 'failed'
  message?: string
}

const makeResult = (redirect: string, info: postMessageInfo): string => `
  <html>
    <head>
      <title>Logging in...</title>
    </head>
    <body>
      <script>
        if (window.opener) {
          window.opener.postMessage(${JSON.stringify(info)}, '*');
          window.close()
        } else {
          document.location.href = '${redirect}';
        }
      </script>
      <p>Logging in...</p>
    </body>
  </html>
`

app.get('/auth/github/callback', (req, res, next) => {
  passport.authenticate('github', (err, user, info) => {
    if (err) {
      res.status(401)
      res.send(makeResult(failedRedirect, {
        action: 'failed',
        message:  err,
        type: 'wp_manager_oauth_message',
      }))
      return
    }

    if (!user) {
      res.status(401)
      res.send(makeResult(failedRedirect, {
        action: 'failed',
        message: info.code,
        type: 'wp_manager_oauth_message',
      }))
      return
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err)
      }

      res.status(200)
      res.send(makeResult(successRedirect, {
        action: 'success',
        type: 'wp_manager_oauth_message',
      }))
    })
  })(req, res, next)
})
