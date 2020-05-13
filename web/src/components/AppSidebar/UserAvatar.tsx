import { Avatar, Box, Text } from 'grommet'
import React from 'react'
import { useMe } from 'src/context/hook/useMe'

export const UserAvatar: React.FC = () => {
  const me = useMe()

  if (!me?.photoURL) {
    return null
  }

  return (
    <Box flex="shrink" align="center">
      <Avatar
        size="medium"
        src={me.photoURL}
      />
      <Text margin={{top: 'small'}}>
        {me.displayName}
      </Text>
    </Box>
  )
}
