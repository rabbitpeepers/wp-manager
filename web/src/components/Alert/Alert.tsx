import { Box } from 'grommet'
import { ColorType } from 'grommet/utils'
import React from 'react'

export enum AlertSeverity {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}

type AlertProps = {
  severity: AlertSeverity
}

type SeverityToColorMap = {
  [key in AlertSeverity]: ColorType
}

const severityColors: SeverityToColorMap = {
  [AlertSeverity.ERROR]: 'status-error',
  [AlertSeverity.WARNING]: 'status-warning',
  [AlertSeverity.INFO]: 'neutral-3',
  [AlertSeverity.SUCCESS]: 'status-ok',
}

export const Alert: React.FC<AlertProps> = ({ children, severity }) => {
  return (
    <Box
      pad="small"
      border={{ color: severityColors[severity], size: 'medium' }}
    >
      {children}
    </Box>
  )
}
