import React from 'react'

export const useSetDocumentTitle = (title: string) => {
  React.useEffect(() => {
    document.title = title
  }, [title])
}
