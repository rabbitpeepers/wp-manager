import React from 'react'

export type ErrorHandlerContext = {
  error?: Error,
  showErrorScreen: (error?: Error) => void
}

export const ErrorHandlerContext = React.createContext<ErrorHandlerContext>({
  error: undefined,
  showErrorScreen() { throw new Error('Called out of context') },
})
