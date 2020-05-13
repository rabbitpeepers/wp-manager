import * as Icons from 'grommet-icons'

import {
  makeRoute,
  path,
} from 'src/router/path'

import { Button } from 'grommet'
import React from 'react'
import { useMe } from 'src/context/hook/useMe'
import { useNavigate } from '@reach/router'
import { useTranslation } from 'react-i18next'

export const LogoutButton: React.FC = () => {
  const me = useMe()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleClick = React.useCallback(() => {
    navigate(makeRoute(path.logout))
  }, [navigate])

  if (!me?.role) {
    return null
  }

  return (
    <Button
      size="small"
      icon={<Icons.Logout />}
      label={t('app.logout')}
      onClick={handleClick}
      primary
    />
  )
}
