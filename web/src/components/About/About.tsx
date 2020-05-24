import { Box, Heading, Text } from 'grommet'

import { Page } from 'src/components/Page/Page'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Version } from 'src/components/About/Version'
import { useTranslation } from 'react-i18next'

export const About: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  return (
    <Page title={t('about.title')}>
      <Heading>
        {t('about.title')}
      </Heading>
      <Box>
        <Text
          margin={{ bottom: 'small' }}
        >
          WPManager - a tool for managing Wordpress instances via HELM operator.
        </Text>
        <Version />
      </Box>
    </Page>
  )
}
