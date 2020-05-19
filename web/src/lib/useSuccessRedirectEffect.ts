import {
  PathItem,
  makeRoute,
} from 'src/router/path'

import { AsyncStateStatus } from 'react-async-hook'
import React from 'react'
import { useNavigate } from '@reach/router'

export const useSuccessRedirectEffect = (status: AsyncStateStatus, r: PathItem) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    if (status === 'success') {
      navigate(makeRoute(r, 'expired'))
    }
  }, [status, navigate, r])
}
