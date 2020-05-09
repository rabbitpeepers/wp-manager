import { Button } from 'grommet'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Github } from 'grommet-icons'

export const LoginGitHub = () => {
  const { t } = useTranslation()

  return (
    <Button
      size="large"
      label={t('login.github')}
      icon={<Github />}
    />
  )
}
