import { RouteComponentProps, useNavigate } from '@reach/router'
import { makeRoute, path } from 'src/router/path'

import { AuthControllerContext } from 'src/context/AuthControllerContext'
import { Page } from 'src/components/Page/Page'
import React from 'react'
import { SessionContext } from 'src/context/SessionContext'
import { Splash } from 'src/components/Splash/Splash'
import { useTranslation } from 'react-i18next'

export const PostLogin: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()
  const { validateSession } = React.useContext(AuthControllerContext)
  const { state } = React.useContext(SessionContext)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (state !== 'ready') {
      return
    }

    const runValidation = async () => {
      const user = await validateSession()
      navigate(makeRoute(user ? path.dashboard : path.login))
    }

    runValidation()
  }, [state, validateSession, navigate])

  return (
    <Page title={t('login.loggingIn')} rootProps={{ background: 'light-1' }}>
      <Splash />
    </Page>
  )
}
