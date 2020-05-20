import { Alert, AlertSeverity } from 'src/components/Alert/Alert'
import { Heading, Text } from 'grommet'

import { InstanceInfo } from 'src/components/InstanceDetails/InstanceInfo'
import { InstanceTasks } from 'src/components/InstanceTasks/InstanceTasks'
import { Page } from 'src/components/Page/Page'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useAuthorizationErrorEffect } from 'src/lib/useAuthorizationErrorEffect'
import { useInstanceDetails } from 'src/components/InstanceDetails/useInstanceDetails'
import { useTranslation } from 'react-i18next'

export const InstanceDetails: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()
  const { result, loading, error } = useInstanceDetails()

  // Handle 401
  useAuthorizationErrorEffect(error)

  return (
    <Page title={t('instanceDetails.title')}>
      <Heading>
        {t('instanceDetails.title')}
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
        <>
          <InstanceInfo instance={result.instance} />
          <InstanceTasks tasks={result.tasks} />
        </>
      ) : null}
    </Page>
  )
}
