import {
  Box,
  Meter,
} from 'grommet'

import { DashboardStats as DashboardStatsType } from 'src/types/DashboardStats'
import React from 'react'

type Props = {
  stats: DashboardStatsType['stats']
}

export const DashboardMeter: React.FC<Props> = ({ stats }) => {
  return (
    <Box>
      <Meter
        values={[{
          value: stats.scheduled,
          color: 'accent-4',
        }, {
          value: stats.processing,
          color: 'neutral-3',
        }, {
          value: stats.deployed,
          color: 'status-ok',
        }, {
          value: stats.failed,
          color: 'status-error',
        }]}
        type="circle"
        size="small"
      />
    </Box>
  )
}
