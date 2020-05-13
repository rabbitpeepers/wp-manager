import 'src/lib/i18n'

import { AppRouter } from 'src/router/AppRouter'
import React from 'react'
import { Root } from 'src/components/Root/Root'

export const App: React.FC = () => (
  <Root>
    <AppRouter />
  </Root>
)
