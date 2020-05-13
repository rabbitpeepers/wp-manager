import { Session, SessionContext, SessionContextState } from 'src/context/SessionContext'

import React from 'react'

export const useCreateSession = (): SessionContext => {
  const [state, setState] = React.useState<SessionContextState>('initializing')
  const [session, setSession] = React.useState<Session>({})

  const initializeSession = React.useCallback((newSession: Session) => {
    setState('ready')
    setSession(newSession)
  }, [setSession, setState])

  const flushSession = React.useCallback(() => {
    initializeSession({})
  }, [initializeSession])

  return {
    state,
    session,
    flushSession,
    initializeSession,
  }
}
