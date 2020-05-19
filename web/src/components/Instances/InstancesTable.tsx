import { Alert, AlertSeverity } from 'src/components/Alert/Alert'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from 'grommet'

import { InstanceRow } from 'src/components/Instances/InstanceRow'
import { InstanceRowEmpty } from 'src/components/Instances/InstanceRowEmpty'
import React from 'react'
import { useAuthorizationErrorEffect } from 'src/lib/useAuthorizationErrorEffect'
import { useInstancesList } from 'src/components/Instances/useInstancesList'
import { useTranslation } from 'react-i18next'

export const InstancesTable: React.FC = () => {
  const { t } = useTranslation()
  const { result, loading, error } = useInstancesList()

  const empty = loading === false && !result?.length

  // Handle 401
  useAuthorizationErrorEffect(error)

  return (
    <Box>
      {error ? (
        <Alert severity={AlertSeverity.ERROR}>
          {(error && error.message) || t('app.unknownError')}
        </Alert>
      ) : null}
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col">
              <Text>
                {t('instances.table.id')}
              </Text>
            </TableCell>
            <TableCell scope="col">
              <Text>
                {t('instances.table.domain')}
              </Text>
            </TableCell>
            <TableCell scope="col">
              <Text>
                {t('instances.table.status')}
              </Text>
            </TableCell>
            <TableCell scope="col">
              <Text>
                {t('instances.table.date')}
              </Text>
            </TableCell>
            <TableCell scope="col">
              <Text>
                {t('instances.table.owner')}
              </Text>
            </TableCell>
            <TableCell scope="col" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <InstanceRowEmpty>
              {t('app.loading')}
            </InstanceRowEmpty>
          ) : null}
          {empty ? (
            <InstanceRowEmpty>
              {t('app.noResults')}
            </InstanceRowEmpty>
          ) : null}
          {result ? (
            result.map((i) => <InstanceRow instance={i} key={i.id} />)
          ) : null}
        </TableBody>
      </Table>
    </Box>
  )
}
