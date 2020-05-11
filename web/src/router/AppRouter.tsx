import React from 'react'
import { LoginPage } from 'src/components/LoginPage/LoginPage'
import { Router } from '@reach/router'
import { path, REACH_ROUTES } from 'src/router/path'
import { useMe } from 'src/context/hook/useMe'

export const AppRouter: React.FC = () => {
  const me = useMe()

  const anonymous = !me?.role ? (
    <>
      {path.login[REACH_ROUTES].map((i) => <LoginPage key={i} path={i} />)}
    </>
  ) : null

  return (
    <Router style={{ height: '100%' }}>
      {anonymous}
    </Router>
  )
}
