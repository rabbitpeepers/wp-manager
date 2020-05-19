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

import { DomainRow } from 'src/components/Domains/DomainRow'
import { DomainRowEmpty } from 'src/components/Domains/DomainRowEmpty'
import React from 'react'
import { useAuthorizationErrorEffect } from 'src/lib/useAuthorizationErrorEffect'
import { useDomainList } from 'src/components/Domains/useDomainList'
import { useTranslation } from 'react-i18next'

export const DomainsTable: React.FC = () => {
  const { t } = useTranslation()
  const { result, loading, error } = useDomainList(false)

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
                {t('domains.table.id')}
              </Text>
            </TableCell>
            <TableCell scope="col">
              <Text>
                {t('domains.table.name')}
              </Text>
            </TableCell>
            <TableCell scope="col">
              <Text>
                {t('domains.table.status')}
              </Text>
            </TableCell>
            <TableCell scope="col">
              <Text>
                {t('domains.table.date')}
              </Text>
            </TableCell>
            <TableCell scope="col">
              <Text>
                {t('domains.table.owner')}
              </Text>
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <DomainRowEmpty>
              {t('app.loading')}
            </DomainRowEmpty>
          ) : null}
          {empty ? (
            <DomainRowEmpty>
              {t('app.noResults')}
            </DomainRowEmpty>
          ) : null}
          {result ? (
            result.map((i) => <DomainRow domain={i} key={i.id} />)
          ) : null}
        </TableBody>
      </Table>
    </Box>
  )
}
