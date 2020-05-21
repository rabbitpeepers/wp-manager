import { Box, Heading, Text } from 'grommet'

import { DomainTask } from 'src/types/DomainTask'
import { InstanceLogs } from 'src/components/InstanceTasks/InstanceLogs'
import { InstanceStatus } from 'src/components/Instances/InstanceStatus'
import React from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

type Props = {
  task: DomainTask
}

export const InstanceTasksItem: React.FC<Props> = ({ task }) => {
  const { t } = useTranslation()
  const fmtDate = React.useMemo(() => moment(task.createdAt).fromNow(), [task.createdAt])
  const fmtStartDate = React.useMemo(() => moment(task.startedAt).fromNow(), [task.startedAt])

  return (
    <Box width="xlarge" background="light-1" margin={{ bottom: 'medium' }} pad="large">
      <Box flex>
        <Box flex direction="row">
          <Text margin={{ right: 'small' }} color="dark-3">
            {`${t('instanceDetails.task.id')}:`}
          </Text>
          <Text>
            {task.id}
          </Text>
        </Box>
        <Box flex direction="row">
          <Text margin={{ right: 'small' }} color="dark-3">
            {`${t('instanceDetails.task.status')}:`}
          </Text>
          <InstanceStatus status={task.status} />
        </Box>
        <Box flex direction="row">
          <Text margin={{ right: 'small' }} color="dark-3">
            {`${t('instanceDetails.task.date')}:`}
          </Text>
          <Text title={task.createdAt}>
            {fmtDate}
          </Text>
        </Box>
        {task.startedAt ? (
          <Box flex direction="row">
            <Text margin={{ right: 'small' }} color="dark-3">
              {`${t('instanceDetails.task.startDate')}:`}
            </Text>
            <Text title={task.startedAt}>
              {fmtStartDate}
            </Text>
          </Box>
        ) : null}
      </Box>
      <Heading size="small">
        {t('instanceDetails.logs.title')}
      </Heading>
      <InstanceLogs logs={task.logs} />
    </Box>
  )
}
