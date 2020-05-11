import React from 'react'
import { AuthControllerContext } from 'src/context/AuthControllerContext'
import { useCreateAuthController } from 'src/context/hook/useCreateAuthController'

export const SessionAuthController: React.FC = ({ children }) => {
  const auth = useCreateAuthController()

  return (
    <AuthControllerContext.Provider value={auth}>
      {children}
    </AuthControllerContext.Provider>
  )
}
