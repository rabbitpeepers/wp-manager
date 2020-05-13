import { Avatar, Box, Text } from 'grommet'
import {
  makeRoute,
  path,
} from 'src/router/path'

import { Link } from '@reach/router'
import React from 'react'
import { useMe } from 'src/context/hook/useMe'

export const UserAvatar: React.FC = () => {
  const me = useMe()

  if (!me?.photoURL) {
    return null
  }

  return (
    <Link to={makeRoute(path.profile)} style={{ textDecoration: 'none' }}>
      <Box flex="shrink" align="center">
        <Avatar
          size="medium"
          src={me.photoURL}
        />
        <Text margin={{ top: 'small' }} color="white">
          {me.displayName}
        </Text>
      </Box>
    </Link>
  )
}
