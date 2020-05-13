import { AuthControllerContext } from 'src/context/AuthControllerContext'
import React from 'react'
import { SessionContext } from 'src/context/SessionContext'
import { User } from 'src/types/User'
import { fetchUserProfile } from 'src/lib/api/fetchUserProfile'
import { logoutRequest } from 'src/lib/api/logoutRequest'
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
    await logoutRequest()
    flushSession()
    return true
  }, [flushSession])

  const validateSession = React.useCallback(async (): Promise<User | null> => {
    const user = await fetchUserProfile()
    if (user) {
      authorize(user)
    } else {
      logout()
    }
    return user
  }, [authorize, logout])

  // Keep session in sync with LS
  React.useEffect(() => {
    if (state === 'ready') {
      ls.save(session)
    }
  }, [ls, session, state])

  // Pull out session from LS
  React.useEffect(() => {
    if (state === 'ready') {
      return
    }

    const lsSession = ls.get()
    if (lsSession) {
      if (lsSession.user) {
        validateSession()
      } else {
        flushSession()
      }
    } else {
      flushSession()
    }
  }, [ls, validateSession, flushSession, state])

  return {
    authorize,
    logout,
    validateSession,
  }
}
