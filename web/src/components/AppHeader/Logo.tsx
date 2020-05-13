import { Box, Button, Text } from 'grommet'

import { Cli } from 'grommet-icons'
import { Link } from '@reach/router'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Logo: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Link color="white" to="/" style={{ textDecoration: 'none' }}>
      <Box direction="row">
        <Button icon={<Cli />} hoverIndicator />
        <Text alignSelf="center" weight="bold" color="white">
          {t('app.name')}
        </Text>
      </Box>
    </Link>
  )
}
