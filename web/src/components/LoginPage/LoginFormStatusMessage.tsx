import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from '@reach/router'
import { LoginRouteParams } from 'src/components/LoginPage/types'
import { Alert, AlertSeverity } from 'src/components/Alert/Alert'

export const LoginFormStatusMessage: React.FC = () => {
  const { t } = useTranslation()
  const { status } = useParams() as LoginRouteParams

  if (!status) {
    return null
  }
  return (
    <Alert severity={AlertSeverity.ERROR}>
      {t(`login.status.${status}`)}
    </Alert>
  )
}
