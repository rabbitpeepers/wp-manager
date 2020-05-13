import { AuthControllerContext } from 'src/context/AuthControllerContext'
import React from 'react'
import { useCreateAuthController } from 'src/context/hook/useCreateAuthController'

export const SessionAuthController: React.FC = ({ children }) => {
  const auth = useCreateAuthController()

  return (
    <AuthControllerContext.Provider value={auth}>
      {children}
    </AuthControllerContext.Provider>
  )
}
