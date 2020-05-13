import { LS_SESSION } from 'src/const/LocalStorage'
import React from 'react'
import { Session } from 'src/context/SessionContext'

export const useLocalStorageSession = () => {
  const get = React.useCallback((): Session | null => {
    const raw = localStorage.getItem(LS_SESSION)

    if (!raw) {
      return null
    }

    return JSON.parse(raw) as Session
  }, [])

  const save = React.useCallback((session: Session): void => {
    localStorage.setItem(LS_SESSION, JSON.stringify(session))
  }, [])

  return {
    get,
    save,
  }
}
