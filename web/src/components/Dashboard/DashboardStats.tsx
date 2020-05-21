import {
  Box,
  Text,
} from 'grommet'

import { DashboardInfoTable } from 'src/components/Dashboard/DashboardInfoTable'
import { DashboardMeter } from 'src/components/Dashboard/DashboardMeter'
import { DashboardStats as DashboardStatsType } from 'src/types/DashboardStats'
import { InstanceStatus } from 'src/components/Instances/InstanceStatus'
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  dashboard: DashboardStatsType
}

export const DashboardStats: React.FC<Props> = ({ dashboard }) => {
  const { t } = useTranslation()

  return (
    <Box width="xlarge" background="light-1" pad="medium">
      <Box direction="row" flex>
        <Box flex pad={{ right: 'large' }} width="medium">
          <Box flex direction="row" pad={{ bottom: 'medium' }}>
            <Text margin={{ right: 'small' }}>
              {`${t('dashboard.systemStatus')}:`}
            </Text>
            <b>
              <InstanceStatus status={dashboard.systemStatus} />
            </b>
          </Box>
          <DashboardInfoTable stats={dashboard.stats} />
        </Box>
        <DashboardMeter stats={dashboard.stats} />
      </Box>
    </Box>
  )
}
