import { ErrorHandlerContext } from 'src/context/ErrorHandlerContext'
import React from 'react'

export const useShowErrorScreen = () => {
  return React.useContext(ErrorHandlerContext).showErrorScreen
}
