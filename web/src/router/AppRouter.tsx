import { REACH_ROUTES, path } from 'src/router/path'

import { LoginPage } from 'src/components/LoginPage/LoginPage'
import { PostLogin } from 'src/components/PostLogin/PostLogin'
import React from 'react'
import { Router } from '@reach/router'
import { useMe } from 'src/context/hook/useMe'

export const AppRouter: React.FC = () => {
  const me = useMe()

  const anonymous = !me?.role ? (
    <>
      {path.login[REACH_ROUTES].map((i) => <LoginPage key={i} path={i} />)}
      {path.postLogin[REACH_ROUTES].map((i) => <PostLogin key={i} path={i} />)}
    </>
  ) : null

  return (
    <Router style={{ height: '100%' }}>
      {anonymous}
    </Router>
  )
}
