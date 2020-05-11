import React from 'react'
import { LoginPage } from 'src/components/LoginPage/LoginPage'
import { Router } from '@reach/router'
import { path } from 'src/router/path'

const REACH_ROUTE = 1

export const AppRouter: React.FC = () => {
  return (
    <Router style={{ height: '100%' }}>
      <LoginPage path={path.login[REACH_ROUTE]} />
    </Router>
  )
}
