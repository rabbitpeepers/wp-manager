import {
  TableCell,
  TableRow,
  Text,
} from 'grommet'

import { Badge } from 'src/components/common/Badge'
import { Domain } from 'src/types/Domain'
import React from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

type Props = {
  domain: Domain
}

export const DomainRow: React.FC<Props> = ({ domain }) => {
  const { t } = useTranslation()
  const fmtDate = React.useMemo(() => moment(domain.createdAt).fromNow(), [domain.createdAt])

  return (
    <TableRow>
      <TableCell>
        <Text color="status-unknown" size="small">
          {domain.id}
        </Text>
      </TableCell>
      <TableCell>
        <Text>
          {`*.${domain.name}`}
        </Text>
      </TableCell>
      <TableCell>
        {domain.active ? (
          <Badge color="status-ok" label={t('domains.status.active')} />
        ) : (
          <Badge color="status-unknown" label={t('domains.status.disabled')} />
        )}
      </TableCell>
      <TableCell>
        <Text title={domain.createdAt}>
          {fmtDate}
        </Text>
      </TableCell>
      <TableCell>
        <Text>
          {domain.owner.email}
        </Text>
      </TableCell>
    </TableRow>
  )
}
