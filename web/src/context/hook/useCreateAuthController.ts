import React from 'react'
import { AuthControllerContext } from 'src/context/AuthControllerContext'
import { SessionContext } from 'src/context/SessionContext'
import { User } from 'src/types/User'
import { useLocalStorageSession } from 'src/context/hook/useLocalStorageSession'

export const useCreateAuthController = (): AuthControllerContext => {
  const {
    session,
    state,
    initializeSession,
    flushSession,
  } = React.useContext(SessionContext)
  const ls = useLocalStorageSession()

  const authorize = React.useCallback(async (user: User) => {
    initializeSession({
      user,
    })
  }, [initializeSession])

  const logout = React.useCallback(async () => {
    flushSession()
  }, [flushSession])

  const validateSession = React.useCallback(async () => {
    /* validateSession */
  }, [])

  // Keep session in sync with LS
  React.useEffect(() => {
    ls.save(session)
  }, [ls, session])

  // Pull out session from LS
  React.useEffect(() => {
    if (state === 'ready') {
      return
    }

    const lsSession = ls.get()
    if (lsSession) {
      initializeSession(lsSession)
    }
  }, [ls, initializeSession, state])

  return {
    authorize,
    logout,
    validateSession,
  }
}
