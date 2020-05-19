import {
  TableCell,
  TableRow,
  Text,
} from 'grommet'

import React from 'react'

export const InstanceRowEmpty: React.FC = ({ children }) => {
  return (
    <TableRow>
      <TableCell colSpan={99}>
        <Text textAlign="center">
          {children}
        </Text>
      </TableCell>
    </TableRow>
  )
}
