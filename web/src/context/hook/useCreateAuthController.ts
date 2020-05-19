import { AuthControllerContext } from 'src/context/AuthControllerContext'
import { AuthorizationError } from 'src/utils/AuthorizationError'
import React from 'react'
import { SessionContext } from 'src/context/SessionContext'
import { User } from 'src/types/User'
import { fetchUserProfile } from 'src/lib/api/fetchUserProfile'
import { logoutRequest } from 'src/lib/api/logoutRequest'
import { useLocalStorageSession } from 'src/context/hook/useLocalStorageSession'
import { useShowErrorScreen } from 'src/context/hook/useShowErrorScreen'

export const useCreateAuthController = (): AuthControllerContext => {
  const {
    session,
    state,
    initializeSession,
    flushSession,
  } = React.useContext(SessionContext)
  const ls = useLocalStorageSession()
  const showErrorScreen = useShowErrorScreen()

  const authorize = React.useCallback(async (user: User) => {
    initializeSession({
      user,
    })
  }, [initializeSession])

  const logout = React.useCallback(async () => {
    try {
      await logoutRequest()
      flushSession()
    } catch (ex) {
      showErrorScreen(ex)
      return false
    }
    return true
  }, [flushSession, showErrorScreen])

  const validateSession = React.useCallback(async (): Promise<User | null> => {
    try {
      const user = await fetchUserProfile()
      if (user) {
        authorize(user)
      } else {
        logout()
      }

      return user
    } catch (ex) {
      if (ex instanceof AuthorizationError) {
        logout()
      } else {
        showErrorScreen(ex)
      }
      return null
    }
  }, [authorize, logout, showErrorScreen])

  // Keep session in sync with LS
  React.useEffect(() => {
    if (state === 'ready' && session) {
      ls.save(session)
    }
  }, [ls, session, state])

  // Pull out session from LS
  const [isValidating, setValidating] = React.useState(false)
  React.useEffect(() => {
    if (state === 'ready' || isValidating) {
      return
    }

    setValidating(true)
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
  }, [ls, validateSession, flushSession, state, isValidating])

  return {
    authorize,
    logout,
    validateSession,
  }
}
