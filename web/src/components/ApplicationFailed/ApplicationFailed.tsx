import { Alert, AlertSeverity } from 'src/components/Alert/Alert'
import {
  Box,
  Main,
} from 'grommet'

import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useTranslation } from 'react-i18next'

type Props = RouteComponentProps<{ ex?: Error }>

export const ApplicationFailed: React.FC<Props> = ({ ex }) => {
  const { t } = useTranslation()

  return (
    <Main pad="large">
      <Box pad="small">
        <Alert severity={AlertSeverity.ERROR}>
          {(ex && ex.message) || t('app.unknownError')}
        </Alert>
      </Box>
    </Main>
  )
}
