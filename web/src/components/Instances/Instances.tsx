import * as Icons from 'grommet-icons'

import { Box, Button, Heading } from 'grommet'

import { InstancesTable } from 'src/components/Instances/InstancesTable'
import { Page } from 'src/components/Page/Page'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { path } from 'src/router/path'
import { useHandleHref } from 'src/components/common/useHandleHref'
import { useTranslation } from 'react-i18next'

export const Instances: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  const { onClick, href } = useHandleHref(path.instancesCreate)

  return (
    <Page title={t('instances.title')}>
      <Box flex="shrink" justify="between" direction="row">
        <Heading>
          {t('instances.title')}
        </Heading>
        <Button
          onClick={onClick}
          href={href}
          icon={<Icons.Add />}
          alignSelf="center"
          size="large"
          label={t('instances.create')}
          primary
        />
      </Box>
      <InstancesTable />
    </Page>
  )
}
