import {
  PathItem,
  REACH_ROUTES,
  makeRoute,
  path,
} from 'src/router/path'
import { Redirect, Router } from '@reach/router'

import { CreateDomain } from 'src/components/CreateDomain/CreateDomain'
import { CreateInstance } from 'src/components/CreateInstance/CreateInstance'
import { Dashboard } from 'src/components/Dashboard/Dashboard'
import { Domains } from 'src/components/Domains/Domains'
import { Instances } from 'src/components/Instances/Instances'
import { LoginPage } from 'src/components/LoginPage/LoginPage'
import { Logout } from 'src/components/Logout/Logout'
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
      {
        [
          ...path.dashboard[REACH_ROUTES],
          ...path.instances[REACH_ROUTES],
          ...path.domains[REACH_ROUTES],
          ...path.profile[REACH_ROUTES],
          ...path.about[REACH_ROUTES],
          ...path.instancesCreate[REACH_ROUTES],
          ...path.domainsCreate[REACH_ROUTES],
        ].map(getAppRedirect(path.login))
      }
    </>
  ) : null

  const authorized = me?.role ? (
    <>
      {path.dashboard[REACH_ROUTES].map((i) => <Dashboard key={i} path={i} />)}
      {path.instances[REACH_ROUTES].map((i) => <Instances key={i} path={i} />)}
      {path.domains[REACH_ROUTES].map((i) => <Domains key={i} path={i} />)}
      {path.instancesCreate[REACH_ROUTES].map((i) => <CreateInstance key={i} path={i} />)}
      {path.domainsCreate[REACH_ROUTES].map((i) => <CreateDomain key={i} path={i} />)}
      {path.logout[REACH_ROUTES].map((i) => <Logout key={i} path={i} />)}
      {
        [
          '/login',
          ...path.postLogin[REACH_ROUTES],
        ].map(getAppRedirect(path.dashboard))
      }
      <Redirect from="/" to={makeRoute(path.dashboard)} noThrow />
    </>
  ) : null

  return (
    <Router style={{ height: '100%' }}>
      {anonymous}
      {authorized}
    </Router>
  )
}
