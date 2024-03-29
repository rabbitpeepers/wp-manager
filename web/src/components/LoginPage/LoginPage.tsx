import { Box, Heading } from 'grommet'

import { LoginForm } from 'src/components/LoginPage/LoginForm'
import { LoginGitHub } from 'src/components/LoginPage/LoginGitHub'
import { LoginRouteParams } from 'src/components/LoginPage/types'
import { Page } from 'src/components/Page/Page'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Version } from 'src/components/About/Version'
import { useTranslation } from 'react-i18next'

type LoginPage = React.FC<RouteComponentProps<LoginRouteParams>>

export const LoginPage: LoginPage = () => {
  const { t } = useTranslation()
  const [error, setError] = React.useState('')

  return (
    <Page title={t('login.documentTitle')} rootProps={{ background: 'light-1' }}>
      <Box width="medium" alignSelf="center" margin="xlarge">
        <Heading textAlign="center">
          {t('login.title')}
        </Heading>
        <LoginForm error={error} />
        <Box margin="medium">
          <LoginGitHub setError={setError} />
        </Box>
        <Version textAlign="center" />
      </Box>
    </Page>
  )
}
