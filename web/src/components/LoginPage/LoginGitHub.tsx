import { Button } from 'grommet'
import { Github } from 'grommet-icons'
import { OAUTH2_GITHUB } from 'src/const/API'
import React from 'react'
import { settings } from 'src/settings/settings'
import { useTranslation } from 'react-i18next'

export const LoginGitHub: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Button
      href={`${settings.api.url}${OAUTH2_GITHUB}`}
      size="large"
      label={t('login.github')}
      icon={<Github />}
    />
  )
}
