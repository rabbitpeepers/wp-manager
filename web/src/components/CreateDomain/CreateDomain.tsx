import { CreateDomainForm } from 'src/components/CreateDomain/CreateDomainForm'
import { Heading } from 'grommet'
import { Page } from 'src/components/Page/Page'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useTranslation } from 'react-i18next'

export const CreateDomain: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  return (
    <Page title={t('createDomain.title')}>
      <Heading>
        {t('createDomain.title')}
      </Heading>
      <CreateDomainForm />
    </Page>
  )
}
