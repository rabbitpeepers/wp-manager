import {
  PathItem,
  makeRoute,
} from 'src/router/path'

import { ButtonType } from 'grommet'
import React from 'react'
import { useNavigate } from '@reach/router'

type Ret = Required<Pick<ButtonType, 'href' | 'onClick'>>

export const useHandleHref = (to: PathItem, cb?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void): Ret => {
  const navigate = useNavigate()
  const href = React.useMemo(() => makeRoute(to), [to])

  const onClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    navigate(href)

    if (cb) {
      cb(e)
    }
  }, [navigate, href, cb])

  return { onClick, href }
}
