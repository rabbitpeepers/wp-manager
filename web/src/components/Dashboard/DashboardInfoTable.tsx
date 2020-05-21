import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from 'grommet'

import { DashboardStats as DashboardStatsType } from 'src/types/DashboardStats'
import { InstanceStatus } from 'src/components/Instances/InstanceStatus'
import { InstanceStatus as InstanceStatusType } from 'src/types/InstanceStatus'
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  stats: DashboardStatsType['stats']
}

export const DashboardInfoTable: React.FC<Props> = ({ stats }) => {
  const statuses: InstanceStatusType[] = ['processing', 'failed', 'scheduled', 'deployed']
  const { t } = useTranslation()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" size="small">
            {t('dashboard.category')}
          </TableCell>
          <TableCell scope="col">
            {t('dashboard.cound')}
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {statuses.map((status) => (
          <TableRow key={status}>
            <TableCell>
              <InstanceStatus status={status} />
            </TableCell>
            <TableCell>
              {stats[status]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
