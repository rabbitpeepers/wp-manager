import * as Icons from 'grommet-icons'

import { Box, Button, Heading } from 'grommet'

import { DomainsTable } from 'src/components/Domains/DomainsTable'
import { Page } from 'src/components/Page/Page'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { path } from 'src/router/path'
import { useHandleHref } from 'src/components/common/useHandleHref'
import { useTranslation } from 'react-i18next'

export const Domains: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  const { onClick, href } = useHandleHref(path.domainsCreate)

  return (
    <Page title={t('domains.title')}>
      <Box flex="shrink" justify="between" direction="row">
        <Heading>
          {t('domains.title')}
        </Heading>
        <Button
          onClick={onClick}
          href={href}
          icon={<Icons.Add />}
          alignSelf="center"
          size="large"
          label={t('domains.create')}
          primary
        />
      </Box>
      <DomainsTable />
    </Page>
  )
}
