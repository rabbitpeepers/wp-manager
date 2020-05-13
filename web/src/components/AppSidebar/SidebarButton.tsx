import {
  Box,
  Button,
  ButtonProps,
} from 'grommet'
import React from 'react'

export const SidebarButton: React.FC<ButtonProps> = ({ icon, label }) => (
  <Box pad="small">
    <Button
      gap="medium"
      alignSelf="start"
      plain
      icon={icon}
      label={label}
    />
  </Box>
)
