import React from 'react'
import { AuthControllerContext } from 'src/context/AuthControllerContext'
import { SessionContext } from 'src/context/SessionContext'
import { User } from 'src/types/User'

export const useCreateAuthController = (): AuthControllerContext => {
  const { initializeSession } = React.useContext(SessionContext)

  const authorize = React.useCallback(async (user: User) => {
    initializeSession({
      user,
    })
  }, [initializeSession])

  const logout = React.useCallback(async () => {
    /* logout */
  }, [])

  const validateSession = React.useCallback(async () => {
    /* validateSession */
  }, [])

  return {
    authorize,
    logout,
    validateSession,
  }
}
