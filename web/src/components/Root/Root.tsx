import { Grommet } from 'grommet'
import { theme } from 'src/utils/theme'
import React from 'react'
import { Splash } from 'src/components/Splash/Splash'

export const Root: React.FC = ({ children }) => (
  <React.Suspense fallback={<Splash />}>
    <Grommet theme={theme} full>
      {children}
    </Grommet>
  </React.Suspense>
)
