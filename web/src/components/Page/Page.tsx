import { AppHeader } from 'src/components/AppHeader/AppHeader'
import React from 'react'
import { useSetDocumentTitle } from 'src/components/Page/useSetDocumentTitle'
import { Box, Main } from 'grommet'

type Props = {
  title: string
}

export const Page: React.FC<Props> = ({ title, children }) => {
  useSetDocumentTitle(title)

  return (
    <Box>
      <AppHeader />
      <Main>
        {children}
      </Main>
    </Box>
  )
}
