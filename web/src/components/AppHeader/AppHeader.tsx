import { Header } from 'grommet'
import { Logo } from 'src/components/AppHeader/Logo'
import { LogoutButton } from 'src/components/AppHeader/LogoutButton'
import React from 'react'

export const AppHeader: React.FC = () => {
  return (
    <Header elevation="small" pad="xsmall" background="brand">
      <Logo />
      <LogoutButton />
    </Header>
  )
}
