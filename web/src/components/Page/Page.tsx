import { Box, BoxProps, Main } from 'grommet'

import { AppHeader } from 'src/components/AppHeader/AppHeader'
import React from 'react'
import { useSetDocumentTitle } from 'src/components/Page/useSetDocumentTitle'

type Props = {
  title: string,
  rootProps?: BoxProps
}

export const Page: React.FC<Props> = ({ title, children, rootProps }) => {
  useSetDocumentTitle(title)

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Main flex="grow" {...rootProps}>
      <AppHeader />
      <Box height="100%">
        {children}
      </Box>
    </Main>
  )
}
