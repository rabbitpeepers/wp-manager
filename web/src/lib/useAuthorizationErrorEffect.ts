import {
  makeRoute,
  path,
} from 'src/router/path'

import { AuthorizationError } from 'src/utils/AuthorizationError'
import React from 'react'
import { useNavigate } from '@reach/router'

export const useAuthorizationErrorEffect = (error?: Error) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    if (error instanceof AuthorizationError) {
      navigate(makeRoute(path.login, 'expired'))
    }
  }, [error, navigate])
}
