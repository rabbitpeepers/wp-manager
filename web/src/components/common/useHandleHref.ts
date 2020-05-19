import {
  PathItem,
  makeRoute,
} from 'src/router/path'

import React from 'react'
import { useNavigate } from '@reach/router'

type Ret = {
  href: string
  onClick: (e: Event) => void
}

type Event = React.MouseEvent<HTMLButtonElement & HTMLAnchorElement, MouseEvent>

export const useHandleHref = (to: PathItem, cb?: (e: Event) => void, ...args: string[]): Ret => {
  const navigate = useNavigate()
  const href = React.useMemo(() => makeRoute(to, ...args), [to, args])

  const onClick = React.useCallback((e: Event) => {
    e.preventDefault()
    navigate(href)

    if (cb) {
      cb(e)
    }
  }, [navigate, href, cb])

  return { onClick, href }
}
