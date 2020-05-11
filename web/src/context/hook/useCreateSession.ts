import React from 'react'
import { Session, SessionContext, SessionContextState } from 'src/context/SessionContext'

export const useCreateSession = (): SessionContext => {
  const [state, setState] = React.useState<SessionContextState>('initializing')
  const [session, setSession] = React.useState<Session>({})

  const initializeSession = React.useCallback((newSession: Session) => {
    setSession(newSession)
    setState('ready')
  }, [setSession, setState])

  const flushSession = React.useCallback(() => {
    setSession({})
  }, [setSession])

  return {
    state,
    session,
    flushSession,
    initializeSession,
  }
}
