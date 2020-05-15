import { Box, BoxProps, Text } from 'grommet'

import React from 'react'

type Props = {
  color: BoxProps['background']
  label: string
}

export const Badge: React.FC<Props> = ({ color, label }) => {
  return (
    <Box flex align="center" direction="row">
      <Box width="8px" height="8px" margin={{right: '8px'}} background={color} />
      <Text>
        {label}
      </Text>
    </Box>
  )
}
