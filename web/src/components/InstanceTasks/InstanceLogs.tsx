import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from 'grommet'

import { LogRecord } from 'src/types/LogRecord'
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  logs: LogRecord[]
}

export const InstanceLogs: React.FC<Props> = ({ logs }) => {
  const { t } = useTranslation()

  return (
    <Table style={{ width: '100%' }}>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" size="xsmall">
            <Text>
              {t('instanceDetails.logs.date')}
            </Text>
          </TableCell>
          <TableCell scope="col">
            <Text>
              {t('instanceDetails.logs.text')}
            </Text>
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logs.length === 0 ? (
          <TableCell scope="col" colSpan={99}>
            {t('app.noResults')}
          </TableCell>
        ) : null}
        {logs.map((item) => (
          <TableRow key={item.date}>
            <TableCell size="small">
              <Text size="small" color="dark-3">
                {item.date}
              </Text>
            </TableCell>
            <TableCell>
              <Text size="small">
                {item.text}
              </Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
