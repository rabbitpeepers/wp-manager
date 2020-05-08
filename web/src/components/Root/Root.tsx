import { Grommet } from 'grommet'
import { theme } from 'src/utils/theme'
import React from 'react'

export const Root: React.FC = ({ children }) => {
  return (
    <Grommet theme={theme}>
      {children}
    </Grommet>
  )
}
