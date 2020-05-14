import { ApplicationFailed } from 'src/components/ApplicationFailed/ApplicationFailed'
import { ErrorHandlerContext } from 'src/context/ErrorHandlerContext'
import React from 'react'
import { useCreateErrorHandler } from 'src/context/hook/useCreateErrorHandler'

export const ApplicationErrorHandler: React.FC = ({ children }) => {
  const handler = useCreateErrorHandler()

  return (
    <ErrorHandlerContext.Provider value={handler}>
      {handler.error ? <ApplicationFailed ex={handler.error} /> : children}
    </ErrorHandlerContext.Provider>
  )
}
