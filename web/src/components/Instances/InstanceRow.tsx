import {
  Anchor,
  TableCell,
  TableRow,
  Text,
} from 'grommet'

import { Instance } from 'src/types/Instance'
import { InstanceStatus } from 'src/components/Instances/InstanceStatus'
import React from 'react'
import moment from 'moment'
import { path } from 'src/router/path'
import { useHandleHref } from 'src/components/common/useHandleHref'
import { useTranslation } from 'react-i18next'

type Props = {
  instance: Instance
}

export const InstanceRow: React.FC<Props> = ({ instance }) => {
  const { t } = useTranslation()
  const fmtDate = React.useMemo(() => moment(instance.createdAt).fromNow(), [instance.createdAt])
  const { onClick, href } = useHandleHref(path.instanceDetails, undefined, instance.id)

  return (
    <TableRow>
      <TableCell>
        <Text color="status-unknown" size="small">
          {instance.id}
        </Text>
      </TableCell>
      <TableCell>
        <Text>
          <b>
            {instance.subdomain}
          </b>
          {`.${instance.domain}`}
        </Text>
      </TableCell>
      <TableCell>
        <InstanceStatus status={instance.status} />
      </TableCell>
      <TableCell>
        <Text title={instance.createdAt}>
          {fmtDate}
        </Text>
      </TableCell>
      <TableCell>
        <Text>
          {instance.owner.email}
        </Text>
      </TableCell>
      <TableCell>
        <Anchor href={href} onClick={onClick} label={t('instances.details')} />
      </TableCell>
    </TableRow>
  )
}
