import React from 'react'
import { User } from 'src/types/User'

export type SessionContextState = 'initializing' | 'ready' | 'failed'
export interface Session {
  user?: User
}

export type SessionContext = {
  readonly state: SessionContextState
  readonly session: Session
  flushSession: () => void
  initializeSession: (session: Session) => void
}

export const SessionContext = React.createContext<SessionContext>({
  state: 'initializing',
  session: {},
  flushSession() { throw new Error('Called out of context') },
  initializeSession() { throw new Error('Called out of context') },
})
