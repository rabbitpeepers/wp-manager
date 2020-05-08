import React from 'react'
import { Header } from 'grommet'
import { Logo } from 'src/components/AppHeader/Logo'

export const AppHeader: React.FC = () => {
  return (
    <Header background="brand">
      <Logo />
    </Header>
  )
}
