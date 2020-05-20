import { Alert, AlertSeverity } from 'src/components/Alert/Alert'
import { Box, Heading } from 'grommet'
import { DomainTask } from 'src/types/DomainTask'
import { InstanceTasksItem } from 'src/components/InstanceTasks/InstanceTasksItem'
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  tasks: DomainTask[]
}

export const InstanceTasks: React.FC<Props> = ({ tasks }) => {
  const { t } = useTranslation()

  return (
    <Box margin={{ top: 'medium' }}>
      <Heading>
        {t('instanceDetails.task.title')}
      </Heading>
      {tasks.map((i) => <InstanceTasksItem task={i} key={i.id} />)}
      {tasks.length === 0 ? (
        <Box width="xlarge">
          <Alert severity={AlertSeverity.WARNING}>
            {t('instanceDetails.task.noTasks')}
          </Alert>
        </Box>
      ) : null}
    </Box>
  )
}
