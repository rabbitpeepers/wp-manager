import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from 'grommet'

import { Badge } from 'src/components/common/Badge'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const DomainsTable: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Box>
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
          <TableRow>
            <TableCell>
              <Text>
                123
              </Text>
            </TableCell>
            <TableCell>
              <Text>
                *.xxx.com
              </Text>
            </TableCell>
            <TableCell>
              <Badge color="status-ok" label="active" />
            </TableCell>
            <TableCell>
              <Text>
                12/05/2019
              </Text>
            </TableCell>
            <TableCell>
              <Text>
                nikpl777@gmail.com
              </Text>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}
