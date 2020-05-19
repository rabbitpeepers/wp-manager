import { Badge } from 'src/components/common/Badge'
import { InstanceStatus as InstanceStatusType } from 'src/types/Instance'
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  status: InstanceStatusType
}

type StatusMap = {
  [key in InstanceStatusType]: JSX.Element
}

export const InstanceStatus: React.FC<Props> = ({ status }) => {
  const { t } = useTranslation()

  const map: StatusMap = {
    scheduled: (<Badge color="accent-4" label={t('instances.status.scheduled')} />),
    processing: (<Badge color="neutral-3" label={t('instances.status.processing')} />),
    deployed: (<Badge color="status-ok" label={t('instances.status.processing')} />),
    failed: (<Badge color="status-error" label={t('instances.status.failed')} />),
  }

  const unkown = <Badge color="status-unknown" label={status} />

  return map[status] || unkown
}
