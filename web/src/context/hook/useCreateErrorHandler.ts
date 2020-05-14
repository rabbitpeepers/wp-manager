import { ErrorHandlerContext } from 'src/context/ErrorHandlerContext'
import React from 'react'

export const useCreateErrorHandler = (): ErrorHandlerContext => {
  const [error, setError] = React.useState<Error | undefined>(undefined)

  const showErrorScreen = React.useCallback((newError?: Error) => {
    setError(newError)
  }, [])

  return {
    error,
    showErrorScreen,
  }
}
