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

type postMessageInfo = {
  type: 'wp_manager_oauth_message'
  action: 'success' | 'failed'
  message?: string
}

type Props = {
  setError: React.Dispatch<React.SetStateAction<string>>
}

const loginURL = `${settings.api.url}${OAUTH2_GITHUB}`

export const LoginGitHub: React.FC<Props> = ({ setError }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    openPopup(loginURL, t('login.github'), 550, 650)

    const receiveMessage = (message: MessageEvent) => {
      const data = message.data as postMessageInfo

      if (data.type !== 'wp_manager_oauth_message') {
        return
      }

      window.removeEventListener('message', receiveMessage)

      if (data.action === 'success') {
        navigate(makeRoute(path.postLogin))
      } else {
        setError(data.message || 'Unkown error')
      }
    }
    window.addEventListener('message', receiveMessage, false)
  }, [navigate, t, setError])

  return (
    <Button
      onClick={handleClick}
      href={loginURL}
      size="large"
      label={t('login.github')}
      icon={<Github />}
    />
  )
}
