import { Box, Text } from 'grommet'

import { Instance } from 'src/types/Instance'
import { InstanceStatus } from 'src/components/Instances/InstanceStatus'
import React from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

type Props = {
  instance: Instance
}

export const InstanceInfo: React.FC<Props> = ({ instance }) => {
  const { t } = useTranslation()
  const fmtDate = React.useMemo(() => moment(instance.createdAt).fromNow(), [instance.createdAt])

  return (
    <Box width="xlarge" background="light-1" pad="large">
      <Box flex>
        <Box flex direction="row">
          <Text margin={{ right: 'small' }} color="dark-3">
            {`${t('domains.table.id')}:`}
          </Text>
          <Text>
            {instance.id}
          </Text>
        </Box>
        <Box flex direction="row">
          <Text margin={{ right: 'small' }} color="dark-3">
            {`${t('domains.table.name')}:`}
          </Text>
          <Text>
            <b>
              {instance.subdomain}
            </b>
            {`.${instance.domain}`}
          </Text>
        </Box>
        <Box flex direction="row">
          <Text margin={{ right: 'small' }} color="dark-3">
            {`${t('domains.table.status')}:`}
          </Text>
          <InstanceStatus status={instance.status} />
        </Box>
        <Box flex direction="row">
          <Text margin={{ right: 'small' }} color="dark-3">
            {`${t('domains.table.date')}:`}
          </Text>
          <Text title={instance.createdAt}>
            {fmtDate}
          </Text>
        </Box>
        <Box flex direction="row">
          <Text margin={{ right: 'small' }} color="dark-3">
            {`${t('domains.table.owner')}:`}
          </Text>
          <Text>
            {instance.owner.email}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
