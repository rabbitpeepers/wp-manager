import { Grommet } from 'grommet'
import { theme } from 'src/utils/theme'
import React from 'react'
import { Splash } from 'src/components/Splash/Splash'
import { Session } from 'src/components/Session/Session'

export const Root: React.FC = ({ children }) => (
  <React.Suspense fallback={<Splash />}>
    <Grommet theme={theme} full>
      <Session>
        {children}
      </Session>
    </Grommet>
  </React.Suspense>
)
