import React from 'react'
import { SessionContext } from 'src/context/SessionContext'

export const useMe = () => {
  const { session } = React.useContext(SessionContext)

  return session.user
}
