import React from 'react'
import { AppRouter } from 'src/router/AppRouter'
import { Root } from 'src/components/Root/Root'

export const App: React.FC = () => (
  <Root>
    <AppRouter />
  </Root>
)
