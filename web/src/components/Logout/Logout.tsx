import { RouteComponentProps, useNavigate } from '@reach/router'
import { makeRoute, path } from 'src/router/path'

import { AuthControllerContext } from 'src/context/AuthControllerContext'
import { Page } from 'src/components/Page/Page'
import React from 'react'
import { SessionContext } from 'src/context/SessionContext'
import { Splash } from 'src/components/Splash/Splash'
import { useTranslation } from 'react-i18next'

export const Logout: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()
  const { logout } = React.useContext(AuthControllerContext)
  const { state } = React.useContext(SessionContext)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (state !== 'ready') {
      return
    }

    const runLogout = async () => {
      await logout()
      navigate(makeRoute(path.login))
    }

    runLogout()
  }, [state, logout, navigate])

  return (
    <Page title={t('login.loggingOut')} rootProps={{ background: 'light-1', height: '100%' }}>
      <Splash />
    </Page>
  )
}
