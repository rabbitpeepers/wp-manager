import { LoginForm } from 'src/components/LoginPage/LoginForm'
import { Page } from 'src/components/Page/Page'
import { LoginGitHub } from 'src/components/LoginPage/LoginGitHub'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Heading } from 'grommet'
import { RouteComponentProps } from '@reach/router'

export const LoginPage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  return (
    <Page title={t('login.documentTitle')} rootProps={{ background: 'light-1' }}>
      <Box width="medium" alignSelf="center" margin="xlarge">
        <Heading textAlign="center">
          {t('login.title')}
        </Heading>
        <LoginForm />
        <Box margin="medium">
          <LoginGitHub />
        </Box>
      </Box>
    </Page>
  )
}
