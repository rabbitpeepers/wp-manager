import { Heading } from 'grommet'
import { Page } from 'src/components/Page/Page'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useTranslation } from 'react-i18next'

export const InstanceDetails: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  return (
    <Page title={t('instanceDetails.title')}>
      <Heading>
        {t('instanceDetails.title')}
      </Heading>
    </Page>
  )
}
