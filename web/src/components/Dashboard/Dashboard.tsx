import { Alert, AlertSeverity } from 'src/components/Alert/Alert'
import { Heading, Text } from 'grommet'

import { DashboardStats } from 'src/components/Dashboard/DashboardStats'
import { Page } from 'src/components/Page/Page'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useAuthorizationErrorEffect } from 'src/lib/useAuthorizationErrorEffect'
import { useDashboardStats } from 'src/components/Dashboard/useDashboardStats'
import { useTranslation } from 'react-i18next'

export const Dashboard: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()
  const { result, loading, error } = useDashboardStats()

  useAuthorizationErrorEffect(error)

  return (
    <Page title={t('dashboard.title')}>
      <Heading>
        {t('dashboard.title')}
      </Heading>
      {error ? (
        <Alert severity={AlertSeverity.ERROR}>
          {error.message}
        </Alert>
      ) : null}
      {loading ? (
        <Text>
          {t('app.loading')}
        </Text>
      ) : null}
      {result ? (
        <DashboardStats dashboard={result} />
      ) : null}
    </Page>
  )
}
