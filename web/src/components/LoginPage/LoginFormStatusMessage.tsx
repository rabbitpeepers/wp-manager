import { Alert, AlertSeverity } from 'src/components/Alert/Alert'

import { LoginRouteParams } from 'src/components/LoginPage/types'
import React from 'react'
import { useParams } from '@reach/router'
import { useTranslation } from 'react-i18next'

export const ERR_USER_NOT_MEMBER_OF_ORG = 'auth/user-not-member-of-organization'

type Props = { message?: string }

export const LoginFormStatusMessage: React.FC<Props> = ({ message }) => {
  const { t } = useTranslation()
  const { status } = useParams() as LoginRouteParams

  if (!status && !message) {
    return null
  }

  let text = ''

  if (status) {
    text = t(`login.status.${status}`)
  } else if (message === ERR_USER_NOT_MEMBER_OF_ORG) {
    text = t('login.userNotMember')
  } else {
    text = message || t('app.unknownError')
  }

  return (
    <Alert severity={AlertSeverity.ERROR}>
      {text}
    </Alert>
  )
}
