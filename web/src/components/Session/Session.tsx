import React from 'react'
import { SessionAuthController } from 'src/components/Session/SessionAuthController'
import { SessionContext } from 'src/context/SessionContext'
import { Splash } from 'src/components/Splash/Splash'
import { useCreateSession } from 'src/context/hook/useCreateSession'

export const Session: React.FC = ({ children }) => {
  const session = useCreateSession()

  return (
    <SessionContext.Provider value={session}>
      <SessionAuthController>
        {session.state === 'initializing' ? <Splash /> : children}
      </SessionAuthController>
    </SessionContext.Provider>
  )
}
