import { Box, Heading } from 'grommet'

import { Page } from 'src/components/Page/Page'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useTranslation } from 'react-i18next'

export const About: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  return (
    <Page title={t('about.title')}>
      <Heading>
        {t('about.title')}
      </Heading>
      <Box>
        <p>WPManager - a tool for managing Wordpress instances via HELM operator.</p>
      </Box>
    </Page>
  )
}
