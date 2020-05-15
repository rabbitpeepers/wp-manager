import { CreateInstanceForm } from 'src/components/CreateInstance/CreateInstanceForm'
import { Heading } from 'grommet'
import { Page } from 'src/components/Page/Page'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useTranslation } from 'react-i18next'

export const CreateInstance: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  return (
    <Page title={t('createInstance.title')}>
      <Heading>
        {t('createInstance.title')}
      </Heading>
      <CreateInstanceForm />
    </Page>
  )
}
