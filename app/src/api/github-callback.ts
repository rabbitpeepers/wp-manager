import passport from 'passport'
import { app } from 'services/app'
import { settings } from 'settings/settings'

const successRedirect = `${settings.webHost}/post-login`

app.get('/auth/github/callback', (req, res, next) => {
  passport.authenticate('github', (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.redirect(`${settings.webHost}/login/failed`)
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err)
      }

      res.status(200)
      res.send(`
        <html>
          <head>
            <title>Logging in...</title>
          </head>
          <body>
            <script>
              if (window.opener) {
                window.opener.postMessage('successAndNavigate', '*');
                window.close()
              } else {
                document.location.href = '${successRedirect}';
              }
            </script>
            <p>Logging in...</p>
          </body>
        </html>
      `)
    })
  })(req, res, next)
})
