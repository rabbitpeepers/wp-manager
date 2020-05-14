import { ApplicationErrorHandler } from 'src/components/ApplicationErrorHandler/ApplicationErrorHandler'
import { Grommet } from 'grommet'
import React from 'react'
import { Session } from 'src/components/Session/Session'
import { Splash } from 'src/components/Splash/Splash'
import { theme } from 'src/utils/theme'

export const Root: React.FC = ({ children }) => (
  <React.Suspense fallback={<Splash />}>
    <Grommet theme={theme} full>
      <ApplicationErrorHandler>
        <Session>
          {children}
        </Session>
      </ApplicationErrorHandler>
    </Grommet>
  </React.Suspense>
)
