import {
  makeRoute,
  path,
} from 'src/router/path'

import { AuthControllerContext } from 'src/context/AuthControllerContext'
import { AuthorizationError } from 'src/utils/AuthorizationError'
import React from 'react'
import { useNavigate } from '@reach/router'

export const useAuthorizationErrorEffect = (error?: Error) => {
  const navigate = useNavigate()
  const { logout } = React.useContext(AuthControllerContext)

  React.useEffect(() => {
    const expired = async () => {
      await logout()
      navigate(makeRoute(path.login, 'expired'))
    }

    if (error instanceof AuthorizationError) {
      expired()
    }
  }, [error, navigate, logout])
}
