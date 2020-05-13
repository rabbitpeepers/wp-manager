import { Heading } from 'grommet'
import { Page } from 'src/components/Page/Page'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useTranslation } from 'react-i18next'

export const Dashboard: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  return (
    <Page title={t('dashboard.title')}>
      <Heading>
        {t('dashboard.title')}
      </Heading>
    </Page>
  )
}
