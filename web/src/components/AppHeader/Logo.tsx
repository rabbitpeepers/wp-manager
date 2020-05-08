import React from 'react'
import { Button } from 'grommet'
import { Cli } from 'grommet-icons'

export const Logo: React.FC = () => {
  return (
    <Button icon={<Cli />} hoverIndicator />
  )
}
