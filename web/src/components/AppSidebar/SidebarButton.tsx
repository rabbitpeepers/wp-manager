import {
  Box,
  Button,
  ButtonProps,
} from 'grommet'
import { Link, LinkProps } from '@reach/router'
import React from 'react'

export const SidebarButton: React.FC<ButtonProps & LinkProps<{}>> = ({ icon, label, to }) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <Box pad="small">
      <Button
        gap="medium"
        alignSelf="start"
        icon={icon}
        label={label}
        color="white"
        plain
      />
    </Box>
  </Link>
)
