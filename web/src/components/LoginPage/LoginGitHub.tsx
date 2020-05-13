import {
  makeRoute,
  path,
} from 'src/router/path'

import { Button } from 'grommet'
import { Github } from 'grommet-icons'
import { OAUTH2_GITHUB } from 'src/const/API'
import React from 'react'
import { openPopup } from 'src/lib/openPopup'
import { settings } from 'src/settings/settings'
import { useNavigate } from '@reach/router'
import { useTranslation } from 'react-i18next'

export const LoginGitHub: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleClick = React.useCallback(() => {
    openPopup(`${settings.api.url}${OAUTH2_GITHUB}`, t('login.github'), 550, 650)

    const receiveMessage = (message: MessageEvent) => {
      if (message.data === 'successAndNavigate') {
        window.removeEventListener('message', receiveMessage)
        navigate(makeRoute(path.postLogin))
      }
    }
    window.addEventListener('message', receiveMessage, false)
  }, [navigate, t])

  return (
    <Button
      onClick={handleClick}
      size="large"
      label={t('login.github')}
      icon={<Github />}
    />
  )
}
