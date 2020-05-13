import React from 'react'
import { User } from 'src/types/User'

export type AuthControllerContext = {
  authorize (user: User): Promise<void>
  logout (): Promise<void>
  validateSession (): Promise<User | null>
}

export const AuthControllerContext = React.createContext<AuthControllerContext>({
  authorize() { throw new Error('Called out of context') },
  logout() { throw new Error('Called out of context') },
  validateSession() { throw new Error('Called out of context') },
})
