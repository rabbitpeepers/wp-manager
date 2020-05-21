import { Badge } from 'src/components/common/Badge'
import React from 'react'
import { SystemStatus as SystemStatusType } from 'src/types/SystemStatus'
import { useTranslation } from 'react-i18next'

type Props = {
  status: SystemStatusType
}

type StatusMap = {
  [key in SystemStatusType]: JSX.Element
}

export const InstanceStatus: React.FC<Props> = ({ status }) => {
  const { t } = useTranslation()

  const map: StatusMap = {
    scheduled: (<Badge color="accent-4" label={t('instances.status.scheduled')} />),
    processing: (<Badge color="neutral-3" label={t('instances.status.processing')} />),
    deployed: (<Badge color="status-ok" label={t('instances.status.deployed')} />),
    failed: (<Badge color="status-error" label={t('instances.status.failed')} />),
    unknown: (<Badge color="status-unknown" label={t('instances.status.unknown')} />),
    pending: (<Badge color="accent-1" label={t('instances.status.pending')} />),
  }

  const unkown = <Badge color="status-unknown" label={status} />

  return map[status] || unkown
}
