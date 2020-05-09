import React from 'react'
import { LoginPage } from 'src/components/LoginPage/LoginPage'
import { Router } from '@reach/router'
import { path } from 'src/router/path'

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <LoginPage path={path.login[1]} />
    </Router>
  )
}
