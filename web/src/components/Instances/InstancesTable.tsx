import {
  Anchor,
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

export const InstancesTable: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Box>
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
          <TableRow>
            <TableCell>
              <Text>
                123
              </Text>
            </TableCell>
            <TableCell>
              <Text>
                <b>hello</b>
                .xxx.com
              </Text>
            </TableCell>
            <TableCell>
              <Badge color="status-ok" label="deployed" />
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
            <TableCell>
              <Anchor href="#" label={t('instances.details')} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}
