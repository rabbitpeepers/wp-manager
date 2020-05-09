import React from 'react'
import { Page } from 'src/components/Page/Page'
import { Heading } from 'grommet'
import { useTranslation } from 'react-i18next'

export const LoginPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page title={t('login.documentTitle')}>
      <Heading>{t('login.title')}</Heading>
    </Page>
  )
}
