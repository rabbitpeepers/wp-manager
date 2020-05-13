import {
  PathItem,
  REACH_ROUTES,
  makeRoute,
  path,
} from 'src/router/path'
import { Redirect, Router } from '@reach/router'

import { Dashboard } from 'src/components/Dashboard/Dashboard'
import { LoginPage } from 'src/components/LoginPage/LoginPage'
import { PostLogin } from 'src/components/PostLogin/PostLogin'
import React from 'react'
import { useMe } from 'src/context/hook/useMe'

const getAppRedirect = (p: PathItem) => (i: string) => (
  <Redirect key={i} from={i} to={makeRoute(p)} noThrow />
)

export const AppRouter: React.FC = () => {
  const me = useMe()

  const anonymous = !me?.role ? (
    <>
      {path.login[REACH_ROUTES].map((i) => <LoginPage key={i} path={i} />)}
      {path.postLogin[REACH_ROUTES].map((i) => <PostLogin key={i} path={i} />)}
      {path.dashboard[REACH_ROUTES].map(getAppRedirect(path.login))}
    </>
  ) : null

  const authorized = me?.role ? (
    <>
      {path.dashboard[REACH_ROUTES].map((i) => <Dashboard key={i} path={i} />)}
      {
        [
          '/login',
          ...path.postLogin[REACH_ROUTES],
        ].map(getAppRedirect(path.dashboard))
      }
    </>
  ) : null

  return (
    <Router style={{ height: '100%' }}>
      {anonymous}
      {authorized}
    </Router>
  )
}
