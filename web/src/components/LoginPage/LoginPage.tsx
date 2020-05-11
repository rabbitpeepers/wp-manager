import { LoginForm } from 'src/components/LoginPage/LoginForm'
import { LoginGitHub } from 'src/components/LoginPage/LoginGitHub'
import { LoginRouteParams } from 'src/components/LoginPage/types'
import { Page } from 'src/components/Page/Page'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useTranslation } from 'react-i18next'
import { Box, Heading } from 'grommet'

type LoginPage = React.FC<RouteComponentProps<LoginRouteParams>>

export const LoginPage: LoginPage = () => {
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
