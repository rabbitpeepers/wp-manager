import * as Icons from 'grommet-icons'
import { Button } from 'grommet'
import React from 'react'
import { useMe } from 'src/context/hook/useMe'
import { useTranslation } from 'react-i18next'

export const LogoutButton: React.FC = () => {
  const me = useMe()
  const { t } = useTranslation()

  if (!me?.role) {
    return null
  }

  return (
    <Button
      size="small"
      icon={<Icons.Logout />}
      label={t('app.logout')}
      primary
    />
  )
}
